import { listCategories, listDifficultyOptions, getCategoryMeta, listSkills, getSkillMeta } from '../data/questions.js';
import { AnalyticsService } from './analytics.js';
import { toPercent, formatDuration } from './utils.js';

const escapeHtml = (value) => {
    if (value === null || value === undefined) {
        return '';
    }
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

export class UIManager {
    constructor({ root, store, performance, analytics, dispatch }) {
        this.root = root;
        this.store = store;
        this.performance = performance;
        this.analytics = analytics instanceof AnalyticsService ? analytics : new AnalyticsService();
        this.dispatch = dispatch;
        this.slots = {};
        this.lastView = null;
    }

    init() {
        this.renderShell();
        this.unsubscribe = this.store.subscribe((state) => this.render(state));
        this.root.addEventListener('click', (event) => this.handleAction(event));
        this.root.addEventListener('submit', (event) => this.handleSubmit(event));
        this.performance.bindReducedMotionToggle(this.root);
    }

    destroy() {
        this.unsubscribe?.();
    }

    renderShell() {
        this.root.innerHTML = `
            <div class="app-shell">
                <header class="app-header" data-slot="header"></header>
                <main class="app-main" data-slot="main" role="main"></main>
                <aside class="app-aside" data-slot="aside" aria-label="Analytics snapshot"></aside>
                <div class="app-toast" data-slot="toast" role="status" aria-live="polite"></div>
            </div>
        `;
        this.slots = {
            header: this.root.querySelector('[data-slot="header"]'),
            main: this.root.querySelector('[data-slot="main"]'),
            aside: this.root.querySelector('[data-slot="aside"]'),
            toast: this.root.querySelector('[data-slot="toast"]')
        };
    }

    render(state) {
        const profile = state.profiles.find((p) => p.id === state.activeProfileId) || null;
        const snapshot = profile ? this.analytics.composeProfileSnapshot(profile) : this.analytics.emptySnapshot();
        const session = state.session;
        const previousView = this.lastView;
        this.lastView = state.view;

        this.slots.header.innerHTML = this.renderHeader(state, profile, snapshot);
        this.slots.main.innerHTML = this.renderView(state, profile, snapshot);
        this.slots.aside.innerHTML = this.renderAside(profile, snapshot, state);
        this.renderToast(state.overlay);

        if (previousView && previousView !== state.view) {
            const mainContainer = this.slots.main?.closest('.app-main');
            if (mainContainer) {
                mainContainer.scrollTop = 0;
            }
            if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
                window.scrollTo(0, 0);
            }
        }

        this.performance.hydrateLazyModules(this.root);
    }

    renderHeader(state, profile, snapshot) {
        const hasProfile = Boolean(profile);
        return `
            <div class="header-left">
                <button class="avatar-button" data-action="toggle-profile" aria-label="Tukar profil">
                    <span class="avatar" aria-hidden="true">${hasProfile ? profile.avatar : '👤'}</span>
                    <div class="avatar-meta">
                        <span class="avatar-name">${hasProfile ? profile.name : 'Pilih Profil'}</span>
                        <span class="avatar-sub">${hasProfile ? `XP ${profile.stats.xp} · Streak ${profile.stats.currentStreak}` : 'Ketuk untuk mula'}</span>
                    </div>
                </button>
            </div>
            <div class="header-right">
                <div class="stat-chip" title="Ketepatan keseluruhan">
                    <span>🎯</span>
                    <strong>${snapshot.accuracyLabel}</strong>
                </div>
                <div class="stat-chip" title="Purata masa setiap soalan">
                    <span>⏱️</span>
                    <strong>${snapshot.avgTimeLabel}</strong>
                </div>
                <div class="stat-chip" title="XP dikumpul">
                    <span>⭐</span>
                    <strong>${profile ? profile.stats.xp : 0}</strong>
                </div>
                <button class="ghost-button" data-action="toggle-motion" aria-pressed="false">Animations On</button>
                <button class="primary-button" data-action="open-analytics" ${hasProfile ? '' : 'disabled'}>
                    Analitik
                </button>
            </div>
        `;
    }

    renderView(state, profile, snapshot) {
        switch (state.view) {
            case 'profile':
                return this.renderProfileView(state);
            case 'home':
                return this.renderHomeView(state, profile, snapshot);
            case 'skill-select':
                return this.renderSkillSelectView(state, profile);
            case 'quiz':
                return this.renderQuizView(state, profile);
            case 'summary':
                return this.renderSummaryView(state, profile, snapshot);
            case 'analytics':
                return this.renderAnalyticsView(state, profile, snapshot);
            case 'mistakes':
                return this.renderMistakeReportView(state, profile);
            default:
                return `<div class="panel"><p>View ${state.view} not found.</p></div>`;
        }
    }

    renderProfileView(state) {
        const profiles = state.profiles;
        const avatars = ['🐱', '🐶', '🐰', '🐼', '🐯', '🦊', '🐧', '🐯'];
        return `
            <section class="panel">
                <header class="panel-header">
                    <h1>Pilih Profil</h1>
                    <p>Cipta profil baharu untuk menjejaki kemajuan setiap pelajar.</p>
                </header>
                <div class="profile-grid">
                    ${profiles.length === 0 ? '<p class="empty">Belum ada profil. Tambah satu di bawah.</p>' : profiles.map((profile) => `
                        <article class="profile-card">
                            <button class="profile-card-main" data-action="select-profile" data-id="${profile.id}">
                                <span class="profile-avatar" aria-hidden="true">${profile.avatar}</span>
                                <span class="profile-name">${profile.name}</span>
                                <span class="profile-meta">${profile.stats.totalQuestions} soalan · Ketepatan ${toPercent(profile.stats.accuracy || 0, 0)}</span>
                            </button>
                            <button class="profile-card-delete" data-action="delete-profile" data-id="${profile.id}">Padam profil</button>
                        </article>
                    `).join('')}
                </div>
                <form class="profile-form" data-action="create-profile">
                    <h2>Profil Baharu</h2>
                    <div class="form-group">
                        <label for="profileName">Nama Murid</label>
                        <input id="profileName" name="name" type="text" maxlength="18" required placeholder="Contoh: Aisyah" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="profileAvatar">Avatar</label>
                        <select id="profileAvatar" name="avatar">
                            ${avatars.map((icon) => `<option value="${icon}">${icon}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="primary-button">Simpan Profil</button>
                    </div>
                </form>
            </section>
        `;
    }

    renderHomeView(state, profile, snapshot) {
        if (!profile) {
            return `<div class="panel"><p>Pilih profil terlebih dahulu.</p></div>`;
        }
        const categories = listCategories();
        const difficulties = listDifficultyOptions();
        const maxDifficultyLevel = difficulties.reduce((max, diff) => Math.max(max, diff.level), 1);
        const combinedDifficultyLabel = difficulties.length
            ? `Tahap ${difficulties.map((diff) => diff.level).join(', ')}`
            : 'Mulakan Latihan';
        return `
            <section class="panel">
                <header class="panel-header">
                    <h1>Selamat datang, ${profile.name}!</h1>
                    <p>Pilih cabaran untuk meneruskan pembelajaran anda.</p>
                    <div class="pemulihan-tagline">
                        <span class="tagline-icon">🎯</span>
                        <span class="tagline-text">Kuiz Pemulihan Tahun 1, 2 & 3 (BM & Matematik)</span>
                    </div>
                    <p class="kp-note">Semua KP mematuhi struktur KPM (2019) untuk Program Pemulihan Khas BM & Matematik.</p>
                </header>
                <div class="quick-stats">
                    <div class="quick-card">
                        <span>🔥</span>
                        <div>
                            <strong>${profile.stats.currentStreak} hari</strong>
                            <small>Streak semasa</small>
                        </div>
                    </div>
                    <div class="quick-card">
                        <span>🏆</span>
                        <div>
                            <strong>${profile.stats.bestStreak}</strong>
                            <small>Streak terbaik</small>
                        </div>
                    </div>
                    <div class="quick-card">
                        <span>📈</span>
                        <div>
                            <strong>${snapshot.accuracyLabel}</strong>
                            <small>Ketepatan keseluruhan</small>
                        </div>
                    </div>
                </div>
                <section class="panel-section">
                    <header>
                        <h2>Cabaran Pantas</h2>
                        <p>Pilih kategori dan kesukaran untuk 10 soalan terpilih.</p>
                    </header>
                    <div class="challenge-grid">
                        ${categories.map((category) => `
                            <article class="challenge-card" style="--accent:${category.accent};">
                                <header>
                                    <h3>${category.name}</h3>
                                    <p>${category.description}</p>
                                </header>
                                <div class="difficulty-badges">
                                    <button class="difficulty-button" data-action="choose-skill" data-category="${category.id}" data-level="${maxDifficultyLevel}" data-difficulty-label="${escapeHtml(combinedDifficultyLabel)}">
                                        ${escapeHtml(combinedDifficultyLabel)}
                                    </button>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </section>
            </section>
        `;
    }

    renderSkillSelectView(state, profile) {
        const selection = state.selection;
        if (!profile || !selection) {
            return `<div class="panel"><p>Tiada pilihan kemahiran tersedia.</p></div>`;
        }
        const categoryMeta = getCategoryMeta(selection.category);
        const skills = listSkills(selection.category);
        const difficultyLabel = selection.difficultyLabel || `Tahap ${selection.difficulty}`;
        return `
            <section class="panel">
                <header class="panel-header with-actions">
                    <div>
                        <h1>${categoryMeta ? categoryMeta.name : 'Pilih Kemahiran'}</h1>
                        <p>${escapeHtml(difficultyLabel)}. Pilih kemahiran untuk meneruskan latihan.</p>
                    </div>
                    <button class="ghost-button back-button" data-action="cancel-skill">← Menu Utama</button>
                </header>
                <div class="skills-grid">
                    ${skills.length > 0 ? skills.map((skill) => `
                        <article class="skill-card">
                            <header>
                                <h3>${skill.title}</h3>
                                <p>${skill.description}</p>
                            </header>
                            <button class="primary-button" data-action="start-session" data-category="${selection.category}" data-level="${selection.difficulty}" data-difficulty-label="${escapeHtml(difficultyLabel)}" data-skill-id="${skill.id}">Mula Latihan</button>
                        </article>
                    `).join('') : '<p class="empty">Tiada kemahiran khusus ditemui.</p>'}
                </div>
            </section>
        `;
    }


    renderQuizView(state, profile) {
        const session = state.session;
        if (!session || !profile) {
            return `<div class="panel"><p>Tiada sesi kuiz aktif.</p></div>`;
        }
        const question = session.questions[session.currentIndex];
        const categoryMeta = getCategoryMeta(session.category);
        const skillMeta = session.skillId ? getSkillMeta(session.category, session.skillId) : null;
        const progress = Math.round(((session.currentIndex) / session.questions.length) * 100);
        const difficultyLabel = session.difficultyLabel || `Tahap ${session.difficulty}`;
        return `
            <section class="panel quiz-panel">
                <header class="panel-header">
                    <div>
                        <h1>${skillMeta?.title || categoryMeta?.name || 'Kuiz'}</h1>
                        <p>${categoryMeta ? `${categoryMeta.name} · ` : ''}${escapeHtml(difficultyLabel)} · Soalan ${session.currentIndex + 1} daripada ${session.questions.length}</p>
                    </div>
                    <div class="quiz-actions">
                        <button class="ghost-button" data-action="quit-session">Henti</button>
                    </div>
                </header>
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
                    <div class="progress-bar-fill" style="width:${progress}%"></div>
                </div>
                <article class="question-card" data-question-id="${question.id}">
                    <header>
                        <p class="question-text">${question.prompt}</p>
                        ${question.display ? `<p class="question-sub">${question.display}</p>` : ''}
                    </header>
                    <div class="options-grid">
                        ${question.options.map((option) => `
                            <button class="option-button" data-action="answer" data-option="${encodeURIComponent(option)}">${option}</button>
                        `).join('')}
                    </div>
                </article>
            </section>
        `;
    }

    renderSummaryView(state, profile, snapshot) {
        const session = state.session;
        if (!session || !profile) {
            return `<div class="panel"><p>Tiada ringkasan tersedia.</p></div>`;
        }
        const lastResult = session.results || { correct: 0, total: 0, accuracy: 0, durationMs: 0 };
        const categoryMeta = getCategoryMeta(session.category);
        const skillMeta = session.skillId ? getSkillMeta(session.category, session.skillId) : null;
        const wrongCount = Math.max(0, (lastResult.total || 0) - (lastResult.correct || 0));
        const hasMistakes = wrongCount > 0;
        const difficultyLabel = session.difficultyLabel || `Tahap ${session.difficulty}`;
        return `
            <section class="panel">
                <header class="panel-header">
                    <h1>Ringkasan Kuiz</h1>
                    <p>${skillMeta?.title || categoryMeta?.name || 'Teruskan momentum anda.'}</p>
                </header>
                <div class="summary-stats">
                    <div>
                        <strong>${lastResult.correct}/${lastResult.total}</strong>
                        <span>Betul</span>
                    </div>
                    <div>
                        <strong>${toPercent(lastResult.accuracy || 0, 0)}</strong>
                        <span>Ketepatan</span>
                    </div>
                    <div>
                        <strong>${formatDuration(lastResult.durationMs || 0)}</strong>
                        <span>Masa diambil</span>
                    </div>
                </div>
                <div class="summary-actions">
                    <button class="primary-button" data-action="start-session" data-category="${session.category}" data-level="${session.difficulty}" data-difficulty-label="${escapeHtml(difficultyLabel)}" data-skill-id="${session.skillId || ''}">Ulang Cabaran</button>
                    ${hasMistakes ? `<button class="ghost-button" data-action="open-mistake-report" data-category="${session.category}">Lihat jawapan salah</button>` : ''}
                    <button class="ghost-button" data-action="go-home">Kembali ke Menu</button>
                </div>
            </section>
        `;
    }

    renderAnalyticsView(state, profile, snapshot) {
        if (!profile) {
            return `<div class="panel"><p>Pilih profil untuk melihat analitik.</p></div>`;
        }
        const categories = Object.entries(snapshot.categories);
        const history = profile.history || [];
        const wrongAnswers = history.filter((entry) => entry && entry.isCorrect === false);
        const bySkill = new Map();
        wrongAnswers.forEach((entry) => {
            const key = `${entry.category || 'unknown'}::${entry.skillId || 'general'}`;
            const stat = bySkill.get(key) || {
                count: 0,
                category: entry.category,
                skillId: entry.skillId
            };
            stat.count += 1;
            bySkill.set(key, stat);
        });
        const topSkills = Array.from(bySkill.values())
            .sort((a, b) => b.count - a.count)
            .slice(0, 3);
        return `
            <section class="panel">
                <header class="panel-header with-actions">
                    <div>
                        <h1>Laporan Analitik</h1>
                        <p>Gambaran keseluruhan prestasi ${profile.name}.</p>
                    </div>
                    <div class="header-actions">
                        <button class="ghost-button" data-action="go-home">Menu Utama</button>
                        <button class="ghost-button" data-action="export-analytics">Eksport ringkasan</button>
                        ${wrongAnswers.length ? `
                            <button class="primary-button" data-action="open-mistake-report">Analisis kesalahan</button>
                        ` : ''}
                    </div>
                </header>
                <div class="analytics-grid">
                    <article class="analytics-card">
                        <h2>Prestasi Keseluruhan</h2>
                        <ul>
                            <li><span>Total soalan</span><strong>${snapshot.totalQuestions}</strong></li>
                            <li><span>Betul</span><strong>${snapshot.correct}</strong></li>
                            <li><span>Salah</span><strong>${snapshot.wrong}</strong></li>
                            <li><span>Ketepatan</span><strong>${snapshot.accuracyLabel}</strong></li>
                        </ul>
                    </article>
                    <article class="analytics-card">
                        <h2>Ikhtisar Kategori</h2>
                        ${categories.length === 0 ? '<p>Belum mencukupi data.</p>' : `
                            <ul>
                                ${categories.map(([categoryId, stat]) => {
                                    const category = getCategoryMeta(categoryId);
                                    return `<li>
                                        <span>${category ? category.name : categoryId}</span>
                                        <strong>${stat.accuracyLabel}</strong>
                                    </li>`;
                                }).join('')}
                            </ul>
                        `}
                    </article>
                    <article class="analytics-card">
                        <h2>Streak</h2>
                        <p>Streak semasa: <strong>${profile.stats.currentStreak}</strong></p>
                        <p>Streak terbaik: <strong>${profile.stats.bestStreak}</strong></p>
                    </article>
                    <article class="analytics-card">
                        <h2>Fokus Pembaikan</h2>
                        ${wrongAnswers.length === 0 ? '<p>Tiada kesalahan direkodkan.</p>' : `
                            <ul class="mistake-focus-list">
                                ${topSkills.map((item) => {
                                    const categoryMeta = getCategoryMeta(item.category);
                                    const skillMeta = item.skillId ? getSkillMeta(item.category, item.skillId) : null;
                                    const label = skillMeta?.title || categoryMeta?.name || 'Topik Umum';
                                    return `<li>
                                        <span>${label}</span>
                                        <strong>${item.count} salah</strong>
                                    </li>`;
                                }).join('')}
                            </ul>
                            <button class="link-button" data-action="open-mistake-report">Lihat semua jawapan salah →</button>
                        `}
                    </article>
                </div>
            </section>
        `;
    }

    renderMistakeReportView(state, profile) {
        if (!profile) {
            return `<div class="panel"><p>Pilih profil terlebih dahulu.</p></div>`;
        }

        const formatDateTime = (value) => {
            if (!value) {
                return '—';
            }
            const date = new Date(value);
            if (Number.isNaN(date.getTime())) {
                return '—';
            }
            return date.toLocaleString('ms-MY', {
                dateStyle: 'medium',
                timeStyle: 'short'
            });
        };

        const history = profile.history || [];
        const mistakes = history.filter((entry) => entry && entry.isCorrect === false);
        const selection = state.selection || {};
        const activeCategory = selection.mistakeCategory || 'all';

        if (mistakes.length === 0) {
            return `
                <section class="panel mistake-panel">
                    <div class="mistake-panel-scroll">
                        <header class="panel-header">
                            <h1>Analisis Jawapan Salah</h1>
                            <p>Tiada kesalahan direkodkan buat masa ini 🎉</p>
                        </header>
                    </div>
                    <div class="summary-actions mistake-actions">
                        <button class="ghost-button" data-action="close-mistake-report">Kembali</button>
                    </div>
                </section>
            `;
        }

        const activeSkill = selection.mistakeSkill || 'all';
        const categoryIds = Array.from(new Set(mistakes.map((entry) => entry.category || 'unknown')));
        const filteredMistakes = mistakes
            .filter((entry) => {
                const categoryMatch = activeCategory === 'all' || entry.category === activeCategory;
                const skillMatch = activeSkill === 'all'
                    ? true
                    : activeSkill === 'general'
                        ? !entry.skillId
                        : entry.skillId === activeSkill;
                return categoryMatch && skillMatch;
            })
            .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

        const totalWrong = mistakes.length;
        const totalFiltered = filteredMistakes.length;
        const totalTime = filteredMistakes.reduce((sum, entry) => sum + (entry.timeTakenMs || 0), 0);
        const avgTimeLabel = totalFiltered > 0 ? formatDuration(Math.round(totalTime / totalFiltered)) : '—';
        const distinctSkills = new Set(filteredMistakes.map((entry) => entry.skillId || 'general'));

        const skillAccumulator = new Map();
        filteredMistakes.forEach((entry) => {
            const key = `${entry.category || 'unknown'}::${entry.skillId || 'general'}`;
            const stat = skillAccumulator.get(key) || {
                count: 0,
                category: entry.category,
                skillId: entry.skillId
            };
            stat.count += 1;
            skillAccumulator.set(key, stat);
        });
        const topSkills = Array.from(skillAccumulator.values())
            .sort((a, b) => b.count - a.count)
            .slice(0, 3);
        const primarySuggestion = topSkills[0] && topSkills[0].category && topSkills[0].category !== 'unknown'
            ? topSkills[0]
            : null;
        const primarySkillMeta = primarySuggestion?.skillId
            ? getSkillMeta(primarySuggestion.category, primarySuggestion.skillId)
            : null;
        const primaryCategoryMeta = primarySuggestion?.category
            ? getCategoryMeta(primarySuggestion.category)
            : null;
        const primaryLabel = primarySkillMeta?.title || primaryCategoryMeta?.name || 'Topik utama';
        const suggestedDifficulty = totalFiltered > 0
            ? Math.max(1, Math.round(filteredMistakes.reduce((sum, item) => sum + (Number(item.difficulty) || 1), 0) / totalFiltered))
            : 1;
        const suggestedDifficultyLabel = `Tahap ${suggestedDifficulty}`;

        const categoryFilterLabel = activeCategory === 'all'
            ? 'semua kategori'
            : (getCategoryMeta(activeCategory)?.name || activeCategory);
        const activeSkillMeta = (activeCategory !== 'all' && activeSkill !== 'all' && activeSkill !== 'general')
            ? getSkillMeta(activeCategory, activeSkill)
            : null;
        const skillFilterLabel = activeSkill === 'all'
            ? ''
            : ` · ${activeSkill === 'general' ? 'Topik umum' : (activeSkillMeta?.title || activeSkill)}`;
        const filterSummary = `${categoryFilterLabel}${skillFilterLabel}`;

        const actionsHtml = `
            <div class="summary-actions mistake-actions">
                ${primarySuggestion ? `<button class="primary-button" data-action="start-session" data-category="${primarySuggestion.category || ''}" data-level="${suggestedDifficulty}" data-difficulty-label="${escapeHtml(suggestedDifficultyLabel)}" data-skill-id="${primarySuggestion.skillId || ''}">Latih ${escapeHtml(primaryLabel)}</button>` : ''}
                <button class="ghost-button" data-action="close-mistake-report">Kembali</button>
            </div>
        `;

        const focusSection = topSkills.length === 0
            ? '<section class="mistake-focus"><p>Data belum mencukupi untuk cadangan.</p></section>'
            : `
                <section class="mistake-focus">
                    <header>
                        <h2>Cadangan latihan</h2>
                        <p>Pilih topik untuk latihan semula pantas.</p>
                    </header>
                    <ul class="mistake-focus-list">
                        ${topSkills.filter((item) => item.category).map((item) => {
                            const categoryMeta = getCategoryMeta(item.category);
                            const skillMeta = item.skillId ? getSkillMeta(item.category, item.skillId) : null;
                            const label = skillMeta?.title || categoryMeta?.name || 'Topik Umum';
                            return `<li>
                                <button class="mistake-focus-button" data-action="set-mistake-filter" data-category="${item.category || ''}" data-skill-id="${item.skillId || 'general'}">
                                    <span>${label}</span>
                                    <strong>${item.count} salah</strong>
                                </button>
                            </li>`;
                        }).join('')}
                    </ul>
                </section>
            `;

        return `
            <section class="panel mistake-panel">
                <div class="mistake-panel-scroll">
                    <header class="panel-header with-actions">
                        <div>
                            <h1>Analisis Jawapan Salah</h1>
                            <p>Kenal pasti topik yang memerlukan latihan tambahan untuk ${profile.name}.</p>
                        </div>
                        <button class="ghost-button" data-action="close-mistake-report">Kembali</button>
                    </header>
                    <div class="mistake-summary">
                        <div>
                            <strong>${totalWrong}</strong>
                            <span>Total salah direkodkan</span>
                        </div>
                        <div>
                            <strong>${totalFiltered}</strong>
                            <span>Dipaparkan (${filterSummary})</span>
                        </div>
                        <div>
                            <strong>${distinctSkills.size}</strong>
                            <span>Skill terkesan</span>
                        </div>
                        <div>
                            <strong>${avgTimeLabel}</strong>
                            <span>Masa purata menjawab</span>
                        </div>
                    </div>
                    <div class="mistake-filters">
                        <span>Penapis kategori:</span>
                        <div class="mistake-filter-chips">
                            <button class="chip-button${activeCategory === 'all' ? ' is-active' : ''}" data-action="set-mistake-filter" data-category="all">Semua</button>
                            ${categoryIds.map((categoryId) => {
                                const meta = getCategoryMeta(categoryId);
                                const label = meta?.name || categoryId || 'Lain-lain';
                                const isActive = activeCategory === categoryId;
                                return `<button class="chip-button${isActive ? ' is-active' : ''}" data-action="set-mistake-filter" data-category="${categoryId}">${label}</button>`;
                            }).join('')}
                        </div>
                    </div>
                    ${activeCategory !== 'all' ? `
                        <div class="mistake-filters">
                            <span>Penapis skill:</span>
                            <div class="mistake-filter-chips">
                                <button class="chip-button${activeSkill === 'all' ? ' is-active' : ''}" data-action="set-mistake-filter" data-category="${activeCategory}" data-skill-id="">Semua</button>
                                ${Array.from(new Set(mistakes
                                    .filter((item) => item.category === activeCategory)
                                    .map((item) => item.skillId || 'general')))
                                    .map((skillId) => {
                                        if (!skillId || skillId === 'general') {
                                            const isActive = activeSkill === 'general';
                                            return `<button class="chip-button${isActive ? ' is-active' : ''}" data-action="set-mistake-filter" data-category="${activeCategory}" data-skill-id="general">Topik umum</button>`;
                                        }
                                        const skillMeta = getSkillMeta(activeCategory, skillId);
                                        const isActive = activeSkill === skillId;
                                        return `<button class="chip-button${isActive ? ' is-active' : ''}" data-action="set-mistake-filter" data-category="${activeCategory}" data-skill-id="${skillId}">${skillMeta?.title || skillId}</button>`;
                                    }).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${focusSection}
                    <div class="mistake-list">
                        ${filteredMistakes.length === 0 ? `
                            <p class="empty">Tiada data kesalahan untuk kategori ini.</p>
                        ` : filteredMistakes.map((entry) => {
                            const categoryMeta = getCategoryMeta(entry.category);
                            const skillMeta = entry.skillId ? getSkillMeta(entry.category, entry.skillId) : null;
                            const labelCategory = categoryMeta?.name || 'Kategori lain';
                            const labelSkill = skillMeta?.title || null;
                            const durationLabel = entry.timeTakenMs ? formatDuration(entry.timeTakenMs) : '—';
                            const difficultyLabel = entry.difficultyLabel || (entry.difficulty ? `Tahap ${entry.difficulty}` : 'Tahap ?');
                            const optionsList = Array.isArray(entry.options) && entry.options.length > 0
                                ? `<ul class="mistake-options">${entry.options.map((opt) => `<li>${escapeHtml(opt)}</li>`).join('')}</ul>`
                                : '';
                            const prompt = escapeHtml(entry.prompt || entry.questionId || 'Soalan terdahulu');
                            const detail = entry.promptDetail ? `<p class="mistake-detail">${escapeHtml(entry.promptDetail)}</p>` : '';
                            return `
                                <article class="mistake-card">
                                    <header>
                                        <div class="mistake-tags">
                                            <span class="mistake-tag">${labelCategory}</span>
                                            ${labelSkill ? `<span class="mistake-tag is-skill">${labelSkill}</span>` : ''}
                                        </div>
                                        <time datetime="${entry.timestamp ? new Date(entry.timestamp).toISOString() : ''}">${formatDateTime(entry.timestamp)}</time>
                                    </header>
                                    <div class="mistake-body">
                                        <p class="mistake-question">${prompt}</p>
                                        ${detail}
                                        ${optionsList}
                                        <dl class="mistake-answers">
                                            <div>
                                                <dt>Jawapan anda</dt>
                                                <dd>${escapeHtml(entry.selectedOption || 'Tidak dijawab')}</dd>
                                            </div>
                                            <div>
                                                <dt>Jawapan tepat</dt>
                                                <dd>${escapeHtml(entry.correctAnswer || 'Tidak tersedia')}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <footer>
                                        <span>${escapeHtml(difficultyLabel)}</span>
                                        <span>Masa ${durationLabel}</span>
                                    </footer>
                                </article>
                            `;
                        }).join('')}
                    </div>
                </div>
                ${actionsHtml}
            </section>
        `;
    }

    renderAside(profile, snapshot, state) {
        if (!profile) {
            return `<div class="aside-empty">Pilih profil untuk melihat statistik masa nyata.</div>`;
        }
        const mastery = Math.round((snapshot.masteryScore || 0) * 100);
        const todayKey = new Date().toISOString().split('T')[0];
        const todayStats = snapshot.daily?.[todayKey];
        return `
            <section class="aside-panel">
                <header>
                    <h2>Snapshot Hari Ini</h2>
                </header>
                <dl>
                    <div>
                        <dt>Soalan dijawab</dt>
                        <dd>${todayStats ? todayStats.total : 0}</dd>
                    </div>
                    <div>
                        <dt>Ketepatan</dt>
                        <dd>${todayStats ? todayStats.accuracyLabel : '0%'}</dd>
                    </div>
                    <div>
                        <dt>Skor Mastery</dt>
                        <dd>${mastery}%</dd>
                    </div>
                </dl>
                <footer>
                    <button class="link-button" data-action="open-analytics">Lihat penuh →</button>
                </footer>
            </section>
        `;
    }

    renderToast(overlay) {
        const toastEl = this.slots.toast;
        if (!overlay) {
            toastEl.textContent = '';
            toastEl.classList.remove('is-visible');
            toastEl.classList.remove('is-interactive');
            toastEl.classList.remove('is-dialog');
            return;
        }
        toastEl.classList.remove('is-dialog');
        if (overlay.type === 'confirm-delete') {
            toastEl.innerHTML = `
                <div class="toast-panel">
                    <p>Padam profil <strong>${overlay.profileName || ''}</strong>?</p>
                    <div class="toast-actions">
                        <button class="ghost-button" data-action="cancel-delete-profile">Batal</button>
                        <button class="danger-button" data-action="confirm-delete-profile" data-id="${overlay.profileId}">Padam</button>
                    </div>
                </div>
            `;
            toastEl.classList.add('is-interactive');
            toastEl.classList.add('is-dialog');
        } else {
            toastEl.textContent = overlay.message;
            toastEl.classList.remove('is-interactive');
        }
        toastEl.classList.add('is-visible');
    }

    handleAction(event) {
        const target = event.target.closest('[data-action]');
        if (!target) {
            return;
        }
        if (target.tagName === 'FORM') {
            return;
        }
        const action = target.dataset.action;
        if (!action) {
            return;
        }
        event.preventDefault();
        const payload = { ...target.dataset };
        this.dispatch(action, payload);
    }

    handleSubmit(event) {
        const form = event.target.closest('form[data-action]');
        if (!form) {
            return;
        }
        event.preventDefault();
        const action = form.dataset.action;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());
        this.dispatch(action, payload, form);
        if (action === 'create-profile') {
            form.reset();
        }
    }
}
