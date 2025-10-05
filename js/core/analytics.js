import { average, clamp, toPercent, todayKey } from './utils.js';

export class AnalyticsService {
    constructor() {
        this.enabled = typeof window !== 'undefined' && typeof window.LearningAnalytics !== 'undefined';
    }

    init() {
        if (!this.enabled) {
            return;
        }
        try {
            window.LearningAnalytics.init();
        } catch (error) {
            console.warn('LearningAnalytics init failed; analytics disabled', error);
            this.enabled = false;
        }
    }

    trackQuestion(question, answer, { isCorrect, timeTakenMs, category, difficulty }) {
        if (!this.enabled) {
            return;
        }
        try {
            window.LearningAnalytics.trackResponse(
                {
                    question: question.prompt,
                    answer: question.answer,
                    type: category,
                    difficulty
                },
                answer,
                isCorrect,
                Math.max(0, Math.round(timeTakenMs / 1000))
            );
        } catch (error) {
            console.warn('LearningAnalytics.trackResponse failed', error);
        }
    }

    composeProfileSnapshot(profile) {
        const history = profile.history || [];
        if (history.length === 0) {
            return this.emptySnapshot();
        }

        const totalQuestions = history.length;
        const correct = history.filter((entry) => entry.isCorrect).length;
        const accuracy = correct / totalQuestions;
        const streaks = this.computeStreaks(history);
        const durations = history.map((entry) => entry.timeTakenMs || 0);
        const timePerQuestion = average(durations);
        const categories = this.aggregateBy(history, 'category');
        const skills = this.aggregateBy(history, 'skillId');
        const daily = this.aggregateBy(history, (entry) => todayKey(new Date(entry.timestamp)));

        return {
            totalQuestions,
            correct,
            wrong: totalQuestions - correct,
            accuracy,
            accuracyLabel: toPercent(accuracy, 0),
            avgTimeMs: timePerQuestion,
            avgTimeLabel: `${Math.round(timePerQuestion / 1000)}s`,
            bestStreak: streaks.best,
            currentStreak: streaks.current,
            categories,
            skills,
            daily,
            masteryScore: clamp(accuracy * 0.7 + (streaks.best / totalQuestions) * 0.3, 0, 1)
        };
    }

    emptySnapshot() {
        return {
            totalQuestions: 0,
            correct: 0,
            wrong: 0,
            accuracy: 0,
            accuracyLabel: '0%',
            avgTimeMs: 0,
            avgTimeLabel: '0s',
            bestStreak: 0,
            currentStreak: 0,
            categories: {},
            skills: {},
            daily: {},
            masteryScore: 0
        };
    }

    computeStreaks(history) {
        let current = 0;
        let best = 0;
        for (const entry of history) {
            if (entry.isCorrect) {
                current += 1;
                best = Math.max(best, current);
            } else {
                current = 0;
            }
        }
        return { current, best };
    }

    aggregateBy(history, selector) {
        const map = {};
        for (const entry of history) {
            const key = typeof selector === 'function' ? selector(entry) : entry[selector];
            if (!key) continue;
            if (!map[key]) {
                map[key] = { total: 0, correct: 0, wrong: 0, avgTimeMs: 0 };
            }
            const target = map[key];
            target.total += 1;
            if (entry.isCorrect) {
                target.correct += 1;
            } else {
                target.wrong += 1;
            }
            target.avgTimeMs += entry.timeTakenMs || 0;
        }
        Object.keys(map).forEach((key) => {
            const stat = map[key];
            stat.accuracy = stat.total ? stat.correct / stat.total : 0;
            stat.accuracyLabel = toPercent(stat.accuracy, 0);
            stat.avgTimeMs = stat.total ? stat.avgTimeMs / stat.total : 0;
            stat.avgTimeLabel = `${Math.round(stat.avgTimeMs / 1000)}s`;
        });
        return map;
    }
}
