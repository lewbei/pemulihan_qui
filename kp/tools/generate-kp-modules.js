#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const kpDir = path.resolve(__dirname, '..');
const bmDir = path.join(kpDir, 'bm');
const mathDir = path.join(kpDir, 'math');
const markdownPath = path.join(kpDir, 'pemulihan-bm-math.md');

const normaliseWhitespace = (value) => value.replace(/\s+/g, ' ').trim();

const readMarkdown = () => fs.readFileSync(markdownPath, 'utf8');

const extractEntries = (markdown) => {
    const lines = markdown.split(/\r?\n/);
    let category = 'bm';
    const entries = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (/^##\s+Pemulihan Matematik/.test(trimmed)) {
            category = 'math';
            continue;
        }
        if (!trimmed.startsWith('-') && !trimmed.startsWith('*') && !trimmed.startsWith('**')) {
            continue;
        }
        const bullet = trimmed.startsWith('**') ? trimmed : trimmed.replace(/^[-*]\s*/, '');
        const match = bullet.match(/\*\*(KP\d+(?:\.\d+)?)\s*[—–-]\s*([^*]+)\*\*/u);
        if (!match) {
            continue;
        }
        const code = match[1].trim();
        const title = normaliseWhitespace(match[2]);
        const remainderRaw = bullet.slice(match[0].length).trim();
        const remainder = remainderRaw.replace(/^[–—-]\s*/, '').trim();
        const description = remainder ? normaliseWhitespace(remainder) : title;
        entries.push({ code, title, description, category });
    }
    return entries;
};

const toSkillId = (entry) => `${entry.category}-${entry.code.toLowerCase()}`;

const createChildMap = (entries) => {
    const map = new Map();
    entries.forEach((entry) => {
        if (!entry.code.includes('.')) {
            return;
        }
        const base = entry.code.split('.')[0];
        const key = `${entry.category}-${base}`;
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(entry);
    });
    for (const [, list] of map) {
        list.sort((a, b) => a.code.localeCompare(b.code, 'en', { numeric: true }));
    }
    return map;
};

const toFileName = (entry) => `${entry.code.toLowerCase()}.js`;

const toConstName = (entry) => {
    const suffix = entry.code.replace(/\./g, '_');
    return `${entry.category.toUpperCase()}_${suffix}`;
};

const escapeQuotes = (value) => value.replace(/'/g, "\\'");

const generateModuleContent = (entry, childEntries = []) => {
    const constName = toConstName(entry);
    const skillId = toSkillId(entry);
    if (childEntries.length === 0) {
        return `// Auto-generated from pemulihan-bm-math.md\n// ${entry.code} — ${entry.title}\n\nconst ${constName} = {\n    id: '${skillId}',\n    code: '${entry.code}',\n    name: '${entry.code} — ${escapeQuotes(entry.title)}',\n    description: '${escapeQuotes(entry.description)}',\n    category: '${entry.category}',\n    questionBank: []\n};\n\nexport default ${constName};\n\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = ${constName};\n}\n\nif (typeof globalThis !== 'undefined') {\n    globalThis.${constName} = ${constName};\n}\n`;
    }

    const importLines = childEntries.map((child, index) => {
        const relPath = `./${child.code.toLowerCase()}.js`;
        return `import child${index} from '${relPath}';`;
    }).join('\n');
    const childList = childEntries.map((_, index) => `child${index}`).join(', ');

    return `// Auto-generated from pemulihan-bm-math.md\n// ${entry.code} — ${entry.title}\n\n${importLines}\n\nconst childModules = [${childList}];\n\nconst ${constName} = {\n    id: '${skillId}',\n    code: '${entry.code}',\n    name: '${entry.code} — ${escapeQuotes(entry.title)}',\n    description: '${escapeQuotes(entry.description)}',\n    category: '${entry.category}',\n    get questionBank() {\n        return childModules.flatMap((module) => Array.isArray(module.questionBank) ? module.questionBank : []);\n    }\n};\n\nexport default ${constName};\n\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = ${constName};\n}\n\nif (typeof globalThis !== 'undefined') {\n    globalThis.${constName} = ${constName};\n}\n`;
};

const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const cleanRoot = () => {
    fs.readdirSync(kpDir)
        .filter((file) => file.startsWith('kp') && file.endsWith('.js') && file !== 'kp-loader.js' && file !== 'skills.js')
        .forEach((file) => fs.unlinkSync(path.join(kpDir, file)));
};

const cleanDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        return;
    }
    fs.readdirSync(dirPath)
        .filter((file) => file.endsWith('.js'))
        .forEach((file) => fs.unlinkSync(path.join(dirPath, file)));
};

const writeModuleFiles = (entries, childMap) => {
    ensureDir(bmDir);
    ensureDir(mathDir);
    cleanRoot();
    cleanDir(bmDir);
    cleanDir(mathDir);

    entries.forEach((entry) => {
        const fileName = toFileName(entry);
        const targetDir = entry.category === 'math' ? mathDir : bmDir;
        const filePath = path.join(targetDir, fileName);
        const childrenKey = `${entry.category}-${entry.code}`;
        const childEntries = childMap.get(childrenKey) || [];
        const content = generateModuleContent(entry, childEntries);
        fs.writeFileSync(filePath, content, 'utf8');
    });
};

const writeSkillIndex = (entries) => {
    const lines = entries.map((entry) => {
        const fileName = toFileName(entry);
        const relPath = entry.category === 'math'
            ? `./math/${fileName}`
            : `./bm/${fileName}`;
        return `    { id: '${toSkillId(entry)}', code: '${entry.code}', name: '${entry.code} — ${escapeQuotes(entry.title)}', description: '${escapeQuotes(entry.description)}', category: '${entry.category}', file: '${relPath}' }`;
    });
    const content = `// Auto-generated list of KP skills\nexport const KP_SKILLS = [\n${lines.join(',\n')}\n];\n\nexport default KP_SKILLS;\n`;
    const filePath = path.join(kpDir, 'skills.js');
    fs.writeFileSync(filePath, content, 'utf8');
};

const main = () => {
    const markdown = readMarkdown();
    const entries = extractEntries(markdown);
    const childMap = createChildMap(entries);
    writeModuleFiles(entries, childMap);
    writeSkillIndex(entries);
    console.log(`Generated ${entries.length} KP module stubs.`);
};

main();
