// KP9 — Suku kata KVK

const BM_KP9 = {
    id: 'bm-kp9',
    code: 'KP9',
    name: 'KP9 — Suku kata KVK',
    description: '*(contoh: bas, roti, buku)*',
    category: 'bm',
    questionBank: [
        // Basic KVK syllable identification (30 questions)
        { q: "Yang manakah suku kata KVK?", a: "bas", opts: ["bas", "ba", "sa", "as"] },
        { q: "Pilih suku kata KVK:", a: "roti", opts: ["roti", "ro", "ti", "ot"] },
        { q: "Manakah suku kata KVK?", a: "buku", opts: ["buku", "bu", "ku", "uk"] },
        { q: "Yang manakah suku kata KVK?", a: "meja", opts: ["meja", "me", "ja", "ej"] },
        { q: "Pilih suku kata KVK:", a: "rumah", opts: ["rumah", "ru", "mah", "um"] },
        { q: "Manakah suku kata KVK?", a: "kereta", opts: ["kereta", "ke", "reta", "er"] },
        { q: "Yang manakah suku kata KVK?", a: "kapal", opts: ["kapal", "ka", "pal", "ap"] },
        { q: "Pilih suku kata KVK:", a: "lori", opts: ["lori", "lo", "ri", "or"] },
        { q: "Manakah suku kata KVK?", a: "ikan", opts: ["ikan", "i", "kan", "ak"] },
        { q: "Yang manakah suku kata KVK?", a: "ayam", opts: ["ayam", "a", "yam", "ya"] },
        { q: "Pilih suku kata KVK:", a: "lembu", opts: ["lembu", "lem", "bu", "em"] },
        { q: "Manakah suku kata KVK?", a: "kambing", opts: ["kambing", "kam", "bing", "am"] },
        { q: "Yang manakah suku kata KVK?", a: "nasi", opts: ["nasi", "na", "si", "as"] },
        { q: "Pilih suku kata KVK:", a: "air", opts: ["air", "a", "ir", "ai"] },
        { q: "Manakah suku kata KVK?", a: "susu", opts: ["susu", "su", "su", "us"] },
        { q: "Yang manakah suku kata KVK?", a: "teh", opts: ["teh", "te", "h", "eh"] },
        { q: "Pilih suku kata KVK:", a: "kopi", opts: ["kopi", "ko", "pi", "op"] },
        { q: "Manakah suku kata KVK?", a: "baju", opts: ["baju", "ba", "ju", "aj"] },
        { q: "Yang manakah suku kata KVK?", a: "seluar", opts: ["seluar", "se", "luar", "el"] },
        { q: "Pilih suku kata KVK:", a: "kasut", opts: ["kasut", "ka", "sut", "as"] },
        { q: "Manakah suku kata KVK?", a: "topi", opts: ["topi", "to", "pi", "op"] },
        { q: "Yang manakah suku kata KVK?", a: "mata", opts: ["mata", "ma", "ta", "at"] },
        { q: "Pilih suku kata KVK:", a: "hidung", opts: ["hidung", "hi", "dung", "id"] },
        { q: "Manakah suku kata KVK?", a: "telinga", opts: ["telinga", "te", "linga", "el"] },
        { q: "Yang manakah suku kata KVK?", a: "mulut", opts: ["mulut", "mu", "lut", "ul"] },
        { q: "Pilih suku kata KVK:", a: "tangan", opts: ["tangan", "ta", "ngan", "an"] },
        { q: "Manakah suku kata KVK?", a: "kaki", opts: ["kaki", "ka", "ki", "ak"] },
        { q: "Yang manakah suku kata KVK?", a: "kepala", opts: ["kepala", "ke", "pala", "ep"] },
        { q: "Pilih suku kata KVK:", a: "badan", opts: ["badan", "ba", "dan", "ad"] },
        { q: "Manakah suku kata KVK?", a: "bapa", opts: ["bapa", "ba", "pa", "ap"] },
        
        // More KVK syllable combinations (20 questions)
        { q: "Yang manakah suku kata KVK?", a: "ibu", opts: ["ibu", "i", "bu", "ib"] },
        { q: "Pilih suku kata KVK:", a: "adik", opts: ["adik", "a", "dik", "ad"] },
        { q: "Manakah suku kata KVK?", a: "kakak", opts: ["kakak", "ka", "kak", "ak"] },
        { q: "Yang manakah suku kata KVK?", a: "sekolah", opts: ["sekolah", "se", "kolah", "ek"] },
        { q: "Pilih suku kata KVK:", a: "kedai", opts: ["kedai", "ke", "dai", "ed"] },
        { q: "Manakah suku kata KVK?", a: "pejabat", opts: ["pejabat", "pe", "jabat", "ej"] },
        { q: "Yang manakah suku kata KVK?", a: "pasar", opts: ["pasar", "pa", "sar", "as"] },
        { q: "Pilih suku kata KVK:", a: "mall", opts: ["mall", "ma", "ll", "al"] },
        { q: "Manakah suku kata KVK?", a: "pasaraya", opts: ["pasaraya", "pa", "saraya", "as"] },
        { q: "Yang manakah suku kata KVK?", a: "bank", opts: ["bank", "ba", "nk", "an"] },
        { q: "Pilih suku kata KVK:", a: "hospital", opts: ["hospital", "ho", "spital", "os"] },
        { q: "Manakah suku kata KVK?", a: "klinik", opts: ["klinik", "kli", "nik", "li"] },
        { q: "Yang manakah suku kata KVK?", a: "farmasi", opts: ["farmasi", "far", "masi", "ar"] },
        { q: "Pilih suku kata KVK:", a: "polis", opts: ["polis", "po", "lis", "ol"] },
        { q: "Manakah suku kata KVK?", a: "askar", opts: ["askar", "as", "kar", "sk"] },
        { q: "Yang manakah suku kata KVK?", a: "bomba", opts: ["bomba", "bo", "mba", "om"] },
        { q: "Pilih suku kata KVK:", a: "doktor", opts: ["doktor", "dok", "tor", "ok"] },
        { q: "Manakah suku kata KVK?", a: "guru", opts: ["guru", "gu", "ru", "ur"] },
        { q: "Yang manakah suku kata KVK?", a: "murid", opts: ["murid", "mu", "rid", "ur"] },
        { q: "Pilih suku kata KVK:", a: "pelajar", opts: ["pelajar", "pe", "lajar", "el"] },
        
        // Additional KVK syllable combinations (20 questions)
        { q: "Manakah suku kata KVK?", a: "cikgu", opts: ["cikgu", "cik", "gu", "ik"] },
        { q: "Yang manakah suku kata KVK?", a: "pen", opts: ["pen", "pe", "n", "en"] },
        { q: "Pilih suku kata KVK:", a: "pensel", opts: ["pensel", "pen", "sel", "en"] },
        { q: "Manakah suku kata KVK?", a: "pemadam", opts: ["pemadam", "pe", "madam", "em"] },
        { q: "Yang manakah suku kata KVK?", a: "kerusi", opts: ["kerusi", "ke", "rusi", "er"] },
        { q: "Pilih suku kata KVK:", a: "katil", opts: ["katil", "ka", "til", "at"] },
        { q: "Manakah suku kata KVK?", a: "almari", opts: ["almari", "al", "mari", "lm"] },
        { q: "Yang manakah suku kata KVK?", a: "bangunan", opts: ["bangunan", "ba", "ngunan", "an"] },
        { q: "Pilih suku kata KVK:", a: "telefon", opts: ["telefon", "te", "lefon", "el"] },
        { q: "Manakah suku kata KVK?", a: "komputer", opts: ["komputer", "kom", "puter", "om"] },
        { q: "Yang manakah suku kata KVK?", a: "radio", opts: ["radio", "ra", "dio", "ad"] },
        { q: "Pilih suku kata KVK:", a: "televisyen", opts: ["televisyen", "te", "levisyen", "el"] },
        { q: "Manakah suku kata KVK?", a: "basikal", opts: ["basikal", "ba", "sikal", "as"] },
        { q: "Yang manakah suku kata KVK?", a: "motorsikal", opts: ["motorsikal", "mo", "torsikal", "ot"] },
        { q: "Pilih suku kata KVK:", a: "kapal terbang", opts: ["kapal terbang", "ka", "pal terbang", "ap"] },
        { q: "Manakah suku kata KVK?", a: "helikopter", opts: ["helikopter", "he", "likopter", "el"] },
        { q: "Yang manakah suku kata KVK?", a: "keretapi", opts: ["keretapi", "ke", "retapi", "er"] },
        { q: "Pilih suku kata KVK:", a: "bas ekspres", opts: ["bas ekspres", "ba", "s ekspres", "as"] },
        { q: "Manakah suku kata KVK?", a: "teksi", opts: ["teksi", "te", "ksi", "ek"] },
        { q: "Yang manakah suku kata KVK?", a: "van", opts: ["van", "va", "n", "an"] },
        
        // More KVK syllable combinations (20 questions)
        { q: "Pilih suku kata KVK:", a: "trak", opts: ["trak", "tr", "ak", "ra"] },
        { q: "Manakah suku kata KVK?", a: "bot", opts: ["bot", "bo", "t", "ot"] },
        { q: "Yang manakah suku kata KVK?", a: "feri", opts: ["feri", "fe", "ri", "er"] },
        { q: "Pilih suku kata KVK:", a: "yacht", opts: ["yacht", "ya", "cht", "ac"] },
        { q: "Manakah suku kata KVK?", a: "jet", opts: ["jet", "je", "t", "et"] },
        { q: "Yang manakah suku kata KVK?", a: "pesawat", opts: ["pesawat", "pe", "sawat", "es"] },
        { q: "Pilih suku kata KVK:", a: "satelit", opts: ["satelit", "sa", "telit", "at"] },
        { q: "Manakah suku kata KVK?", a: "roket", opts: ["roket", "ro", "ket", "ok"] },
        { q: "Yang manakah suku kata KVK?", a: "angkasa", opts: ["angkasa", "an", "gasa", "ng"] },
        { q: "Pilih suku kata KVK:", a: "bumi", opts: ["bumi", "bu", "mi", "um"] },
        { q: "Manakah suku kata KVK?", a: "bulan", opts: ["bulan", "bu", "lan", "ul"] },
        { q: "Yang manakah suku kata KVK?", a: "matahari", opts: ["matahari", "ma", "tahari", "at"] },
        { q: "Pilih suku kata KVK:", a: "bintang", opts: ["bintang", "bin", "tang", "in"] },
        { q: "Manakah suku kata KVK?", a: "planet", opts: ["planet", "pla", "net", "la"] },
        { q: "Yang manakah suku kata KVK?", a: "galaksi", opts: ["galaksi", "ga", "laksi", "al"] },
        { q: "Pilih suku kata KVK:", a: "bima sakti", opts: ["bima sakti", "bi", "ma sakti", "im"] },
        { q: "Manakah suku kata KVK?", a: "alam semesta", opts: ["alam semesta", "a", "lam semesta", "al"] },
        { q: "Yang manakah suku kata KVK?", a: "kosmos", opts: ["kosmos", "ko", "smos", "os"] },
        { q: "Pilih suku kata KVK:", a: "angkasa lepas", opts: ["angkasa lepas", "an", "gasa lepas", "ng"] },
        { q: "Manakah suku kata KVK?", a: "teleskop", opts: ["teleskop", "te", "leskop", "el"] },
        
        // Final KVK syllable combinations (10 questions)
        { q: "Yang manakah suku kata KVK?", a: "mikroskop", opts: ["mikroskop", "mi", "kroskop", "ik"] },
        { q: "Pilih suku kata KVK:", a: "kamera", opts: ["kamera", "ka", "mera", "am"] },
        { q: "Manakah suku kata KVK?", a: "binokular", opts: ["binokular", "bi", "nokular", "in"] },
        { q: "Yang manakah suku kata KVK?", a: "teleskop angkasa", opts: ["teleskop angkasa", "te", "leskop angkasa", "el"] },
        { q: "Pilih suku kata KVK:", a: "satelit buatan", opts: ["satelit buatan", "sa", "telit buatan", "at"] },
        { q: "Manakah suku kata KVK?", a: "stesen angkasa", opts: ["stesen angkasa", "ste", "sen angkasa", "te"] },
        { q: "Yang manakah suku kata KVK?", a: "angkasawan", opts: ["angkasawan", "an", "kasawan", "ng"] },
        { q: "Pilih suku kata KVK:", a: "astronaut", opts: ["astronaut", "as", "tronaut", "st"] },
        { q: "Manakah suku kata KVK?", a: "pilot", opts: ["pilot", "pi", "lot", "il"] },
        { q: "Yang manakah suku kata KVK?", a: "juruterbang", opts: ["juruterbang", "ju", "ruterbang", "ur"] }
    ]
};

export default BM_KP9;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP9;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP9 = BM_KP9;
}
