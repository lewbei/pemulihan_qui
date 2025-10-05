// Learning Analytics & Adaptive AI System
// Tracks detailed progress and adapts difficulty intelligently

const LearningAnalytics = {
    // Analytics Data Structure
    analytics: {
        subjects: {
            'bm': { correct: 0, incorrect: 0, avgTime: 0, difficulty: 1, mastery: 0 },
            'math': { correct: 0, incorrect: 0, avgTime: 0, difficulty: 1, mastery: 0 }
        },
        daily: {
            questionsAnswered: 0,
            correctAnswers: 0,
            timeSpent: 0,
            streakCount: 0,
            focusScore: 0
        },
        weekly: {
            totalQuestions: 0,
            accuracy: 0,
            improvement: 0,
            weakAreas: [],
            strongAreas: []
        },
        patterns: {
            bestTimeToLearn: '',
            attentionSpan: 0,
            learningStyle: '',
            preferredDifficulty: 1
        },
        mistakes: [],
        masteredConcepts: [],
        strugglingConcepts: []
    },

    // Adaptive AI Configuration
    adaptiveAI: {
        enabled: true,
        difficultyRange: { min: 0.5, max: 2.0 },
        currentDifficulty: 1.0,
        performanceWindow: 10, // Last 10 questions
        adjustmentThreshold: 0.3,
        masteryThreshold: 0.85,
        strugglingThreshold: 0.4
    },

    // Initialize Analytics
    init: function() {
        if (this.initialized) return;
        this.initialized = true;
        this.loadAnalytics();
        this.startSessionTracking();
        console.log('📊 Learning Analytics System Initialized');
    },

    // Track Question Response
    trackResponse: function(question, answer, isCorrect, timeSpent) {
        const type = question.type || 'general';
        const analytics = this.analytics.subjects[type];
        
        if (analytics) {
            if (isCorrect) {
                analytics.correct++;
            } else {
                analytics.incorrect++;
                this.trackMistake(question, answer);
            }
            
            // Update average time
            const totalQuestions = analytics.correct + analytics.incorrect;
            analytics.avgTime = ((analytics.avgTime * (totalQuestions - 1)) + timeSpent) / totalQuestions;
            
            // Calculate mastery level
            analytics.mastery = analytics.correct / totalQuestions;
            
            // Update daily stats
            this.analytics.daily.questionsAnswered++;
            if (isCorrect) this.analytics.daily.correctAnswers++;
            this.analytics.daily.timeSpent += timeSpent;
        }
        
        // Adaptive difficulty adjustment
        this.adjustDifficulty(type, isCorrect);
        
        // Save analytics
        this.saveAnalytics();
        
        return this.getInsights();
    },

    // Track Mistakes for Review
    trackMistake: function(question, wrongAnswer) {
        this.analytics.mistakes.push({
            question: question.question,
            correctAnswer: question.answer,
            wrongAnswer: wrongAnswer,
            timestamp: Date.now(),
            reviewed: false
        });
        
        // Keep only last 50 mistakes
        if (this.analytics.mistakes.length > 50) {
            this.analytics.mistakes.shift();
        }
    },

    // Adaptive Difficulty Adjustment
    adjustDifficulty: function(type, isCorrect) {
        if (!this.adaptiveAI.enabled) return;
        
        const subject = this.analytics.subjects[type];
        const recentPerformance = this.getRecentPerformance(type);
        
        // Adjust difficulty based on performance
        if (recentPerformance > this.adaptiveAI.masteryThreshold) {
            // Increase difficulty
            subject.difficulty = Math.min(
                subject.difficulty * 1.1,
                this.adaptiveAI.difficultyRange.max
            );
        } else if (recentPerformance < this.adaptiveAI.strugglingThreshold) {
            // Decrease difficulty
            subject.difficulty = Math.max(
                subject.difficulty * 0.9,
                this.adaptiveAI.difficultyRange.min
            );
        }
        
        this.adaptiveAI.currentDifficulty = subject.difficulty;
    },

    // Get Recent Performance
    getRecentPerformance: function(type) {
        const subject = this.analytics.subjects[type];
        const total = subject.correct + subject.incorrect;
        
        if (total === 0) return 0.5;
        
        // Get last N questions performance
        const window = Math.min(total, this.adaptiveAI.performanceWindow);
        return subject.correct / window;
    },

    // Get Learning Insights
    getInsights: function() {
        const insights = {
            strengths: [],
            weaknesses: [],
            recommendations: [],
            nextDifficulty: this.adaptiveAI.currentDifficulty
        };
        
        // Analyze each subject
        for (const [subject, data] of Object.entries(this.analytics.subjects)) {
            if (data.mastery > 0.8) {
                insights.strengths.push(subject);
            } else if (data.mastery < 0.5 && data.correct + data.incorrect > 5) {
                insights.weaknesses.push(subject);
            }
        }
        
        // Generate recommendations
        if (insights.weaknesses.length > 0) {
            insights.recommendations.push(`Focus on ${insights.weaknesses[0]} for improvement`);
        }
        
        if (this.analytics.daily.timeSpent > 3600) {
            insights.recommendations.push('Take a break! You\'ve been learning for over an hour');
        }
        
        return insights;
    },

    // Generate Adaptive Question
    generateAdaptiveQuestion: function(type, baseLevel) {
        const difficulty = this.analytics.subjects[type].difficulty;
        const adjustedLevel = Math.round(baseLevel * difficulty);
        
        // Get question from database with adjusted difficulty
        if (typeof QuizDatabase !== 'undefined') {
            const question = QuizDatabase.generateRandomQuestion(type, adjustedLevel);
            
            // Add metadata
            question.difficulty = difficulty;
            question.adaptive = true;
            
            // Modify based on weak areas
            if (this.analytics.mistakes.length > 0) {
                // 20% chance to review a mistake
                if (Math.random() < 0.2) {
                    const mistake = this.analytics.mistakes.find(m => !m.reviewed);
                    if (mistake) {
                        question.question = mistake.question + ' (Review)';
                        question.answer = mistake.correctAnswer;
                        mistake.reviewed = true;
                    }
                }
            }
            
            return question;
        }
        
        return null;
    },

    // Generate Progress Report
    generateReport: function() {
        const report = {
            summary: {
                totalQuestions: 0,
                accuracy: 0,
                timeSpent: 0,
                level: 0,
                streakDays: 0
            },
            subjects: {},
            improvements: [],
            achievements: [],
            recommendations: []
        };
        
        // Calculate totals
        for (const [subject, data] of Object.entries(this.analytics.subjects)) {
            const total = data.correct + data.incorrect;
            report.totalQuestions += total;
            
            report.subjects[subject] = {
                questions: total,
                accuracy: total > 0 ? (data.correct / total * 100).toFixed(1) + '%' : '0%',
                mastery: (data.mastery * 100).toFixed(1) + '%',
                avgTime: data.avgTime.toFixed(1) + 's',
                status: data.mastery > 0.8 ? 'Excellent' : data.mastery > 0.6 ? 'Good' : 'Needs Practice'
            };
        }
        
        // Overall accuracy
        report.summary.accuracy = report.summary.totalQuestions > 0 ? 
            ((this.analytics.daily.correctAnswers / report.summary.totalQuestions) * 100).toFixed(1) + '%' : '0%';
        
        // Time spent
        report.summary.timeSpent = this.formatTime(this.analytics.daily.timeSpent);
        
        // Improvements
        if (this.analytics.weekly.improvement > 10) {
            report.improvements.push('Great improvement this week!');
        }
        
        // Recommendations
        const insights = this.getInsights();
        report.recommendations = insights.recommendations;
        
        return report;
    },

    // Predict Learning Patterns
    predictLearningPattern: function() {
        const hourlyPerformance = this.getHourlyPerformance();
        const bestHour = this.findBestPerformanceTime(hourlyPerformance);
        
        this.analytics.patterns.bestTimeToLearn = bestHour;
        this.analytics.patterns.attentionSpan = this.calculateAttentionSpan();
        this.analytics.patterns.learningStyle = this.detectLearningStyle();
        
        return this.analytics.patterns;
    },

    // Get Hourly Performance
    getHourlyPerformance: function() {
        // Simplified - in real implementation, track performance by hour
        const hours = {};
        for (let i = 0; i < 24; i++) {
            hours[i] = Math.random(); // Placeholder
        }
        return hours;
    },

    // Find Best Performance Time
    findBestPerformanceTime: function(hourlyData) {
        let bestHour = 0;
        let bestPerformance = 0;
        
        for (const [hour, performance] of Object.entries(hourlyData)) {
            if (performance > bestPerformance) {
                bestPerformance = performance;
                bestHour = hour;
            }
        }
        
        if (bestHour < 12) return `${bestHour}:00 AM`;
        return `${bestHour - 12}:00 PM`;
    },

    // Calculate Attention Span
    calculateAttentionSpan: function() {
        // Based on average session length before performance drops
        return 15; // minutes - placeholder
    },

    // Detect Learning Style
    detectLearningStyle: function() {
        // Analyze which question types perform best
        let bestType = '';
        let bestMastery = 0;
        
        for (const [type, data] of Object.entries(this.analytics.subjects)) {
            if (data.mastery > bestMastery) {
                bestMastery = data.mastery;
                bestType = type;
            }
        }
        
        return bestType === 'math' ? 'Logical' : 'Linguistic';
    },

    // Spaced Repetition Algorithm
    getSpacedRepetitionSchedule: function(concept, performance) {
        const intervals = [1, 3, 7, 14, 30]; // Days
        const masteryLevel = Math.floor(performance * intervals.length);
        
        return {
            nextReview: intervals[Math.min(masteryLevel, intervals.length - 1)],
            strength: performance,
            reviews: masteryLevel
        };
    },

    // Format Time
    formatTime: function(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    },

    // Save Analytics
    saveAnalytics: function() {
        try {
            localStorage.setItem('learningAnalytics', JSON.stringify(this.analytics));
            localStorage.setItem('adaptiveAI', JSON.stringify(this.adaptiveAI));
        } catch (e) {
            console.error('Could not save analytics:', e);
        }
    },

    // Load Analytics
    loadAnalytics: function() {
        try {
            const savedAnalytics = localStorage.getItem('learningAnalytics');
            const savedAI = localStorage.getItem('adaptiveAI');
            
            if (savedAnalytics) {
                this.analytics = JSON.parse(savedAnalytics);
            }
            
            if (savedAI) {
                this.adaptiveAI = JSON.parse(savedAI);
            }
        } catch (e) {
            console.error('Could not load analytics:', e);
        }
    },

    // Start Session Tracking
    startSessionTracking: function() {
        this.sessionStart = Date.now();
        
        if (this.sessionInterval) return;
        this.sessionInterval = setInterval(() => {
            const sessionLength = (Date.now() - this.sessionStart) / 1000;
            this.analytics.daily.timeSpent = sessionLength;
        }, 10000); // Update every 10 seconds
    },

    // Export Report
    exportReport: function(format = 'json') {
        const report = this.generateReport();
        
        if (format === 'json') {
            return JSON.stringify(report, null, 2);
        } else if (format === 'csv') {
            // Convert to CSV format
            let csv = 'Subject,Questions,Accuracy,Mastery,Avg Time,Status\n';
            for (const [subject, data] of Object.entries(report.subjects)) {
                csv += `${subject},${data.questions},${data.accuracy},${data.mastery},${data.avgTime},${data.status}\n`;
            }
            return csv;
        }
        
        return report;
    }
};

// Parent Dashboard
const ParentDashboard = {
    // Display Analytics
    showDashboard: function() {
        const report = LearningAnalytics.generateReport();
        const patterns = LearningAnalytics.predictLearningPattern();
        
        const dashboardHTML = `
            <div style="padding: 20px; background: white; border-radius: 15px;">
                <h2 style="color: #667eea;">📊 Learning Analytics Dashboard</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
                    <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 10px;">
                        <h3>Total Questions</h3>
                        <div style="font-size: 2em;">${report.summary.totalQuestions}</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #00C851, #00FF00); color: white; padding: 20px; border-radius: 10px;">
                        <h3>Accuracy</h3>
                        <div style="font-size: 2em;">${report.summary.accuracy}</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #FF6B6B, #4ECDC4); color: white; padding: 20px; border-radius: 10px;">
                        <h3>Time Spent</h3>
                        <div style="font-size: 2em;">${report.summary.timeSpent}</div>
                    </div>
                </div>
                
                <h3>Subject Performance</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #f0f0f0;">
                            <th style="padding: 10px; text-align: left;">Subject</th>
                            <th style="padding: 10px;">Questions</th>
                            <th style="padding: 10px;">Accuracy</th>
                            <th style="padding: 10px;">Mastery</th>
                            <th style="padding: 10px;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Object.entries(report.subjects).map(([subject, data]) => `
                            <tr>
                                <td style="padding: 10px;">${subject}</td>
                                <td style="padding: 10px; text-align: center;">${data.questions}</td>
                                <td style="padding: 10px; text-align: center;">${data.accuracy}</td>
                                <td style="padding: 10px; text-align: center;">${data.mastery}</td>
                                <td style="padding: 10px; text-align: center;">
                                    <span style="padding: 5px 10px; border-radius: 5px; background: ${
                                        data.status === 'Excellent' ? '#00C851' : 
                                        data.status === 'Good' ? '#FFD700' : '#FF6B6B'
                                    }; color: white;">${data.status}</span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <h3>Learning Patterns</h3>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 10px 0;">
                    <p><strong>Best Time to Learn:</strong> ${patterns.bestTimeToLearn}</p>
                    <p><strong>Attention Span:</strong> ${patterns.attentionSpan} minutes</p>
                    <p><strong>Learning Style:</strong> ${patterns.learningStyle}</p>
                </div>
                
                <h3>Recommendations</h3>
                <ul style="background: #fff3cd; padding: 20px; border-radius: 10px;">
                    ${report.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
                
                <button onclick="LearningAnalytics.exportReport('csv')" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Export Report (CSV)
                </button>
            </div>
        `;
        
        return dashboardHTML;
    }
};

// Initialize
if (typeof window !== 'undefined') {
    window.LearningAnalytics = LearningAnalytics;
    window.ParentDashboard = ParentDashboard;
    
    if (!window.LearningAnalyticsInitialized) {
        window.LearningAnalyticsInitialized = true;
        LearningAnalytics.init();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LearningAnalytics, ParentDashboard };
}
