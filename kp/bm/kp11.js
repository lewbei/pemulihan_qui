// KP11 — Perkataan KV + KVK

const BM_KP11 = {
    id: 'bm-kp11',
    code: 'KP11',
    name: 'KP11 — Perkataan KV + KVK',
    description: '*(contoh: bapa, kuda, lori)*',
    category: 'bm',
    questionBank: [
        // Basic KV+KVK identification (30 questions)
        { q: "Yang manakah perkataan KV + KVK?", a: "bapa", opts: ["bapa", "ibu", "adik", "kakak"] },
        { q: "Pilih perkataan KV + KVK:", a: "kuda", opts: ["kuda", "ayam", "lembu", "kambing"] },
        { q: "Manakah perkataan KV + KVK?", a: "lori", opts: ["lori", "bas", "kereta", "kapal"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "nasi", opts: ["nasi", "roti", "biskut", "kuih"] },
        { q: "Pilih perkataan KV + KVK:", a: "padi", opts: ["padi", "jagung", "gandum", "beras"] },
        { q: "Manakah perkataan KV + KVK?", a: "sapu", opts: ["sapu", "pen", "pensel", "pemadam"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "tali", opts: ["tali", "benang", "kawat", "dawai"] },
        { q: "Pilih perkataan KV + KVK:", a: "wadi", opts: ["wadi", "sungai", "tasik", "laut"] },
        { q: "Manakah perkataan KV + KVK?", a: "baju", opts: ["baju", "seluar", "kasut", "topi"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "cuka", opts: ["cuka", "garam", "gula", "lada"] },
        { q: "Pilih perkataan KV + KVK:", a: "duri", opts: ["duri", "daun", "bunga", "akar"] },
        { q: "Manakah perkataan KV + KVK?", a: "foto", opts: ["foto", "gambar", "lukisan", "poster"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "gula", opts: ["gula", "garam", "tepung", "minyak"] },
        { q: "Pilih perkataan KV + KVK:", a: "haji", opts: ["haji", "umrah", "solat", "puasa"] },
        { q: "Manakah perkataan KV + KVK?", a: "jari", opts: ["jari", "tangan", "kaki", "kepala"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "kaki", opts: ["kaki", "tangan", "kepala", "badan"] },
        { q: "Pilih perkataan KV + KVK:", a: "lari", opts: ["lari", "jalan", "lompat", "duduk"] },
        { q: "Manakah perkataan KV + KVK?", a: "mata", opts: ["mata", "hidung", "telinga", "mulut"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "naga", opts: ["naga", "ular", "buaya", "katak"] },
        { q: "Pilih perkataan KV + KVK:", a: "pagi", opts: ["pagi", "petang", "malam", "siang"] },
        { q: "Manakah perkataan KV + KVK?", a: "rami", opts: ["rami", "kapas", "sutera", "bulu"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "satu", opts: ["satu", "dua", "tiga", "empat"] },
        { q: "Pilih perkataan KV + KVK:", a: "tahu", opts: ["tahu", "tempe", "tauhu", "kacang"] },
        { q: "Manakah perkataan KV + KVK?", a: "ubi", opts: ["ubi", "keledek", "kentang", "lobak"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "waja", opts: ["waja", "besi", "tembaga", "perak"] },
        { q: "Pilih perkataan KV + KVK:", a: "yoga", opts: ["yoga", "senam", "gimnastik", "tarian"] },
        { q: "Manakah perkataan KV + KVK?", a: "zira", opts: ["zira", "jintan", "ketumbar", "lada"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "bata", opts: ["bata", "simen", "pasir", "batu"] },
        { q: "Pilih perkataan KV + KVK:", a: "cita", opts: ["cita", "impian", "harapan", "hasrat"] },
        { q: "Manakah perkataan KV + KVK?", a: "dosa", opts: ["dosa", "pahala", "denda", "hukuman"] },
        
        // More KV+KVK combinations (20 questions)
        { q: "Yang manakah perkataan KV + KVK?", a: "fana", opts: ["fana", "kekal", "sementara", "abadi"] },
        { q: "Pilih perkataan KV + KVK:", a: "gema", opts: ["gema", "bunyi", "suara", "desiran"] },
        { q: "Manakah perkataan KV + KVK?", a: "hina", opts: ["hina", "mulia", "terhormat", "berharga"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "jaga", opts: ["jaga", "tidur", "rehat", "senyap"] },
        { q: "Pilih perkataan KV + KVK:", a: "kaya", opts: ["kaya", "miskin", "sederhana", "cukup"] },
        { q: "Manakah perkataan KV + KVK?", a: "lama", opts: ["lama", "sekejap", "cepat", "singkat"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "mana", opts: ["mana", "di mana", "ke mana", "dari mana"] },
        { q: "Pilih perkataan KV + KVK:", a: "palu", opts: ["palu", "pukul", "tumbuk", "tampar"] },
        { q: "Manakah perkataan KV + KVK?", a: "sama", opts: ["sama", "berbeza", "lain", "serupa"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "tiba", opts: ["tiba", "pergi", "datang", "tinggal"] },
        { q: "Pilih perkataan KV + KVK:", a: "warna", opts: ["warna", "bentuk", "saiz", "jenis"] },
        { q: "Manakah perkataan KV + KVK?", a: "suka", opts: ["suka", "duka", "gembira", "sedih"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "bumi", opts: ["bumi", "bulan", "matahari", "bintang"] },
        { q: "Pilih perkataan KV + KVK:", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Manakah perkataan KV + KVK?", a: "dana", opts: ["dana", "wang", "modal", "sumber"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "fasa", opts: ["fasa", "peringkat", "tahap", "langkah"] },
        { q: "Pilih perkataan KV + KVK:", a: "gaya", opts: ["gaya", "cara", "bentuk", "model"] },
        { q: "Manakah perkataan KV + KVK?", a: "hala", opts: ["hala", "arah", "tujuan", "matlamat"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "jasa", opts: ["jasa", "sumbangan", "bantuan", "khidmat"] },
        { q: "Pilih perkataan KV + KVK:", a: "kata", opts: ["kata", "perkataan", "ucapan", "ayat"] },
        
        // Additional KV+KVK combinations (20 questions)
        { q: "Manakah perkataan KV + KVK?", a: "laba", opts: ["laba", "untung", "keuntungan", "hasil"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "muka", opts: ["muka", "wajah", "rupa", "paras"] },
        { q: "Pilih perkataan KV + KVK:", a: "nama", opts: ["nama", "gelaran", "panggilan", "sebutan"] },
        { q: "Manakah perkataan KV + KVK?", a: "paha", opts: ["paha", "betis", "lutut", "pinggul"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "raga", opts: ["raga", "bakul", "kotak", "bekas"] },
        { q: "Pilih perkataan KV + KVK:", a: "saga", opts: ["saga", "kisah", "cerita", "riwayat"] },
        { q: "Manakah perkataan KV + KVK?", a: "tapa", opts: ["tapa", "puasa", "ibadah", "sembahyang"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "waja", opts: ["waja", "besi", "keluli", "logam"] },
        { q: "Pilih perkataan KV + KVK:", a: "yoga", opts: ["yoga", "senaman", "latihan", "olahraga"] },
        { q: "Manakah perkataan KV + KVK?", a: "zira", opts: ["zira", "rempah", "herba", "bahan"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "bara", opts: ["bara", "api", "panas", "bara"] },
        { q: "Pilih perkataan KV + KVK:", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Manakah perkataan KV + KVK?", a: "dara", opts: ["dara", "perawan", "gadis", "wanita"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "fara", opts: ["fara", "wajib", "mesti", "perlu"] },
        { q: "Pilih perkataan KV + KVK:", a: "gara", opts: ["gara", "sebab", "punca", "faktor"] },
        { q: "Manakah perkataan KV + KVK?", a: "hara", opts: ["hara", "subur", "kesuburan", "tanah"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "jara", opts: ["jara", "jarak", "jauh", "panjang"] },
        { q: "Pilih perkataan KV + KVK:", a: "kara", opts: ["kara", "tugas", "kerja", "pekerjaan"] },
        { q: "Manakah perkataan KV + KVK?", a: "lara", opts: ["lara", "sakit", "penyakit", "kesakitan"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "mara", opts: ["mara", "maju", "berkembang", "meningkat"] },
        
        // More KV+KVK combinations (20 questions)
        { q: "Pilih perkataan KV + KVK:", a: "nara", opts: ["nara", "manusia", "orang", "insan"] },
        { q: "Manakah perkataan KV + KVK?", a: "para", opts: ["para", "semua", "setiap", "kesemua"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "rara", opts: ["rara", "jarang", "langka", "sukar"] },
        { q: "Pilih perkataan KV + KVK:", a: "sara", opts: ["sara", "nafkah", "pendapatan", "sumber"] },
        { q: "Manakah perkataan KV + KVK?", a: "tara", opts: ["tara", "setara", "sama", "seimbang"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "wara", opts: ["wara", "waras", "sihat", "normal"] },
        { q: "Pilih perkataan KV + KVK:", a: "yara", opts: ["yara", "kawan", "sahabat", "teman"] },
        { q: "Manakah perkataan KV + KVK?", a: "zara", opts: ["zara", "cantik", "indah", "menawan"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "bara", opts: ["bara", "api", "panas", "bara"] },
        { q: "Pilih perkataan KV + KVK:", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Manakah perkataan KV + KVK?", a: "dara", opts: ["dara", "perawan", "gadis", "wanita"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "fara", opts: ["fara", "wajib", "mesti", "perlu"] },
        { q: "Pilih perkataan KV + KVK:", a: "gara", opts: ["gara", "sebab", "punca", "faktor"] },
        { q: "Manakah perkataan KV + KVK?", a: "hara", opts: ["hara", "subur", "kesuburan", "tanah"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "jara", opts: ["jara", "jarak", "jauh", "panjang"] },
        { q: "Pilih perkataan KV + KVK:", a: "kara", opts: ["kara", "tugas", "kerja", "pekerjaan"] },
        { q: "Manakah perkataan KV + KVK?", a: "lara", opts: ["lara", "sakit", "penyakit", "kesakitan"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "mara", opts: ["mara", "maju", "berkembang", "meningkat"] },
        { q: "Pilih perkataan KV + KVK:", a: "nara", opts: ["nara", "manusia", "orang", "insan"] },
        { q: "Manakah perkataan KV + KVK?", a: "para", opts: ["para", "semua", "setiap", "kesemua"] },
        
        // Final KV+KVK combinations (10 questions)
        { q: "Yang manakah perkataan KV + KVK?", a: "rara", opts: ["rara", "jarang", "langka", "sukar"] },
        { q: "Pilih perkataan KV + KVK:", a: "sara", opts: ["sara", "nafkah", "pendapatan", "sumber"] },
        { q: "Manakah perkataan KV + KVK?", a: "tara", opts: ["tara", "setara", "sama", "seimbang"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "wara", opts: ["wara", "waras", "sihat", "normal"] },
        { q: "Pilih perkataan KV + KVK:", a: "yara", opts: ["yara", "kawan", "sahabat", "teman"] },
        { q: "Manakah perkataan KV + KVK?", a: "zara", opts: ["zara", "cantik", "indah", "menawan"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "bara", opts: ["bara", "api", "panas", "bara"] },
        { q: "Pilih perkataan KV + KVK:", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Manakah perkataan KV + KVK?", a: "dara", opts: ["dara", "perawan", "gadis", "wanita"] },
        { q: "Yang manakah perkataan KV + KVK?", a: "fara", opts: ["fara", "wajib", "mesti", "perlu"] }
    ]
};

export default BM_KP11;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP11;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP11 = BM_KP11;
}
