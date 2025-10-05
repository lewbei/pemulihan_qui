// KP13 — Perkataan KVK + KVK

const BM_KP13 = {
    id: 'bm-kp13',
    code: 'KP13',
    name: 'KP13 — Perkataan KVK + KVK',
    description: '*(contoh: basikal, telefon, komputer)*',
    category: 'bm',
    questionBank: [
        // Basic KVK+KVK identification (30 questions)
        { q: "Yang manakah perkataan KVK + KVK?", a: "basikal", opts: ["basikal", "kereta", "kapal", "lori"] },
        { q: "Pilih perkataan KVK + KVK:", a: "telefon", opts: ["telefon", "radio", "televisyen", "komputer"] },
        { q: "Manakah perkataan KVK + KVK?", a: "komputer", opts: ["komputer", "telefon", "radio", "televisyen"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "televisyen", opts: ["televisyen", "telefon", "radio", "komputer"] },
        { q: "Pilih perkataan KVK + KVK:", a: "radio", opts: ["radio", "telefon", "televisyen", "komputer"] },
        { q: "Manakah perkataan KVK + KVK?", a: "hospital", opts: ["hospital", "klinik", "farmasi", "kedai"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "klinik", opts: ["klinik", "hospital", "farmasi", "kedai"] },
        { q: "Pilih perkataan KVK + KVK:", a: "farmasi", opts: ["farmasi", "hospital", "klinik", "kedai"] },
        { q: "Manakah perkataan KVK + KVK?", a: "polis", opts: ["polis", "askar", "bomba", "doktor"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "askar", opts: ["askar", "polis", "bomba", "doktor"] },
        { q: "Pilih perkataan KVK + KVK:", a: "bomba", opts: ["bomba", "polis", "askar", "doktor"] },
        { q: "Manakah perkataan KVK + KVK?", a: "doktor", opts: ["doktor", "polis", "askar", "bomba"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "guru", opts: ["guru", "murid", "pelajar", "cikgu"] },
        { q: "Pilih perkataan KVK + KVK:", a: "murid", opts: ["murid", "guru", "pelajar", "cikgu"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pelajar", opts: ["pelajar", "guru", "murid", "cikgu"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "cikgu", opts: ["cikgu", "guru", "murid", "pelajar"] },
        { q: "Pilih perkataan KVK + KVK:", a: "buku", opts: ["buku", "pen", "pensel", "pemadam"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pen", opts: ["pen", "buku", "pensel", "pemadam"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pensel", opts: ["pensel", "buku", "pen", "pemadam"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam", opts: ["pemadam", "buku", "pen", "pensel"] },
        { q: "Manakah perkataan KVK + KVK?", a: "meja", opts: ["meja", "kerusi", "katil", "almari"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "kerusi", opts: ["kerusi", "meja", "katil", "almari"] },
        { q: "Pilih perkataan KVK + KVK:", a: "katil", opts: ["katil", "meja", "kerusi", "almari"] },
        { q: "Manakah perkataan KVK + KVK?", a: "almari", opts: ["almari", "meja", "kerusi", "katil"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "rumah", opts: ["rumah", "bangunan", "sekolah", "kedai"] },
        { q: "Pilih perkataan KVK + KVK:", a: "bangunan", opts: ["bangunan", "rumah", "sekolah", "kedai"] },
        { q: "Manakah perkataan KVK + KVK?", a: "sekolah", opts: ["sekolah", "rumah", "bangunan", "kedai"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "kedai", opts: ["kedai", "rumah", "bangunan", "sekolah"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pasar", opts: ["pasar", "kedai", "mall", "pasaraya"] },
        { q: "Manakah perkataan KVK + KVK?", a: "mall", opts: ["mall", "pasar", "kedai", "pasaraya"] },
        
        // More KVK+KVK combinations (20 questions)
        { q: "Yang manakah perkataan KVK + KVK?", a: "pasaraya", opts: ["pasaraya", "pasar", "kedai", "mall"] },
        { q: "Pilih perkataan KVK + KVK:", a: "bank", opts: ["bank", "kedai", "pejabat", "sekolah"] },
        { q: "Manakah perkataan KVK + KVK?", a: "motorsikal", opts: ["motorsikal", "kereta", "basikal", "bas"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "kapal terbang", opts: ["kapal terbang", "kereta", "bas", "kapal"] },
        { q: "Pilih perkataan KVK + KVK:", a: "helikopter", opts: ["helikopter", "kapal terbang", "kereta", "bas"] },
        { q: "Manakah perkataan KVK + KVK?", a: "keretapi", opts: ["keretapi", "kereta", "bas", "lori"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "bas ekspres", opts: ["bas ekspres", "kereta", "bas", "lori"] },
        { q: "Pilih perkataan KVK + KVK:", a: "teksi", opts: ["teksi", "kereta", "bas", "lori"] },
        { q: "Manakah perkataan KVK + KVK?", a: "van", opts: ["van", "kereta", "bas", "lori"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "trak", opts: ["trak", "kereta", "bas", "lori"] },
        { q: "Pilih perkataan KVK + KVK:", a: "bot", opts: ["bot", "kapal", "kereta", "bas"] },
        { q: "Manakah perkataan KVK + KVK?", a: "feri", opts: ["feri", "kapal", "bot", "kereta"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "yacht", opts: ["yacht", "kapal", "bot", "feri"] },
        { q: "Pilih perkataan KVK + KVK:", a: "jet", opts: ["jet", "kapal terbang", "helikopter", "kereta"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pesawat", opts: ["pesawat", "kapal terbang", "helikopter", "jet"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "satelit", opts: ["satelit", "kapal terbang", "helikopter", "jet"] },
        { q: "Pilih perkataan KVK + KVK:", a: "roket", opts: ["roket", "kapal terbang", "helikopter", "jet"] },
        { q: "Manakah perkataan KVK + KVK?", a: "angkasa", opts: ["angkasa", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "bumi", opts: ["bumi", "bulan", "matahari", "bintang"] },
        { q: "Pilih perkataan KVK + KVK:", a: "bulan", opts: ["bulan", "bumi", "matahari", "bintang"] },
        
        // Additional KVK+KVK combinations (20 questions)
        { q: "Manakah perkataan KVK + KVK?", a: "matahari", opts: ["matahari", "bumi", "bulan", "bintang"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "bintang", opts: ["bintang", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK + KVK:", a: "planet", opts: ["planet", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK + KVK?", a: "galaksi", opts: ["galaksi", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "bima sakti", opts: ["bima sakti", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK + KVK:", a: "alam semesta", opts: ["alam semesta", "bumi", "bulan", "matahari"] },
        { q: "Manakah perkataan KVK + KVK?", a: "kosmos", opts: ["kosmos", "bumi", "bulan", "matahari"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "angkasa lepas", opts: ["angkasa lepas", "bumi", "bulan", "matahari"] },
        { q: "Pilih perkataan KVK + KVK:", a: "teleskop", opts: ["teleskop", "mikroskop", "kamera", "binokular"] },
        { q: "Manakah perkataan KVK + KVK?", a: "mikroskop", opts: ["mikroskop", "teleskop", "kamera", "binokular"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "kamera", opts: ["kamera", "teleskop", "mikroskop", "binokular"] },
        { q: "Pilih perkataan KVK + KVK:", a: "binokular", opts: ["binokular", "teleskop", "mikroskop", "kamera"] },
        { q: "Manakah perkataan KVK + KVK?", a: "teleskop angkasa", opts: ["teleskop angkasa", "teleskop", "mikroskop", "kamera"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "satelit buatan", opts: ["satelit buatan", "satelit", "kapal terbang", "helikopter"] },
        { q: "Pilih perkataan KVK + KVK:", a: "stesen angkasa", opts: ["stesen angkasa", "satelit", "kapal terbang", "helikopter"] },
        { q: "Manakah perkataan KVK + KVK?", a: "angkasawan", opts: ["angkasawan", "astronaut", "pilot", "juruterbang"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "astronaut", opts: ["astronaut", "angkasawan", "pilot", "juruterbang"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pilot", opts: ["pilot", "angkasawan", "astronaut", "juruterbang"] },
        { q: "Manakah perkataan KVK + KVK?", a: "juruterbang", opts: ["juruterbang", "angkasawan", "astronaut", "pilot"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam api", opts: ["pemadam api", "pemadam", "api", "kebakaran"] },
        
        // More KVK+KVK combinations (20 questions)
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Yang manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Pilih perkataan KVK + KVK:", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] },
        { q: "Manakah perkataan KVK + KVK?", a: "pemadam kebakaran", opts: ["pemadam kebakaran", "pemadam api", "api", "kebakaran"] }
    ]
};

export default BM_KP13;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP13;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP13 = BM_KP13;
}
