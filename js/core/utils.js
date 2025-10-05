export function deepClone(value) {
    if (typeof structuredClone === 'function') {
        return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
}

export function uid(prefix = 'id') {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function todayKey(date = new Date()) {
    return date.toISOString().split('T')[0];
}

export function toPercent(value, digits = 0) {
    if (Number.isNaN(value) || !Number.isFinite(value)) {
        return '0%';
    }
    return `${(value * 100).toFixed(digits)}%`;
}

export function average(values) {
    if (!values || values.length === 0) {
        return 0;
    }
    return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export function sample(array, count, random = Math.random) {
    const pool = array.slice();
    const result = [];
    while (result.length < count && pool.length > 0) {
        const index = Math.floor(random() * pool.length);
        result.push(pool.splice(index, 1)[0]);
    }
    return result;
}

export function median(values) {
    if (!values || values.length === 0) {
        return 0;
    }
    const sorted = values.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export function formatDuration(ms) {
    const seconds = Math.round(ms / 1000);
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

export function debounce(fn, wait = 200) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), wait);
    };
}

export function throttle(fn, limit = 100) {
    let inThrottle = false;
    let lastArgs;
    return (...args) => {
        lastArgs = args;
        if (!inThrottle) {
            fn(...lastArgs);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
                if (lastArgs) {
                    fn(...lastArgs);
                }
            }, limit);
        }
    };
}

export function dayKeyToDate(key) {
    const [year, month, day] = key.split('-').map(Number);
    return new Date(year, (month || 1) - 1, day || 1);
}

export function daysBetween(fromKey, toKey) {
    if (!fromKey || !toKey) return NaN;
    const fromDate = dayKeyToDate(fromKey);
    const toDate = dayKeyToDate(toKey);
    const diffMs = toDate.getTime() - fromDate.getTime();
    return Math.round(diffMs / 86400000); // 1000 * 60 * 60 * 24
}
