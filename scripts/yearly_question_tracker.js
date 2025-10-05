// Yearly Question Tracking System
// Tracks all seen questions and resets on January 1st each year

const YearlyQuestionTracker = {
    // Configuration
    config: {
        resetDate: '01-01', // January 1st
        currentYear: new Date().getFullYear(),
        maxQuestionsPerSkill: 10000,
        autoSaveInterval: 30000 // Auto-save every 30 seconds
    },
    
    // Question tracking data
    seenQuestions: {
        year: null,
        bySkill: {},      // Questions grouped by skill
        byType: {},       // Questions grouped by type
        global: new Set(), // All seen questions globally
        stats: {
            totalSeen: 0,
            totalAnswered: 0,
            totalQuit: 0,
            lastAccessed: null,
            streakDays: 0
        }
    },
    
    // Initialize tracker
    init: function() {
        if (this.initialized) return;
        this.initialized = true;
        console.log('🎯 Initializing Yearly Question Tracker...');
        
        // Check for yearly reset
        this.checkYearlyReset();
        
        // Load existing data
        this.loadSeenQuestions();
        
        // Setup auto-save
        this.setupAutoSave();
        
        // Setup reset scheduler
        this.scheduleNextReset();
        
        console.log('✅ Yearly Question Tracker initialized');
        console.log(`📊 Total questions seen this year: ${this.seenQuestions.stats.totalSeen}`);
    },
    
    // Check if yearly reset is needed
    checkYearlyReset: function() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const isJanuary1 = (today.getMonth() === 0 && today.getDate() === 1);
        
        // Get last reset year
        const lastResetData = this.loadFromStorage('yearlyTracker_lastReset');
        const lastResetYear = lastResetData ? lastResetData.year : null;
        
        // Check if we need to reset
        if (!lastResetYear || lastResetYear < currentYear || isJanuary1) {
            if (lastResetYear && lastResetYear < currentYear) {
                console.log('🎊 New Year! Resetting all seen questions...');
                this.performYearlyReset();
            }
        }
        
        this.config.currentYear = currentYear;
    },
    
    // Perform yearly reset
    performYearlyReset: function() {
        // Archive previous year's data
        if (this.seenQuestions.year) {
            this.archivePreviousYear();
        }
        
        // Reset all tracking
        this.seenQuestions = {
            year: this.config.currentYear,
            bySkill: {},
            byType: {},
            global: new Set(),
            stats: {
                totalSeen: 0,
                totalAnswered: 0,
                totalQuit: 0,
                lastAccessed: new Date().toISOString(),
                streakDays: 0
            }
        };
        
        // Save reset info
        this.saveToStorage('yearlyTracker_lastReset', {
            year: this.config.currentYear,
            date: new Date().toISOString()
        });
        
        // Save clean state
        this.saveSeenQuestions();
        
        // Notify user
        if (typeof showNotification !== 'undefined') {
            showNotification('🎊 Selamat Tahun Baru! Semua soalan telah di-reset!');
        }
    },
    
    // Archive previous year's data
    archivePreviousYear: function() {
        const archiveKey = `yearlyTracker_archive_${this.seenQuestions.year}`;
        const archiveData = {
            year: this.seenQuestions.year,
            stats: { ...this.seenQuestions.stats },
            totalQuestions: this.seenQuestions.global.size,
            archivedDate: new Date().toISOString()
        };
        
        this.saveToStorage(archiveKey, archiveData);
        console.log(`📦 Archived ${this.seenQuestions.year} data: ${archiveData.totalQuestions} questions`);
    },
    
    // Mark question as seen
    markQuestionSeen: function(question, skillId, type, wasCompleted = true) {
        // Generate unique signature
        const signature = this.generateQuestionSignature(question);
        
        // Initialize skill tracking if needed
        if (!this.seenQuestions.bySkill[skillId]) {
            this.seenQuestions.bySkill[skillId] = new Set();
        }
        
        // Initialize type tracking if needed
        if (!this.seenQuestions.byType[type]) {
            this.seenQuestions.byType[type] = new Set();
        }
        
        // Add to all tracking sets
        const wasNew = !this.seenQuestions.global.has(signature);
        
        this.seenQuestions.bySkill[skillId].add(signature);
        this.seenQuestions.byType[type].add(signature);
        this.seenQuestions.global.add(signature);
        
        // Update stats
        if (wasNew) {
            this.seenQuestions.stats.totalSeen++;
        }
        
        if (wasCompleted) {
            this.seenQuestions.stats.totalAnswered++;
        } else {
            this.seenQuestions.stats.totalQuit++;
        }
        
        this.seenQuestions.stats.lastAccessed = new Date().toISOString();
        
        // Trigger save (debounced)
        this.debouncedSave();
        
        return wasNew;
    },
    
    // Check if question has been seen
    hasQuestionBeenSeen: function(question) {
        const signature = this.generateQuestionSignature(question);
        return this.seenQuestions.global.has(signature);
    },
    
    // Get unseen questions for a skill
    getUnseenQuestions: function(skillId, allQuestions) {
        const seenInSkill = this.seenQuestions.bySkill[skillId] || new Set();
        
        return allQuestions.filter(q => {
            const signature = this.generateQuestionSignature(q);
            return !seenInSkill.has(signature);
        });
    },
    
    // Generate question signature
    generateQuestionSignature: function(question) {
        // Create unique signature from question content
        const q = question.question || question.q || '';
        const a = question.answer || question.a || '';
        const opts = (question.options || question.opts || []).sort().join('|');
        
        return `${q}::${a}::${opts}`;
    },
    
    // Get statistics
    getStatistics: function() {
        const stats = {
            year: this.seenQuestions.year || this.config.currentYear,
            totalSeen: this.seenQuestions.stats.totalSeen,
            totalAnswered: this.seenQuestions.stats.totalAnswered,
            totalQuit: this.seenQuestions.stats.totalQuit,
            completionRate: this.seenQuestions.stats.totalSeen > 0 ? 
                ((this.seenQuestions.stats.totalAnswered / this.seenQuestions.stats.totalSeen) * 100).toFixed(1) : 0,
            bySkill: {},
            byType: {},
            daysUntilReset: this.getDaysUntilReset()
        };
        
        // Count by skill
        for (let skill in this.seenQuestions.bySkill) {
            stats.bySkill[skill] = this.seenQuestions.bySkill[skill].size;
        }
        
        // Count by type
        for (let type in this.seenQuestions.byType) {
            stats.byType[type] = this.seenQuestions.byType[type].size;
        }
        
        return stats;
    },
    
    // Get days until next reset
    getDaysUntilReset: function() {
        const today = new Date();
        const nextYear = today.getFullYear() + 1;
        const resetDate = new Date(nextYear, 0, 1); // January 1st next year
        
        const diffTime = resetDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays;
    },
    
    // Schedule next reset
    scheduleNextReset: function() {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const resetDate = new Date(nextYear, 0, 1, 0, 0, 0); // Midnight January 1st
        
        const timeUntilReset = resetDate - now;
        
        if (timeUntilReset > 0) {
            // Schedule reset (max timeout is ~24 days, so we'll check daily)
            const checkInterval = 24 * 60 * 60 * 1000; // 24 hours
            
            if (this.resetCheckInterval) return;
            this.resetCheckInterval = setInterval(() => {
                this.checkYearlyReset();
            }, checkInterval);
            
            console.log(`⏰ Next reset scheduled for ${resetDate.toLocaleDateString()}`);
        }
    },
    
    // Save seen questions
    saveSeenQuestions: function() {
        try {
            // Convert Sets to Arrays for storage
            const dataToSave = {
                year: this.seenQuestions.year || this.config.currentYear,
                bySkill: {},
                byType: {},
                global: Array.from(this.seenQuestions.global),
                stats: this.seenQuestions.stats
            };
            
            // Convert skill Sets to Arrays
            for (let skill in this.seenQuestions.bySkill) {
                dataToSave.bySkill[skill] = Array.from(this.seenQuestions.bySkill[skill]);
            }
            
            // Convert type Sets to Arrays
            for (let type in this.seenQuestions.byType) {
                dataToSave.byType[type] = Array.from(this.seenQuestions.byType[type]);
            }
            
            // Use performance optimizer if available
            if (typeof PerformanceOptimizer !== 'undefined') {
                PerformanceOptimizer.storageOptimizer.save('yearlyTracker_seenQuestions', dataToSave);
            } else {
                localStorage.setItem('yearlyTracker_seenQuestions', JSON.stringify(dataToSave));
            }
            
            console.log(`💾 Saved ${this.seenQuestions.global.size} seen questions`);
        } catch (e) {
            console.error('Error saving seen questions:', e);
        }
    },
    
    // Load seen questions
    loadSeenQuestions: function() {
        try {
            let savedData;
            
            // Use performance optimizer if available
            if (typeof PerformanceOptimizer !== 'undefined') {
                savedData = PerformanceOptimizer.storageOptimizer.load('yearlyTracker_seenQuestions');
            } else {
                const saved = localStorage.getItem('yearlyTracker_seenQuestions');
                savedData = saved ? JSON.parse(saved) : null;
            }
            
            if (savedData && savedData.year === this.config.currentYear) {
                // Convert Arrays back to Sets
                this.seenQuestions.year = savedData.year;
                this.seenQuestions.stats = savedData.stats || this.seenQuestions.stats;
                this.seenQuestions.global = new Set(savedData.global || []);
                
                // Convert skill Arrays to Sets
                this.seenQuestions.bySkill = {};
                for (let skill in savedData.bySkill) {
                    this.seenQuestions.bySkill[skill] = new Set(savedData.bySkill[skill]);
                }
                
                // Convert type Arrays to Sets
                this.seenQuestions.byType = {};
                for (let type in savedData.byType) {
                    this.seenQuestions.byType[type] = new Set(savedData.byType[type]);
                }
                
                console.log(`📚 Loaded ${this.seenQuestions.global.size} seen questions from ${savedData.year}`);
            } else {
                // No valid data or different year
                this.seenQuestions.year = this.config.currentYear;
                console.log('📚 Starting fresh question tracking for', this.config.currentYear);
            }
        } catch (e) {
            console.error('Error loading seen questions:', e);
            this.seenQuestions.year = this.config.currentYear;
        }
    },
    
    // Storage helpers
    saveToStorage: function(key, data) {
        try {
            if (typeof PerformanceOptimizer !== 'undefined') {
                PerformanceOptimizer.storageOptimizer.save(key, data);
            } else {
                localStorage.setItem(key, JSON.stringify(data));
            }
        } catch (e) {
            console.error('Storage error:', e);
        }
    },
    
    loadFromStorage: function(key) {
        try {
            if (typeof PerformanceOptimizer !== 'undefined') {
                return PerformanceOptimizer.storageOptimizer.load(key);
            } else {
                const data = localStorage.getItem(key);
                return data ? JSON.parse(data) : null;
            }
        } catch (e) {
            console.error('Load error:', e);
            return null;
        }
    },
    
    // Setup auto-save
    setupAutoSave: function() {
        if (this.autoSaveInterval) return;
        this.autoSaveInterval = setInterval(() => {
            this.saveSeenQuestions();
        }, this.config.autoSaveInterval);
    },
    
    // Debounced save
    debouncedSave: (function() {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                YearlyQuestionTracker.saveSeenQuestions();
            }, 5000); // Save after 5 seconds of inactivity
        };
    })(),
    
    // Get progress report
    getProgressReport: function() {
        const stats = this.getStatistics();
        const totalPossible = this.estimateTotalQuestions();
        
        return {
            year: stats.year,
            progress: {
                seen: stats.totalSeen,
                answered: stats.totalAnswered,
                quit: stats.totalQuit,
                remaining: Math.max(0, totalPossible - stats.totalSeen),
                percentComplete: ((stats.totalSeen / totalPossible) * 100).toFixed(1)
            },
            performance: {
                completionRate: stats.completionRate,
                quitRate: stats.totalSeen > 0 ? 
                    ((stats.totalQuit / stats.totalSeen) * 100).toFixed(1) : 0
            },
            timeline: {
                daysUsed: this.getDaysUsed(),
                daysRemaining: stats.daysUntilReset,
                expectedCompletion: this.estimateCompletionDate()
            }
        };
    },
    
    // Estimate total possible questions
    estimateTotalQuestions: function() {
        // Estimate based on curriculum
        const bmSkills = 32;
        const mathSkills = 9;
        const questionsPerSkill = 1000; // Estimated unique questions per skill
        
        return (bmSkills + mathSkills) * questionsPerSkill;
    },
    
    // Get days used this year
    getDaysUsed: function() {
        const startOfYear = new Date(this.config.currentYear, 0, 1);
        const today = new Date();
        
        const diffTime = today - startOfYear;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays;
    },
    
    // Estimate completion date
    estimateCompletionDate: function() {
        const stats = this.getStatistics();
        const totalPossible = this.estimateTotalQuestions();
        const remaining = totalPossible - stats.totalSeen;
        
        if (remaining <= 0) return 'Completed!';
        
        const daysUsed = this.getDaysUsed();
        const questionsPerDay = stats.totalSeen / daysUsed;
        
        if (questionsPerDay <= 0) return 'Not enough data';
        
        const daysNeeded = Math.ceil(remaining / questionsPerDay);
        const completionDate = new Date();
        completionDate.setDate(completionDate.getDate() + daysNeeded);
        
        // Check if completion is before reset
        const resetDate = new Date(this.config.currentYear + 1, 0, 1);
        
        if (completionDate < resetDate) {
            return completionDate.toLocaleDateString();
        } else {
            return 'After yearly reset';
        }
    },
    
    // Export statistics
    exportStatistics: function() {
        const report = {
            exportDate: new Date().toISOString(),
            year: this.config.currentYear,
            statistics: this.getStatistics(),
            progress: this.getProgressReport(),
            seenQuestions: {
                total: this.seenQuestions.global.size,
                bySkill: {},
                byType: {}
            }
        };
        
        // Add skill details
        for (let skill in this.seenQuestions.bySkill) {
            report.seenQuestions.bySkill[skill] = this.seenQuestions.bySkill[skill].size;
        }
        
        // Add type details
        for (let type in this.seenQuestions.byType) {
            report.seenQuestions.byType[type] = this.seenQuestions.byType[type].size;
        }
        
        return report;
    },
    
    // Clear all data (for testing)
    clearAllData: function() {
        if (confirm('⚠️ Clear ALL question tracking data? This cannot be undone!')) {
            this.seenQuestions = {
                year: this.config.currentYear,
                bySkill: {},
                byType: {},
                global: new Set(),
                stats: {
                    totalSeen: 0,
                    totalAnswered: 0,
                    totalQuit: 0,
                    lastAccessed: new Date().toISOString(),
                    streakDays: 0
                }
            };
            
            this.saveSeenQuestions();
            console.log('🗑️ All question tracking data cleared');
            return true;
        }
        return false;
    }
};

// Initialize on load
if (typeof window !== 'undefined') {
    window.YearlyQuestionTracker = YearlyQuestionTracker;
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (!window.YearlyQuestionTrackerInitialized) {
                window.YearlyQuestionTrackerInitialized = true;
                YearlyQuestionTracker.init();
            }
        });
    } else {
        if (!window.YearlyQuestionTrackerInitialized) {
            window.YearlyQuestionTrackerInitialized = true;
            YearlyQuestionTracker.init();
        }
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = YearlyQuestionTracker;
}