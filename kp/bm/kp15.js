// KP15 — Perkataan KVK + KV + KVK

const BM_KP15 = {
    id: 'bm-kp15',
    code: 'KP15',
    name: 'KP15 — Perkataan KVK + KV + KVK',
    description: '*(contoh: masakan, basahan, telanjang)*',
    category: 'bm',
    questionBank: [
        // Reading questions (20 questions)
        { q: "Baca perkataan: masakan", a: "masakan", opts: ['masakan', 'samanak', 'kamasan', 'namakas'] },
        { q: "Baca perkataan: basahan", a: "basahan", opts: ['basahan', 'sabahan', 'hasaban', 'nahasab'] },
        { q: "Baca perkataan: telanjang", a: "telanjang", opts: ['telanjang', 'jantelan', 'lantelan', 'tanelanj'] },
        { q: "Baca perkataan: belanja", a: "belanja", opts: ['belanja', 'janbelan', 'lanjabel', 'najbelan'] },
        { q: "Baca perkataan: kelabu", a: "kelabu", opts: ['kelabu', 'labuke', 'bukela', 'ukelab'] },
        { q: "Baca perkataan: kereta", a: "kereta", opts: ['kereta', 'tareker', 'retaker', 'terake'] },
        { q: "Baca perkataan: gelombang", a: "gelombang", opts: ['gelombang', 'bangomgel', 'lombangge', 'ombangge'] },
        { q: "Baca perkataan: selamat", a: "selamat", opts: ['selamat', 'matselam', 'lamatsel', 'tamatsel'] },
        { q: "Baca perkataan: tembakau", a: "tembakau", opts: ['tembakau', 'kautemba', 'bakautem', 'autembak'] },
        { q: "Baca perkataan: kembara", a: "kembara", opts: ['kembara', 'barakem', 'rakemba', 'akembar'] },
        { q: "Baca perkataan: pelajaran", a: "pelajaran", opts: ['pelajaran', 'jaranpel', 'ranpelaj', 'anpelajar'] },
        { q: "Baca perkataan: gelanggang", a: "gelanggang", opts: ['gelanggang', 'ganggelan', 'langgangge', 'anggangge'] },
        { q: "Baca perkataan: kelapa", a: "kelapa", opts: ['kelapa', 'pakela', 'lakelap', 'pakelap'] },
        { q: "Baca perkataan: tembok", a: "tembok", opts: ['tembok', 'boktem', 'kombet', 'mokbet'] },
        { q: "Baca perkataan: selipar", a: "selipar", opts: ['selipar', 'parseli', 'lipsar', 'arlisep'] },
        { q: "Baca perkataan: kemah", a: "kemah", opts: ['kemah', 'mahke', 'hakem', 'akmeh'] },
        { q: "Baca perkataan: gelap", a: "gelap", opts: ['gelap', 'lapge', 'pagel', 'apelg'] },
        { q: "Baca perkataan: beliak", a: "beliak", opts: ['beliak', 'liakbel', 'akbeli', 'kabeli'] },
        { q: "Baca perkataan: seluang", a: "seluang", opts: ['seluang', 'luangse', 'angselu', 'guangse'] },
        { q: "Baca perkataan: tempias", a: "tempias", opts: ['tempias', 'piastem', 'mapias', 'astempi'] },
        
        // Syllable identification (20 questions)
        { q: "Perkataan 'masakan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'basahan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'telanjang' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'belanja' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelabu' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata pertama 'masakan' ialah?", a: "ma", opts: ['ma', 'sa', 'kan', 'mas'] },
        { q: "Suku kata kedua 'masakan' ialah?", a: "sa", opts: ['sa', 'ma', 'kan', 'mas'] },
        { q: "Suku kata ketiga 'masakan' ialah?", a: "kan", opts: ['kan', 'ma', 'sa', 'mas'] },
        { q: "Suku kata pertama 'basahan' ialah?", a: "ba", opts: ['ba', 'sa', 'han', 'bas'] },
        { q: "Suku kata kedua 'basahan' ialah?", a: "sa", opts: ['sa', 'ba', 'han', 'bas'] },
        { q: "Suku kata ketiga 'basahan' ialah?", a: "han", opts: ['han', 'ba', 'sa', 'bas'] },
        { q: "Suku kata pertama 'telanjang' ialah?", a: "te", opts: ['te', 'lan', 'jang', 'tel'] },
        { q: "Suku kata kedua 'telanjang' ialah?", a: "lan", opts: ['lan', 'te', 'jang', 'tel'] },
        { q: "Suku kata ketiga 'telanjang' ialah?", a: "jang", opts: ['jang', 'te', 'lan', 'tel'] },
        { q: "Suku kata pertama 'belanja' ialah?", a: "be", opts: ['be', 'lan', 'ja', 'bel'] },
        { q: "Suku kata kedua 'belanja' ialah?", a: "lan", opts: ['lan', 'be', 'ja', 'bel'] },
        { q: "Suku kata ketiga 'belanja' ialah?", a: "ja", opts: ['ja', 'be', 'lan', 'bel'] },
        { q: "Suku kata pertama 'kelabu' ialah?", a: "ke", opts: ['ke', 'la', 'bu', 'kel'] },
        { q: "Suku kata kedua 'kelabu' ialah?", a: "la", opts: ['la', 'ke', 'bu', 'kel'] },
        { q: "Suku kata ketiga 'kelabu' ialah?", a: "bu", opts: ['bu', 'ke', 'la', 'kel'] },
        
        // Word completion (20 questions)
        { q: "ma + sa + kan = ?", a: "masakan", opts: ['masakan', 'samanak', 'kamasan', 'namakas'] },
        { q: "ba + sa + han = ?", a: "basahan", opts: ['basahan', 'sabahan', 'hasaban', 'nahasab'] },
        { q: "te + lan + jang = ?", a: "telanjang", opts: ['telanjang', 'jantelan', 'lantelan', 'tanelanj'] },
        { q: "be + lan + ja = ?", a: "belanja", opts: ['belanja', 'janbelan', 'lanjabel', 'najbelan'] },
        { q: "ke + la + bu = ?", a: "kelabu", opts: ['kelabu', 'labuke', 'bukela', 'ukelab'] },
        { q: "ke + re + ta = ?", a: "kereta", opts: ['kereta', 'tareker', 'retaker', 'terake'] },
        { q: "ge + lom + bang = ?", a: "gelombang", opts: ['gelombang', 'bangomgel', 'lombangge', 'ombangge'] },
        { q: "se + la + mat = ?", a: "selamat", opts: ['selamat', 'matselam', 'lamatsel', 'tamatsel'] },
        { q: "tem + ba + kau = ?", a: "tembakau", opts: ['tembakau', 'kautemba', 'bakautem', 'autembak'] },
        { q: "kem + ba + ra = ?", a: "kembara", opts: ['kembara', 'barakem', 'rakemba', 'akembar'] },
        { q: "pe + la + jar = ?", a: "pelajaran", opts: ['pelajaran', 'jaranpel', 'ranpelaj', 'anpelajar'] },
        { q: "ge + lang + gang = ?", a: "gelanggang", opts: ['gelanggang', 'ganggelan', 'langgangge', 'anggangge'] },
        { q: "ke + la + pa = ?", a: "kelapa", opts: ['kelapa', 'pakela', 'lakelap', 'pakelap'] },
        { q: "tem + bok = ?", a: "tembok", opts: ['tembok', 'boktem', 'kombet', 'mokbet'] },
        { q: "se + lip + ar = ?", a: "selipar", opts: ['selipar', 'parseli', 'lipsar', 'arlisep'] },
        { q: "kem + ah = ?", a: "kemah", opts: ['kemah', 'mahke', 'hakem', 'akmeh'] },
        { q: "ge + lap = ?", a: "gelap", opts: ['gelap', 'lapge', 'pagel', 'apelg'] },
        { q: "be + li + ak = ?", a: "beliak", opts: ['beliak', 'liakbel', 'akbeli', 'kabeli'] },
        { q: "se + lu + ang = ?", a: "seluang", opts: ['seluang', 'luangse', 'angselu', 'guangse'] },
        { q: "tem + pi + as = ?", a: "tempias", opts: ['tempias', 'piastem', 'mapias', 'astempi'] },
        
        // Missing syllable (20 questions)
        { q: "ma + ___ + kan = masakan", a: "sa", opts: ['sa', 'ma', 'kan', 'na'] },
        { q: "ba + ___ + han = basahan", a: "sa", opts: ['sa', 'ba', 'han', 'na'] },
        { q: "te + ___ + jang = telanjang", a: "lan", opts: ['lan', 'te', 'jang', 'tan'] },
        { q: "be + ___ + ja = belanja", a: "lan", opts: ['lan', 'be', 'ja', 'na'] },
        { q: "ke + ___ + bu = kelabu", a: "la", opts: ['la', 'ke', 'bu', 'ka'] },
        { q: "ke + ___ + ta = kereta", a: "re", opts: ['re', 'ke', 'ta', 'ra'] },
        { q: "ge + ___ + bang = gelombang", a: "lom", opts: ['lom', 'ge', 'bang', 'gom'] },
        { q: "se + ___ + mat = selamat", a: "la", opts: ['la', 'se', 'mat', 'sa'] },
        { q: "tem + ___ + kau = tembakau", a: "ba", opts: ['ba', 'tem', 'kau', 'tau'] },
        { q: "kem + ___ + ra = kembara", a: "ba", opts: ['ba', 'kem', 'ra', 'bar'] },
        { q: "pe + ___ + jar = pelajaran", a: "la", opts: ['la', 'pe', 'jar', 'ra'] },
        { q: "ge + ___ + gang = gelanggang", a: "lang", opts: ['lang', 'ge', 'gang', 'gang'] },
        { q: "ke + ___ + pa = kelapa", a: "la", opts: ['la', 'ke', 'pa', 'ap'] },
        { q: "___ + bok = tembok", a: "tem", opts: ['tem', 'bok', 'kom', 'bet'] },
        { q: "se + ___ + ar = selipar", a: "lip", opts: ['lip', 'se', 'ar', 'par'] },
        { q: "kem + ___ = kemah", a: "ah", opts: ['ah', 'kem', 'mah', 'ha'] },
        { q: "ge + ___ = gelap", a: "lap", opts: ['lap', 'ge', 'ap', 'pag'] },
        { q: "be + ___ + ak = beliak", a: "li", opts: ['li', 'be', 'ak', 'ia'] },
        { q: "se + ___ + ang = seluang", a: "lu", opts: ['lu', 'se', 'ang', 'gu'] },
        { q: "tem + ___ + as = tempias", a: "pi", opts: ['pi', 'tem', 'as', 'si'] },
        
        // Pattern recognition (20 questions)
        { q: "Perkataan 'masakan' mengikut corak?", a: "KVK + KV + KVK", opts: ['KVK + KV + KVK', 'KV + KV + KV', 'KVK + KVK + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'basahan' mengikut corak?", a: "KVK + KV + KVK", opts: ['KVK + KV + KVK', 'KV + KV + KV', 'KVK + KVK + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'telanjang' mengikut corak?", a: "KVK + KV + KVK", opts: ['KVK + KV + KVK', 'KV + KV + KV', 'KVK + KVK + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'belanja' mengikut corak?", a: "KVK + KV + KVK", opts: ['KVK + KV + KVK', 'KV + KV + KV', 'KVK + KVK + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'kelabu' mengikut corak?", a: "KVK + KV + KVK", opts: ['KVK + KV + KVK', 'KV + KV + KV', 'KVK + KVK + KVK', 'KV + KVK + KV'] },
        { q: "Perkataan 'kereta' mengikut corak?", a: "KVK + KV + KVK", opts: ['KVK + KV + KVK', 'KV + KV + KV', 'KVK + KVK + KVK', 'KV + KVK + KV'] },
        { q: "Suku kata 'ma' dalam 'masakan' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'sa' dalam 'masakan' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'kan' dalam 'masakan' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'ba' dalam 'basahan' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'sa' dalam 'basahan' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'han' dalam 'basahan' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'te' dalam 'telanjang' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'lan' dalam 'telanjang' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'jang' dalam 'telanjang' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'be' dalam 'belanja' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'lan' dalam 'belanja' ialah corak?", a: "KVK", opts: ['KVK', 'KV', 'V', 'K'] },
        { q: "Suku kata 'ja' dalam 'belanja' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'ke' dalam 'kelabu' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'la' dalam 'kelabu' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] },
        { q: "Suku kata 'bu' dalam 'kelabu' ialah corak?", a: "KV", opts: ['KV', 'KVK', 'V', 'K'] }
    ]
};

export default BM_KP15;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP15;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP15 = BM_KP15;
}
