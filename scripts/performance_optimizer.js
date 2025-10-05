// Performance and Memory Optimization Module
// Improves loading speed, reduces memory usage, and optimizes runtime performance

const PerformanceOptimizer = {
    // Configuration
    config: {
        enableLazyLoading: true,
        enableCodeSplitting: true,
        enableCaching: true,
        enableCompression: true,
        maxCacheSize: 50 * 1024 * 1024, // 50MB max cache
        cacheExpiry: 7 * 24 * 60 * 60 * 1000, // 7 days
        memoryThreshold: 0.8, // 80% memory usage threshold
        gcInterval: 60000, // Garbage collection interval (1 minute)
        debounceDelay: 300, // Debounce delay for input events
        throttleDelay: 100, // Throttle delay for scroll/resize
        batchSize: 10, // Batch processing size
        virtualScrollBuffer: 5 // Virtual scroll buffer items
    },
    
    // Memory Management
    memoryManager: {
        usage: 0,
        limit: 0,
        pools: new Map(),
        
        // Initialize memory monitoring
        init: function() {
            if (performance.memory) {
                this.limit = performance.memory.jsHeapSizeLimit;
                this.startMonitoring();
            }
        },
        
        // Monitor memory usage
        startMonitoring: function() {
            if (this.monitoringInterval) return;
            this.monitoringInterval = setInterval(() => {
                if (performance.memory) {
                    this.usage = performance.memory.usedJSHeapSize / this.limit;
                    
                    if (this.usage > PerformanceOptimizer.config.memoryThreshold) {
                        this.cleanup();
                    }
                }
            }, PerformanceOptimizer.config.gcInterval);
        },
        
        // Cleanup unused memory
        cleanup: function() {
            console.log('Running memory cleanup...');
            
            // Clear expired cache
            PerformanceOptimizer.cacheManager.clearExpired();
            
            // Clear unused object pools
            this.pools.forEach((pool, key) => {
                if (pool.lastUsed < Date.now() - 300000) { // 5 minutes
                    this.pools.delete(key);
                }
            });
            
            // Clear large arrays
            PerformanceOptimizer.cleanupLargeArrays();
            
            // Force garbage collection if available
            if (global.gc) {
                global.gc();
            }
        },
        
        // Object pooling for frequent allocations
        getFromPool: function(type) {
            if (!this.pools.has(type)) {
                this.pools.set(type, {
                    objects: [],
                    lastUsed: Date.now()
                });
            }
            
            const pool = this.pools.get(type);
            pool.lastUsed = Date.now();
            
            return pool.objects.pop() || this.createObject(type);
        },
        
        returnToPool: function(type, obj) {
            if (this.pools.has(type)) {
                const pool = this.pools.get(type);
                if (pool.objects.length < 100) { // Max pool size
                    this.resetObject(obj);
                    pool.objects.push(obj);
                }
            }
        },
        
        createObject: function(type) {
            switch(type) {
                case 'question':
                    return { q: '', a: '', opts: [], skillId: '' };
                case 'option':
                    return { text: '', correct: false };
                default:
                    return {};
            }
        },
        
        resetObject: function(obj) {
            for (let key in obj) {
                if (typeof obj[key] === 'string') obj[key] = '';
                else if (Array.isArray(obj[key])) obj[key].length = 0;
                else if (typeof obj[key] === 'boolean') obj[key] = false;
                else if (typeof obj[key] === 'number') obj[key] = 0;
            }
        }
    },
    
    // Cache Management
    cacheManager: {
        cache: new Map(),
        size: 0,
        
        // Get from cache
        get: function(key) {
            if (this.cache.has(key)) {
                const item = this.cache.get(key);
                if (Date.now() - item.timestamp < PerformanceOptimizer.config.cacheExpiry) {
                    item.hits++;
                    return item.data;
                } else {
                    this.cache.delete(key);
                }
            }
            return null;
        },
        
        // Set cache
        set: function(key, data) {
            const size = this.getSize(data);
            
            // Check cache size limit
            if (this.size + size > PerformanceOptimizer.config.maxCacheSize) {
                this.evictLRU();
            }
            
            this.cache.set(key, {
                data: data,
                timestamp: Date.now(),
                size: size,
                hits: 0
            });
            
            this.size += size;
        },
        
        // Get object size (approximate)
        getSize: function(obj) {
            return JSON.stringify(obj).length * 2; // Approximate bytes
        },
        
        // Evict least recently used items
        evictLRU: function() {
            const sorted = Array.from(this.cache.entries())
                .sort((a, b) => a[1].hits - b[1].hits);
            
            // Remove least used items until under 80% capacity
            while (this.size > PerformanceOptimizer.config.maxCacheSize * 0.8) {
                const [key, item] = sorted.shift();
                this.cache.delete(key);
                this.size -= item.size;
            }
        },
        
        // Clear expired cache
        clearExpired: function() {
            const now = Date.now();
            for (let [key, item] of this.cache.entries()) {
                if (now - item.timestamp > PerformanceOptimizer.config.cacheExpiry) {
                    this.cache.delete(key);
                    this.size -= item.size;
                }
            }
        },
        
        // Clear all cache
        clear: function() {
            this.cache.clear();
            this.size = 0;
        }
    },
    
    // Lazy Loading Manager
    lazyLoader: {
        observers: new Map(),
        loaded: new Set(),
        
        // Initialize intersection observer for lazy loading
        init: function() {
            if (!('IntersectionObserver' in window)) return;
            
            this.createObserver('default', {
                rootMargin: '50px'
            });
        },
        
        createObserver: function(name, options) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadElement(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            
            this.observers.set(name, observer);
            return observer;
        },
        
        observe: function(element, observerName = 'default') {
            const observer = this.observers.get(observerName);
            if (observer) {
                observer.observe(element);
            }
        },
        
        loadElement: function(element) {
            if (element.dataset.src) {
                element.src = element.dataset.src;
                delete element.dataset.src;
            }
            
            if (element.dataset.module) {
                this.loadModule(element.dataset.module);
            }
            
            element.classList.add('loaded');
            this.loaded.add(element);
        },
        
        loadModule: async function(moduleName) {
            const cacheKey = `module_${moduleName}`;
            let module = PerformanceOptimizer.cacheManager.get(cacheKey);
            
            if (!module) {
                try {
                    module = await import(`./${moduleName}.js`);
                    PerformanceOptimizer.cacheManager.set(cacheKey, module);
                } catch (error) {
                    console.error('Failed to load module:', moduleName, error);
                }
            }
            
            return module;
        }
    },
    
    // Request Optimization
    requestOptimizer: {
        pendingRequests: new Map(),
        requestQueue: [],
        batchTimer: null,
        
        // Debounce function calls
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait || PerformanceOptimizer.config.debounceDelay);
            };
        },
        
        // Throttle function calls
        throttle: function(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit || PerformanceOptimizer.config.throttleDelay);
                }
            };
        },
        
        // Batch multiple requests
        batchRequest: function(request) {
            this.requestQueue.push(request);
            
            if (!this.batchTimer) {
                this.batchTimer = setTimeout(() => {
                    this.processBatch();
                }, 10);
            }
        },
        
        processBatch: function() {
            const batch = this.requestQueue.splice(0, PerformanceOptimizer.config.batchSize);
            
            // Process batch
            Promise.all(batch.map(req => this.executeRequest(req)))
                .then(results => {
                    // Handle results
                })
                .catch(error => {
                    console.error('Batch processing error:', error);
                });
            
            this.batchTimer = null;
            
            if (this.requestQueue.length > 0) {
                this.batchTimer = setTimeout(() => {
                    this.processBatch();
                }, 10);
            }
        },
        
        executeRequest: async function(request) {
            // Cache key for request
            const cacheKey = JSON.stringify(request);
            
            // Check cache first
            const cached = PerformanceOptimizer.cacheManager.get(cacheKey);
            if (cached) return cached;
            
            // Execute request
            const result = await request.execute();
            
            // Cache result
            PerformanceOptimizer.cacheManager.set(cacheKey, result);
            
            return result;
        }
    },
    
    // DOM Optimization
    domOptimizer: {
        fragmentCache: new Map(),
        rafCallbacks: [],
        rafId: null,
        
        // Use document fragments for batch DOM updates
        createFragment: function() {
            return document.createDocumentFragment();
        },
        
        // Batch DOM updates using requestAnimationFrame
        batchUpdate: function(callback) {
            this.rafCallbacks.push(callback);
            
            if (!this.rafId) {
                this.rafId = requestAnimationFrame(() => {
                    const callbacks = this.rafCallbacks.slice();
                    this.rafCallbacks = [];
                    this.rafId = null;
                    
                    callbacks.forEach(cb => cb());
                });
            }
        },
        
        // Virtual scrolling for large lists
        virtualScroll: function(container, items, itemHeight) {
            const visibleHeight = container.clientHeight;
            const totalHeight = items.length * itemHeight;
            const visibleItems = Math.ceil(visibleHeight / itemHeight);
            
            // Create virtual container
            const virtualContainer = document.createElement('div');
            virtualContainer.style.height = `${totalHeight}px`;
            virtualContainer.style.position = 'relative';
            
            let scrollTop = 0;
            let startIndex = 0;
            let endIndex = visibleItems + PerformanceOptimizer.config.virtualScrollBuffer;
            
            const updateVisibleItems = () => {
                startIndex = Math.floor(scrollTop / itemHeight);
                endIndex = Math.min(
                    startIndex + visibleItems + PerformanceOptimizer.config.virtualScrollBuffer,
                    items.length
                );
                
                // Clear container
                virtualContainer.innerHTML = '';
                
                // Add visible items
                const fragment = this.createFragment();
                for (let i = startIndex; i < endIndex; i++) {
                    const item = this.createItem(items[i], i, itemHeight);
                    fragment.appendChild(item);
                }
                virtualContainer.appendChild(fragment);
            };
            
            container.addEventListener('scroll', PerformanceOptimizer.requestOptimizer.throttle(() => {
                scrollTop = container.scrollTop;
                this.batchUpdate(updateVisibleItems);
            }, 16)); // 60fps
            
            updateVisibleItems();
            container.appendChild(virtualContainer);
        },
        
        createItem: function(data, index, height) {
            const item = document.createElement('div');
            item.style.position = 'absolute';
            item.style.top = `${index * height}px`;
            item.style.height = `${height}px`;
            item.textContent = data;
            return item;
        },
        
        // Optimize reflows and repaints
        batchStyleChanges: function(element, changes) {
            // Hide element to avoid reflows
            const display = element.style.display;
            element.style.display = 'none';
            
            // Apply all changes
            Object.assign(element.style, changes);
            
            // Restore display
            element.style.display = display;
        }
    },
    
    // Resource Loading Optimization
    resourceLoader: {
        preloadQueue: [],
        prefetchQueue: [],
        
        // Preload critical resources
        preload: function(url, type) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = type;
            document.head.appendChild(link);
            
            this.preloadQueue.push(url);
        },
        
        // Prefetch future resources
        prefetch: function(url) {
            if ('link' in document.createElement('link')) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = url;
                document.head.appendChild(link);
                
                this.prefetchQueue.push(url);
            }
        },
        
        // Load script dynamically
        loadScript: async function(src, async = true, defer = false) {
            const cacheKey = `script_${src}`;
            
            // Check if already loaded
            if (PerformanceOptimizer.cacheManager.get(cacheKey)) {
                return Promise.resolve();
            }
            
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = async;
                script.defer = defer;
                
                script.onload = () => {
                    PerformanceOptimizer.cacheManager.set(cacheKey, true);
                    resolve();
                };
                
                script.onerror = reject;
                document.head.appendChild(script);
            });
        },
        
        // Load CSS dynamically
        loadCSS: function(href, media = 'all') {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.media = media;
            document.head.appendChild(link);
        }
    },
    
    // Web Worker Management
    workerManager: {
        workers: new Map(),
        taskQueue: [],
        
        // Create worker
        createWorker: function(name, scriptUrl) {
            if (!window.Worker) return null;
            
            const worker = new Worker(scriptUrl);
            this.workers.set(name, {
                worker: worker,
                busy: false,
                tasks: []
            });
            
            worker.onmessage = (e) => {
                this.handleWorkerMessage(name, e.data);
            };
            
            return worker;
        },
        
        // Send task to worker
        sendTask: function(workerName, task) {
            const workerInfo = this.workers.get(workerName);
            
            if (!workerInfo) {
                console.error('Worker not found:', workerName);
                return;
            }
            
            if (workerInfo.busy) {
                workerInfo.tasks.push(task);
            } else {
                workerInfo.busy = true;
                workerInfo.worker.postMessage(task);
            }
        },
        
        // Handle worker response
        handleWorkerMessage: function(workerName, data) {
            const workerInfo = this.workers.get(workerName);
            
            if (workerInfo) {
                workerInfo.busy = false;
                
                // Process next task in queue
                if (workerInfo.tasks.length > 0) {
                    const nextTask = workerInfo.tasks.shift();
                    this.sendTask(workerName, nextTask);
                }
            }
            
            // Handle response
            if (data.callback) {
                window[data.callback](data.result);
            }
        },
        
        // Terminate worker
        terminateWorker: function(name) {
            const workerInfo = this.workers.get(name);
            if (workerInfo) {
                workerInfo.worker.terminate();
                this.workers.delete(name);
            }
        }
    },
    
    // Storage Optimization
    storageOptimizer: {
        // Compress data before storing
        compress: function(data) {
            if (typeof data === 'object') {
                data = JSON.stringify(data);
            }
            
            // Simple compression using repeated string replacement
            let compressed = data
                .replace(/true/g, '!t')
                .replace(/false/g, '!f')
                .replace(/null/g, '!n')
                .replace(/undefined/g, '!u');
            
            return compressed;
        },
        
        // Decompress data after retrieving
        decompress: function(data) {
            let decompressed = data
                .replace(/!t/g, 'true')
                .replace(/!f/g, 'false')
                .replace(/!n/g, 'null')
                .replace(/!u/g, 'undefined');
            
            try {
                return JSON.parse(decompressed);
            } catch {
                return decompressed;
            }
        },
        
        // Save with compression
        save: function(key, data) {
            const compressed = this.compress(data);
            
            try {
                localStorage.setItem(key, compressed);
                return true;
            } catch (e) {
                if (e.name === 'QuotaExceededError') {
                    this.cleanup();
                    try {
                        localStorage.setItem(key, compressed);
                        return true;
                    } catch {
                        return false;
                    }
                }
                return false;
            }
        },
        
        // Load with decompression
        load: function(key) {
            const compressed = localStorage.getItem(key);
            if (!compressed) return null;
            
            return this.decompress(compressed);
        },
        
        // Cleanup old data
        cleanup: function() {
            const now = Date.now();
            const expiry = 30 * 24 * 60 * 60 * 1000; // 30 days
            
            for (let i = localStorage.length - 1; i >= 0; i--) {
                const key = localStorage.key(i);
                if (key.startsWith('temp_') || key.startsWith('cache_')) {
                    const data = localStorage.getItem(key);
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.timestamp && now - parsed.timestamp > expiry) {
                            localStorage.removeItem(key);
                        }
                    } catch {
                        // Remove invalid data
                        localStorage.removeItem(key);
                    }
                }
            }
        }
    },
    
    // Animation Optimization
    animationOptimizer: {
        animations: new Map(),
        
        // Use CSS animations instead of JavaScript when possible
        useCSSAnimation: function(element, animation) {
            element.style.animation = animation;
            element.addEventListener('animationend', () => {
                element.style.animation = '';
            }, { once: true });
        },
        
        // Optimize JavaScript animations
        animate: function(element, properties, duration, easing = 'ease') {
            const animId = Date.now();
            const startTime = performance.now();
            const startValues = {};
            
            // Get start values
            for (let prop in properties) {
                startValues[prop] = parseFloat(getComputedStyle(element)[prop]) || 0;
            }
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Apply easing
                const easedProgress = this.applyEasing(progress, easing);
                
                // Update properties
                for (let prop in properties) {
                    const start = startValues[prop];
                    const end = parseFloat(properties[prop]);
                    const current = start + (end - start) * easedProgress;
                    
                    element.style[prop] = current + (prop.includes('scale') ? '' : 'px');
                }
                
                if (progress < 1) {
                    this.animations.set(animId, requestAnimationFrame(animate));
                } else {
                    this.animations.delete(animId);
                }
            };
            
            this.animations.set(animId, requestAnimationFrame(animate));
            return animId;
        },
        
        applyEasing: function(t, easing) {
            switch(easing) {
                case 'ease-in':
                    return t * t;
                case 'ease-out':
                    return t * (2 - t);
                case 'ease-in-out':
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:
                    return t;
            }
        },
        
        // Cancel animation
        cancelAnimation: function(animId) {
            if (this.animations.has(animId)) {
                cancelAnimationFrame(this.animations.get(animId));
                this.animations.delete(animId);
            }
        }
    },
    
    // Cleanup large arrays and objects
    cleanupLargeArrays: function() {
        // Clean up question history if too large
        if (window.QuizDatabase && window.QuizDatabase.questionHistory) {
            const history = window.QuizDatabase.questionHistory;
            
            // Keep only recent 1000 questions in session
            if (history.session && history.session.size > 1000) {
                const arr = Array.from(history.session);
                history.session = new Set(arr.slice(-1000));
            }
            
            // Keep only recent 5000 questions in daily
            if (history.daily && history.daily.size > 5000) {
                const arr = Array.from(history.daily);
                history.daily = new Set(arr.slice(-5000));
            }
        }
        
        // Clean up game state arrays
        if (window.gameState && window.gameState.questions && window.gameState.questions.length > 100) {
            window.gameState.questions = window.gameState.questions.slice(-50);
        }
    },
    
    // Initialize all optimizations
    init: function() {
        console.log('🚀 Performance Optimizer initializing...');
        
        // Initialize managers
        this.memoryManager.init();
        this.lazyLoader.init();
        
        // Set up global optimizations
        this.setupGlobalOptimizations();
        
        // Clean storage on init
        this.storageOptimizer.cleanup();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Setup performance monitoring
        this.setupPerformanceMonitoring();
        
        console.log('✅ Performance Optimizer ready');
    },
    
    // Setup global optimizations
    setupGlobalOptimizations: function() {
        // Optimize scroll events
        let scrollTimer;
        window.addEventListener('scroll', this.requestOptimizer.throttle(() => {
            document.body.classList.add('scrolling');
            
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                document.body.classList.remove('scrolling');
            }, 150);
        }, 100));
        
        // Optimize resize events
        window.addEventListener('resize', this.requestOptimizer.debounce(() => {
            // Handle resize
        }, 300));
        
        // Optimize image loading
        document.querySelectorAll('img[data-src]').forEach(img => {
            this.lazyLoader.observe(img);
        });
        
        // Add passive event listeners
        document.addEventListener('touchstart', () => {}, { passive: true });
        document.addEventListener('wheel', () => {}, { passive: true });
    },
    
    // Preload critical resources
    preloadCriticalResources: function() {
        // Preload fonts
        if (document.fonts) {
            document.fonts.load('1em "Comic Sans MS"');
        }
        
        // Prefetch next likely resources
        const currentPage = window.location.pathname;
        if (currentPage.includes('quiz')) {
            this.resourceLoader.prefetch('scripts/kuiz_database_enhanced.js');
            this.resourceLoader.prefetch('scripts/learning_analytics.js');
        }
    },
    
    // Setup performance monitoring
    setupPerformanceMonitoring: function() {
        if (!window.PerformanceObserver) return;
        
        // Monitor long tasks
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 50) {
                    console.warn('Long task detected:', entry.duration + 'ms');
                }
            }
        });
        
        observer.observe({ entryTypes: ['longtask'] });
        
        // Monitor memory periodically
        if (this.memoryMonitorInterval) return;
        this.memoryMonitorInterval = setInterval(() => {
            if (performance.memory) {
                const used = performance.memory.usedJSHeapSize;
                const limit = performance.memory.jsHeapSizeLimit;
                const usage = (used / limit * 100).toFixed(2);
                
                if (usage > 80) {
                    console.warn(`High memory usage: ${usage}%`);
                    this.memoryManager.cleanup();
                }
            }
        }, 30000); // Every 30 seconds
    },
    
    // Get performance metrics
    getMetrics: function() {
        const metrics = {
            memory: {},
            cache: {},
            performance: {}
        };
        
        if (performance.memory) {
            metrics.memory = {
                used: (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + ' MB',
                limit: (performance.memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2) + ' MB',
                usage: ((performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100).toFixed(2) + '%'
            };
        }
        
        metrics.cache = {
            size: (this.cacheManager.size / 1024).toFixed(2) + ' KB',
            items: this.cacheManager.cache.size
        };
        
        if (performance.timing) {
            const timing = performance.timing;
            metrics.performance = {
                loadTime: timing.loadEventEnd - timing.navigationStart,
                domReady: timing.domContentLoadedEventEnd - timing.navigationStart,
                firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
            };
        }
        
        return metrics;
    }
};

// Export for use
if (typeof window !== 'undefined') {
    window.PerformanceOptimizer = PerformanceOptimizer;
}

// Auto-initialize on load
if (typeof window !== 'undefined') {
    if (!window.PerformanceOptimizerInitialized) {
        window.PerformanceOptimizerInitialized = true;
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                PerformanceOptimizer.init();
            });
        } else {
            PerformanceOptimizer.init();
        }
    }
}
