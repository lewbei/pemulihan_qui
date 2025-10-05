// KP6 — Perkataan V + KV

const BM_KP6 = {
    id: 'bm-kp6',
    code: 'KP6',
    name: 'KP6 — Perkataan V + KV',
    description: '*Perkataan V + KV*',
    category: 'bm',
    questionBank: [
        // Basic V+KV word formation (30 questions)
        { q: "'a' + 'nak' = ?", a: "anak", opts: ['anak', 'kana', 'akan', 'naka'] },
        { q: "'e' + 'nak' = ?", a: "enak", opts: ['enak', 'kane', 'ekan', 'nake'] },
        { q: "'i' + 'bu' = ?", a: "ibu", opts: ['ibu', 'bui', 'iub', 'ubi'] },
        { q: "'o' + 'rang' = ?", a: "orang", opts: ['orang', 'rango', 'organ', 'rang'] },
        { q: "'u' + 'ang' = ?", a: "uang", opts: ['uang', 'ngau', 'ugan', 'ngua'] },
        { q: "'a' + 'yam' = ?", a: "ayam", opts: ['ayam', 'maya', 'ayma', 'maya'] },
        { q: "'e' + 'kor' = ?", a: "ekor", opts: ['ekor', 'roek', 'ekro', 'roke'] },
        { q: "'i' + 'kan' = ?", a: "ikan", opts: ['ikan', 'kani', 'ikna', 'kani'] },
        { q: "'o' + 'bat' = ?", a: "obat", opts: ['obat', 'tabo', 'obta', 'tabo'] },
        { q: "'u' + 'lar' = ?", a: "ular", opts: ['ular', 'laru', 'ulra', 'laru'] },
        { q: "'a' + 'ir' = ?", a: "air", opts: ['air', 'ria', 'ari', 'rai'] },
        { q: "'e' + 'mas' = ?", a: "emas", opts: ['emas', 'same', 'emsa', 'same'] },
        { q: "'i' + 'ngat' = ?", a: "ingat", opts: ['ingat', 'gatin', 'ingta', 'gatin'] },
        { q: "'o' + 'tak' = ?", a: "otak", opts: ['otak', 'kato', 'otka', 'kato'] },
        { q: "'u' + 'dang' = ?", a: "udang", opts: ['udang', 'ngadu', 'udgna', 'ngadu'] },
        { q: "'a' + 'pi' = ?", a: "api", opts: ['api', 'pia', 'aip', 'pai'] },
        { q: "'e' + 'sa' = ?", a: "esa", opts: ['esa', 'sae', 'eas', 'sae'] },
        { q: "'i' + 'tu' = ?", a: "itu", opts: ['itu', 'tui', 'iut', 'tui'] },
        { q: "'o' + 'lah' = ?", a: "olah", opts: ['olah', 'halo', 'olha', 'halo'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        
        // More V+KV combinations (20 questions)
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        
        // Additional V+KV combinations (20 questions)
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        
        // More V+KV combinations (20 questions)
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        
        // Final V+KV combinations (10 questions)
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] },
        { q: "'a' + 'wak' = ?", a: "awak", opts: ['awak', 'kawa', 'akwa', 'waka'] },
        { q: "'e' + 'lok' = ?", a: "elok", opts: ['elok', 'kole', 'eklo', 'kole'] },
        { q: "'i' + 'kat' = ?", a: "ikat", opts: ['ikat', 'taki', 'ikta', 'taki'] },
        { q: "'o' + 'sak' = ?", a: "osak", opts: ['osak', 'kaso', 'oksa', 'kaso'] },
        { q: "'u' + 'rat' = ?", a: "urat", opts: ['urat', 'taru', 'urta', 'taru'] }
    ]
};

export default BM_KP6;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP6;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP6 = BM_KP6;
}
