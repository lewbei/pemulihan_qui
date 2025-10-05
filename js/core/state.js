import { deepClone } from './utils.js';

export function createStore(initialState = {}) {
    let state = deepClone(initialState);
    const listeners = new Set();
    let isBatching = false;
    let pendingNotification = false;
    let lastOrigin = 'init';

    const notify = () => {
        if (isBatching) {
            pendingNotification = true;
            return;
        }
        for (const listener of listeners) {
            listener(state, { origin: lastOrigin });
        }
        pendingNotification = false;
    };

    const store = {
        getState() {
            return state;
        },
        setState(updater, origin = 'setState') {
            const draft = deepClone(state);
            let nextState;

            if (typeof updater === 'function') {
                nextState = updater(draft);
                if (typeof nextState === 'undefined') {
                    nextState = draft;
                }
            } else {
                Object.assign(draft, updater || {});
                nextState = draft;
            }

            state = nextState;
            lastOrigin = origin;
            notify();

            return state;
        },
        update(path, value, origin = 'update') {
            if (!Array.isArray(path)) {
                throw new Error('store.update expects path to be an array');
            }
            const draft = deepClone(state);
            let cursor = draft;
            for (let i = 0; i < path.length - 1; i++) {
                const key = path[i];
                if (typeof cursor[key] !== 'object' || cursor[key] === null) {
                    cursor[key] = {};
                }
                cursor = cursor[key];
            }
            cursor[path[path.length - 1]] = value;
            state = draft;
            lastOrigin = origin;
            notify();
            return state;
        },
        subscribe(listener) {
            listeners.add(listener);
            listener(state, { origin: 'subscribe' });
            return () => listeners.delete(listener);
        },
        batch(fn, origin = 'batch') {
            isBatching = true;
            try {
                fn(store);
            } finally {
                isBatching = false;
                if (pendingNotification) {
                    lastOrigin = origin;
                    notify();
                }
            }
        }
    };

    return store;
}
