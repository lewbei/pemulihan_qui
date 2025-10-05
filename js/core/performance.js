import { debounce } from './utils.js';

export class PerformanceService {
    constructor() {
        this.optimizer = typeof window !== 'undefined' ? window.PerformanceOptimizer : null;
        this.idleQueue = [];
    }

    init() {
        if (this.optimizer && typeof this.optimizer.init === 'function') {
            try {
                this.optimizer.init();
            } catch (error) {
                console.warn('PerformanceOptimizer.init failed', error);
            }
        }
        this.bootstrapIdleLoop();
    }

    bootstrapIdleLoop() {
        const runner = (deadline) => {
            while (this.idleQueue.length > 0 && (!deadline || deadline.timeRemaining() > 1)) {
                const task = this.idleQueue.shift();
                try {
                    task();
                } catch (error) {
                    console.warn('Idle task failed', error);
                }
            }
            this.scheduleNextIdle(runner);
        };
        this.scheduleNextIdle(runner);
    }

    schedule(task) {
        this.idleQueue.push(task);
    }

    scheduleNextIdle(runner) {
        if (typeof window === 'undefined') {
            return;
        }
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(runner);
        } else {
            setTimeout(() => runner({ timeRemaining: () => 5 }), 150);
        }
    }

    hydrateLazyModules(container) {
        if (!('IntersectionObserver' in window)) {
            return;
        }
        const observer = new IntersectionObserver((entries, instance) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                if (el.dataset.src) {
                    el.src = el.dataset.src;
                    delete el.dataset.src;
                }
                if (el.dataset.lazyModule && this.optimizer?.lazyLoader) {
                    this.optimizer.lazyLoader.loadModule(el.dataset.lazyModule);
                }
                el.classList.add('is-loaded');
                instance.unobserve(el);
            });
        }, { rootMargin: '100px 0px' });

        container.querySelectorAll('[data-lazy]').forEach((el) => observer.observe(el));
    }

    bindReducedMotionToggle(root) {
        const toggle = root.querySelector('[data-action="toggle-motion"]');
        if (!toggle) {
            return;
        }
        const apply = (enabled) => {
            document.documentElement.dataset.reducedMotion = enabled ? 'on' : 'off';
            if (document.body) {
                document.body.dataset.reducedMotion = enabled ? 'on' : 'off';
            }
            toggle.setAttribute('aria-pressed', String(enabled));
            toggle.textContent = enabled ? 'Animations Off' : 'Animations On';
        };
        const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        apply(prefersReduced);
        toggle.addEventListener('click', () => {
            const next = toggle.getAttribute('aria-pressed') !== 'true';
            apply(next);
        });
    }

    bindResizeListener(callback) {
        window.addEventListener('resize', debounce(callback, 200));
    }
}
