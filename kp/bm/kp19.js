// KP19 — Perkataan V + KVKK

const BM_KP19 = {
    id: 'bm-kp19',
    code: 'KP19',
    name: 'KP19 — Perkataan V + KVKK',
    description: '*Perkataan V + KVKK (isi, usik, elok, otak)*',
    category: 'bm',
    questionBank: [
        // Reading words with V + KVKK pattern
        { q: "Baca perkataan: isi", a: "isi", opts: ['isi', 'sii', 'iis', 'isi'] },
        { q: "Baca perkataan: usik", a: "usik", opts: ['usik', 'kisu', 'siku', 'iksu'] },
        { q: "Baca perkataan: elok", a: "elok", opts: ['elok', 'kole', 'loke', 'ekol'] },
        { q: "Baca perkataan: otak", a: "otak", opts: ['otak', 'kato', 'tak o', 'atok'] },
        { q: "Baca perkataan: ada", a: "ada", opts: ['ada', 'daa', 'aad', 'ada'] },
        { q: "Baca perkataan: era", a: "era", opts: ['era', 'rae', 'aer', 'are'] },
        { q: "Baca perkataan: ular", a: "ular", opts: ['ular', 'ralu', 'laur', 'arul'] },
        { q: "Baca perkataan: ungu", a: "ungu", opts: ['ungu', 'ngau', 'gaun', 'guna'] },
        { q: "Baca perkataan: ampuh", a: "ampuh", opts: ['ampuh', 'puhma', 'muhap', 'hampu'] },
        { q: "Baca perkataan: epal", a: "epal", opts: ['epal', 'pale', 'lape', 'apel'] },
        { q: "Baca perkataan: inai", a: "inai", opts: ['inai', 'naii', 'iina', 'aiin'] },
        { q: "Baca perkataan: omput", a: "omput", opts: ['omput', 'tumpo', 'pumto', 'moput'] },
        { q: "Baca perkataan: emas", a: "emas", opts: ['emas', 'same', 'mesa', 'ames'] },
        { q: "Baca perkataan: ipuh", a: "ipuh", opts: ['ipuh', 'puhi', 'huip', 'hupi'] },
        { q: "Baca perkataan: etam", a: "etam", opts: ['etam', 'tame', 'mete', 'amte'] },
        { q: "Baca perkataan: ulat", a: "ulat", opts: ['ulat', 'latu', 'talu', 'altu'] },
        { q: "Baca perkataan: idam", a: "idam", opts: ['idam', 'dami', 'midi', 'amid'] },
        { q: "Baca perkataan: onak", a: "onak", opts: ['onak', 'kano', 'nako', 'akon'] },
        { q: "Baca perkataan: ekor", a: "ekor", opts: ['ekor', 'kore', 'orek', 'reko'] },
        { q: "Baca perkataan: awan", a: "awan", opts: ['awan', 'nawa', 'waan', 'naaw'] },

        // Syllable identification
        { q: "Perkataan 'isi' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'usik' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'elok' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'otak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ada' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'era' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ular' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ungu' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ampuh' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'epal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'isi' ialah?", a: "i", opts: ['i', 'si', 'is', 'si'] },
        { q: "Suku kata kedua 'isi' ialah?", a: "si", opts: ['si', 'i', 'is', 'si'] },
        { q: "Suku kata pertama 'usik' ialah?", a: "u", opts: ['u', 'sik', 'si', 'us'] },
        { q: "Suku kata kedua 'usik' ialah?", a: "sik", opts: ['sik', 'u', 'us', 'si'] },
        { q: "Suku kata pertama 'elok' ialah?", a: "e", opts: ['e', 'lok', 'lo', 'el'] },
        { q: "Suku kata kedua 'elok' ialah?", a: "lok", opts: ['lok', 'e', 'lo', 'el'] },
        { q: "Suku kata pertama 'otak' ialah?", a: "o", opts: ['o', 'tak', 'ta', 'ot'] },
        { q: "Suku kata kedua 'otak' ialah?", a: "tak", opts: ['tak', 'o', 'ta', 'ot'] },
        { q: "Suku kata pertama 'ada' ialah?", a: "a", opts: ['a', 'da', 'ad', 'da'] },
        { q: "Suku kata kedua 'ada' ialah?", a: "da", opts: ['da', 'a', 'ad', 'da'] },

        // Pattern recognition
        { q: "Perkataan 'isi' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'usik' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'elok' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'otak' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'ada' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'era' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'ular' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Suku kata 'i' dalam 'isi' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'si' dalam 'isi' ialah corak?", a: "KVKK", opts: ['KVKK', 'V', 'KV', 'KVK'] },
        { q: "Suku kata 'u' dalam 'usik' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },

        // Missing syllable
        { q: "___ + si = isi", a: "i", opts: ['i', 'si', 'is', 'si'] },
        { q: "i + ___ = isi", a: "si", opts: ['si', 'i', 'is', 'si'] },
        { q: "___ + sik = usik", a: "u", opts: ['u', 'sik', 'us', 'si'] },
        { q: "u + ___ = usik", a: "sik", opts: ['sik', 'u', 'us', 'si'] },
        { q: "___ + lok = elok", a: "e", opts: ['e', 'lok', 'lo', 'el'] },
        { q: "e + ___ = elok", a: "lok", opts: ['lok', 'e', 'lo', 'el'] },
        { q: "___ + tak = otak", a: "o", opts: ['o', 'tak', 'ta', 'ot'] },
        { q: "o + ___ = otak", a: "tak", opts: ['tak', 'o', 'ta', 'ot'] },
        { q: "___ + da = ada", a: "a", opts: ['a', 'da', 'ad', 'da'] },
        { q: "a + ___ = ada", a: "da", opts: ['da', 'a', 'ad', 'da'] },

        // Word completion
        { q: "i + si = ?", a: "isi", opts: ['isi', 'sii', 'iis', 'isi'] },
        { q: "u + sik = ?", a: "usik", opts: ['usik', 'kisu', 'siku', 'iksu'] },
        { q: "e + lok = ?", a: "elok", opts: ['elok', 'kole', 'loke', 'ekol'] },
        { q: "o + tak = ?", a: "otak", opts: ['otak', 'kato', 'tak o', 'atok'] },
        { q: "a + da = ?", a: "ada", opts: ['ada', 'daa', 'aad', 'ada'] },
        { q: "e + ra = ?", a: "era", opts: ['era', 'rae', 'aer', 'are'] },
        { q: "u + lar = ?", a: "ular", opts: ['ular', 'ralu', 'laur', 'arul'] },
        { q: "u + ngu = ?", a: "ungu", opts: ['ungu', 'ngau', 'gaun', 'guna'] },
        { q: "a + mpuh = ?", a: "ampuh", opts: ['ampuh', 'puhma', 'muhap', 'hampu'] },
        { q: "e + pal = ?", a: "epal", opts: ['epal', 'pale', 'lape', 'apel'] },

        // Additional V + KVKK words
        { q: "Baca perkataan: api", a: "api", opts: ['api', 'pia', 'iap', 'ipa'] },
        { q: "Baca perkataan: air", a: "air", opts: ['air', 'ria', 'ira', 'ari'] },
        { q: "Baca perkataan: asap", a: "asap", opts: ['asap', 'sapa', 'pasa', 'saap'] },
        { q: "Baca perkataan: atas", a: "atas", opts: ['atas', 'sata', 'tasa', 'saat'] },
        { q: "Baca perkataan: agar", a: "agar", opts: ['agar', 'raga', 'gaar', 'aagr'] },
        { q: "Baca perkataan: azab", a: "azab", opts: ['azab', 'zaba', 'baaz', 'aazb'] },
        { q: "Baca perkataan: acak", a: "acak", opts: ['acak', 'kaca', 'caak', 'aakc'] },
        { q: "Baca perkataan: adat", a: "adat", opts: ['adat', 'tada', 'daat', 'aatd'] },
        { q: "Baca perkataan: ahli", a: "ahli", opts: ['ahli', 'liha', 'hial', 'ialh'] },
        { q: "Baca perkataan: akal", a: "akal", opts: ['akal', 'kala', 'laak', 'aakl'] },

        // More syllable work
        { q: "Perkataan 'api' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'air' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'asap' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'atas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'agar' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'api' ialah?", a: "a", opts: ['a', 'pi', 'ap', 'pa'] },
        { q: "Suku kata kedua 'api' ialah?", a: "pi", opts: ['pi', 'a', 'ap', 'pa'] },
        { q: "Suku kata pertama 'air' ialah?", a: "a", opts: ['a', 'ir', 'ai', 'ia'] },
        { q: "Suku kata kedua 'air' ialah?", a: "ir", opts: ['ir', 'a', 'ai', 'ia'] },
        { q: "Suku kata pertama 'asap' ialah?", a: "a", opts: ['a', 'sap', 'as', 'sa'] },

        // More pattern work
        { q: "Perkataan 'api' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'air' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'asap' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'atas' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'agar' mengikut corak?", a: "V + KVKK", opts: ['V + KVKK', 'KVKK + V', 'KV + KV', 'V + KV'] },
        { q: "Suku kata 'a' dalam 'api' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'pi' dalam 'api' ialah corak?", a: "KVKK", opts: ['KVKK', 'V', 'KV', 'KVK'] },
        { q: "Suku kata 'a' dalam 'air' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'ir' dalam 'air' ialah corak?", a: "KVKK", opts: ['KVKK', 'V', 'KV', 'KVK'] },
        { q: "Suku kata 'a' dalam 'asap' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },

        // More missing syllable work
        { q: "___ + pi = api", a: "a", opts: ['a', 'pi', 'ap', 'pa'] },
        { q: "a + ___ = api", a: "pi", opts: ['pi', 'a', 'ap', 'pa'] },
        { q: "___ + ir = air", a: "a", opts: ['a', 'ir', 'ai', 'ri'] },
        { q: "a + ___ = air", a: "ir", opts: ['ir', 'a', 'ai', 'ri'] },
        { q: "___ + sap = asap", a: "a", opts: ['a', 'sap', 'as', 'sa'] },
        { q: "a + ___ = asap", a: "sap", opts: ['sap', 'a', 'as', 'sa'] },
        { q: "___ + tas = atas", a: "a", opts: ['a', 'tas', 'at', 'ta'] },
        { q: "a + ___ = atas", a: "tas", opts: ['tas', 'a', 'at', 'ta'] },
        { q: "___ + gar = agar", a: "a", opts: ['a', 'gar', 'ag', 'ga'] },
        { q: "a + ___ = agar", a: "gar", opts: ['gar', 'a', 'ag', 'ga'] },

        // More word completion
        { q: "a + pi = ?", a: "api", opts: ['api', 'pia', 'iap', 'ipa'] },
        { q: "a + ir = ?", a: "air", opts: ['air', 'ria', 'ira', 'ari'] },
        { q: "a + sap = ?", a: "asap", opts: ['asap', 'sapa', 'pasa', 'saap'] },
        { q: "a + tas = ?", a: "atas", opts: ['atas', 'sata', 'tasa', 'saat'] },
        { q: "a + gar = ?", a: "agar", opts: ['agar', 'raga', 'gaar', 'aagr'] },
        { q: "a + zab = ?", a: "azab", opts: ['azab', 'zaba', 'baaz', 'aazb'] },
        { q: "a + cak = ?", a: "acak", opts: ['acak', 'kaca', 'caak', 'aakc'] },
        { q: "a + dat = ?", a: "adat", opts: ['adat', 'tada', 'daat', 'aatd'] },
        { q: "a + hli = ?", a: "ahli", opts: ['ahli', 'liha', 'hial', 'ialh'] },
        { q: "a + kal = ?", a: "akal", opts: ['akal', 'kala', 'laak', 'aakl'] },

        // Application questions
        { q: "Isi botol dengan?", a: "air", opts: ['air', 'api', 'asap', 'atas'] },
        { q: "Panas ada?", a: "api", opts: ['api', 'air', 'asap', 'atas'] },
        { q: "Asap keluar dari?", a: "api", opts: ['api', 'asap', 'air', 'atas'] },
        { q: "Benda di atas meja ialah?", a: "atas", opts: ['atas', 'bawah', 'sisi', 'hadapan'] },
        { q: "Orang makan dengan?", a: "mulut", opts: ['mulut', 'tangan', 'kaki', 'mata'] },
        { q: "Ular adalah haiwan?", a: "ular", opts: ['ular', 'ikan', 'burung', 'kucing'] },
        { q: "Warna ungu adalah warna?", a: "ungu", opts: ['ungu', 'merah', 'biru', 'hijau'] },
        { q: "Obat yang ampuh boleh?", a: "sembuh", opts: ['sembuh', 'sakit', 'marah', 'gembira'] },
        { q: "Epal adalah jenis?", a: "buah", opts: ['buah', 'sayur', 'daging', 'ikan'] },
        { q: "Inai digunakan untuk?", a: "cat", opts: ['cat', 'makan', 'minum', 'tidur'] },
        { q: "Otak digunakan untuk?", a: "fikir", opts: ['fikir', 'makan', 'minum', 'tidur'] },
        { q: "Elok bermaksud?", a: "cantik", opts: ['cantik', 'buruk', 'jelek', 'hodoh'] },
        { q: "Jangan usik orang?", a: "main", opts: ['main', 'tidur', 'makan', 'belajar'] },
        { q: "Isi perut dengan?", a: "makan", opts: ['makan', 'minum', 'main', 'tidur'] },
        { q: "Ada di pasar?", a: "sayur", opts: ['sayur', 'emas', 'permata', 'intan'] },
        { q: "Era baru bermaksud?", a: "zaman", opts: ['zaman', 'hari', 'minggu', 'tahun'] },
        { q: "Ulat adalah?", a: "serangga", opts: ['serangga', 'ikan', 'burung', 'kucing'] },
        { q: "Idamkan makan?", a: "lapar", opts: ['lapar', 'kenyang', 'haus', 'sejuk'] },
        { q: "Onak pohon ada?", a: "duri", opts: ['duri', 'daun', 'bunga', 'buah'] },
        { q: "Ekor binatang ada di?", a: "belakang", opts: ['belakang', 'hadapan', 'sisi', 'atas'] },
        { q: "Awan di?", a: "langit", opts: ['langit', 'bumi', 'laut', 'gunung'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak V + KVKK?", a: "isi", opts: ['isi', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak V + KVKK?", a: "usik", opts: ['usik', 'rumah', 'jalan', 'kertas'] },
        { q: "Antara berikut, yang manakah corak V + KVKK?", a: "elok", opts: ['elok', 'kelas', 'makan', 'mainan'] },
        { q: "Antara berikut, yang manakah corak V + KVKK?", a: "otak", opts: ['otak', 'kawan', 'lapan', 'enam'] },
        { q: "Antara berikut, yang manakah corak V + KVKK?", a: "ada", opts: ['ada', 'tangan', 'kaki', 'mulut'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KVKK?", a: "bola", opts: ['bola', 'isi', 'usik', 'elok'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KVKK?", a: "rumah", opts: ['rumah', 'otak', 'ada', 'era'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KVKK?", a: "meja", opts: ['meja', 'ular', 'ungu', 'ampuh'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KVKK?", a: "buku", opts: ['buku', 'epal', 'inai', 'omput'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KVKK?", a: "kelas", opts: ['kelas', 'emas', 'ipuh', 'etam'] },

        // Sound patterns
        { q: "Perkataan dengan vokal 'i' di awal?", a: "isi", opts: ['isi', 'usik', 'elok', 'otak'] },
        { q: "Perkataan dengan vokal 'u' di awal?", a: "usik", opts: ['usik', 'isi', 'elok', 'otak'] },
        { q: "Perkataan dengan vokal 'e' di awal?", a: "elok", opts: ['elok', 'isi', 'usik', 'otak'] },
        { q: "Perkataan dengan vokal 'o' di awal?", a: "otak", opts: ['otak', 'isi', 'usik', 'elok'] },
        { q: "Perkataan dengan vokal 'a' di awal?", a: "ada", opts: ['ada', 'isi', 'usik', 'elok'] },
        { q: "Perkataan dengan suku kata kedua 'si'?", a: "isi", opts: ['isi', 'usik', 'elok', 'otak'] },
        { q: "Perkataan dengan suku kata kedua 'sik'?", a: "usik", opts: ['usik', 'isi', 'elok', 'otak'] },
        { q: "Perkataan dengan suku kata kedua 'lok'?", a: "elok", opts: ['elok', 'isi', 'usik', 'otak'] },
        { q: "Perkataan dengan suku kata kedua 'tak'?", a: "otak", opts: ['otak', 'isi', 'usik', 'elok'] },
        { q: "Perkataan dengan suku kata kedua 'da'?", a: "ada", opts: ['ada', 'isi', 'usik', 'elok'] },

        // More words with V + KVKK pattern
        { q: "Baca perkataan: ibu", a: "ibu", opts: ['ibu', 'bui', 'ubi', 'iub'] },
        { q: "Baca perkataan: esok", a: "esok", opts: ['esok', 'kose', 'okes', 'soke'] },
        { q: "Baca perkataan: itu", a: "itu", opts: ['itu', 'tui', 'uti', 'iut'] },
        { q: "Baca perkataan: ini", a: "ini", opts: ['ini', 'nii', 'iin', 'ini'] },
        { q: "Baca perkataan: ular", a: "ular", opts: ['ular', 'ralu', 'laur', 'arul'] },
        { q: "Baca perkataan: udang", a: "udang", opts: ['udang', 'dangu', 'ngadu', 'adngu'] },
        { q: "Baca perkataan: ubat", a: "ubat", opts: ['ubat', 'batu', 'tabu', 'abut'] },
        { q: "Baca perkataan: ulat", a: "ulat", opts: ['ulat', 'latu', 'talu', 'altu'] },
        { q: "Baca perkataan: urut", a: "urut", opts: ['urut', 'turu', 'rutu', 'utur'] },
        { q: "Baca perkataan: usin", a: "usin", opts: ['usin', 'sinu', 'nusi', 'inus'] },

        // Sentence completion
        { q: "Saya ___ botol dengan air", a: "isi", opts: ['isi', "makan", 'minum', 'belajar'] },
        { q: "Jangan ___ adik", a: "usik", opts: ['usik', 'main', 'makan', 'tidur'] },
        { q: "Bunga itu ___", a: "elok", opts: ['elok', 'buruk', 'kusut', 'layu'] },
        { q: "Gunakan ___ untuk berfikir", a: "otak", opts: ['otak', 'tangan', 'kaki', 'mulut'] },
        { q: "Saya ___ ada wang", a: "ada", opts: ['ada', 'tidak', 'mahu', 'suka'] },
        { q: "___ baru sudah tiba", a: "Era", opts: ['Era', 'Zaman', 'Masa', 'Hari'] },
        { q: "___ ada di sawah", a: "Ular", opts: ['Ular', 'Kucing', 'Anjing', 'Kambing'] },
        { q: "Baju warna ___", a: "ungu", opts: ['ungu', 'merah', 'biru', 'hijau'] },
        { q: "Ubat itu sangat ___", a: "ampuh", opts: ['ampuh', 'lemah', 'mahal', 'murah'] },
        { q: "Saya makan ___", a: "epal", opts: ['epal', 'nasi', 'ayam', 'ikan'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan V + KVKK?", a: "isi", opts: ['isi', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan V + KVKK?", a: "usik", opts: ['usik', 'rumah', 'jalan', 'kertas'] },
        { q: "Manakah antara berikut adalah perkataan V + KVKK?", a: "elok", opts: ['elok', 'kelas', 'makan', 'mainan'] },
        { q: "Manakah antara berikut adalah perkataan V + KVKK?", a: "otak", opts: ['otak', 'kawan', 'lapan', 'enam'] },
        { q: "Manakah antara berikut adalah perkataan V + KVKK?", a: "ada", opts: ['ada', 'tangan', 'kaki', 'mulut'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KVKK?", a: "bola", opts: ['bola', 'isi', 'usik', 'elok'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KVKK?", a: "rumah", opts: ['rumah', 'otak', 'ada', 'era'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KVKK?", a: "meja", opts: ['meja', 'ular', 'ungu', 'ampuh'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KVKK?", a: "buku", opts: ['buku', 'epal', 'inai', 'omput'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KVKK?", a: "kelas", opts: ['kelas', 'emas', 'ipuh', 'etam'] }
    ]
};

export default BM_KP19;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP19;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP19 = BM_KP19;
}