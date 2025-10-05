// KP30 — Perkataan KV + KV + KVK (dua suku kata terbuka + suku kata tertutup)
// Remedi: Fail asal mengandungi corak tidak tepat (KV + KV + KVKK) dan banyak gabungan tidak autentik.
// Fail ini dibina semula mengikut rubric suku kata: fokus kata tiga suku kata corak KV + KV + KVK sahaja.

const BM_KP30 = {
    id: 'bm-kp30',
    code: 'KP30',
    name: 'KP30 — Perkataan KV + KV + KVK',
    description: '*Perkataan dengan corak KV + KV + KVK (dua suku kata terbuka diikuti suku kata tertutup). Contoh: sekolah, belajar, selamat, pelajar.*',
    category: 'bm',
    questionBank: [
        // -------------------------------
        // 1. Bacaan perkataan (asas corak)
        // -------------------------------
        { q: "Baca perkataan: sekolah", a: "sekolah", opts: ['sekolah', 'sekola', 'kolehah', 'kolase'] },
        { q: "Baca perkataan: belajar", a: "belajar", opts: ['belajar', 'belaja', 'labajar', 'jarbela'] },
        { q: "Baca perkataan: selamat", a: "selamat", opts: ['selamat', 'selama', 'lesamat', 'matsela'] },
        { q: "Baca perkataan: pelajar", a: "pelajar", opts: ['pelajar', 'pelaja', 'lapajar', 'jarpela'] },
        { q: "Baca perkataan: kelakar", a: "kelakar", opts: ['kelakar', 'kekalar', 'lakarke', 'karleka'] },
        { q: "Baca perkataan: kelawar", a: "kelawar", opts: ['kelawar', 'kelawa', 'lawarke', 'warleka'] },
        { q: "Baca perkataan: keramat", a: "keramat", opts: ['keramat', 'kerrama', 'ramatke', 'matkera'] },
        { q: "Baca perkataan: gemilang", a: "gemilang", opts: ['gemilang', 'geilang', 'milang', 'langemi'] },
    { q: "Baca perkataan: semangat", a: "semangat", opts: ['semangat', 'semanaga', 'mangatse', 'gatseman'] },
    { q: "Baca perkataan: kelibat", a: "kelibat", opts: ['kelibat', 'keliba', 'libatke', 'batkeli'] },

        // -------------------------------
        // 2. Pengiraan suku kata
        // -------------------------------
        { q: "Perkataan 'sekolah' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'belajar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'selamat' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'pelajar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelakar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelawar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'keramat' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'gemilang' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
    { q: "Perkataan 'semangat' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
    { q: "Perkataan 'kelibat' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },

        // -------------------------------
        // 3. Pecahan suku kata
        // -------------------------------
        { q: "Suku kata pertama 'sekolah' ialah?", a: "se", opts: ['se', 'ko', 'lah', 'sek'] },
        { q: "Suku kata kedua 'sekolah' ialah?", a: "ko", opts: ['ko', 'se', 'lah', 'kol'] },
        { q: "Suku kata ketiga 'sekolah' ialah?", a: "lah", opts: ['lah', 'se', 'ko', 'lak'] },
        { q: "Suku kata pertama 'belajar' ialah?", a: "be", opts: ['be', 'la', 'jar', 'bel'] },
        { q: "Suku kata kedua 'belajar' ialah?", a: "la", opts: ['la', 'be', 'jar', 'laj'] },
        { q: "Suku kata ketiga 'belajar' ialah?", a: "jar", opts: ['jar', 'be', 'la', 'jarh'] },
        { q: "Suku kata pertama 'selamat' ialah?", a: "se", opts: ['se', 'la', 'mat', 'sel'] },
        { q: "Suku kata kedua 'selamat' ialah?", a: "la", opts: ['la', 'se', 'mat', 'lam'] },
        { q: "Suku kata ketiga 'selamat' ialah?", a: "mat", opts: ['mat', 'se', 'la', 'tam'] },
        { q: "Suku kata pertama 'pelajar' ialah?", a: "pe", opts: ['pe', 'la', 'jar', 'pel'] },
        { q: "Suku kata kedua 'pelajar' ialah?", a: "la", opts: ['la', 'pe', 'jar', 'laj'] },
        { q: "Suku kata ketiga 'pelajar' ialah?", a: "jar", opts: ['jar', 'pe', 'la', 'jarh'] },
        { q: "Suku kata pertama 'kelakar' ialah?", a: "ke", opts: ['ke', 'la', 'kar', 'kel'] },
        { q: "Suku kata kedua 'kelakar' ialah?", a: "la", opts: ['la', 'ke', 'kar', 'lak'] },
        { q: "Suku kata ketiga 'kelakar' ialah?", a: "kar", opts: ['kar', 'ke', 'la', 'karh'] },
        { q: "Suku kata pertama 'kelawar' ialah?", a: "ke", opts: ['ke', 'la', 'war', 'kel'] },
        { q: "Suku kata kedua 'kelawar' ialah?", a: "la", opts: ['la', 'ke', 'war', 'law'] },
        { q: "Suku kata ketiga 'kelawar' ialah?", a: "war", opts: ['war', 'ke', 'la', 'warh'] },
        { q: "Suku kata pertama 'keramat' ialah?", a: "ke", opts: ['ke', 'ra', 'mat', 'ker'] },
        { q: "Suku kata kedua 'keramat' ialah?", a: "ra", opts: ['ra', 'ke', 'mat', 'ram'] },
        { q: "Suku kata ketiga 'keramat' ialah?", a: "mat", opts: ['mat', 'ke', 'ra', 'tam'] },
        { q: "Suku kata pertama 'gemilang' ialah?", a: "ge", opts: ['ge', 'mi', 'lang', 'gem'] },
        { q: "Suku kata kedua 'gemilang' ialah?", a: "mi", opts: ['mi', 'ge', 'lang', 'mil'] },
        { q: "Suku kata ketiga 'gemilang' ialah?", a: "lang", opts: ['lang', 'ge', 'mi', 'langg'] },
    { q: "Suku kata pertama 'semangat' ialah?", a: "se", opts: ['se', 'ma', 'ngat', 'sem'] },
    { q: "Suku kata kedua 'semangat' ialah?", a: "ma", opts: ['ma', 'se', 'ngat', 'man'] },
    { q: "Suku kata ketiga 'semangat' ialah?", a: "ngat", opts: ['ngat', 'se', 'ma', 'gat'] },
    { q: "Suku kata pertama 'kelibat' ialah?", a: "ke", opts: ['ke', 'li', 'bat', 'kel'] },
    { q: "Suku kata kedua 'kelibat' ialah?", a: "li", opts: ['li', 'ke', 'bat', 'lib'] },
    { q: "Suku kata ketiga 'kelibat' ialah?", a: "bat", opts: ['bat', 'ke', 'li', 'batk'] },

        // -------------------------------
        // 4. Pengecaman corak (pattern recognition)
        // -------------------------------
        { q: "Perkataan 'sekolah' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'belajar' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'selamat' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'pelajar' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'kelakar' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'kelawar' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'keramat' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
        { q: "Perkataan 'gemilang' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
    { q: "Perkataan 'semangat' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },
    { q: "Perkataan 'kelibat' mengikut corak?", a: "KV + KV + KVK", opts: ['KV + KV + KVK', 'KV + KVK + KV', 'KVK + KV + KVK', 'KV + KV + KV'] },

        // -------------------------------
        // 5. Corak suku kata individu
        // -------------------------------
        { q: "Suku kata 'se' dalam 'sekolah' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'ko' dalam 'sekolah' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'lah' dalam 'sekolah' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'be' dalam 'belajar' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'la' dalam 'belajar' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'jar' dalam 'belajar' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'ke' dalam 'kelakar' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'la' dalam 'kelakar' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'kar' dalam 'kelakar' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'ge' dalam 'gemilang' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'mi' dalam 'gemilang' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'lang' dalam 'gemilang' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },

        // -------------------------------
        // 6. Suku kata hilang (missing syllable)
        // -------------------------------
        { q: "___ + ko + lah = sekolah", a: "se", opts: ['se', 'ko', 'lah', 'sek'] },
        { q: "se + ___ + lah = sekolah", a: "ko", opts: ['ko', 'se', 'lah', 'kol'] },
        { q: "se + ko + ___ = sekolah", a: "lah", opts: ['lah', 'se', 'ko', 'lak'] },
        { q: "___ + la + jar = belajar", a: "be", opts: ['be', 'la', 'jar', 'bel'] },
        { q: "be + ___ + jar = belajar", a: "la", opts: ['la', 'be', 'jar', 'laj'] },
        { q: "be + la + ___ = belajar", a: "jar", opts: ['jar', 'be', 'la', 'jarh'] },
        { q: "___ + la + mat = selamat", a: "se", opts: ['se', 'la', 'mat', 'sel'] },
        { q: "se + ___ + mat = selamat", a: "la", opts: ['la', 'se', 'mat', 'lam'] },
        { q: "se + la + ___ = selamat", a: "mat", opts: ['mat', 'se', 'la', 'tam'] },
        { q: "___ + la + jar = pelajar", a: "pe", opts: ['pe', 'la', 'jar', 'pel'] },
        { q: "pe + ___ + jar = pelajar", a: "la", opts: ['la', 'pe', 'jar', 'laj'] },
        { q: "pe + la + ___ = pelajar", a: "jar", opts: ['jar', 'pe', 'la', 'jarh'] },
        { q: "___ + la + kar = kelakar", a: "ke", opts: ['ke', 'la', 'kar', 'kel'] },
        { q: "ke + ___ + kar = kelakar", a: "la", opts: ['la', 'ke', 'kar', 'lak'] },
        { q: "ke + la + ___ = kelakar", a: "kar", opts: ['kar', 'ke', 'la', 'karh'] },
        { q: "___ + la + war = kelawar", a: "ke", opts: ['ke', 'la', 'war', 'kel'] },
        { q: "ke + ___ + war = kelawar", a: "la", opts: ['la', 'ke', 'war', 'law'] },
        { q: "ke + la + ___ = kelawar", a: "war", opts: ['war', 'ke', 'la', 'warh'] },
        { q: "___ + ra + mat = keramat", a: "ke", opts: ['ke', 'ra', 'mat', 'ker'] },
        { q: "ke + ___ + mat = keramat", a: "ra", opts: ['ra', 'ke', 'mat', 'ram'] },
        { q: "ke + ra + ___ = keramat", a: "mat", opts: ['mat', 'ke', 'ra', 'tam'] },
        { q: "___ + mi + lang = gemilang", a: "ge", opts: ['ge', 'mi', 'lang', 'gem'] },
        { q: "ge + ___ + lang = gemilang", a: "mi", opts: ['mi', 'ge', 'lang', 'mil'] },
        { q: "ge + mi + ___ = gemilang", a: "lang", opts: ['lang', 'ge', 'mi', 'langg'] },
    { q: "___ + ma + ngat = semangat", a: "se", opts: ['se', 'ma', 'ngat', 'sem'] },
    { q: "se + ___ + ngat = semangat", a: "ma", opts: ['ma', 'se', 'ngat', 'man'] },
    { q: "se + ma + ___ = semangat", a: "ngat", opts: ['ngat', 'se', 'ma', 'gat'] },
    { q: "___ + li + bat = kelibat", a: "ke", opts: ['ke', 'li', 'bat', 'kel'] },
    { q: "ke + ___ + bat = kelibat", a: "li", opts: ['li', 'ke', 'bat', 'lib'] },
    { q: "ke + li + ___ = kelibat", a: "bat", opts: ['bat', 'ke', 'li', 'batk'] },

        // -------------------------------
        // 7. Penyusunan semula (word completion)
        // -------------------------------
        { q: "se + ko + lah = ?", a: "sekolah", opts: ['sekolah', 'sekola', 'kolehas', 'olahsek'] },
        { q: "be + la + jar = ?", a: "belajar", opts: ['belajar', 'belaja', 'jarbela', 'labajar'] },
        { q: "se + la + mat = ?", a: "selamat", opts: ['selamat', 'semalat', 'lamatse', 'matsela'] },
        { q: "pe + la + jar = ?", a: "pelajar", opts: ['pelajar', 'pelaja', 'lapajar', 'jarpela'] },
        { q: "ke + la + kar = ?", a: "kelakar", opts: ['kelakar', 'kekalar', 'lakarke', 'karleka'] },
        { q: "ke + la + war = ?", a: "kelawar", opts: ['kelawar', 'kelawa', 'lawarke', 'warleka'] },
        { q: "ke + ra + mat = ?", a: "keramat", opts: ['keramat', 'kerrama', 'ramatke', 'matkera'] },
        { q: "ge + mi + lang = ?", a: "gemilang", opts: ['gemilang', 'geilang', 'milang', 'langemi'] },
    { q: "se + ma + ngat = ?", a: "semangat", opts: ['semangat', 'semanaga', 'mangatse', 'gatseman'] },
    { q: "ke + li + bat = ?", a: "kelibat", opts: ['kelibat', 'keliba', 'libatke', 'batkeli'] },

        // -------------------------------
        // 8. Soalan aplikasi ringkas (≤ 10% kandungan)
        // -------------------------------
        { q: "Sekolah tempat untuk?", a: "belajar", opts: ['belajar', 'tidur', 'berjalan', 'berlari'] },
        { q: "Belajar membantu kita dapat?", a: "ilmu", opts: ['ilmu', 'bising', 'lampu', 'jalan'] },
        { q: "Selamat bermaksud?", a: "tidak bahaya", opts: ['tidak bahaya', 'gelap', 'lapar', 'hujan'] },
        { q: "Pelajar ialah orang yang?", a: "belajar", opts: ['belajar', 'menjahit', 'menebang', 'membaiki'] },
        { q: "Semangat yang kuat membantu kita?", a: "berusaha", opts: ['berusaha', 'tidur sahaja', 'menangis', 'meninggal'] },
        { q: "Gemilang membawa maksud?", a: "cemerlang", opts: ['cemerlang', 'gelap', 'rosak', 'gagal'] },
        { q: "Kelakar bermaksud?", a: "lucu", opts: ['lucu', 'pahit', 'garang', 'sunyi'] },
        { q: "Keramat sering dianggap?", a: "mulia", opts: ['mulia', 'murah', 'sesak', 'sejuk'] },
        { q: "Kelawar ialah sejenis?", a: "haiwan", opts: ['haiwan', 'minuman', 'cuaca', 'bunga'] },
        { q: "Ngat dalam 'semangat' bunyinya di akhir ialah?", a: "ng + t", opts: ['ng + t', 'ng + k', 'm + t', 'n + g'] },

        // -------------------------------
        // 9. Pemadanan corak / bukan corak
        // -------------------------------
        { q: "Yang manakah corak KV + KV + KVK?", a: "sekolah", opts: ['sekolah', 'buku', 'meja', 'susu'] },
        { q: "Yang manakah corak KV + KV + KVK?", a: "belajar", opts: ['belajar', 'mata', 'lori', 'baju'] },
        { q: "Yang manakah corak KV + KV + KVK?", a: "kelakar", opts: ['kelakar', 'ayam', 'air', 'kuda'] },
        { q: "Yang manakah corak KV + KV + KVK?", a: "gemilang", opts: ['gemilang', 'kecil', 'besar', 'api'] },
        { q: "Yang manakah corak KV + KV + KVK?", a: "semangat", opts: ['semangat', 'baju', 'tangan', 'ikan'] },
        { q: "Yang manakah BUKAN corak KV + KV + KVK?", a: "buku", opts: ['buku', 'sekolah', 'belajar', 'selamat'] },
        { q: "Yang manakah BUKAN corak KV + KV + KVK?", a: "mata", opts: ['mata', 'pelajar', 'kelakar', 'gemilang'] },
        { q: "Yang manakah BUKAN corak KV + KV + KVK?", a: "air", opts: ['air', 'semangat', 'keramat', 'kelawar'] },
        { q: "Yang manakah BUKAN corak KV + KV + KVK?", a: "baju", opts: ['baju', 'keramat', 'gemilang', 'selamat'] },
    { q: "Yang manakah BUKAN corak KV + KV + KVK?", a: "ikan", opts: ['ikan', 'kelibat', 'belajar', 'sekolah'] },

        // -------------------------------
        // 10. Semakan akhir (ulang corak)
        // -------------------------------
        { q: "Manakah perkataan KV + KV + KVK?", a: "keramat", opts: ['keramat', 'kereta', 'mata', 'batu'] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "kelawar", opts: ['kelawar', 'kelapa', 'kuda', 'lima'] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "pelajar", opts: ['pelajar', 'pelari', 'peluru', 'pelita'] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "selamat", opts: ['selamat', 'selama', 'selera', 'selesa'] },
    { q: "Manakah perkataan KV + KV + KVK?", a: "gemilang", opts: ['gemilang', 'gembira', 'gemala', 'gerimis'] },
        { q: "Manakah BUKAN perkataan KV + KV + KVK?", a: "kereta", opts: ['kereta', 'keramat', 'kelakar', 'kelawar'] },
        { q: "Manakah BUKAN perkataan KV + KV + KVK?", a: "kelapa", opts: ['kelapa', 'kelakar', 'gemilang', 'semangat'] },
        { q: "Manakah BUKAN perkataan KV + KV + KVK?", a: "batu", opts: ['batu', 'sekolah', 'pelajar', 'keramat'] },
        { q: "Manakah BUKAN perkataan KV + KV + KVK?", a: "mata", opts: ['mata', 'selamat', 'belajar', 'kelakar'] },
    { q: "Manakah BUKAN perkataan KV + KV + KVK?", a: "air", opts: ['air', 'gemilang', 'semangat', 'kelibat'] }
    ]
};

export default BM_KP30;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP30;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP30 = BM_KP30;
}
