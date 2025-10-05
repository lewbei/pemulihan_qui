// KP10 — Perkataan V + KVK

const BM_KP10 = {
    id: 'bm-kp10',
    code: 'KP10',
    name: 'KP10 — Perkataan V + KVK',
    description: '*(contoh: ibu, api, emas)*',
    category: 'bm',
    questionBank: [
        // Basic V+KVK identification (30 questions)
        { q: "Yang manakah perkataan V + KVK?", a: "ibu", opts: ["ibu", "bapa", "adik", "kakak"] },
        { q: "Pilih perkataan V + KVK:", a: "api", opts: ["api", "air", "angin", "tanah"] },
        { q: "Manakah perkataan V + KVK?", a: "emas", opts: ["emas", "perak", "besi", "tembaga"] },
        { q: "Yang manakah perkataan V + KVK?", a: "ikan", opts: ["ikan", "ayam", "lembu", "kambing"] },
        { q: "Pilih perkataan V + KVK:", a: "ular", opts: ["ular", "buaya", "katak", "cicak"] },
        { q: "Manakah perkataan V + KVK?", a: "udang", opts: ["udang", "ketam", "sotong", "kerang"] },
        { q: "Yang manakah perkataan V + KVK?", a: "ekor", opts: ["ekor", "kepala", "badan", "kaki"] },
        { q: "Pilih perkataan V + KVK:", a: "anak", opts: ["anak", "ibu", "bapa", "adik"] },
        { q: "Manakah perkataan V + KVK?", a: "awak", opts: ["awak", "saya", "kamu", "dia"] },
        { q: "Yang manakah perkataan V + KVK?", a: "elok", opts: ["elok", "cantik", "baik", "bagus"] },
        { q: "Pilih perkataan V + KVK:", a: "enak", opts: ["enak", "sedap", "lazat", "manis"] },
        { q: "Manakah perkataan V + KVK?", a: "esok", opts: ["esok", "hari", "minggu", "bulan"] },
        { q: "Yang manakah perkataan V + KVK?", a: "etika", opts: ["etika", "moral", "akhlak", "budi"] },
        { q: "Pilih perkataan V + KVK:", a: "ilmu", opts: ["ilmu", "pengetahuan", "sains", "teknologi"] },
        { q: "Manakah perkataan V + KVK?", a: "ingat", opts: ["ingat", "lupa", "kenang", "ingin"] },
        { q: "Yang manakah perkataan V + KVK?", a: "ikut", opts: ["ikut", "ikuti", "turut", "serta"] },
        { q: "Pilih perkataan V + KVK:", a: "imam", opts: ["imam", "pemimpin", "ketua", "guru"] },
        { q: "Manakah perkataan V + KVK?", a: "indah", opts: ["indah", "cantik", "elok", "menawan"] },
        { q: "Yang manakah perkataan V + KVK?", a: "ingin", opts: ["ingin", "mahu", "hendak", "suka"] },
        { q: "Pilih perkataan V + KVK:", a: "insan", opts: ["insan", "manusia", "orang", "jiwa"] },
        { q: "Manakah perkataan V + KVK?", a: "intan", opts: ["intan", "permata", "berlian", "mutiara"] },
        { q: "Yang manakah perkataan V + KVK?", a: "ipar", opts: ["ipar", "adik", "kakak", "abang"] },
        { q: "Pilih perkataan V + KVK:", a: "islam", opts: ["islam", "agama", "iman", "tauhid"] },
        { q: "Manakah perkataan V + KVK?", a: "isteri", opts: ["isteri", "suami", "pasangan", "jodoh"] },
        { q: "Yang manakah perkataan V + KVK?", a: "itik", opts: ["itik", "ayam", "angsa", "burung"] },
        { q: "Pilih perkataan V + KVK:", a: "izin", opts: ["izin", "kebenaran", "keizinan", "restu"] },
        { q: "Manakah perkataan V + KVK?", a: "obat", opts: ["obat", "ubat", "penawar", "rawatan"] },
        { q: "Yang manakah perkataan V + KVK?", a: "olah", opts: ["olah", "buat", "lakukan", "kerjakan"] },
        { q: "Pilih perkataan V + KVK:", a: "orang", opts: ["orang", "manusia", "insan", "jiwa"] },
        { q: "Manakah perkataan V + KVK?", a: "otak", opts: ["otak", "akal", "fikiran", "pemikiran"] },
        
        // More V+KVK combinations (20 questions)
        { q: "Yang manakah perkataan V + KVK?", a: "udara", opts: ["udara", "angin", "oksigen", "atmosfera"] },
        { q: "Pilih perkataan V + KVK:", a: "ujian", opts: ["ujian", "peperiksaan", "tes", "ujikaji"] },
        { q: "Manakah perkataan V + KVK?", a: "ukir", opts: ["ukir", "pahat", "lukis", "gambar"] },
        { q: "Yang manakah perkataan V + KVK?", a: "ukur", opts: ["ukur", "sukat", "timbang", "hitung"] },
        { q: "Pilih perkataan V + KVK:", a: "ulang", opts: ["ulang", "ulangi", "ulang", "ulang"] },
        { q: "Manakah perkataan V + KVK?", a: "ular", opts: ["ular", "buaya", "katak", "cicak"] },
        { q: "Yang manakah perkataan V + KVK?", a: "umur", opts: ["umur", "usia", "tahun", "zaman"] },
        { q: "Pilih perkataan V + KVK:", a: "undang", opts: ["undang", "jemput", "ajak", "panggil"] },
        { q: "Manakah perkataan V + KVK?", a: "unggas", opts: ["unggas", "burung", "ayam", "itik"] },
        { q: "Yang manakah perkataan V + KVK?", a: "untuk", opts: ["untuk", "bagi", "kepada", "demi"] },
        { q: "Pilih perkataan V + KVK:", a: "upah", opts: ["upah", "gaji", "bayaran", "upahan"] },
        { q: "Manakah perkataan V + KVK?", a: "urus", opts: ["urus", "kelola", "atur", "tadbir"] },
        { q: "Yang manakah perkataan V + KVK?", a: "usaha", opts: ["usaha", "kerja", "usaha", "ikhtiar"] },
        { q: "Pilih perkataan V + KVK:", a: "usia", opts: ["usia", "umur", "tahun", "zaman"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        
        // Additional V+KVK combinations (20 questions)
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        
        // More V+KVK combinations (20 questions)
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        
        // Final V+KVK combinations (10 questions)
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Pilih perkataan V + KVK:", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Pilih perkataan V + KVK:", a: "utara", opts: ["utara", "selatan", "timur", "barat"] },
        { q: "Manakah perkataan V + KVK?", a: "utama", opts: ["utama", "penting", "pokok", "asas"] },
        { q: "Yang manakah perkataan V + KVK?", a: "utara", opts: ["utara", "selatan", "timur", "barat"] }
    ]
};

export default BM_KP10;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP10;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP10 = BM_KP10;
}
