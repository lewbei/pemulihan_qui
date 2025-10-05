// KP18 — Perkataan KV + KVKK

const BM_KP18 = {
    id: 'bm-kp18',
    code: 'KP18',
    name: 'KP18 — Perkataan KV + KVKK',
    description: '*Perkataan KV + KVKK (kelas, jalan, kertas, meja)*',
    category: 'bm',
    questionBank: [
        // Reading words with KV + KVKK pattern
        { q: "Baca perkataan: kelas", a: "kelas", opts: ['kelas', 'sekal', 'kales', 'lekas'] },
        { q: "Baca perkataan: jalan", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "Baca perkataan: kertas", a: "kertas", opts: ['kertas', 'tarske', 'sakter', 'rasket'] },
        { q: "Baca perkataan: meja", a: "meja", opts: ['meja', 'jame', 'maej', 'jema'] },
        { q: "Baca perkataan: makan", a: "makan", opts: ['makan', 'nakam', 'kamna', 'makna'] },
        { q: "Baca perkataan: rumah", a: "rumah", opts: ['rumah', 'hamur', 'mahur', 'hurma'] },
        { q: "Baca perkataan: buku", a: "buku", opts: ['buku', 'kubu', 'ubuk', 'ukub'] },
        { q: "Baca perkataan: mainan", a: "mainan", opts: ['mainan', 'inamna', 'nanima', 'naiman'] },
        { q: "Baca perkataan: kawan", a: "kawan", opts: ['kawan', 'nawak', 'wakan', 'akwan'] },
        { q: "Baca perkataan: lapan", a: "lapan", opts: ['lapan', 'panal', 'napal', 'panla'] },
        { q: "Baca perkataan: sembilan", a: "sembilan", opts: ['sembilan', 'lanbimes', 'bilansem', 'lansime'] },
        { q: "Baca perkataan: enam", a: "enam", opts: ['enam', 'name', 'amen', 'nema'] },
        { q: "Baca perkataan: tangan", a: "tangan", opts: ['tangan', 'nganta', 'gantna', 'natgan'] },
        { q: "Baca perkataan: kaki", a: "kaki", opts: ['kaki', 'ikak', 'kika', 'akik'] },
        { q: "Baca perkataan: mulut", a: "mulut", opts: ['mulut', 'lutmu', 'tumlu', 'utmul'] },
        { q: "Baca perkataan: hidung", a: "hidung", opts: ['hidung', 'dunghi', 'nghidu', 'gidhun'] },
        { q: "Baca perkataan: telinga", a: "telinga", opts: ['telinga', 'gintel', 'lingate', 'natelig'] },
        { q: "Baca perkataan: leher", a: "leher", opts: ['leher', 'herle', 'erleh', 'rehel'] },
        { q: "Baca perkataan: perut", a: "perut", opts: ['perut', 'rute', 'utper', 'tepur'] },
        { q: "Baca perkataan: dada", a: "dada", opts: ['dada', 'adad', 'dad', 'ada'] },

        // Syllable identification
        { q: "Perkataan 'kelas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'jalan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kertas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'meja' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'makan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'rumah' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'buku' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'mainan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kawan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'lapan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'kelas' ialah?", a: "ke", opts: ['ke', 'le', 'las', 'kel'] },
        { q: "Suku kata kedua 'kelas' ialah?", a: "las", opts: ['las', 'ke', 'le', 'kel'] },
        { q: "Suku kata pertama 'jalan' ialah?", a: "ja", opts: ['ja', 'lan', 'jal', 'laj'] },
        { q: "Suku kata kedua 'jalan' ialah?", a: "lan", opts: ['lan', 'ja', 'jal', 'laj'] },
        { q: "Suku kata pertama 'kertas' ialah?", a: "ker", opts: ['ker', 'tas', 'kert', 'ertk'] },
        { q: "Suku kata kedua 'kertas' ialah?", a: "tas", opts: ['tas', 'ker', 'kert', 'ertk'] },
        { q: "Suku kata pertama 'meja' ialah?", a: "me", opts: ['me', 'ja', 'mej', 'jem'] },
        { q: "Suku kata kedua 'meja' ialah?", a: "ja", opts: ['ja', 'me', 'mej', 'jem'] },
        { q: "Suku kata pertama 'makan' ialah?", a: "ma", opts: ['ma', 'kan', 'mak', 'am'] },
        { q: "Suku kata kedua 'makan' ialah?", a: "kan", opts: ['kan', 'ma', 'mak', 'am'] },

        // Pattern recognition
        { q: "Perkataan 'kelas' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'jalan' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'kertas' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'meja' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'makan' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'rumah' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'buku' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Suku kata 'ke' dalam 'kelas' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'las' dalam 'kelas' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'ja' dalam 'jalan' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },

        // Missing syllable
        { q: "___ + las = kelas", a: "ke", opts: ['ke', 'le', 'las', 'el'] },
        { q: "ke + ___ = kelas", a: "las", opts: ['las', 'ke', 'le', 'el'] },
        { q: "___ + lan = jalan", a: "ja", opts: ['ja', 'lan', 'jal', 'laj'] },
        { q: "ja + ___ = jalan", a: "lan", opts: ['lan', 'ja', 'jal', 'laj'] },
        { q: "___ + tas = kertas", a: "ker", opts: ['ker', 'tas', 'kert', 'ertk'] },
        { q: "ker + ___ = kertas", a: "tas", opts: ['tas', 'ker', 'kert', 'ertk'] },
        { q: "___ + ja = meja", a: "me", opts: ['me', 'ja', 'mej', 'jem'] },
        { q: "me + ___ = meja", a: "ja", opts: ['ja', 'me', 'mej', 'jem'] },
        { q: "___ + kan = makan", a: "ma", opts: ['ma', 'kan', 'mak', 'am'] },
        { q: "ma + ___ = makan", a: "kan", opts: ['kan', 'ma', 'mak', 'am'] },

        // Word completion
        { q: "ke + las = ?", a: "kelas", opts: ['kelas', 'laske', 'keelas', 'kelasl'] },
        { q: "ja + lan = ?", a: "jalan", opts: ['jalan', 'lanja', 'jalanan', 'lanjalan'] },
        { q: "ker + tas = ?", a: "kertas", opts: ['kertas', 'tasker', 'kert', 'tas'] },
        { q: "me + ja = ?", a: "meja", opts: ['meja', 'jame', 'mej', 'me'] },
        { q: "ma + kan = ?", a: "makan", opts: ['makan', 'kanma', 'makanan', 'kanakan'] },
        { q: "ru + mah = ?", a: "rumah", opts: ['rumah', 'mahru', 'rumahah', 'mahrum'] },
        { q: "bu + ku = ?", a: "buku", opts: ['buku', 'kubu', 'bukuk', 'kukub'] },
        { q: "ma + inan = ?", a: "mainan", opts: ['mainan', 'inamna', 'nanima', 'naiman'] },
        { q: "ka + wan = ?", a: "kawan", opts: ['kawan', 'nawak', 'wakan', 'akwan'] },
        { q: "la + pan = ?", a: "lapan", opts: ['lapan', 'panal', 'napal', 'panla'] },

        // Additional KV + KVKK words
        { q: "Baca perkataan: pasar", a: "pasar", opts: ['pasar', 'rasap', 'sapar', 'arasp'] },
        { q: "Baca perkataan: kuda", a: "kuda", opts: ['kuda', 'daku', 'udak', 'aduk'] },
        { q: "Baca perkataan: mata", a: "mata", opts: ['mata', 'atam', 'tama', 'amta'] },
        { q: "Baca perkataan: bapa", a: "bapa", opts: ['bapa', 'apab', 'paba', 'abap'] },
        { q: "Baca perkataan: nasi", a: "nasi", opts: ['nasi', 'asin', 'inas', 'sian'] },
        { q: "Baca perkataan: api", a: "api", opts: ['api', 'pia', 'iap', 'ipa'] },
        { q: "Baca perkataan: air", a: "air", opts: ['air', 'ria', 'ira', 'ari'] },
        { q: "Baca perkataan: guru", a: "guru", opts: ['guru', 'rugu', 'urug', 'urgu'] },
        { q: "Baca perkataan: bola", a: "bola", opts: ['bola', 'loba', 'abol', 'balo'] },
        { q: "Baca perkataan: kata", a: "kata", opts: ['kata', 'taka', 'akat', 'atak'] },

        // More syllable work
        { q: "Perkataan 'pasar' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kuda' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'mata' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bapa' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'nasi' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'pasar' ialah?", a: "pa", opts: ['pa', 'sa', 'pas', 'sap'] },
        { q: "Suku kata kedua 'pasar' ialah?", a: "sar", opts: ['sar', 'pa', 'pas', 'sap'] },
        { q: "Suku kata pertama 'kuda' ialah?", a: "ku", opts: ['ku', 'da', 'kud', 'duk'] },
        { q: "Suku kata kedua 'kuda' ialah?", a: "da", opts: ['da', 'ku', 'kud', 'duk'] },
        { q: "Suku kata pertama 'mata' ialah?", a: "ma", opts: ['ma', 'ta', 'mat', 'tam'] },

        // More pattern work
        { q: "Perkataan 'pasar' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'kuda' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'mata' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'bapa' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Perkataan 'nasi' mengikut corak?", a: "KV + KVKK", opts: ['KV + KVKK', 'KVKK + KV', 'KV + KV', 'KVK + KV'] },
        { q: "Suku kata 'pa' dalam 'pasar' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'sar' dalam 'pasar' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'ku' dalam 'kuda' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'da' dalam 'kuda' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'ma' dalam 'mata' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },

        // More missing syllable work
        { q: "___ + sar = pasar", a: "pa", opts: ['pa', 'sa', 'par', 'asp'] },
        { q: "pa + ___ = pasar", a: "sar", opts: ['sar', 'pa', 'par', 'asp'] },
        { q: "___ + da = kuda", a: "ku", opts: ['ku', 'da', 'kud', 'duk'] },
        { q: "ku + ___ = kuda", a: "da", opts: ['da', 'ku', 'kud', 'duk'] },
        { q: "___ + ta = mata", a: "ma", opts: ['ma', 'ta', 'mat', 'tam'] },
        { q: "ma + ___ = mata", a: "ta", opts: ['ta', 'ma', 'mat', 'tam'] },
        { q: "___ + pa = bapa", a: "ba", opts: ['ba', 'pa', 'bap', 'pab'] },
        { q: "ba + ___ = bapa", a: "pa", opts: ['pa', 'ba', 'bap', 'pab'] },
        { q: "___ + si = nasi", a: "na", opts: ['na', 'si', 'nas', 'san'] },
        { q: "na + ___ = nasi", a: "si", opts: ['si', 'na', 'nas', 'san'] },

        // More word completion
        { q: "pa + sar = ?", a: "pasar", opts: ['pasar', 'sarpa', 'pasarr', 'sarpar'] },
        { q: "ku + da = ?", a: "kuda", opts: ['kuda', 'daku', 'kuuda', 'dakku'] },
        { q: "ma + ta = ?", a: "mata", opts: ['mata', 'tama', 'maata', 'taam'] },
        { q: "ba + pa = ?", a: "bapa", opts: ['bapa', 'paba', 'baapa', 'paab'] },
        { q: "na + si = ?", a: "nasi", opts: ['nasi', 'sina', 'naasi', 'sinaa'] },
        { q: "a + pi = ?", a: "api", opts: ['api', 'pia', 'aapi', 'piaa'] },
        { q: "a + ir = ?", a: "air", opts: ['air', 'ria', 'aair', 'riaa'] },
        { q: "gu + ru = ?", a: "guru", opts: ['guru', 'rugu', 'guguru', 'rugu'] },
        { q: "bo + la = ?", a: "bola", opts: ['bola', 'labo', 'bbola', 'la'] },
        { q: "ka + ta = ?", a: "kata", opts: ['kata', 'taka', 'kkata', 'ka'] },

        // Application questions
        { q: "Tempat belajar ialah?", a: "kelas", opts: ['kelas', 'rumah', 'makan', 'buku'] },
        { q: "Tempat jalan kaki ialah?", a: "jalan", opts: ['jalan', 'rumah', 'kelas', 'pasar'] },
        { q: "Alat menulis ialah?", a: "kertas", opts: ['kertas', 'meja', 'buku', 'pensel'] },
        { q: "Furniture untuk belajar ialah?", a: "meja", opts: ['meja', 'kerusi', 'papan', 'buku'] },
        { q: "Aktiviti makan ialah?", a: "makan", opts: ['makan', 'minum', 'tidur', 'main'] },
        { q: "Tempat tinggal ialah?", a: "rumah", opts: ['rumah', 'kelas', 'jalan', 'pasar'] },
        { q: "Alat baca ialah?", a: "buku", opts: ['buku', 'kertas', 'pensel', 'meja'] },
        { q: "Aktiviti bermain ialah?", a: "mainan", opts: ['mainan', 'buku', 'makan', 'tidur'] },
        { q: "Rakan baik ialah?", a: "kawan", opts: ['kawan', 'musuh', 'jiran', 'guru'] },
        { q: "Angka lapan ialah?", a: "lapan", opts: ['lapan', 'tujuh', 'enam', 'sembilan'] },
        { q: "Angka sembilan ialah?", a: "sembilan", opts: ['sembilan', 'lapan', 'tujuh', 'enam'] },
        { q: "Angka enam ialah?", a: "enam", opts: ['enam', 'lima', 'tujuh', 'lapan'] },
        { q: "Bahagian badan untuk pegang ialah?", a: "tangan", opts: ['tangan', 'kaki', 'mata', 'telinga'] },
        { q: "Bahagian badan untuk berjalan ialah?", a: "kaki", opts: ['kaki', 'tangan', 'mata', 'hidung'] },
        { q: "Bahagian badan untuk makan ialah?", a: "mulut", opts: ['mulut', 'hidung', 'mata', 'telinga'] },
        { q: "Bahagian badan untuk hidu ialah?", a: "hidung", opts: ['hidung', 'mulut', 'mata', 'telinga'] },
        { q: "Bahagian badan untuk dengar ialah?", a: "telinga", opts: ['telinga', 'mata', 'hidung', 'mulut'] },
        { q: "Bahagian badan untuk lihat ialah?", a: "mata", opts: ['mata', 'telinga', 'hidung', 'mulut'] },
        { q: "Bahagian badan leher ialah?", a: "leher", opts: ['leher', 'hidung', 'mata', 'telinga'] },
        { q: "Bahagian badan perut ialah?", a: "perut", opts: ['perut', 'leher', 'dada', 'punggung'] },
        { q: "Bahagian badan dada ialah?", a: "dada", opts: ['dada', 'perut', 'leher', 'punggung'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KV + KVKK?", a: "kelas", opts: ['kelas', 'bola', 'api', 'air'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK?", a: "jalan", opts: ['jalan', 'rumah', 'buku', 'meja'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK?", a: "kertas", opts: ['kertas', 'guru', 'bola', 'api'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK?", a: "makan", opts: ['makan', 'nasi', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK?", a: "pasar", opts: ['pasar', 'kata', 'bola', 'api'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK?", a: "bola", opts: ['bola', 'kelas', 'jalan', 'kertas'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK?", a: "rumah", opts: ['rumah', 'makan', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK?", a: "api", opts: ['api', 'mainan', 'kawan', 'lapan'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK?", a: "air", opts: ['air', 'sembilan', 'enam', 'tangan'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK?", a: "guru", opts: ['guru', 'kaki', 'mulut', 'hidung'] },

        // Sound patterns
        { q: "Perkataan dengan suku kata pertama 'ke' ialah?", a: "kelas", opts: ['kelas', 'jalan', 'kertas', 'meja'] },
        { q: "Perkataan dengan suku kata pertama 'ja' ialah?", a: "jalan", opts: ['jalan', 'kelas', 'kertas', 'meja'] },
        { q: "Perkataan dengan suku kata pertama 'ker' ialah?", a: "kertas", opts: ['kertas', 'kelas', 'jalan', 'meja'] },
        { q: "Perkataan dengan suku kata pertama 'me' ialah?", a: "meja", opts: ['meja', 'kelas', 'jalan', 'kertas'] },
        { q: "Perkataan dengan suku kata pertama 'ma' ialah?", a: "makan", opts: ['makan', 'kelas', 'jalan', 'kertas'] },
        { q: "Perkataan dengan suku kata kedua 'las' ialah?", a: "kelas", opts: ['kelas', 'jalan', 'kertas', 'meja'] },
        { q: "Perkataan dengan suku kata kedua 'lan' ialah?", a: "jalan", opts: ['jalan', 'kelas', 'kertas', 'meja'] },
        { q: "Perkataan dengan suku kata kedua 'tas' ialah?", a: "kertas", opts: ['kertas', 'kelas', 'jalan', 'meja'] },
        { q: "Perkataan dengan suku kata kedua 'ja' ialah?", a: "meja", opts: ['meja', 'kelas', 'jalan', 'kertas'] },
        { q: "Perkataan dengan suku kata kedua 'kan' ialah?", a: "makan", opts: ['makan', 'kelas', 'jalan', 'kertas'] },

        // More words with KV + KVKK pattern
        { q: "Baca perkataan: kapal", a: "kapal", opts: ['kapal', 'lapak', 'pakal', 'lakap'] },
        { q: "Baca perkataan: kabin", a: "kabin", opts: ['kabin', 'binka', 'nikab', 'kabni'] },
        { q: "Baca perkataan: katil", a: "katil", opts: ['katil', 'tilak', 'lakit', 'kalti'] },
        { q: "Baca perkataan: kolar", a: "kolar", opts: ['kolar', 'larka', 'rakol', 'kolra'] },
        { q: "Baca perkataan: kanvas", a: "kanvas", opts: ['kanvas', 'vaska', 'sakvan', 'vaksan'] },
        { q: "Baca perkataan: kamus", a: "kamus", opts: ['kamus', 'samuk', 'mukas', 'samku'] },
        { q: "Baca perkataan: kabus", a: "kabus", opts: ['kabus', 'sabuk', 'bukas', 'sakbu'] },
        { q: "Baca perkataan: kajang", a: "kajang", opts: ['kajang', 'jangka', 'ngakja', 'jakgan'] },
        { q: "Baca perkataan: kalung", a: "kalung", opts: ['kalung', 'lungka', 'ngakla', 'lukgan'] },
        { q: "Baca perkataan: kampong", a: "kampong", opts: ['kampong', 'pongkam', 'ngakmp', 'gompak'] },

        // Sentence completion
        { q: "Saya belajar di ___", a: "kelas", opts: ['kelas', 'jalan', 'pasar', 'rumah'] },
        { q: "Saya berjalan di ___", a: "jalan", opts: ['jalan', 'kelas', 'pasar', 'rumah'] },
        { q: "Saya tulis di ___", a: "kertas", opts: ['kertas', 'meja', 'buku', 'pensel'] },
        { q: "Saya duduk di ___", a: "meja", opts: ['meja', 'kerusi', 'lantai', 'katil'] },
        { q: "Saya ___ di rumah", a: "makan", opts: ['makan', 'minum', 'tidur', 'main'] },
        { q: "Saya tinggal di ___", a: "rumah", opts: ['rumah', 'kelas', 'jalan', 'pasar'] },
        { q: "Saya baca ___", a: "buku", opts: ['buku', 'kertas', 'pensel', 'meja'] },
        { q: "Saya main ___", a: "mainan", opts: ['mainan', 'buku', 'makan', 'tidur'] },
        { q: "Saya ada ___", a: "kawan", opts: ['kawan', 'musuh', 'jiran', 'guru'] },
        { q: "Saya suka ___", a: "makan", opts: ['makan', 'minum', 'tidur', 'main'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KV + KVKK?", a: "kelas", opts: ['kelas', 'bola', 'api', 'air'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK?", a: "jalan", opts: ['jalan', 'rumah', 'buku', 'meja'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK?", a: "kertas", opts: ['kertas', 'guru', 'bola', 'api'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK?", a: "makan", opts: ['makan', 'nasi', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK?", a: "pasar", opts: ['pasar', 'kata', 'bola', 'api'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK?", a: "bola", opts: ['bola', 'kelas', 'jalan', 'kertas'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK?", a: "rumah", opts: ['rumah', 'makan', 'meja', 'buku'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK?", a: "api", opts: ['api', 'mainan', 'kawan', 'lapan'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK?", a: "air", opts: ['air', 'sembilan', 'enam', 'tangan'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK?", a: "guru", opts: ['guru', 'kaki', 'mulut', 'hidung'] }
    ]
};

export default BM_KP18;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP18;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP18 = BM_KP18;
}