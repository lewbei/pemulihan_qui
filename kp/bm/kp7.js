// KP7 — Perkataan KV + KV + KV

const BM_KP7 = {
    id: 'bm-kp7',
    code: 'KP7',
    name: 'KP7 — Perkataan KV + KV + KV',
    description: '*(contoh: bapa, kuda, lori)*',
    category: 'bm',
    questionBank: [
        // Basic KV+KV+KV identification (30 questions)
        { q: "Yang manakah perkataan KV + KV + KV?", a: "bapa", opts: ["bapa", "ibu", "rumah", "kereta"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "kuda", opts: ["kuda", "ikan", "buku", "meja"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "lori", opts: ["lori", "bas", "kapal", "kereta"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "nasi", opts: ["nasi", "air", "susu", "teh"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "padi", opts: ["padi", "jagung", "gandum", "beras"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "sapu", opts: ["sapu", "pen", "pensel", "pemadam"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "tali", opts: ["tali", "benang", "kawat", "dawai"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "wadi", opts: ["wadi", "sungai", "tasik", "laut"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "baju", opts: ["baju", "seluar", "kasut", "topi"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "cuka", opts: ["cuka", "garam", "gula", "lada"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "duri", opts: ["duri", "daun", "bunga", "akar"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "foto", opts: ["foto", "gambar", "lukisan", "poster"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "gula", opts: ["gula", "garam", "tepung", "minyak"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "haji", opts: ["haji", "umrah", "solat", "puasa"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "jari", opts: ["jari", "tangan", "kaki", "kepala"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "kaki", opts: ["kaki", "tangan", "kepala", "badan"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "lari", opts: ["lari", "jalan", "lompat", "duduk"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "mata", opts: ["mata", "hidung", "telinga", "mulut"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "naga", opts: ["naga", "ular", "buaya", "katak"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "pagi", opts: ["pagi", "petang", "malam", "siang"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "rami", opts: ["rami", "kapas", "sutera", "bulu"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "satu", opts: ["satu", "dua", "tiga", "empat"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "tahu", opts: ["tahu", "tempe", "tauhu", "kacang"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "ubi", opts: ["ubi", "keledek", "kentang", "lobak"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "waja", opts: ["waja", "besi", "tembaga", "perak"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "yoga", opts: ["yoga", "senam", "gimnastik", "tarian"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "zira", opts: ["zira", "jintan", "ketumbar", "lada"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "bata", opts: ["bata", "simen", "pasir", "batu"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "cita", opts: ["cita", "impian", "harapan", "hasrat"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "dosa", opts: ["dosa", "pahala", "denda", "hukuman"] },
        
        // More KV+KV+KV combinations (20 questions)
        { q: "Yang manakah perkataan KV + KV + KV?", a: "fana", opts: ["fana", "kekal", "sementara", "abadi"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "gema", opts: ["gema", "bunyi", "suara", "desiran"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "hina", opts: ["hina", "mulia", "terhormat", "berharga"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "jaga", opts: ["jaga", "tidur", "rehat", "senyap"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "kaya", opts: ["kaya", "miskin", "sederhana", "cukup"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "lama", opts: ["lama", "sekejap", "cepat", "singkat"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "mana", opts: ["mana", "di mana", "ke mana", "dari mana"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "nasi", opts: ["nasi", "roti", "biskut", "kuih"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "palu", opts: ["palu", "pukul", "tumbuk", "tampar"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "sama", opts: ["sama", "berbeza", "lain", "serupa"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "tiba", opts: ["tiba", "pergi", "datang", "tinggal"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "warna", opts: ["warna", "bentuk", "saiz", "jenis"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "suka", opts: ["suka", "duka", "gembira", "sedih"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "bumi", opts: ["bumi", "bulan", "matahari", "bintang"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "dana", opts: ["dana", "wang", "modal", "sumber"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "fasa", opts: ["fasa", "peringkat", "tahap", "langkah"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "gaya", opts: ["gaya", "cara", "bentuk", "model"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "hala", opts: ["hala", "arah", "tujuan", "matlamat"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "jasa", opts: ["jasa", "sumbangan", "bantuan", "khidmat"] },
        
        // Additional KV+KV+KV combinations (20 questions)
        { q: "Manakah perkataan KV + KV + KV?", a: "kata", opts: ["kata", "perkataan", "ucapan", "ayat"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "laba", opts: ["laba", "untung", "keuntungan", "hasil"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "muka", opts: ["muka", "wajah", "rupa", "paras"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "nama", opts: ["nama", "gelaran", "panggilan", "sebutan"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "paha", opts: ["paha", "betis", "lutut", "pinggul"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "raga", opts: ["raga", "bakul", "kotak", "bekas"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "saga", opts: ["saga", "kisah", "cerita", "riwayat"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "tapa", opts: ["tapa", "puasa", "ibadah", "sembahyang"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "waja", opts: ["waja", "besi", "keluli", "logam"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "yoga", opts: ["yoga", "senaman", "latihan", "olahraga"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "zira", opts: ["zira", "rempah", "herba", "bahan"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "bara", opts: ["bara", "api", "panas", "bara"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "dara", opts: ["dara", "perawan", "gadis", "wanita"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "fara", opts: ["fara", "wajib", "mesti", "perlu"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "gara", opts: ["gara", "sebab", "punca", "faktor"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "hara", opts: ["hara", "subur", "kesuburan", "tanah"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "jara", opts: ["jara", "jarak", "jauh", "panjang"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "kara", opts: ["kara", "tugas", "kerja", "pekerjaan"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "lara", opts: ["lara", "sakit", "penyakit", "kesakitan"] },
        
        // More KV+KV+KV combinations (20 questions)
        { q: "Pilih perkataan KV + KV + KV:", a: "mara", opts: ["mara", "maju", "berkembang", "meningkat"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "nara", opts: ["nara", "manusia", "orang", "insan"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "para", opts: ["para", "semua", "setiap", "kesemua"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "rara", opts: ["rara", "jarang", "langka", "sukar"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "sara", opts: ["sara", "nafkah", "pendapatan", "sumber"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "tara", opts: ["tara", "setara", "sama", "seimbang"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "wara", opts: ["wara", "waras", "sihat", "normal"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "yara", opts: ["yara", "kawan", "sahabat", "teman"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "zara", opts: ["zara", "cantik", "indah", "menawan"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "bara", opts: ["bara", "api", "panas", "bara"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "dara", opts: ["dara", "perawan", "gadis", "wanita"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "fara", opts: ["fara", "wajib", "mesti", "perlu"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "gara", opts: ["gara", "sebab", "punca", "faktor"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "hara", opts: ["hara", "subur", "kesuburan", "tanah"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "jara", opts: ["jara", "jarak", "jauh", "panjang"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "kara", opts: ["kara", "tugas", "kerja", "pekerjaan"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "lara", opts: ["lara", "sakit", "penyakit", "kesakitan"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "mara", opts: ["mara", "maju", "berkembang", "meningkat"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "nara", opts: ["nara", "manusia", "orang", "insan"] },
        
        // Final KV+KV+KV combinations (10 questions)
        { q: "Yang manakah perkataan KV + KV + KV?", a: "para", opts: ["para", "semua", "setiap", "kesemua"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "rara", opts: ["rara", "jarang", "langka", "sukar"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "sara", opts: ["sara", "nafkah", "pendapatan", "sumber"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "tara", opts: ["tara", "setara", "sama", "seimbang"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "wara", opts: ["wara", "waras", "sihat", "normal"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "yara", opts: ["yara", "kawan", "sahabat", "teman"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "zara", opts: ["zara", "cantik", "indah", "menawan"] },
        { q: "Pilih perkataan KV + KV + KV:", a: "bara", opts: ["bara", "api", "panas", "bara"] },
        { q: "Manakah perkataan KV + KV + KV?", a: "cara", opts: ["cara", "kaedah", "teknik", "sistem"] },
        { q: "Yang manakah perkataan KV + KV + KV?", a: "dara", opts: ["dara", "perawan", "gadis", "wanita"] }
    ]
};

export default BM_KP7;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP7;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP7 = BM_KP7;
}
