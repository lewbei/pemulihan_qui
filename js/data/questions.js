import { sample, uid } from '../core/utils.js';
import KPLoader from '../../kp/kp-loader.js';
import KP_SKILLS from '../../kp/skills.js';

export const QUESTION_CATEGORIES = {
    bm: {
        id: 'bm',
        name: 'Bahasa Melayu (KP1–KP32)',
        description: '32 kemahiran asas huruf, suku kata, perkataan dan pemahaman.',
        accent: '#667eea'
    },
    math: {
        id: 'math',
        name: '数学（K1–K9）',
        description: '全中文数学练习，涵盖前数概念到时间与钱币。',
        accent: '#30cfd0'
    }
};

const bmSkills = KP_SKILLS.filter((skill) => skill.category === 'bm');
const mathSkills = KP_SKILLS.filter((skill) => skill.category === 'math');

const CATEGORY_SKILLS = {
    bm: bmSkills.map((skill) => ({
        id: skill.id,
        title: skill.name,
        description: skill.description
    })),
    math: mathSkills.map((skill) => ({
        id: skill.id,
        title: skill.name,
        description: skill.description
    }))
};

const kpModuleCache = new Map();

async function loadKPModule(skillId) {
    if (kpModuleCache.has(skillId)) {
        return kpModuleCache.get(skillId);
    }
    const moduleRef = await KPLoader.loadSkill(skillId);
    if (moduleRef) {
        kpModuleCache.set(skillId, moduleRef);
    }
    return moduleRef;
}

function normaliseEntry(moduleRef, entry, { categoryId, skillId, difficulty }) {
    if (!entry) {
        return null;
    }
    const prompt = entry.q || entry.prompt || entry.question;
    const answer = entry.a || entry.answer;
    if (!prompt || !answer) {
        return null;
    }
    let options = Array.isArray(entry.opts) ? [...entry.opts] : Array.isArray(entry.options) ? [...entry.options] : [];
    if (!options.includes(answer)) {
        options.push(answer);
    }
    const shuffleFn = typeof moduleRef?.shuffleArray === 'function' ? moduleRef.shuffleArray.bind(moduleRef) : null;
    options = shuffleFn ? shuffleFn(options) : options;

    return {
        id: uid('kp-question'),
        category: categoryId,
        difficulty,
        skillId,
        prompt,
        answer,
        options,
        display: entry.display || entry.detail || null
    };
}

async function collectModuleQuestions(skillId, categoryId, difficulty, amount) {
    const moduleRef = await loadKPModule(skillId);
    if (!moduleRef) {
        return [];
    }

    const results = [];
    const bank = Array.isArray(moduleRef.questionBank) ? moduleRef.questionBank.slice() : [];
    if (bank.length > 0) {
        const selection = bank.length > amount ? sample(bank, amount) : bank;
        selection.forEach((entry) => {
            const normalized = normaliseEntry(moduleRef, entry, { categoryId, skillId, difficulty });
            if (normalized) {
                results.push(normalized);
            }
        });
    }

    let guard = 0;
    while (results.length < amount && typeof moduleRef.generator === 'function' && guard < amount * 4) {
        guard += 1;
        const raw = moduleRef.generator(difficulty);
        const normalized = normaliseEntry(moduleRef, raw, { categoryId, skillId, difficulty });
        if (normalized) {
            results.push(normalized);
        }
    }

    return results.slice(0, amount);
}

export async function fetchKPQuestionSet(skillId, difficulty = 1, amount = 10, categoryId = 'bm') {
    if (!skillId) {
        return [];
    }
    return await collectModuleQuestions(skillId, categoryId, difficulty, amount);
}

const QUESTION_POOL = [];

export function getQuestionSet(categoryId, difficulty = 1, amount = 10, skillId) {
    let pool = QUESTION_POOL.filter((item) => item.category === categoryId && item.difficulty <= difficulty);
    if (pool.length === 0) {
        pool = QUESTION_POOL.filter((item) => item.category === categoryId);
    }
    if (skillId) {
        const filtered = pool.filter((item) => item.skillId === skillId);
        if (filtered.length > 0) {
            pool = filtered;
        }
    }
    if (pool.length === 0) {
        return [];
    }
    const questions = sample(pool, Math.min(amount, pool.length));
    return questions.map((question) => ({
        ...question,
        sessionId: uid('question'),
        options: question.options.slice()
    }));
}

export function listCategories() {
    return Object.values(QUESTION_CATEGORIES);
}

export function getCategoryMeta(categoryId) {
    return QUESTION_CATEGORIES[categoryId] || null;
}

export function listDifficultyOptions() {
    return [
        { level: 1, label: 'Mudah' },
        { level: 2, label: 'Pertengahan' },
        { level: 3, label: 'Cabaran' }
    ];
}

export function listSkills(categoryId) {
    return CATEGORY_SKILLS[categoryId] || [];
}

export function getSkillMeta(categoryId, skillId) {
    return (CATEGORY_SKILLS[categoryId] || []).find((skill) => skill.id === skillId) || null;
}
