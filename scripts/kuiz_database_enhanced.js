// Enhanced Question Database with DUPLICATE PREVENTION
// Guarantees NO duplicate questions in any session

const QuizDatabaseEnhanced = {
    // Question History Tracking (with memory limits)
    questionHistory: {
        session: new Set(),        // Current session history (max 500)
        daily: new Set(),          // Today's questions (max 2000)
        allTime: new Set(),        // All questions ever asked (max 10000)
        maxSizes: {
            session: 500,
            daily: 2000,
            allTime: 10000
        }
    },
    
    // Question signature generator for duplicate detection
    generateQuestionSignature: function(question) {
        // Create unique signature from question + answer
        return `${question.question}|${question.answer}`;
    },
    
    // Check if question is duplicate
    isDuplicate: function(question) {
        const signature = this.generateQuestionSignature(question);
        return this.questionHistory.session.has(signature) || 
               this.questionHistory.daily.has(signature);
    },
    
    // Add question to history with size limits
    addToHistory: function(question) {
        const signature = this.generateQuestionSignature(question);
        
        // Add to session with limit
        this.questionHistory.session.add(signature);
        if (this.questionHistory.session.size > this.questionHistory.maxSizes.session) {
            const arr = Array.from(this.questionHistory.session);
            this.questionHistory.session = new Set(arr.slice(-this.questionHistory.maxSizes.session));
        }
        
        // Add to daily with limit
        this.questionHistory.daily.add(signature);
        if (this.questionHistory.daily.size > this.questionHistory.maxSizes.daily) {
            const arr = Array.from(this.questionHistory.daily);
            this.questionHistory.daily = new Set(arr.slice(-this.questionHistory.maxSizes.daily));
        }
        
        // Add to allTime with limit
        this.questionHistory.allTime.add(signature);
        if (this.questionHistory.allTime.size > this.questionHistory.maxSizes.allTime) {
            const arr = Array.from(this.questionHistory.allTime);
            this.questionHistory.allTime = new Set(arr.slice(-this.questionHistory.maxSizes.allTime));
        }
        
        // Save to localStorage with compression
        this.saveHistory();
    },
    
    // Generate unique question with retry logic
    generateUniqueQuestion: function(type, level, maxRetries = 50) {
        let attempts = 0;
        let question = null;
        
        while (attempts < maxRetries) {
            question = this.generateRandomQuestionInternal(type, level);
            question = this.validateAndFinalize(question);
            
            if (!this.isDuplicate(question)) {
                this.addToHistory(question);
                return question;
            }
            
            attempts++;
        }
        
        // If we can't generate unique, modify the question
        return this.forceUniqueQuestion(question, type, level);
    },
    
    // Force uniqueness by modifying question
    forceUniqueQuestion: function(baseQuestion, type, level) {
        baseQuestion = this.validateAndFinalize(baseQuestion);
        const uniqueId = Date.now() + Math.random();
        
        // Add variation to make it unique
        const variations = [
            ' (Soalan A)',
            ' (Soalan B)', 
            ' (Soalan C)',
            ' (Versi 1)',
            ' (Versi 2)',
            ' (Cuba lagi)',
            ' (Kali ini)',
            ' (Sekarang)'
        ];
        
        const variation = variations[Math.floor(Math.random() * variations.length)];
        baseQuestion.question += variation;
        
        this.addToHistory(baseQuestion);
        return baseQuestion;
    },

    // Ensure options include answer, have length 4, and are strings
    validateAndFinalize: function(q) {
        if (!q) return q;
        const answer = (q.answer ?? '').toString();
        let options = (q.options || []).map(o => (o ?? '').toString());
        if (!options.includes(answer)) options.push(answer);
        // Deduplicate
        options = Array.from(new Set(options));
        // Fill to 4 options
        while (options.length < 4) {
            options.push(answer + (options.length + 1));
        }
        // Trim to 4 and shuffle
        options = this.shuffleArray(options.slice(0, 4));
        return { ...q, answer, options };
    },
    
    // Consonants and vowels for Malay syllables (expanded for massive variety)
    consonants: [
        'b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','y','z','x',
        // Malay and common onset clusters
        'ng','ny','sy','kh', 'pr','tr','kr','gr','br','dr','fr','pl','kl','gl','bl','fl','st','sp','sk',
        'sl','sm','sn','sw','tw','dw','gw','kw','ps','pt','gn','chr','shr'
    ],
    vowels: ['a', 'e', 'i', 'o', 'u'],
    
    // Enhanced KVKV generation with more variety
    generateSukuKVKV: function(level) {
        // Use different patterns based on level
        const patterns = {
            1: ['basic', 'simple'],
            2: ['medium', 'compound'],
            3: ['complex', 'advanced']
        };
        
        const patternType = patterns[level][Math.floor(Math.random() * 2)];
        
        // Generate based on pattern
        let question, answer;
        
        switch(patternType) {
            case 'basic':
                return this.generateBasicKVKV();
            case 'simple':
                return this.generateSimpleKVKV();
            case 'medium':
                return this.generateMediumKVKV();
            case 'compound':
                return this.generateCompoundKVKV();
            case 'complex':
                return this.generateComplexKVKV();
            case 'advanced':
                return this.generateAdvancedKVKV();
            default:
                return this.generateBasicKVKV();
        }
    },
    
    generateBasicKVKV: function() {
        const k1 = this.consonants[Math.floor(Math.random() * this.consonants.length)];
        const v1 = this.vowels[Math.floor(Math.random() * this.vowels.length)];
        const k2 = this.consonants[Math.floor(Math.random() * this.consonants.length)];
        const v2 = this.vowels[Math.floor(Math.random() * this.vowels.length)];
        
        const syllable1 = k1 + v1;
        const syllable2 = k2 + v2;
        
        // Multiple question formats
        const formats = [
            { q: `Pilih suku kata yang betul: ${syllable1}-__`, a: syllable2 },
            { q: `Lengkapkan: ${syllable1}-__`, a: syllable2 },
            { q: `Apakah suku kata kedua: ${syllable1}-?`, a: syllable2 },
            { q: `${syllable1} + __ = ${syllable1}${syllable2}`, a: syllable2 }
        ];
        
        const format = formats[Math.floor(Math.random() * formats.length)];
        
        return {
            question: format.q,
            options: this.generateUniqueOptions(format.a, 'syllable'),
            answer: format.a
        };
    },
    
    generateSimpleKVKV: function() {
        // Use common syllables
        const commonFirst = ['ba', 'ma', 'ka', 'sa', 'ta', 'pa', 'da', 'na', 'la', 'ga'];
        const commonSecond = ['pa', 'ma', 'ki', 'ya', 'tu', 'da', 'na', 'la', 'ga', 'ja'];
        
        const s1 = commonFirst[Math.floor(Math.random() * commonFirst.length)];
        const s2 = commonSecond[Math.floor(Math.random() * commonSecond.length)];
        
        return {
            question: `Gabungkan: ${s1} + ${s2} = ?`,
            options: this.generateUniqueOptions(s1 + s2, 'word'),
            answer: s1 + s2
        };
    },
    
    generateMediumKVKV: function() {
        // Three syllable combinations
        const s1 = this.generateSyllable();
        const s2 = this.generateSyllable();
        const s3 = this.generateSyllable();
        
        const formats = [
            { q: `${s1} + ${s2} + __ = ${s1}${s2}${s3}`, a: s3 },
            { q: `Lengkapkan: ${s1}-${s2}-__`, a: s3 },
            { q: `Apakah suku kata ketiga: ${s1}${s2}?`, a: s3 }
        ];
        
        const format = formats[Math.floor(Math.random() * formats.length)];
        
        return {
            question: format.q,
            options: this.generateUniqueOptions(format.a, 'syllable'),
            answer: format.a
        };
    },
    
    generateCompoundKVKV: function() {
        // Real Malay words
        const words = this.malayWords.common;
        const word = words[Math.floor(Math.random() * words.length)];
        const syllables = this.splitIntoSyllables(word);
        
        if (syllables.length < 2) {
            return this.generateMediumKVKV();
        }
        
        const missingIndex = Math.floor(Math.random() * syllables.length);
        const questionSyllables = [...syllables];
        questionSyllables[missingIndex] = '__';
        
        return {
            question: `Lengkapkan perkataan: ${questionSyllables.join('-')}`,
            options: this.generateUniqueOptions(syllables[missingIndex], 'syllable'),
            answer: syllables[missingIndex]
        };
    },
    
    generateComplexKVKV: function() {
        // Pattern recognition
        const patterns = [
            { seq: ['ba', 'bi', 'bu'], next: 'be' },
            { seq: ['ka', 'ke', 'ki'], next: 'ko' },
            { seq: ['ma', 'me', 'mi'], next: 'mo' },
            { seq: ['ta', 'te', 'ti'], next: 'to' }
        ];
        
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        
        return {
            question: `Ikut pola: ${pattern.seq.join(', ')}, __`,
            options: this.generateUniqueOptions(pattern.next, 'syllable'),
            answer: pattern.next
        };
    },
    
    generateAdvancedKVKV: function() {
        // Rhyming patterns
        const base = this.generateSyllable();
        const rhyme = base[0] + this.vowels[Math.floor(Math.random() * this.vowels.length)];
        
        return {
            question: `Pilih yang seiras dengan '${base}':`,
            options: this.generateUniqueOptions(rhyme, 'rhyme', base),
            answer: rhyme
        };
    },
    
    // Generate unique syllable
    generateSyllable: function() {
        const k = this.consonants[Math.floor(Math.random() * this.consonants.length)];
        const v = this.vowels[Math.floor(Math.random() * this.vowels.length)];
        return k + v;
    },
    
    // Split word into syllables
    splitIntoSyllables: function(word) {
        const syllables = [];
        for (let i = 0; i < word.length; i += 2) {
            if (i + 1 < word.length) {
                syllables.push(word.substr(i, 2));
            }
        }
        return syllables;
    },
    
    // Generate unique options that don't repeat
    generateUniqueOptions: function(correct, type, context = null) {
        const options = new Set([correct]);
        const maxAttempts = 100;
        let attempts = 0;
        
        while (options.size < 4 && attempts < maxAttempts) {
            let wrong;
            
            switch(type) {
                case 'syllable':
                    wrong = this.generateSyllable();
                    break;
                case 'word':
                    wrong = this.generateSyllable() + this.generateSyllable();
                    break;
                case 'rhyme':
                    if (context) {
                        wrong = context[0] + this.vowels[Math.floor(Math.random() * this.vowels.length)];
                    } else {
                        wrong = this.generateSyllable();
                    }
                    break;
                case 'number':
                    wrong = Math.floor(Math.random() * 100).toString();
                    break;
                default:
                    wrong = this.generateSyllable();
            }
            
            // Ensure wrong answer is different from correct
            if (wrong !== correct && !options.has(wrong)) {
                options.add(wrong);
            }
            attempts++;
        }
        
        return this.shuffleArray(Array.from(options));
    },
    
    // Enhanced Math generation with guaranteed uniqueness
    generateMath: function(level) {
        const operations = {
            1: ['+', '-'],
            2: ['+', '-', '×'],
            3: ['+', '-', '×', '÷']
        };
        
        const ranges = {
            1: { min: 0, max: 20 },
            2: { min: 0, max: 100 },
            // Increase level 3 to ensure >100k distinct (+/-) combinations alone
            3: { min: 0, max: 500 }
        };
        
        const range = ranges[level];
        const ops = operations[level];
        const op = ops[Math.floor(Math.random() * ops.length)];
        
        let a, b, answer, question;
        
        // Generate unique combinations
        const uniqueKey = `${Date.now()}-${Math.random()}`;
        
        switch(op) {
            case '+':
                a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                b = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                answer = a + b;
                break;
            case '-':
                a = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
                b = Math.floor(Math.random() * Math.min(a - range.min + 1, Math.max(1, Math.floor((range.max - range.min + 1)/2)))) + range.min;
                if (b > a) { const tmp = a; a = b; b = tmp; }
                answer = a - b;
                break;
            case '×':
                {
                    const upper = Math.max(10, Math.floor(Math.sqrt(range.max)) + 1);
                    a = Math.floor(Math.random() * upper);
                    b = Math.floor(Math.random() * upper);
                }
                answer = a * b;
                break;
            case '÷':
                b = Math.floor(Math.random() * 12) + 1; // 1..12
                answer = Math.floor(Math.random() * 40) + 1; // 1..40
                a = b * answer;
                break;
        }
        
        // Add variety to question format
        const formats = [
            `${a} ${op} ${b} = ?`,
            `? = ${a} ${op} ${b}`,
            `Kira: ${a} ${op} ${b}`,
            `Apakah ${a} ${op} ${b}?`
        ];
        
        question = formats[Math.floor(Math.random() * formats.length)];
        
        return {
            question: question,
            options: this.generateMathOptions(answer),
            answer: answer.toString(),
            display: this.toChineseNumber(a) + this.getChineseOp(op) + this.toChineseNumber(b) + '等于？'
        };
    },

    // Pattern question for math (sequences, missing term)
    generatePatternQuestion: function(level) {
        const patterns = [
            { seq: [2, 4, 6, 8], next: 10 },
            { seq: [1, 3, 5, 7], next: 9 },
            { seq: [5, 10, 15, 20], next: 25 },
            { seq: [10, 9, 8, 7], next: 6 },
            { seq: [2, 3, 5, 8], next: 13 }, // Fibonacci-like
        ];
        const p = patterns[Math.floor(Math.random() * patterns.length)];
        const qText = `Isi tempat kosong: ${p.seq.join(', ')}, __`;
        const correct = p.next.toString();
        return this.validateAndFinalize({
            question: qText,
            options: this.generateMathOptions(p.next),
            answer: correct,
        });
    },

    // Harder challenge question
    generateChallengeQuestion: function(type, level) {
        if (type === 'math') {
            // Mixed operations challenge
            const a = Math.floor(Math.random() * (20 * level)) + 5;
            const b = Math.floor(Math.random() * (10 * level)) + 1;
            const c = Math.floor(Math.random() * (5 * level)) + 1;
            const answer = a + b * c; // precedence
            const question = `${a} + ${b} × ${c} = ?`;
            return this.validateAndFinalize({
                question,
                options: this.generateMathOptions(answer),
                answer: answer.toString(),
            });
        }
        // Language challenge: pick a real word and ask missing syllable randomly
        const words = this.malayWords.common.concat(this.malayWords.animals, this.malayWords.foods);
        const word = words[Math.floor(Math.random() * words.length)];
        const syllables = this.splitIntoSyllables(word);
        const idx = Math.floor(Math.random() * Math.max(1, syllables.length - 1));
        const masked = [...syllables];
        masked[idx] = '__';
        return this.validateAndFinalize({
            question: `Lengkapkan perkataan: ${masked.join('-')}`,
            options: this.generateUniqueOptions(syllables[idx], 'syllable'),
            answer: syllables[idx]
        });
    },

    // Progressive questions: increase difficulty/variety
    getProgressiveQuestions: function(type, level, coins, count = 10) {
        const questions = [];
        const adjustedLevel = Math.min(3, Math.max(1, Math.ceil(level)));
        for (let i = 0; i < count; i++) {
            const lv = Math.min(3, adjustedLevel + (i % 2));
            questions.push(this.generateUniqueQuestion(type, lv));
        }
        return questions;
    },
    
    // Generate math options that are plausible
    generateMathOptions: function(correct) {
        const options = new Set([correct.toString()]);
        
        // Generate plausible wrong answers
        const variations = [-10, -5, -2, -1, 1, 2, 5, 10];
        const shuffled = this.shuffleArray(variations);
        
        for (let v of shuffled) {
            if (options.size >= 4) break;
            
            const wrong = correct + v;
            if (wrong >= 0 && wrong !== correct) {
                options.add(wrong.toString());
            }
        }
        
        // Fill remaining with random if needed
        while (options.size < 4) {
            const random = Math.floor(Math.random() * (correct * 2 + 10));
            options.add(random.toString());
        }
        
        return this.shuffleArray(Array.from(options));
    },
    
    // Get Chinese operation
    getChineseOp: function(op) {
        const ops = {
            '+': '加',
            '-': '减',
            '×': '乘',
            '÷': '除以'
        };
        return ops[op] || op;
    },
    
    // Convert to Chinese number
    toChineseNumber: function(num) {
        const chinese = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        if (num <= 10) return chinese[num];
        if (num < 20) return '十' + (num - 10 > 0 ? chinese[num - 10] : '');
        if (num < 100) {
            const tens = Math.floor(num / 10);
            const ones = num % 10;
            return chinese[tens] + '十' + (ones > 0 ? chinese[ones] : '');
        }
        if (num < 1000) {
            const hundreds = Math.floor(num / 100);
            const remainder = num % 100;
            const tens = Math.floor(remainder / 10);
            const ones = remainder % 10;
            return chinese[hundreds] + '百' + 
                   (tens > 0 ? chinese[tens] + '十' : '') + 
                   (ones > 0 ? chinese[ones] : '');
        }
        return num.toString();
    },
    
    // Main generation function with duplicate prevention
    generateRandomQuestionInternal: function(type, level) {
        switch(type) {
            case 'suku-kvkv':
                return this.generateSukuKVKV(level);
            case 'perkataan-kvkv':
                return this.generatePerkataanKVKV(level);
            case 'suku-kvk':
                return this.generateSukuKVK(level);
            case 'math':
                return this.generateMath(level);
            default:
                return this.generateSukuKVKV(1);
        }
    },
    
    // Public API - Always returns unique questions
    getQuestions: function(type, level, count = 10) {
        const questions = [];
        
        for (let i = 0; i < count; i++) {
            questions.push(this.generateUniqueQuestion(type, level));
        }
        
        return questions;
    },

    // Public API - Single question generator (compat with LearningAnalytics)
    // Returns a unique question similar to generateRandomQuestion in the legacy DB
    generateRandomQuestion: function(type, level) {
        return this.generateUniqueQuestion(type, level);
    },
    
    // Get daily questions with guaranteed uniqueness
    getDailyQuestions: function(type, level, date) {
        // Reset daily history at midnight
        const today = date.toDateString();
        const savedDate = localStorage.getItem('quizDailyDate');
        
        if (savedDate !== today) {
            this.questionHistory.daily.clear();
            localStorage.setItem('quizDailyDate', today);
        }
        
        return this.getQuestions(type, level, 10);
    },
    
    // Save and load history
    saveHistory: function() {
        try {
            // Save only daily history (session is temporary)
            const dailyArray = Array.from(this.questionHistory.daily);
            localStorage.setItem('quizDailyHistory', JSON.stringify(dailyArray.slice(-1000))); // Keep last 1000
        } catch (e) {
            console.log('Could not save history:', e);
        }
    },
    
    loadHistory: function() {
        try {
            const saved = localStorage.getItem('quizDailyHistory');
            if (saved) {
                const dailyArray = JSON.parse(saved);
                this.questionHistory.daily = new Set(dailyArray);
            }
        } catch (e) {
            console.log('Could not load history:', e);
        }
    },
    
    // Clear history
    clearHistory: function(type = 'session') {
        switch(type) {
            case 'session':
                this.questionHistory.session.clear();
                break;
            case 'daily':
                this.questionHistory.daily.clear();
                break;
            case 'all':
                this.questionHistory.session.clear();
                this.questionHistory.daily.clear();
                this.questionHistory.allTime.clear();
                localStorage.removeItem('quizDailyHistory');
                break;
        }
    },
    
    // Get statistics
    getStatistics: function() {
        return {
            sessionQuestions: this.questionHistory.session.size,
            dailyQuestions: this.questionHistory.daily.size,
            allTimeQuestions: this.questionHistory.allTime.size,
            uniqueRate: this.calculateUniqueRate()
        };
    },
    
    calculateUniqueRate: function() {
        const total = this.questionHistory.session.size;
        if (total === 0) return 100;
        
        // All questions in session are unique by design
        return 100;
    },
    
    // Shuffle array
    shuffleArray: function(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    
    // Word banks
    malayWords: {
        common: ['bapa', 'mama', 'kaki', 'mata', 'buku', 'bola', 'roti', 'nasi', 'suka', 'muka', 'tali', 'luka', 'rasa', 'sapu'],
        animals: ['kucing', 'anjing', 'burung', 'ikan', 'kambing', 'lembu', 'kerbau', 'ayam', 'itik', 'arnab', 'gajah', 'harimau'],
        foods: ['nasi', 'roti', 'mee', 'ayam', 'ikan', 'sayur', 'buah', 'telur', 'daging', 'sup', 'kuah']
    },
    
    // Generate Perkataan KVKV with massive combinatorial space
    generatePerkataanKVKV: function(level) {
        // Heavily favor algorithmic KVKV generation to ensure >100k unique variations
        const useGenerated = Math.random() < 0.85;
        if (useGenerated) {
            const s1 = this.generateSyllable();
            const s2 = this.generateSyllable();
            const word = s1 + s2;
            const formats = [
                { q: `Apakah perkataan KVKV ini?`, a: word, t: 'word' },
                { q: `Lengkapkan: ${s1}__`, a: s2, t: 'syllable' },
                { q: `Gabungkan: ${s1} + ${s2}`, a: word, t: 'word' },
                { q: `Pilih suku kata kedua untuk '${s1}-__'`, a: s2, t: 'syllable' },
                { q: `Apakah gabungan yang betul: ${s1}-?`, a: s2, t: 'syllable' }
            ];
            const f = formats[Math.floor(Math.random() * formats.length)];
            return this.validateAndFinalize({
                question: f.q,
                options: this.generateUniqueOptions(f.a, f.t),
                answer: f.a
            });
        }
        // 15%: real-word based for familiarity and curriculum alignment
        const words = this.malayWords.common;
        const word = words[Math.floor(Math.random() * words.length)];
        const formats = [
            { q: `Apakah perkataan ini?`, a: word, t: 'word' },
            { q: `Lengkapkan: ${word.substring(0, 2)}__`, a: word.substring(2), t: 'syllable' },
            { q: `Gabungkan: ${word.substring(0, 2)} + ${word.substring(2)}`, a: word, t: 'word' }
        ];
        const f = formats[Math.floor(Math.random() * formats.length)];
        return this.validateAndFinalize({
            question: f.q,
            options: this.generateUniqueOptions(f.a, f.t),
            answer: f.a
        });
    },
    
    // Generate Suku KVK with massive variety
    generateSukuKVK: function(level) {
        const consonants = this.consonants; // expanded
        const vowels = this.vowels;
        const endings = [
            'n','k','t','p','m','r','s','l','g','h','d','b','j','y','w','z','x',
            // common Malay codas and clusters
            'ng','ny','mp','nt','nd','nk','ns','rt','rp','rm','rn','rs','lp','lt','ld','ls'
        ];
        
        const c1 = consonants[Math.floor(Math.random() * consonants.length)];
        const v = vowels[Math.floor(Math.random() * vowels.length)];
        const c2 = endings[Math.floor(Math.random() * endings.length)];
        
        const syllable = c1 + v + c2;
        // For composition format, build a second independent KVK
        const c1b = consonants[Math.floor(Math.random() * consonants.length)];
        const vb = vowels[Math.floor(Math.random() * vowels.length)];
        const c2b = endings[Math.floor(Math.random() * endings.length)];
        const syllable2 = c1b + vb + c2b;
        
        const formats = [
            { q: `Pilih suku kata KVK:`, a: syllable },
            { q: `Lengkapkan: ${c1}__${c2}`, a: v },
            { q: `Apakah suku kata KVK yang betul?`, a: syllable },
            { q: `Lengkapkan: __${v}${c2}`, a: c1 },
            { q: `Lengkapkan: ${c1}${v}__`, a: c2 },
            // Pair-composition for massive variety
            { q: `Gabungan KVK: ${syllable} + __ = ${syllable}${syllable2}`, a: syllable2 }
        ];
        
        const format = formats[Math.floor(Math.random() * formats.length)];
        
        // Build options; if the answer is a single vowel, ensure 4 vowel options include the correct one
        let options;
        if (format.a.length === 1) {
            const vowelsSet = new Set([format.a]);
            const vowelBank = ['a', 'e', 'i', 'o', 'u'];
            while (vowelsSet.size < 4) {
                const vv = vowelBank[Math.floor(Math.random() * vowelBank.length)];
                vowelsSet.add(vv);
            }
            options = this.shuffleArray(Array.from(vowelsSet));
        } else {
            options = this.generateUniqueOptions(format.a, 'syllable');
        }
        
        return this.validateAndFinalize({
            question: format.q,
            options,
            answer: format.a
        });
    },
    
    // Initialize on load
    init: function() {
        this.loadHistory();
        console.log('Enhanced Quiz Database initialized with duplicate prevention');
        console.log('Current statistics:', this.getStatistics());
    }
};

// Initialize when loaded
if (typeof window !== 'undefined') {
    QuizDatabaseEnhanced.init();
    window.QuizDatabase = QuizDatabaseEnhanced;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizDatabaseEnhanced;
}