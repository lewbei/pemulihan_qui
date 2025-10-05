import { createStore } from './core/state.js';
import { createStorage } from './core/storage.js';
import { UIManager } from './core/ui.js';
import { AnalyticsService } from './core/analytics.js';
import { PerformanceService } from './core/performance.js';
import { getQuestionSet, fetchKPQuestionSet, getCategoryMeta, getSkillMeta } from './data/questions.js';
import { todayKey, uid, deepClone, daysBetween } from './core/utils.js';

function normalizeProfile(profile) {
    const stats = { ...defaultStats(), ...(profile.stats || {}) };
    const history = Array.isArray(profile.history) ? profile.history.slice(-200) : [];
    const daily = profile.daily || {};
    const sessions = Array.isArray(profile.sessions) ? profile.sessions.slice(0, 10) : [];
    return {
        id: profile.id || uid('profile'),
        name: profile.name || 'Pelajar',
        avatar: profile.avatar || '🐱',
        createdAt: profile.createdAt || Date.now(),
        stats,
        history,
        daily,
        sessions
    };
}

const STORAGE_KEY = 'qa_profiles_v2';

const storage = createStorage(STORAGE_KEY, {
    fallback: { profiles: [], activeProfileId: null }
});

const savedState = storage.read();
const normalizedProfiles = (savedState.profiles || []).map(normalizeProfile);
const activeProfileId = normalizedProfiles.some((profile) => profile.id === savedState.activeProfileId)
    ? savedState.activeProfileId
    : normalizedProfiles[0]?.id || null;

const store = createStore({
    view: activeProfileId ? 'home' : 'profile',
    profiles: normalizedProfiles,
    activeProfileId,
    session: null,
    overlay: null,
    selection: null
});

const analytics = new AnalyticsService();
analytics.init();

const performance = new PerformanceService();
performance.init();

const appRoot = document.getElementById('app');
const uiManager = new UIManager({
    root: appRoot,
    store,
    analytics,
    performance,
    dispatch: handleAction
});
uiManager.init();

const persist = () => {
    const state = store.getState();
    storage.write({
        profiles: state.profiles,
        activeProfileId: state.activeProfileId
    });
};

const queuePersist = () => performance.schedule(persist);

function getActiveProfile(draft) {
    const state = draft || store.getState();
    const id = state.activeProfileId;
    if (!id) {
        return null;
    }
    return (state.profiles || []).find((profile) => profile.id === id) || null;
}

function updateActiveProfile(mutator) {
    store.setState((draft) => {
        const profile = getActiveProfile(draft);
        if (!profile) {
            return draft;
        }
        const index = draft.profiles.findIndex((p) => p.id === profile.id);
        if (index === -1) {
            return draft;
        }
        const profileClone = deepClone(draft.profiles[index]);
        mutator(profileClone);
        draft.profiles[index] = profileClone;
        return draft;
    }, 'update-profile');
    queuePersist();
}

function showToast(message) {
    store.setState((draft) => {
        draft.overlay = { message };
        return draft;
    }, 'toast');
    setTimeout(() => {
        store.setState((draft) => {
            if (draft.overlay?.message === message) {
                draft.overlay = null;
            }
            return draft;
        }, 'toast-clear');
    }, 2600);
}

async function startSession(category, difficulty, skillId, difficultyLabel) {
    const profile = getActiveProfile();
    if (!profile) {
        showToast('Sila pilih profil dahulu.');
        return;
    }
    const level = Number(difficulty) || 1;
    const levelLabel = difficultyLabel || `Tahap ${level}`;
    let questions = [];
    // Load KP module questions for ANY category when a specific skill is chosen.
    // Previously this was limited to BM only, causing math KP selections (e.g. math-kp1)
    // to return zero questions and trigger the 'Soalan tidak mencukupi...' toast.
    if (skillId) {
        try {
            questions = await fetchKPQuestionSet(skillId, level, 10, category);
        } catch (error) {
            console.error('Failed to load KP module', error);
        }
    }
    if (questions.length === 0) {
        questions = getQuestionSet(category, level, 10, skillId);
    }
    if (questions.length === 0) {
        showToast('Soalan tidak mencukupi untuk pilihan tersebut.');
        return;
    }
    const session = {
        id: uid('session'),
        profileId: profile.id,
        category,
        difficulty: level,
        difficultyLabel: levelLabel,
        skillId: skillId || null,
        questions,
        currentIndex: 0,
        answers: [],
        startedAt: Date.now(),
        status: 'active',
        questionStartedAt: Date.now()
    };
    store.setState({ session, view: 'quiz', selection: null }, 'start-session');
}

function finishSession(session) {
    const durationMs = Date.now() - session.startedAt;
    const correct = session.answers.filter((answer) => answer.isCorrect).length;
    const total = session.questions.length;
    const accuracy = total ? correct / total : 0;
    const wrong = total - correct;
    const xpGain = correct * 10 + wrong * 2;
    const coinGain = correct * 5;
    const results = { correct, total, accuracy, durationMs, xpGain, coinGain };

    store.setState((draft) => {
        draft.session = {
            ...session,
            status: 'completed',
            results
        };
        draft.view = 'summary';
        return draft;
    }, 'finish-session');

    applySessionResults(session, results);

    queuePersist();

    showToast('Sesi selesai! Lihat ringkasan anda.');
}

function applySessionResults(session, results) {
    const answers = session.answers || [];
    const correct = results.correct || 0;
    const total = results.total || answers.length;
    const wrong = total - correct;
    const xpGain = results.xpGain ?? (correct * 10 + wrong * 2);
    const coinGain = results.coinGain ?? (correct * 5);

    updateActiveProfile((profileDraft) => {
        profileDraft.history = profileDraft.history || [];
        profileDraft.history = profileDraft.history
            .concat(answers.map((entry) => ({ ...entry })))
            .slice(-200);

        profileDraft.sessions = profileDraft.sessions || [];
        profileDraft.sessions.unshift({
            id: session.id,
            category: session.category,
            difficulty: session.difficulty,
            difficultyLabel: session.difficultyLabel,
            skillId: session.skillId,
            results,
            completedAt: Date.now()
        });
        profileDraft.sessions = profileDraft.sessions.slice(0, 10);

        profileDraft.stats = profileDraft.stats || defaultStats();
        const stats = profileDraft.stats;
        stats.totalQuestions += total;
        stats.correct += correct;
        stats.wrong += wrong;
        stats.xp += xpGain;
        stats.coins += coinGain;
        stats.accuracy = stats.totalQuestions ? stats.correct / stats.totalQuestions : 0;
        stats.lastAnsweredAt = Date.now();

        const today = todayKey();
        profileDraft.daily = profileDraft.daily || {};
        if (!profileDraft.daily[today]) {
            profileDraft.daily[today] = { total: 0, correct: 0, wrong: 0, accuracy: 0, accuracyLabel: '0%' };
        }
        const daily = profileDraft.daily[today];
        daily.total += total;
        daily.correct += correct;
        daily.wrong += wrong;
        daily.accuracy = daily.total ? daily.correct / daily.total : 0;
        daily.accuracyLabel = `${Math.round(daily.accuracy * 100)}%`;

        if (stats.lastActiveDay !== today) {
            let nextStreak = 1;
            if (stats.lastActiveDay) {
                const diff = daysBetween(stats.lastActiveDay, today);
                if (diff === 1) {
                    nextStreak = (stats.currentStreak || 0) + 1;
                } else if (diff <= 0) {
                    nextStreak = stats.currentStreak || 1;
                } else {
                    nextStreak = 1;
                }
            }
            stats.currentStreak = nextStreak;
            stats.bestStreak = Math.max(stats.bestStreak || 0, nextStreak);
            stats.lastActiveDay = today;
        }
    });
}

function handleAnswer(optionEncoded) {
    const state = store.getState();
    const session = state.session;
    const profile = getActiveProfile(state);
    if (!session || !profile || session.status !== 'active') {
        return;
    }
    const question = session.questions[session.currentIndex];
    if (!question) {
        return;
    }
    const chosenOption = decodeURIComponent(optionEncoded);
    const isCorrect = chosenOption === question.answer;
    
    // Show visual feedback first
    showAnswerFeedback(chosenOption, isCorrect, question.answer, () => {
        // Process the answer after feedback is shown
        const timeTakenMs = Date.now() - session.questionStartedAt;

        analytics.trackQuestion(question, chosenOption, {
            isCorrect,
            timeTakenMs,
            category: session.category,
            difficulty: session.difficulty,
            difficultyLabel: session.difficultyLabel
        });

        const answerEntry = {
            sessionId: session.id,
            questionId: question.id,
            skillId: question.skillId,
            category: session.category,
            difficulty: session.difficulty,
            difficultyLabel: session.difficultyLabel,
            selectedOption: chosenOption,
            isCorrect,
            timeTakenMs,
            timestamp: Date.now(),
            prompt: question.prompt,
            promptDetail: question.display || null,
            correctAnswer: question.answer,
            options: Array.isArray(question.options) ? question.options.slice(0, 8) : null
        };

        if (typeof window !== 'undefined' && window.YearlyQuestionTracker?.markQuestionSeen) {
            try {
                window.YearlyQuestionTracker.markQuestionSeen(
                    { question: question.prompt, answer: question.answer },
                    session.category,
                    session.category,
                    true
                );
            } catch (error) {
                console.warn('YearlyQuestionTracker mark failed', error);
            }
        }

        store.setState((draft) => {
            const draftSession = draft.session;
            draftSession.answers.push(answerEntry);
            if (draftSession.currentIndex < draftSession.questions.length - 1) {
                draftSession.currentIndex += 1;
                draftSession.questionStartedAt = Date.now();
            } else {
                draftSession.status = 'pending-finish';
            }
            return draft;
        }, 'record-answer');

        if (store.getState().session.status === 'pending-finish') {
            finishSession(store.getState().session);
        }
    });
}

function showAnswerFeedback(selectedOption, isCorrect, correctAnswer, callback) {
    // Disable all option buttons during feedback
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Highlight the selected option
    const selectedButton = Array.from(optionButtons).find(button =>
        decodeURIComponent(button.dataset.option) === selectedOption
    );
    if (selectedButton) {
        selectedButton.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        // Add special effects based on answer
        if (isCorrect) {
            createConfetti(selectedButton);
            createStarBurst(selectedButton);
        } else {
            createParticleExplosion(selectedButton, '#ef4444');
        }
    }

    // If incorrect, also highlight the correct answer with effects
    if (!isCorrect) {
        const correctButton = Array.from(optionButtons).find(button =>
            decodeURIComponent(button.dataset.option) === correctAnswer
        );
        if (correctButton) {
            correctButton.classList.add('correct');
            createParticleExplosion(correctButton, '#10b981');
            createSparkleTrail(correctButton);
        }
    }

    // No pop-up modal for any answers - just proceed after effects
    setTimeout(() => {
        // Re-enable buttons and remove classes for next question
        optionButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'incorrect');
        });
        
        callback();
    }, isCorrect ? 1500 : 1800);
}

function createConfetti(sourceElement) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const rect = sourceElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        confetti.style.setProperty('--left', `${centerX + Math.random() * 200 - 100}px`);
        confetti.style.setProperty('--duration', `${Math.random() * 2 + 1}s`);
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                document.body.removeChild(confetti);
            }
        }, 3000);
    }
}

function createParticleExplosion(sourceElement, color) {
    const rect = sourceElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--color', color);
        particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
        particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 100}px`);
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                document.body.removeChild(particle);
            }
        }, 1000);
    }
}

function createStarBurst(sourceElement) {
    const rect = sourceElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'star-effect';
        star.style.left = `${centerX}px`;
        star.style.top = `${centerY}px`;
        star.style.animationDelay = `${i * 0.1}s`;
        document.body.appendChild(star);
        
        setTimeout(() => {
            if (star.parentNode) {
                document.body.removeChild(star);
            }
        }, 1000);
    }
}

function createSparkleTrail(sourceElement) {
    const rect = sourceElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.setProperty('--sparkle-x', `${(Math.random() - 0.5) * 60}px`);
        sparkle.style.setProperty('--sparkle-y', `${(Math.random() - 0.5) * 60}px`);
        sparkle.style.left = `${centerX}px`;
        sparkle.style.top = `${centerY}px`;
        sparkle.style.animationDelay = `${i * 0.05}s`;
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                document.body.removeChild(sparkle);
            }
        }, 1000);
    }
}

function defaultStats() {
    return {
        xp: 0,
        coins: 0,
        totalQuestions: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0,
        currentStreak: 0,
        bestStreak: 0,
        lastAnsweredAt: null,
        lastActiveDay: null
    };
}

function exportProfileAnalytics(profile) {
    const stats = profile.stats || defaultStats();
    const snapshot = analytics.composeProfileSnapshot(profile) || analytics.emptySnapshot();
    const history = Array.isArray(profile.history) ? profile.history : [];
    const wrongAnswers = history.filter((entry) => entry && entry.isCorrect === false);
    const uniqueSessions = new Set(history.map((entry) => entry?.sessionId).filter(Boolean));

    const rows = [];
    const pushRow = (columns) => rows.push(columns.map(csvEscape).join(','));

    pushRow(['Maklumat', 'Nilai']);
    pushRow(['Nama profil', profile.name || 'Pelajar']);
    pushRow(['Jumlah sesi direkod', uniqueSessions.size || (Array.isArray(profile.sessions) ? profile.sessions.length : 0) || 0]);
    pushRow(['Jumlah soalan (semua)', stats.totalQuestions || 0]);
    pushRow(['Betul (semua)', stats.correct || 0]);
    pushRow(['Salah (semua)', stats.wrong || 0]);
    const overallAccuracy = stats.totalQuestions ? `${Math.round((stats.correct / stats.totalQuestions) * 100)}%` : '0%';
    pushRow(['Ketepatan (semua)', overallAccuracy]);
    pushRow(['Ketepatan (200 terkini)', snapshot.accuracyLabel || '0%']);
    pushRow(['Streak semasa', stats.currentStreak || snapshot.currentStreak || 0]);
    pushRow(['Streak terbaik', stats.bestStreak || snapshot.bestStreak || 0]);
    pushRow(['Masa purata per soalan', snapshot.avgTimeLabel || '0s']);

    rows.push('');

    pushRow(['Tarikh', 'Kategori', 'KP', 'Soalan', 'Jawapan anda', 'Jawapan tepat', 'Tahap', 'Masa (s)']);
    if (wrongAnswers.length === 0) {
        pushRow(['Tiada kesalahan direkodkan', '', '', '', '', '', '', '']);
    } else {
        wrongAnswers.forEach((entry) => {
            const categoryMeta = entry.category ? getCategoryMeta(entry.category) : null;
            const categoryLabel = categoryMeta?.name || entry.category || 'Lain-lain';
            const skillMeta = entry.skillId ? getSkillMeta(entry.category, entry.skillId) : null;
            const skillCode = entry.skillId || '';
            const kpLabel = skillCode
                ? `${skillCode}${skillMeta?.title ? ` - ${skillMeta.title}` : ''}`
                : (skillMeta?.title || '—');
            const questionText = entry.prompt || entry.questionId || 'Soalan terdahulu';
            const selected = entry.selectedOption || 'Tidak dijawab';
            const correctAnswer = entry.correctAnswer || 'Tidak tersedia';
            const difficultyLabel = entry.difficultyLabel || (entry.difficulty ? `Tahap ${entry.difficulty}` : '');
            const durationSeconds = entry.timeTakenMs ? Math.round(entry.timeTakenMs / 1000) : '';
            const timestamp = entry.timestamp ? new Date(entry.timestamp).toLocaleString('ms-MY') : '';
            pushRow([
                timestamp,
                categoryLabel,
                kpLabel,
                questionText,
                selected,
                correctAnswer,
                difficultyLabel,
                durationSeconds
            ]);
        });
    }

    const csvContent = rows.join('\r\n');
    const safeName = (profile.name || 'profil').toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '') || 'profil';
    const stamp = new Date().toISOString().split('T')[0];
    const filename = `ringkasan-${safeName}-${stamp}.csv`;
    downloadCsv(filename, csvContent);
}

function csvEscape(value) {
    if (value === null || value === undefined) {
        return '""';
    }
    const text = String(value).replace(/"/g, '""');
    return `"${text}"`;
}

function downloadCsv(filename, content) {
    if (typeof window === 'undefined') {
        return;
    }
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function handleAction(action, payload = {}, formRef) {
    switch (action) {
        case 'toggle-profile':
            if (store.getState().view === 'profile' && store.getState().activeProfileId) {
                store.setState({ view: 'home', selection: null }, 'nav-home');
            } else {
                store.setState({ view: 'profile', session: null, selection: null }, 'nav-profile');
            }
            break;
        case 'select-profile':
            store.setState({
                activeProfileId: payload.id,
                view: 'home',
                selection: null
            }, 'select-profile');
            queuePersist();
            showToast('Profil dipilih');
            break;
        case 'create-profile':
            createProfile(payload);
            break;
        case 'start-session':
            startSession(payload.category, payload.level, payload.skillId, payload.difficultyLabel).catch((error) => {
                console.error('Start session failed', error);
                showToast('Ralat memuat soalan KP. Cuba lagi.');
            });
            break;
        case 'choose-skill':
            store.setState({
                view: 'skill-select',
                selection: {
                    category: payload.category,
                    difficulty: Number(payload.level) || 1,
                    difficultyLabel: payload.difficultyLabel || `Tahap ${Number(payload.level) || 1}`
                }
            }, 'choose-skill');
            break;
        case 'cancel-skill':
            store.setState({ view: 'home', selection: null }, 'cancel-skill');
            break;
        case 'delete-profile':
            deleteProfile(payload.id);
            break;
        case 'confirm-delete-profile':
            confirmDeleteProfile(payload.id);
            break;
        case 'cancel-delete-profile':
            store.setState((draft) => {
                if (draft.overlay?.type === 'confirm-delete') {
                    draft.overlay = null;
                }
                return draft;
            }, 'cancel-delete-profile');
            break;
        case 'answer':
            handleAnswer(payload.option);
            break;
        case 'quit-session':
            store.setState({ session: null, view: 'home', selection: null }, 'quit-session');
            showToast('Sesi dihentikan');
            break;
        case 'go-home':
            store.setState({ view: 'home', selection: null }, 'go-home');
            break;
        case 'open-analytics':
            store.setState({ view: 'analytics' }, 'open-analytics');
            break;
        case 'export-analytics': {
            const profile = getActiveProfile();
            if (!profile) {
                showToast('Pilih profil dahulu.');
                break;
            }
            exportProfileAnalytics(profile);
            showToast('Ringkasan dimuat turun.');
            break;
        }
        case 'open-mistake-report': {
            const currentState = store.getState();
            const previousView = currentState.view;
            store.setState({
                view: 'mistakes',
                selection: {
                    ...(currentState.selection || {}),
                    mistakeCategory: payload.category || 'all',
                    mistakeSkill: payload.skillId || 'all',
                    previousView
                }
            }, 'open-mistake-report');
            break;
        }
        case 'set-mistake-filter':
            store.setState((draft) => {
                const nextSelection = {
                    ...(draft.selection || {}),
                    mistakeCategory: payload.category || 'all'
                };
                if (payload.skillId) {
                    nextSelection.mistakeSkill = payload.skillId;
                } else if (payload.skillId === '') {
                    nextSelection.mistakeSkill = 'all';
                } else if ((payload.category || 'all') === 'all') {
                    nextSelection.mistakeSkill = 'all';
                } else if (typeof payload.skillId === 'undefined') {
                    nextSelection.mistakeSkill = 'all';
                }
                draft.selection = nextSelection;
                return draft;
            }, 'set-mistake-filter');
            break;
        case 'close-mistake-report': {
            const selection = store.getState().selection || {};
            const previousView = selection.previousView && selection.previousView !== 'mistakes'
                ? selection.previousView
                : 'analytics';
            store.setState({
                view: previousView,
                selection: null
            }, 'close-mistake-report');
            break;
        }
        default:
            console.warn('Action not handled', action, payload);
    }
}

function createProfile(payload) {
    const name = (payload.name || '').trim();
    const avatar = payload.avatar || '🐱';
    if (!name) {
        showToast('Nama diperlukan.');
        return;
    }
    if (name.length > 18) {
        showToast('Nama terlalu panjang.');
        return;
    }
    const existing = store.getState().profiles.find((profile) => profile.name.toLowerCase() === name.toLowerCase());
    if (existing) {
        showToast('Nama profil telah digunakan. Pilih nama lain.');
        return;
    }
    const profile = {
        id: uid('profile'),
        name,
        avatar,
        createdAt: Date.now(),
        stats: defaultStats(),
        history: [],
        sessions: [],
        daily: {}
    };
    store.setState((draft) => {
        draft.profiles = draft.profiles || [];
        draft.profiles.push(profile);
        draft.activeProfileId = profile.id;
        draft.view = 'home';
        draft.selection = null;
        return draft;
    }, 'create-profile');
    queuePersist();
    showToast('Profil baharu disimpan.');
}

function deleteProfile(profileId) {
    if (!profileId) {
        showToast('Profil tidak ditemui.');
        return;
    }
    const state = store.getState();
    const target = state.profiles.find((profile) => profile.id === profileId);
    if (!target) {
        showToast('Profil tidak ditemui.');
        return;
    }
    store.setState((draft) => {
        draft.overlay = {
            type: 'confirm-delete',
            profileId,
            profileName: target.name
        };
        return draft;
    }, 'delete-profile');
}

function confirmDeleteProfile(profileId) {
    if (!profileId) {
        return;
    }
    const state = store.getState();
    const target = state.profiles.find((profile) => profile.id === profileId);
    if (!target) {
        store.setState((draft) => {
            draft.overlay = null;
            return draft;
        }, 'delete-missing');
        showToast('Profil tidak ditemui.');
        return;
    }

    store.setState((draft) => {
        draft.profiles = draft.profiles.filter((profile) => profile.id !== profileId);
        draft.selection = null;

        if (draft.activeProfileId === profileId) {
            draft.activeProfileId = draft.profiles[0]?.id || null;
            draft.session = null;
            draft.view = draft.activeProfileId ? 'home' : 'profile';
        } else if (!draft.activeProfileId && draft.profiles.length > 0) {
            draft.activeProfileId = draft.profiles[0].id;
            draft.view = 'home';
        }

        if (draft.profiles.length === 0) {
            draft.activeProfileId = null;
            draft.view = 'profile';
        }

        draft.overlay = null;
        return draft;
    }, 'delete-profile-commit');

    queuePersist();
    showToast(`Profil "${target.name}" dipadam.`);
}

window.__QA_STORE__ = store;
