// KP31 — Perkataan corak KV + KV + KV (tiga suku kata terbuka)
// Rebuilt sepenuhnya: menggantikan versi lama yang salah (KVKK + V + KV). Semua perkataan di sini mempunyai 3 suku kata terbuka (setiap suku kata = konsonan + vokal sahaja) mengikut rubric.
// Senarai asas perkataan (12) digunakan secara berulang bagi variasi tugas tanpa inflasi tiruan:
// bahaya (ba-ha-ya), kelapa (ke-la-pa), ketawa (ke-ta-wa), berita (be-ri-ta), keladi (ke-la-di), pelana (pe-la-na),
// belaka (be-la-ka), kelasi (ke-la-si), semoga (se-mo-ga), negeri (ne-ge-ri), seroja (se-ro-ja), pelari (pe-la-ri)

const BM_KP31 = {
    id: 'bm-kp31',
    code: 'KP31',
    name: 'KP31 — Perkataan KV + KV + KV',
    description: '*Perkataan tiga suku kata terbuka (KV + KV + KV). Fokus membaca, pecahan suku kata, pengenalan corak dan binaan semula.*',
    category: 'bm',
    questionBank: [
        // --------------------------------------------------
        // 1. Bacaan perkataan (12)
        // --------------------------------------------------
        { q: "Baca perkataan: bahaya", a: "bahaya", opts: ['bahaya', 'bahaya?', 'bayaha', 'bahyah'] },
        { q: "Baca perkataan: kelapa", a: "kelapa", opts: ['kelapa', 'kelapa?', 'kalepa', 'lapake'] },
        { q: "Baca perkataan: ketawa", a: "ketawa", opts: ['ketawa', 'ketawa?', 'ketewa', 'tawake'] },
        { q: "Baca perkataan: berita", a: "berita", opts: ['berita', 'berita?', 'berati', 'ribeta'] },
        { q: "Baca perkataan: keladi", a: "keladi", opts: ['keladi', 'keladi?', 'kaledi', 'delika'] },
        { q: "Baca perkataan: pelana", a: "pelana", opts: ['pelana', 'pelana?', 'palena', 'lanape'] },
        { q: "Baca perkataan: belaka", a: "belaka", opts: ['belaka', 'belaka?', 'baleka', 'kelaba'] },
        { q: "Baca perkataan: kelasi", a: "kelasi", opts: ['kelasi', 'kelasi?', 'kalise', 'silake'] },
        { q: "Baca perkataan: semoga", a: "semoga", opts: ['semoga', 'semoga?', 'somaga', 'gamose'] },
        { q: "Baca perkataan: negeri", a: "negeri", opts: ['negeri', 'negeri?', 'nigere', 'gereni'] },
        { q: "Baca perkataan: seroja", a: "seroja", opts: ['seroja', 'seroja?', 'soreja', 'jasero'] },
        { q: "Baca perkataan: pelari", a: "pelari", opts: ['pelari', 'pelari?', 'paleri', 'rilape'] },

        // --------------------------------------------------
        // 2. Bilangan suku kata (12) — semua jawapan 3
        // --------------------------------------------------
        { q: "Perkataan 'bahaya' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelapa' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'ketawa' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'berita' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'keladi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'pelana' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'belaka' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelasi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'semoga' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'negeri' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'seroja' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'pelari' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },

        // --------------------------------------------------
        // 3. Pecahan suku kata (24) — hanya suku kata 1 & 3 untuk setiap perkataan
        // --------------------------------------------------
        { q: "Suku kata pertama 'bahaya' ialah?", a: "ba", opts: ['ba', 'ha', 'ya', 'bah'] },
        { q: "Suku kata ketiga 'bahaya' ialah?", a: "ya", opts: ['ya', 'ba', 'ha', 'aya'] },
        { q: "Suku kata pertama 'kelapa' ialah?", a: "ke", opts: ['ke', 'la', 'pa', 'kel'] },
        { q: "Suku kata ketiga 'kelapa' ialah?", a: "pa", opts: ['pa', 'ke', 'la', 'lap'] },
        { q: "Suku kata pertama 'ketawa' ialah?", a: "ke", opts: ['ke', 'ta', 'wa', 'ket'] },
        { q: "Suku kata ketiga 'ketawa' ialah?", a: "wa", opts: ['wa', 'ke', 'ta', 'tawa'] },
        { q: "Suku kata pertama 'berita' ialah?", a: "be", opts: ['be', 'ri', 'ta', 'ber'] },
        { q: "Suku kata ketiga 'berita' ialah?", a: "ta", opts: ['ta', 'be', 'ri', 'rita'] },
        { q: "Suku kata pertama 'keladi' ialah?", a: "ke", opts: ['ke', 'la', 'di', 'kel'] },
        { q: "Suku kata ketiga 'keladi' ialah?", a: "di", opts: ['di', 'ke', 'la', 'ladi'] },
        { q: "Suku kata pertama 'pelana' ialah?", a: "pe", opts: ['pe', 'la', 'na', 'pel'] },
        { q: "Suku kata ketiga 'pelana' ialah?", a: "na", opts: ['na', 'pe', 'la', 'lana'] },
        { q: "Suku kata pertama 'belaka' ialah?", a: "be", opts: ['be', 'la', 'ka', 'bel'] },
        { q: "Suku kata ketiga 'belaka' ialah?", a: "ka", opts: ['ka', 'be', 'la', 'laka'] },
        { q: "Suku kata pertama 'kelasi' ialah?", a: "ke", opts: ['ke', 'la', 'si', 'kel'] },
        { q: "Suku kata ketiga 'kelasi' ialah?", a: "si", opts: ['si', 'ke', 'la', 'lasi'] },
        { q: "Suku kata pertama 'semoga' ialah?", a: "se", opts: ['se', 'mo', 'ga', 'sem'] },
        { q: "Suku kata ketiga 'semoga' ialah?", a: "ga", opts: ['ga', 'se', 'mo', 'moga'] },
        { q: "Suku kata pertama 'negeri' ialah?", a: "ne", opts: ['ne', 'ge', 'ri', 'neg'] },
        { q: "Suku kata ketiga 'negeri' ialah?", a: "ri", opts: ['ri', 'ne', 'ge', 'geri'] },
        { q: "Suku kata pertama 'seroja' ialah?", a: "se", opts: ['se', 'ro', 'ja', 'ser'] },
        { q: "Suku kata ketiga 'seroja' ialah?", a: "ja", opts: ['ja', 'se', 'ro', 'roja'] },
        { q: "Suku kata pertama 'pelari' ialah?", a: "pe", opts: ['pe', 'la', 'ri', 'pel'] },
        { q: "Suku kata ketiga 'pelari' ialah?", a: "ri", opts: ['ri', 'pe', 'la', 'lari'] },

        // --------------------------------------------------
        // 4. Pengecaman corak (12)
        // --------------------------------------------------
        { q: "Perkataan 'bahaya' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'kelapa' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'ketawa' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'berita' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'keladi' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'pelana' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'belaka' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'kelasi' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'semoga' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'negeri' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'seroja' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'pelari' corak?", a: "KV + KV + KV", opts: ['KV + KV + KV', 'KV + KV + KVK', 'KVK + KV + KVK', 'KV + KVK + KV'] },

        // --------------------------------------------------
        // 5. Suku kata hilang (24) — pilih suku kata 2 & 3 setiap perkataan
        // --------------------------------------------------
        { q: "ba + ___ + ya = bahaya", a: "ha", opts: ['ha', 'ba', 'ya', 'hay'] },
        { q: "ba + ha + ___ = bahaya", a: "ya", opts: ['ya', 'ha', 'ba', 'aya'] },
        { q: "ke + ___ + pa = kelapa", a: "la", opts: ['la', 'ke', 'pa', 'lap'] },
        { q: "ke + la + ___ = kelapa", a: "pa", opts: ['pa', 'ke', 'la', 'lap'] },
        { q: "ke + ___ + wa = ketawa", a: "ta", opts: ['ta', 'ke', 'wa', 'taw'] },
        { q: "ke + ta + ___ = ketawa", a: "wa", opts: ['wa', 'ta', 'ke', 'tawa'] },
        { q: "be + ___ + ta = berita", a: "ri", opts: ['ri', 'be', 'ta', 'rit'] },
        { q: "be + ri + ___ = berita", a: "ta", opts: ['ta', 'ri', 'be', 'rita'] },
        { q: "ke + ___ + di = keladi", a: "la", opts: ['la', 'ke', 'di', 'lad'] },
        { q: "ke + la + ___ = keladi", a: "di", opts: ['di', 'la', 'ke', 'ladi'] },
        { q: "pe + ___ + na = pelana", a: "la", opts: ['la', 'pe', 'na', 'lan'] },
        { q: "pe + la + ___ = pelana", a: "na", opts: ['na', 'la', 'pe', 'lana'] },
        { q: "be + ___ + ka = belaka", a: "la", opts: ['la', 'be', 'ka', 'lak'] },
        { q: "be + la + ___ = belaka", a: "ka", opts: ['ka', 'la', 'be', 'laka'] },
        { q: "ke + ___ + si = kelasi", a: "la", opts: ['la', 'ke', 'si', 'las'] },
        { q: "ke + la + ___ = kelasi", a: "si", opts: ['si', 'la', 'ke', 'lasi'] },
        { q: "se + ___ + ga = semoga", a: "mo", opts: ['mo', 'se', 'ga', 'mog'] },
        { q: "se + mo + ___ = semoga", a: "ga", opts: ['ga', 'mo', 'se', 'moga'] },
        { q: "ne + ___ + ri = negeri", a: "ge", opts: ['ge', 'ne', 'ri', 'ger'] },
        { q: "ne + ge + ___ = negeri", a: "ri", opts: ['ri', 'ge', 'ne', 'geri'] },
        { q: "se + ___ + ja = seroja", a: "ro", opts: ['ro', 'se', 'ja', 'roj'] },
        { q: "se + ro + ___ = seroja", a: "ja", opts: ['ja', 'ro', 'se', 'roja'] },
        { q: "pe + ___ + ri = pelari", a: "la", opts: ['la', 'pe', 'ri', 'lar'] },
        { q: "pe + la + ___ = pelari", a: "ri", opts: ['ri', 'la', 'pe', 'lari'] },

        // --------------------------------------------------
        // 6. Binaan semula perkataan (12)
        // --------------------------------------------------
        { q: "ba + ha + ya = ?", a: "bahaya", opts: ['bahaya', 'bayaha', 'habaya', 'hayaba'] },
        { q: "ke + la + pa = ?", a: "kelapa", opts: ['kelapa', 'kalepa', 'lapake', 'pelaka'] },
        { q: "ke + ta + wa = ?", a: "ketawa", opts: ['ketawa', 'ketewa', 'kewata', 'tawaka'] },
        { q: "be + ri + ta = ?", a: "berita", opts: ['berita', 'berati', 'ribeta', 'taribe'] },
        { q: "ke + la + di = ?", a: "keladi", opts: ['keladi', 'kaledi', 'likeda', 'delika'] },
        { q: "pe + la + na = ?", a: "pelana", opts: ['pelana', 'palena', 'lanape', 'penala'] },
        { q: "be + la + ka = ?", a: "belaka", opts: ['belaka', 'baleka', 'kelaba', 'lekaba'] },
        { q: "ke + la + si = ?", a: "kelasi", opts: ['kelasi', 'kalise', 'silake', 'lasike'] },
        { q: "se + mo + ga = ?", a: "semoga", opts: ['semoga', 'somaga', 'mosega', 'gasemo'] },
        { q: "ne + ge + ri = ?", a: "negeri", opts: ['negeri', 'nigere', 'gereni', 'negire'] },
        { q: "se + ro + ja = ?", a: "seroja", opts: ['seroja', 'soreja', 'jasero', 'jarose'] },
        { q: "pe + la + ri = ?", a: "pelari", opts: ['pelari', 'paleri', 'rilape', 'perila'] },

        // --------------------------------------------------
        // 7. Discriminasi corak (4) — pilih yang mengikut / bukan mengikut KV+KV+KV
        // --------------------------------------------------
        { q: "Yang manakah KV + KV + KV?", a: "kelapa", opts: ['kelapa', 'selamat', 'sekolah', 'gemilang'] },
        { q: "Yang manakah KV + KV + KV?", a: "belaka", opts: ['belaka', 'keramat', 'semangat', 'sayang'] },
        { q: "Yang manakah BUKAN KV + KV + KV?", a: "selamat", opts: ['selamat', 'keladi', 'pelana', 'kelasi'] },
        { q: "Yang manakah BUKAN KV + KV + KV?", a: "keramat", opts: ['keramat', 'bahaya', 'ketawa', 'seroja'] }
        // Jumlah soalan = 12 + 12 + 24 + 12 + 24 + 12 + 4 = 100
    ]
};

export default BM_KP31;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP31;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP31 = BM_KP31;
}
