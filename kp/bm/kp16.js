// KP16 — Perkataan KVKK

const BM_KP16 = {
    id: 'bm-kp16',
    code: 'KP16',
    name: 'KP16 — Perkataan KVKK',
    description: '*(contoh: kelas, wang, makan, rumah)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVKK pattern (20 questions)
        { q: "Baca perkataan: kelas", a: "kelas", opts: ['kelas', 'sekal', 'kales', 'lekas'] },
        { q: "Baca perkataan: wang", a: "wang", opts: ['wang', 'ngaw', 'gwan', 'awng'] },
        { q: "Baca perkataan: makan", a: "makan", opts: ['makan', 'nakam', 'kamna', 'makna'] },
        { q: "Baca perkataan: rumah", a: "rumah", opts: ['rumah', 'hamur', 'mahur', 'hurma'] },
        { q: "Baca perkataan: buku", a: "buku", opts: ['buku', 'kubu', 'ubuk', 'ukub'] },
        { q: "Baca perkataan: jalan", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "Baca perkataan: kertas", a: "kertas", opts: ['kertas', 'tarske', 'sakter', 'rasket'] },
        { q: "Baca perkataan: meja", a: "meja", opts: ['meja', 'jame', 'maej', 'jema'] },
        { q: "Baca perkataan: pasar", a: "pasar", opts: ['pasar', 'rasap', 'sapar', 'arasp'] },
        { q: "Baca perkataan: kuda", a: "kuda", opts: ['kuda', 'daku', 'udak', 'aduk'] },
        { q: "Baca perkataan: mata", a: "mata", opts: ['mata', 'atam', 'tama', 'amta'] },
        { q: "Baca perkataan: bapa", a: "bapa", opts: ['bapa', 'apab', 'paba', 'abap'] },
        { q: "Baca perkataan: ibu", a: "ibu", opts: ['ibu', 'bui', 'ubi', 'iub'] },
        { q: "Baca perkataan: adik", a: "adik", opts: ['adik', 'kida', 'dika', 'akid'] },
        { q: "Baca perkataan: kakak", a: "kakak", opts: ['kakak', 'kakka', 'akkak', 'kak'] },
        { q: "Baca perkataan: ayam", a: "ayam", opts: ['ayam', 'maya', 'yama', 'amya'] },
        { q: "Baca perkataan: ikan", a: "ikan", opts: ['ikan', 'naki', 'kina', 'anki'] },
        { q: "Baca perkataan: nasi", a: "nasi", opts: ['nasi', 'sina', 'isan', 'ansi'] },
        { q: "Baca perkataan: air", a: "air", opts: ['air', 'ria', 'ira', 'rai'] },
        { q: "Baca perkataan: susu", a: "susu", opts: ['susu', 'usus', 'susu', 'usus'] },
        
        // Syllable identification (20 questions)
        { q: "Perkataan 'kelas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'wang' ada berapa suku kata?", a: "1", opts: ['1', '2', '3', '4'] },
        { q: "Perkataan 'makan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'rumah' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'buku' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'jalan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kertas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'meja' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'pasar' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kuda' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'mata' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bapa' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ibu' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'adik' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kakak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ayam' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ikan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'nasi' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'air' ada berapa suku kata?", a: "1", opts: ['1', '2', '3', '4'] },
        { q: "Perkataan 'susu' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        
        // Syllable breakdown (20 questions)
        { q: "Suku kata pertama 'kelas' ialah?", a: "ke", opts: ['ke', 'le', 'las', 'kel'] },
        { q: "Suku kata kedua 'kelas' ialah?", a: "las", opts: ['las', 'ke', 'le', 'kel'] },
        { q: "Suku kata pertama 'makan' ialah?", a: "ma", opts: ['ma', 'kan', 'mak', 'am'] },
        { q: "Suku kata kedua 'makan' ialah?", a: "kan", opts: ['kan', 'ma', 'mak', 'am'] },
        { q: "Suku kata pertama 'rumah' ialah?", a: "ru", opts: ['ru', 'mah', 'rum', 'mur'] },
        { q: "Suku kata kedua 'rumah' ialah?", a: "mah", opts: ['mah', 'ru', 'rum', 'mur'] },
        { q: "Suku kata pertama 'buku' ialah?", a: "bu", opts: ['bu', 'ku', 'buk', 'kub'] },
        { q: "Suku kata kedua 'buku' ialah?", a: "ku", opts: ['ku', 'bu', 'buk', 'kub'] },
        { q: "Suku kata pertama 'jalan' ialah?", a: "ja", opts: ['ja', 'lan', 'jal', 'lan'] },
        { q: "Suku kata kedua 'jalan' ialah?", a: "lan", opts: ['lan', 'ja', 'jal', 'lan'] },
        { q: "Suku kata pertama 'kertas' ialah?", a: "ker", opts: ['ker', 'tas', 'ter', 'ras'] },
        { q: "Suku kata kedua 'kertas' ialah?", a: "tas", opts: ['tas', 'ker', 'ter', 'ras'] },
        { q: "Suku kata pertama 'meja' ialah?", a: "me", opts: ['me', 'ja', 'mej', 'jem'] },
        { q: "Suku kata kedua 'meja' ialah?", a: "ja", opts: ['ja', 'me', 'mej', 'jem'] },
        { q: "Suku kata pertama 'pasar' ialah?", a: "pa", opts: ['pa', 'sar', 'pas', 'sap'] },
        { q: "Suku kata kedua 'pasar' ialah?", a: "sar", opts: ['sar', 'pa', 'pas', 'sap'] },
        { q: "Suku kata pertama 'kuda' ialah?", a: "ku", opts: ['ku', 'da', 'kud', 'dak'] },
        { q: "Suku kata kedua 'kuda' ialah?", a: "da", opts: ['da', 'ku', 'kud', 'dak'] },
        { q: "Suku kata pertama 'mata' ialah?", a: "ma", opts: ['ma', 'ta', 'mat', 'tam'] },
        { q: "Suku kata kedua 'mata' ialah?", a: "ta", opts: ['ta', 'ma', 'mat', 'tam'] },
        
        // Pattern recognition (20 questions)
        { q: "Perkataan 'kelas' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'makan' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'rumah' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'buku' mengikut corak?", a: "KV + KV", opts: ['KV + KV', 'KVKK + KV', 'KV + KVKK', 'KVK + KV'] },
        { q: "Perkataan 'jalan' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'kertas' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KV', 'KVK + KV', 'KV + KVK'] },
        { q: "Perkataan 'meja' mengikut corak?", a: "KV + KV", opts: ['KV + KV', 'KVKK + KV', 'KV + KVKK', 'KVK + KV'] },
        { q: "Perkataan 'pasar' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'kuda' mengikut corak?", a: "KV + KV", opts: ['KV + KV', 'KVKK + KV', 'KV + KVKK', 'KVK + KV'] },
        { q: "Perkataan 'mata' mengikut corak?", a: "KV + KV", opts: ['KV + KV', 'KVKK + KV', 'KV + KVKK', 'KVK + KV'] },
        { q: "Suku kata 'ke' dalam 'kelas' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'las' dalam 'kelas' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'ma' dalam 'makan' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'kan' dalam 'makan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'ru' dalam 'rumah' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'mah' dalam 'rumah' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'bu' dalam 'buku' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'ku' dalam 'buku' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'ja' dalam 'jalan' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'lan' dalam 'jalan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        
        // Missing syllable (20 questions)
        { q: "___ + las = kelas", a: "ke", opts: ['ke', 'le', 'las', 'el'] },
        { q: "ke + ___ = kelas", a: "las", opts: ['las', 'ke', 'le', 'el'] },
        { q: "___ + kan = makan", a: "ma", opts: ['ma', 'kan', 'mak', 'am'] },
        { q: "ma + ___ = makan", a: "kan", opts: ['kan', 'ma', 'mak', 'am'] },
        { q: "___ + mah = rumah", a: "ru", opts: ['ru', 'mah', 'rum', 'mur'] },
        { q: "ru + ___ = rumah", a: "mah", opts: ['mah', 'ru', 'rum', 'mur'] },
        { q: "___ + ku = buku", a: "bu", opts: ['bu', 'ku', 'buk', 'kub'] },
        { q: "bu + ___ = buku", a: "ku", opts: ['ku', 'bu', 'buk', 'kub'] },
        { q: "___ + lan = jalan", a: "ja", opts: ['ja', 'lan', 'jal', 'lan'] },
        { q: "ja + ___ = jalan", a: "lan", opts: ['lan', 'ja', 'jal', 'lan'] },
        { q: "___ + tas = kertas", a: "ker", opts: ['ker', 'tas', 'ter', 'ras'] },
        { q: "ker + ___ = kertas", a: "tas", opts: ['tas', 'ker', 'ter', 'ras'] },
        { q: "___ + ja = meja", a: "me", opts: ['me', 'ja', 'mej', 'jem'] },
        { q: "me + ___ = meja", a: "ja", opts: ['ja', 'me', 'mej', 'jem'] },
        { q: "___ + sar = pasar", a: "pa", opts: ['pa', 'sar', 'pas', 'sap'] },
        { q: "pa + ___ = pasar", a: "sar", opts: ['sar', 'pa', 'pas', 'sap'] },
        { q: "___ + da = kuda", a: "ku", opts: ['ku', 'da', 'kud', 'dak'] },
        { q: "ku + ___ = kuda", a: "da", opts: ['da', 'ku', 'kud', 'dak'] },
        { q: "___ + ta = mata", a: "ma", opts: ['ma', 'ta', 'mat', 'tam'] },
        { q: "ma + ___ = mata", a: "ta", opts: ['ta', 'ma', 'mat', 'tam'] }
    ]
};

export default BM_KP16;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP16;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP16 = BM_KP16;
}
