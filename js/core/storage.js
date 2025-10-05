import { deepClone } from './utils.js';

function canUseLocalStorage() {
    try {
        const key = '__qa_probe__';
        window.localStorage.setItem(key, '1');
        window.localStorage.removeItem(key);
        return true;
    } catch (_) {
        return false;
    }
}

export function createStorage(key, { fallback = {} } = {}) {
    const hasLocalStorage = canUseLocalStorage();
    let memoryStore = deepClone(fallback);

    const read = () => {
        if (!hasLocalStorage) {
            return deepClone(memoryStore);
        }
        const raw = window.localStorage.getItem(key);
        if (!raw) {
            return deepClone(fallback);
        }
        try {
            return JSON.parse(raw);
        } catch (error) {
            console.warn('Failed to parse storage payload, resetting', error);
            return deepClone(fallback);
        }
    };

    const write = (value) => {
        const payload = JSON.stringify(value);
        if (hasLocalStorage) {
            try {
                window.localStorage.setItem(key, payload);
            } catch (error) {
                console.warn('localStorage write failed, falling back to memory store', error);
                hasLocalStorage && window.localStorage.removeItem(key);
                memoryStore = deepClone(value);
            }
        } else {
            memoryStore = deepClone(value);
        }
        return value;
    };

    const update = (updater) => {
        const current = read();
        const draft = deepClone(current);
        let next;
        if (typeof updater === 'function') {
            next = updater(draft) ?? draft;
        } else {
            Object.assign(draft, updater || {});
            next = draft;
        }
        return write(next);
    };

    return {
        read,
        write,
        update
    };
}
