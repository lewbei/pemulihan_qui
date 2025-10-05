// KP12 — Perkataan KVK + KV

const BM_KP12 = {
    id: 'bm-kp12',
    code: 'KP12',
    name: 'KP12 — Perkataan KVK + KV',
    description: '*(contoh: basi, roti, buku)*',
    category: 'bm',
    questionBank: [
        // Basic KVK+KV identification (30 questions)
        { q: "Yang manakah perkataan KVK + KV?", a: "basi", opts: ["basi", "baru", "segar", "lama"] },
        { q: "Pilih perkataan KVK + KV:", a: "roti", opts: ["roti", "nasi", "biskut", "kuih"] },
        { q: "Manakah perkataan KVK + KV?", a: "buku", opts: ["buku", "pen", "pensel", "pemadam"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "meja", opts: ["meja", "kerusi", "katil", "almari"] },
        { q: "Pilih perkataan KVK + KV:", a: "rumah", opts: ["rumah", "bangunan", "sekolah", "kedai"] },
        { q: "Manakah perkataan KVK + KV?", a: "kereta", opts: ["kereta", "bas", "kapal", "lori"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "kapal", opts: ["kapal", "bas", "kereta", "lori"] },
        { q: "Pilih perkataan KVK + KV:", a: "lori", opts: ["lori", "bas", "kereta", "kapal"] },
        { q: "Manakah perkataan KVK + KV?", a: "ikan", opts: ["ikan", "ayam", "lembu", "kambing"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "ayam", opts: ["ayam", "ikan", "lembu", "kambing"] },
        { q: "Pilih perkataan KVK + KV:", a: "lembu", opts: ["lembu", "ayam", "ikan", "kambing"] },
        { q: "Manakah perkataan KVK + KV?", a: "kambing", opts: ["kambing", "ayam", "ikan", "lembu"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "nasi", opts: ["nasi", "roti", "biskut", "kuih"] },
        { q: "Pilih perkataan KVK + KV:", a: "air", opts: ["air", "susu", "teh", "kopi"] },
        { q: "Manakah perkataan KVK + KV?", a: "susu", opts: ["susu", "air", "teh", "kopi"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "teh", opts: ["teh", "air", "susu", "kopi"] },
        { q: "Pilih perkataan KVK + KV:", a: "kopi", opts: ["kopi", "air", "susu", "teh"] },
        { q: "Manakah perkataan KVK + KV?", a: "baju", opts: ["baju", "seluar", "kasut", "topi"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "seluar", opts: ["seluar", "baju", "kasut", "topi"] },
        { q: "Pilih perkataan KVK + KV:", a: "kasut", opts: ["kasut", "baju", "seluar", "topi"] },
        { q: "Manakah perkataan KVK + KV?", a: "topi", opts: ["topi", "baju", "seluar", "kasut"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "mata", opts: ["mata", "hidung", "telinga", "mulut"] },
        { q: "Pilih perkataan KVK + KV:", a: "hidung", opts: ["hidung", "mata", "telinga", "mulut"] },
        { q: "Manakah perkataan KVK + KV?", a: "telinga", opts: ["telinga", "mata", "hidung", "mulut"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "mulut", opts: ["mulut", "mata", "hidung", "telinga"] },
        { q: "Pilih perkataan KVK + KV:", a: "tangan", opts: ["tangan", "kaki", "kepala", "badan"] },
        { q: "Manakah perkataan KVK + KV?", a: "kaki", opts: ["kaki", "tangan", "kepala", "badan"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "kepala", opts: ["kepala", "tangan", "kaki", "badan"] },
        { q: "Pilih perkataan KVK + KV:", a: "badan", opts: ["badan", "tangan", "kaki", "kepala"] },
        { q: "Manakah perkataan KVK + KV?", a: "bapa", opts: ["bapa", "ibu", "adik", "kakak"] },
        
        // More KVK+KV combinations (20 questions)
        { q: "Yang manakah perkataan KVK + KV?", a: "ibu", opts: ["ibu", "bapa", "adik", "kakak"] },
        { q: "Pilih perkataan KVK + KV:", a: "adik", opts: ["adik", "bapa", "ibu", "kakak"] },
        { q: "Manakah perkataan KVK + KV?", a: "kakak", opts: ["kakak", "bapa", "ibu", "adik"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "sekolah", opts: ["sekolah", "rumah", "kedai", "pejabat"] },
        { q: "Pilih perkataan KVK + KV:", a: "kedai", opts: ["kedai", "rumah", "sekolah", "pejabat"] },
        { q: "Manakah perkataan KVK + KV?", a: "pejabat", opts: ["pejabat", "rumah", "sekolah", "kedai"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "pasar", opts: ["pasar", "kedai", "mall", "pasaraya"] },
        { q: "Pilih perkataan KVK + KV:", a: "mall", opts: ["mall", "pasar", "kedai", "pasaraya"] },
        { q: "Manakah perkataan KVK + KV?", a: "pasaraya", opts: ["pasaraya", "pasar", "kedai", "mall"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "bank", opts: ["bank", "kedai", "pejabat", "sekolah"] },
        { q: "Pilih perkataan KVK + KV:", a: "hospital", opts: ["hospital", "klinik", "farmasi", "kedai"] },
        { q: "Manakah perkataan KVK + KV?", a: "klinik", opts: ["klinik", "hospital", "farmasi", "kedai"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "farmasi", opts: ["farmasi", "hospital", "klinik", "kedai"] },
        { q: "Pilih perkataan KVK + KV:", a: "polis", opts: ["polis", "askar", "bomba", "doktor"] },
        { q: "Manakah perkataan KVK + KV?", a: "askar", opts: ["askar", "polis", "bomba", "doktor"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "bomba", opts: ["bomba", "polis", "askar", "doktor"] },
        { q: "Pilih perkataan KVK + KV:", a: "doktor", opts: ["doktor", "polis", "askar", "bomba"] },
        { q: "Manakah perkataan KVK + KV?", a: "guru", opts: ["guru", "murid", "pelajar", "cikgu"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "murid", opts: ["murid", "guru", "pelajar", "cikgu"] },
        { q: "Pilih perkataan KVK + KV:", a: "pelajar", opts: ["pelajar", "guru", "murid", "cikgu"] },
        
        // Additional KVK+KV combinations (20 questions)
        { q: "Manakah perkataan KVK + KV?", a: "cikgu", opts: ["cikgu", "guru", "murid", "pelajar"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "pen", opts: ["pen", "buku", "pensel", "pemadam"] },
        { q: "Pilih perkataan KVK + KV:", a: "pensel", opts: ["pensel", "buku", "pen", "pemadam"] },
        { q: "Manakah perkataan KVK + KV?", a: "pemadam", opts: ["pemadam", "buku", "pen", "pensel"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "kerusi", opts: ["kerusi", "meja", "katil", "almari"] },
        { q: "Pilih perkataan KVK + KV:", a: "katil", opts: ["katil", "meja", "kerusi", "almari"] },
        { q: "Manakah perkataan KVK + KV?", a: "almari", opts: ["almari", "meja", "kerusi", "katil"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "bangunan", opts: ["bangunan", "rumah", "sekolah", "kedai"] },
        { q: "Pilih perkataan KVK + KV:", a: "telefon", opts: ["telefon", "radio", "televisyen", "komputer"] },
        { q: "Manakah perkataan KVK + KV?", a: "komputer", opts: ["komputer", "telefon", "radio", "televisyen"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "radio", opts: ["radio", "telefon", "televisyen", "komputer"] },
        { q: "Pilih perkataan KVK + KV:", a: "televisyen", opts: ["televisyen", "telefon", "radio", "komputer"] },
        { q: "Manakah perkataan KVK + KV?", a: "basikal", opts: ["basikal", "kereta", "motorsikal", "bas"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "motorsikal", opts: ["motorsikal", "kereta", "basikal", "bas"] },
        { q: "Pilih perkataan KVK + KV:", a: "kapal terbang", opts: ["kapal terbang", "kereta", "bas", "kapal"] },
        { q: "Manakah perkataan KVK + KV?", a: "helikopter", opts: ["helikopter", "kapal terbang", "kereta", "bas"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "keretapi", opts: ["keretapi", "kereta", "bas", "lori"] },
        { q: "Pilih perkataan KVK + KV:", a: "bas ekspres", opts: ["bas ekspres", "kereta", "bas", "lori"] },
        { q: "Manakah perkataan KVK + KV?", a: "teksi", opts: ["teksi", "kereta", "bas", "lori"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "van", opts: ["van", "kereta", "bas", "lori"] },
        
        // More KVK+KV combinations (20 questions)
        { q: "Pilih perkataan KVK + KV:", a: "trak", opts: ["trak", "kereta", "bas", "lori"] },
        { q: "Manakah perkataan KVK + KV?", a: "bot", opts: ["bot", "kapal", "kereta", "bas"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "feri", opts: ["feri", "kapal", "bot", "kereta"] },
        { q: "Pilih perkataan KVK + KV:", a: "yacht", opts: ["yacht", "kapal", "bot", "feri"] },
        { q: "Manakah perkataan KVK + KV?", a: "jet", opts: ["jet", "kapal terbang", "helikopter", "kereta"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "pesawat", opts: ["pesawat", "kapal terbang", "helikopter", "jet"] },
        { q: "Pilih perkataan KVK + KV:", a: "satelit", opts: ["satelit", "kapal terbang", "helikopter", "jet"] },
        { q: "Manakah perkataan KVK + KV?", a: "roket", opts: ["roket", "kapal terbang", "helikopter", "jet"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "angkasa", opts: ["angkasa", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK + KV:", a: "bumi", opts: ["bumi", "bulan", "matahari", "bintang"] },
        { q: "Manakah perkataan KVK + KV?", a: "bulan", opts: ["bulan", "bumi", "matahari", "bintang"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "matahari", opts: ["matahari", "bumi", "bulan", "bintang"] },
        { q: "Pilih perkataan KVK + KV:", a: "bintang", opts: ["bintang", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK + KV?", a: "planet", opts: ["planet", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "galaksi", opts: ["galaksi", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK + KV:", a: "bima sakti", opts: ["bima sakti", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK + KV?", a: "alam semesta", opts: ["alam semesta", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "kosmos", opts: ["kosmos", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK + KV:", a: "angkasa lepas", opts: ["angkasa lepas", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK + KV?", a: "teleskop", opts: ["teleskop", "mikroskop", "kamera", "binokular"] },
        
        // Final KVK+KV combinations (10 questions)
        { q: "Yang manakah perkataan KVK + KV?", a: "mikroskop", opts: ["mikroskop", "teleskop", "kamera", "binokular"] },
        { q: "Pilih perkataan KVK + KV:", a: "kamera", opts: ["kamera", "teleskop", "mikroskop", "binokular"] },
        { q: "Manakah perkataan KVK + KV?", a: "binokular", opts: ["binokular", "teleskop", "mikroskop", "kamera"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "teleskop angkasa", opts: ["teleskop angkasa", "teleskop", "mikroskop", "kamera"] },
        { q: "Pilih perkataan KVK + KV:", a: "satelit buatan", opts: ["satelit buatan", "satelit", "kapal terbang", "helikopter"] },
        { q: "Manakah perkataan KVK + KV?", a: "stesen angkasa", opts: ["stesen angkasa", "satelit", "kapal terbang", "helikopter"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "angkasawan", opts: ["angkasawan", "astronaut", "pilot", "juruterbang"] },
        { q: "Pilih perkataan KVK + KV:", a: "astronaut", opts: ["astronaut", "angkasawan", "pilot", "juruterbang"] },
        { q: "Manakah perkataan KVK + KV?", a: "pilot", opts: ["pilot", "angkasawan", "astronaut", "juruterbang"] },
        { q: "Yang manakah perkataan KVK + KV?", a: "juruterbang", opts: ["juruterbang", "angkasawan", "astronaut", "pilot"] }
    ]
};

export default BM_KP12;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP12;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP12 = BM_KP12;
}
