import KP_SKILLS from './skills.js';

const SKILL_META = new Map(KP_SKILLS.map((skill) => [skill.id, skill]));

const resolveModule = (moduleNamespace) => {
    if (!moduleNamespace) {
        return null;
    }
    if (moduleNamespace.default) {
        return moduleNamespace.default;
    }
    const values = Object.values(moduleNamespace);
    return values.find((value) => value && typeof value === 'object' && Array.isArray(value.questionBank));
};

const KPLoader = {
    skills: {},

    listSkillIds() {
        return KP_SKILLS.map((skill) => skill.id);
    },

    getSkillMeta(skillId) {
        return SKILL_META.get(skillId) || null;
    },

    async loadSkill(skillId) {
        if (this.skills[skillId]) {
            return this.skills[skillId];
        }
        const meta = this.getSkillMeta(skillId);
        if (!meta) {
            console.warn(`Skill ${skillId} is not registered in KP_SKILLS.`);
            return null;
        }
        try {
            const moduleNamespace = await import(/* @vite-ignore */ meta.file);
            const resolved = resolveModule(moduleNamespace);
            if (!resolved) {
                console.error(`KP module ${skillId} did not export a valid object.`);
                return null;
            }
            this.skills[skillId] = resolved;
            return this.skills[skillId];
        } catch (error) {
            console.error(`Failed to load KP module: ${skillId}`, error);
            return null;
        }
    },

    async loadSkills(skillIds = this.listSkillIds()) {
        const modules = await Promise.all(skillIds.map((skillId) => this.loadSkill(skillId)));
        return modules.filter(Boolean);
    },

    async loadAllSkills() {
        return this.loadSkills();
    },

    getSkillInfo(skillId) {
        const meta = this.getSkillMeta(skillId);
        if (!meta) {
            return null;
        }
        const moduleRef = this.skills[skillId];
        const questionCount = Array.isArray(moduleRef?.questionBank)
            ? moduleRef.questionBank.length
            : 0;
        return {
            id: meta.id,
            code: meta.code,
            name: meta.name,
            description: meta.description,
            questionCount
        };
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = KPLoader;
}

if (typeof window !== 'undefined') {
    window.KPLoader = KPLoader;
}

if (typeof global !== 'undefined') {
    global.KPLoader = KPLoader;
}

if (typeof globalThis !== 'undefined') {
    globalThis.KPLoader = KPLoader;
}

export default KPLoader;
