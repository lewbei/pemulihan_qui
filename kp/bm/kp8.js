// KP8 — Perkataan KVK

const BM_KP8 = {
    id: 'bm-kp8',
    code: 'KP8',
    name: 'KP8 — Perkataan KVK',
    description: '*(contoh: bas, roti, buku)*',
    category: 'bm',
    questionBank: [
        // Basic KVK identification (30 questions)
        { q: "Yang manakah perkataan KVK?", a: "bas", opts: ["bas", "kereta", "kapal", "lori"] },
        { q: "Pilih perkataan KVK:", a: "roti", opts: ["roti", "nasi", "biskut", "kuih"] },
        { q: "Manakah perkataan KVK?", a: "buku", opts: ["buku", "pen", "pensel", "pemadam"] },
        { q: "Yang manakah perkataan KVK?", a: "meja", opts: ["meja", "kerusi", "katil", "almari"] },
        { q: "Pilih perkataan KVK:", a: "rumah", opts: ["rumah", "bangunan", "sekolah", "kedai"] },
        { q: "Manakah perkataan KVK?", a: "kereta", opts: ["kereta", "bas", "kapal", "lori"] },
        { q: "Yang manakah perkataan KVK?", a: "kapal", opts: ["kapal", "bas", "kereta", "lori"] },
        { q: "Pilih perkataan KVK:", a: "lori", opts: ["lori", "bas", "kereta", "kapal"] },
        { q: "Manakah perkataan KVK?", a: "ikan", opts: ["ikan", "ayam", "lembu", "kambing"] },
        { q: "Yang manakah perkataan KVK?", a: "ayam", opts: ["ayam", "ikan", "lembu", "kambing"] },
        { q: "Pilih perkataan KVK:", a: "lembu", opts: ["lembu", "ayam", "ikan", "kambing"] },
        { q: "Manakah perkataan KVK?", a: "kambing", opts: ["kambing", "ayam", "ikan", "lembu"] },
        { q: "Yang manakah perkataan KVK?", a: "nasi", opts: ["nasi", "roti", "biskut", "kuih"] },
        { q: "Pilih perkataan KVK:", a: "air", opts: ["air", "susu", "teh", "kopi"] },
        { q: "Manakah perkataan KVK?", a: "susu", opts: ["susu", "air", "teh", "kopi"] },
        { q: "Yang manakah perkataan KVK?", a: "teh", opts: ["teh", "air", "susu", "kopi"] },
        { q: "Pilih perkataan KVK:", a: "kopi", opts: ["kopi", "air", "susu", "teh"] },
        { q: "Manakah perkataan KVK?", a: "baju", opts: ["baju", "seluar", "kasut", "topi"] },
        { q: "Yang manakah perkataan KVK?", a: "seluar", opts: ["seluar", "baju", "kasut", "topi"] },
        { q: "Pilih perkataan KVK:", a: "kasut", opts: ["kasut", "baju", "seluar", "topi"] },
        { q: "Manakah perkataan KVK?", a: "topi", opts: ["topi", "baju", "seluar", "kasut"] },
        { q: "Yang manakah perkataan KVK?", a: "mata", opts: ["mata", "hidung", "telinga", "mulut"] },
        { q: "Pilih perkataan KVK:", a: "hidung", opts: ["hidung", "mata", "telinga", "mulut"] },
        { q: "Manakah perkataan KVK?", a: "telinga", opts: ["telinga", "mata", "hidung", "mulut"] },
        { q: "Yang manakah perkataan KVK?", a: "mulut", opts: ["mulut", "mata", "hidung", "telinga"] },
        { q: "Pilih perkataan KVK:", a: "tangan", opts: ["tangan", "kaki", "kepala", "badan"] },
        { q: "Manakah perkataan KVK?", a: "kaki", opts: ["kaki", "tangan", "kepala", "badan"] },
        { q: "Yang manakah perkataan KVK?", a: "kepala", opts: ["kepala", "tangan", "kaki", "badan"] },
        { q: "Pilih perkataan KVK:", a: "badan", opts: ["badan", "tangan", "kaki", "kepala"] },
        { q: "Manakah perkataan KVK?", a: "bapa", opts: ["bapa", "ibu", "adik", "kakak"] },
        
        // More KVK combinations (20 questions)
        { q: "Yang manakah perkataan KVK?", a: "ibu", opts: ["ibu", "bapa", "adik", "kakak"] },
        { q: "Pilih perkataan KVK:", a: "adik", opts: ["adik", "bapa", "ibu", "kakak"] },
        { q: "Manakah perkataan KVK?", a: "kakak", opts: ["kakak", "bapa", "ibu", "adik"] },
        { q: "Yang manakah perkataan KVK?", a: "sekolah", opts: ["sekolah", "rumah", "kedai", "pejabat"] },
        { q: "Pilih perkataan KVK:", a: "kedai", opts: ["kedai", "rumah", "sekolah", "pejabat"] },
        { q: "Manakah perkataan KVK?", a: "pejabat", opts: ["pejabat", "rumah", "sekolah", "kedai"] },
        { q: "Yang manakah perkataan KVK?", a: "pasar", opts: ["pasar", "kedai", "mall", "pasaraya"] },
        { q: "Pilih perkataan KVK:", a: "mall", opts: ["mall", "pasar", "kedai", "pasaraya"] },
        { q: "Manakah perkataan KVK?", a: "pasaraya", opts: ["pasaraya", "pasar", "kedai", "mall"] },
        { q: "Yang manakah perkataan KVK?", a: "bank", opts: ["bank", "kedai", "pejabat", "sekolah"] },
        { q: "Pilih perkataan KVK:", a: "hospital", opts: ["hospital", "klinik", "farmasi", "kedai"] },
        { q: "Manakah perkataan KVK?", a: "klinik", opts: ["klinik", "hospital", "farmasi", "kedai"] },
        { q: "Yang manakah perkataan KVK?", a: "farmasi", opts: ["farmasi", "hospital", "klinik", "kedai"] },
        { q: "Pilih perkataan KVK:", a: "polis", opts: ["polis", "askar", "bomba", "doktor"] },
        { q: "Manakah perkataan KVK?", a: "askar", opts: ["askar", "polis", "bomba", "doktor"] },
        { q: "Yang manakah perkataan KVK?", a: "bomba", opts: ["bomba", "polis", "askar", "doktor"] },
        { q: "Pilih perkataan KVK:", a: "doktor", opts: ["doktor", "polis", "askar", "bomba"] },
        { q: "Manakah perkataan KVK?", a: "guru", opts: ["guru", "murid", "pelajar", "cikgu"] },
        { q: "Yang manakah perkataan KVK?", a: "murid", opts: ["murid", "guru", "pelajar", "cikgu"] },
        { q: "Pilih perkataan KVK:", a: "pelajar", opts: ["pelajar", "guru", "murid", "cikgu"] },
        
        // Additional KVK combinations (20 questions)
        { q: "Manakah perkataan KVK?", a: "cikgu", opts: ["cikgu", "guru", "murid", "pelajar"] },
        { q: "Yang manakah perkataan KVK?", a: "pen", opts: ["pen", "buku", "pensel", "pemadam"] },
        { q: "Pilih perkataan KVK:", a: "pensel", opts: ["pensel", "buku", "pen", "pemadam"] },
        { q: "Manakah perkataan KVK?", a: "pemadam", opts: ["pemadam", "buku", "pen", "pensel"] },
        { q: "Yang manakah perkataan KVK?", a: "kerusi", opts: ["kerusi", "meja", "katil", "almari"] },
        { q: "Pilih perkataan KVK:", a: "katil", opts: ["katil", "meja", "kerusi", "almari"] },
        { q: "Manakah perkataan KVK?", a: "almari", opts: ["almari", "meja", "kerusi", "katil"] },
        { q: "Yang manakah perkataan KVK?", a: "bangunan", opts: ["bangunan", "rumah", "sekolah", "kedai"] },
        { q: "Pilih perkataan KVK:", a: "telefon", opts: ["telefon", "radio", "televisyen", "komputer"] },
        { q: "Manakah perkataan KVK?", a: "komputer", opts: ["komputer", "telefon", "radio", "televisyen"] },
        { q: "Yang manakah perkataan KVK?", a: "radio", opts: ["radio", "telefon", "televisyen", "komputer"] },
        { q: "Pilih perkataan KVK:", a: "televisyen", opts: ["televisyen", "telefon", "radio", "komputer"] },
        { q: "Manakah perkataan KVK?", a: "kereta", opts: ["kereta", "bas", "kapal", "lori"] },
        { q: "Yang manakah perkataan KVK?", a: "basikal", opts: ["basikal", "kereta", "motorsikal", "bas"] },
        { q: "Pilih perkataan KVK:", a: "motorsikal", opts: ["motorsikal", "kereta", "basikal", "bas"] },
        { q: "Manakah perkataan KVK?", a: "kapal terbang", opts: ["kapal terbang", "kereta", "bas", "kapal"] },
        { q: "Yang manakah perkataan KVK?", a: "helikopter", opts: ["helikopter", "kapal terbang", "kereta", "bas"] },
        { q: "Pilih perkataan KVK:", a: "keretapi", opts: ["keretapi", "kereta", "bas", "lori"] },
        { q: "Manakah perkataan KVK?", a: "bas ekspres", opts: ["bas ekspres", "kereta", "bas", "lori"] },
        { q: "Yang manakah perkataan KVK?", a: "teksi", opts: ["teksi", "kereta", "bas", "lori"] },
        
        // More KVK combinations (20 questions)
        { q: "Pilih perkataan KVK:", a: "van", opts: ["van", "kereta", "bas", "lori"] },
        { q: "Manakah perkataan KVK?", a: "trak", opts: ["trak", "kereta", "bas", "lori"] },
        { q: "Yang manakah perkataan KVK?", a: "bot", opts: ["bot", "kapal", "kereta", "bas"] },
        { q: "Pilih perkataan KVK:", a: "feri", opts: ["feri", "kapal", "bot", "kereta"] },
        { q: "Manakah perkataan KVK?", a: "yacht", opts: ["yacht", "kapal", "bot", "feri"] },
        { q: "Yang manakah perkataan KVK?", a: "jet", opts: ["jet", "kapal terbang", "helikopter", "kereta"] },
        { q: "Pilih perkataan KVK:", a: "pesawat", opts: ["pesawat", "kapal terbang", "helikopter", "jet"] },
        { q: "Manakah perkataan KVK?", a: "satelit", opts: ["satelit", "kapal terbang", "helikopter", "jet"] },
        { q: "Yang manakah perkataan KVK?", a: "roket", opts: ["roket", "kapal terbang", "helikopter", "jet"] },
        { q: "Pilih perkataan KVK:", a: "angkasa", opts: ["angkasa", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK?", a: "bumi", opts: ["bumi", "bulan", "matahari", "bintang"] },
        { q: "Yang manakah perkataan KVK?", a: "bulan", opts: ["bulan", "bumi", "matahari", "bintang"] },
        { q: "Pilih perkataan KVK:", a: "matahari", opts: ["matahari", "bumi", "bulan", "bintang"] },
        { q: "Manakah perkataan KVK?", a: "bintang", opts: ["bintang", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK?", a: "planet", opts: ["planet", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK:", a: "galaksi", opts: ["galaksi", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK?", a: "bima sakti", opts: ["bima sakti", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK?", a: "alam semesta", opts: ["alam semesta", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK:", a: "kosmos", opts: ["kosmos", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK?", a: "angkasa lepas", opts: ["angkasa lepas", "bumi", "bulan", "matahari"] },
        
        // Final KVK combinations (10 questions)
        { q: "Yang manakah perkataan KVK?", a: "teleskop", opts: ["teleskop", "mikroskop", "kamera", "binokular"] },
        { q: "Pilih perkataan KVK:", a: "mikroskop", opts: ["mikroskop", "teleskop", "kamera", "binokular"] },
        { q: "Manakah perkataan KVK?", a: "kamera", opts: ["kamera", "teleskop", "mikroskop", "binokular"] },
        { q: "Yang manakah perkataan KVK?", a: "binokular", opts: ["binokular", "teleskop", "mikroskop", "kamera"] },
        { q: "Pilih perkataan KVK:", a: "teleskop angkasa", opts: ["teleskop angkasa", "teleskop", "mikroskop", "kamera"] },
        { q: "Manakah perkataan KVK?", a: "satelit buatan", opts: ["satelit buatan", "satelit", "kapal terbang", "helikopter"] },
        { q: "Yang manakah perkataan KVK?", a: "stesen angkasa", opts: ["stesen angkasa", "satelit", "kapal terbang", "helikopter"] },
        { q: "Pilih perkataan KVK:", a: "angkasawan", opts: ["angkasawan", "astronaut", "pilot", "juruterbang"] },
        { q: "Manakah perkataan KVK?", a: "astronaut", opts: ["astronaut", "angkasawan", "pilot", "juruterbang"] },
        { q: "Yang manakah perkataan KVK?", a: "pilot", opts: ["pilot", "angkasawan", "astronaut", "juruterbang"] }
    ]
};

export default BM_KP8;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP8;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP8 = BM_KP8;
}
