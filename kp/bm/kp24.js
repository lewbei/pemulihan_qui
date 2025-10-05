// KP24 — Perkataan V + KV + KV

const BM_KP24 = {
    id: 'bm-kp24',
    code: 'KP24',
    name: 'KP24 — Perkataan V + KV + KV',
    description: '*Perkataan V + KV + KV (atasi, idola, utara, etika)*',
    category: 'bm',
    questionBank: [
        // Reading words with V + KV + KV pattern
        { q: "Baca perkataan: atasi", a: "atasi", opts: ['atasi', 'tasia', 'tasai', 'saita'] },
        { q: "Baca perkataan: idola", a: "idola", opts: ['idola', 'dolai', 'olaid', 'laid'] },
        { q: "Baca perkataan: utara", a: "utara", opts: ['utara', 'tarau', 'raut', 'rauta'] },
        { q: "Baca perkataan: etika", a: "etika", opts: ['etika', 'tika', 'kate', 'etki'] },
        { q: "Baca perkataan: amaran", a: "amaran", opts: ['amaran', 'marana', 'ranama', 'anamar'] },
        { q: "Baca perkataan: agama", a: "agama", opts: ['agama', 'gamaa', 'mgaam', 'amgaa'] },
        { q: "Baca perkataan: ahli", a: "ahli", opts: ['ahli', 'hlia', 'liahi', 'iha'] },
        { q: "Baca perkataan: asuhan", a: "asuhan", opts: ['asuhan', 'suhana', 'huanas', 'uhasan'] },
        { q: "Baca perkataan: adat", a: "adat", opts: ['adat', 'data', 'tadda', 'ddaa'] },
        { q: "Baca perkataan: akhbar", a: "akhbar", opts: ['akhbar', 'khbara', 'hbarak', 'barak'] },
        { q: "Baca perkataan: alat", a: "alat", opts: ['alat', 'lata', 'taal', 'aalt'] },
        { q: "Baca perkataan: aroma", a: "aroma", opts: ['aroma', 'romaa', 'omaar', 'maaro'] },
        { q: "Baca perkataan: asas", a: "asas", opts: ['asas', 'sasa', 'saas', 'assa'] },
        { q: "Baca perkataan: azab", a: "azab", opts: ['azab', 'zaba', 'abaz', 'baza'] },
        { q: "Baca perkataan: ayam", a: "ayam", opts: ['ayam', 'yama', 'mayam', 'amay'] },
        { q: "Baca perkataan: awan", a: "awan", opts: ['awan', 'wana', 'naaw', 'aawn'] },
        { q: "Baca perkataan: awas", a: "awas", opts: ['awas', 'wasa', 'asaaw', 'saaw'] },
        { q: "Baca perkataan: edar", a: "edar", opts: ['edar', 'dare', 'ared', 'reda'] },
        { q: "Baca perkataan: elak", a: "elak", opts: ['elak', 'lake', 'akel', 'kela'] },
        { q: "Baca perkataan: enam", a: "enam", opts: ['enam', 'name', 'amne', 'mnea'] },

        // Syllable identification
        { q: "Perkataan 'atasi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'idola' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'utara' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'etika' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'amaran' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'agama' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'ahli' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'asuhan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'adat' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'akhbar' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'atasi' ialah?", a: "a", opts: ['a', 'ta', 'si', 'at'] },
        { q: "Suku kata kedua 'atasi' ialah?", a: "ta", opts: ['ta', 'a', 'si', 'at'] },
        { q: "Suku kata ketiga 'atasi' ialah?", a: "si", opts: ['si', 'a', 'ta', 'at'] },
        { q: "Suku kata pertama 'idola' ialah?", a: "i", opts: ['i', 'do', 'la', 'id'] },
        { q: "Suku kata kedua 'idola' ialah?", a: "do", opts: ['do', 'i', 'la', 'id'] },
        { q: "Suku kata ketiga 'idola' ialah?", a: "la", opts: ['la', 'i', 'do', 'id'] },
        { q: "Suku kata pertama 'utara' ialah?", a: "u", opts: ['u', 'ta', 'ra', 'ut'] },
        { q: "Suku kata kedua 'utara' ialah?", a: "ta", opts: ['ta', 'u', 'ra', 'ut'] },
        { q: "Suku kata ketiga 'utara' ialah?", a: "ra", opts: ['ra', 'u', 'ta', 'ut'] },
        { q: "Suku kata pertama 'etika' ialah?", a: "e", opts: ['e', 'ti', 'ka', 'et'] },

        // Pattern recognition
        { q: "Perkataan 'atasi' mengikut corak?", a: "V + KV + KV", opts: ['V + KV + KV', 'KV + V + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'idola' mengikut corak?", a: "V + KV + KV", opts: ['V + KV + KV', 'KV + V + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'utara' mengikut corak?", a: "V + KV + KV", opts: ['V + KV + KV', 'KV + V + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'etika' mengikut corak?", a: "V + KV + KV", opts: ['V + KV + KV', 'KV + V + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'amaran' mengikut corak?", a: "V + KV + KV", opts: ['V + KV + KV', 'KV + V + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'agama' mengikut corak?", a: "V + KV + KV", opts: ['V + KV + KV', 'KV + V + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Suku kata 'a' dalam 'atasi' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'ta' dalam 'atasi' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },
        { q: "Suku kata 'i' dalam 'idola' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'do' dalam 'idola' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },

        // Missing syllable
        { q: "___ + ta + si = atasi", a: "a", opts: ['a', 'ta', 'si', 'at'] },
        { q: "a + ___ + si = atasi", a: "ta", opts: ['ta', 'a', 'si', 'at'] },
        { q: "a + ta + ___ = atasi", a: "si", opts: ['si', 'a', 'ta', 'at'] },
        { q: "___ + do + la = idola", a: "i", opts: ['i', 'do', 'la', 'id'] },
        { q: "i + ___ + la = idola", a: "do", opts: ['do', 'i', 'la', 'id'] },
        { q: "i + do + ___ = idola", a: "la", opts: ['la', 'i', 'do', 'id'] },
        { q: "___ + ta + ra = utara", a: "u", opts: ['u', 'ta', 'ra', 'ut'] },
        { q: "u + ___ + ra = utara", a: "ta", opts: ['ta', 'u', 'ra', 'ut'] },
        { q: "u + ta + ___ = utara", a: "ra", opts: ['ra', 'u', 'ta', 'ut'] },
        { q: "___ + ti + ka = etika", a: "e", opts: ['e', 'ti', 'ka', 'et'] },

        // Word completion
        { q: "a + ta + si = ?", a: "atasi", opts: ['atasi', 'tasia', 'tasai', 'saita'] },
        { q: "i + do + la = ?", a: "idola", opts: ['idola', 'dolai', 'olaid', 'laid'] },
        { q: "u + ta + ra = ?", a: "utara", opts: ['utara', 'tarau', 'raut', 'rauta'] },
        { q: "e + ti + ka = ?", a: "etika", opts: ['etika', 'tika', 'kate', 'etki'] },
        { q: "a + ma + ran = ?", a: "amaran", opts: ['amaran', 'marana', 'ranama', 'anamar'] },
        { q: "a + ga + ma = ?", a: "agama", opts: ['agama', 'gamaa', 'mgaam', 'amgaa'] },
        { q: "a + hli = ?", a: "ahli", opts: ['ahli', 'hlia', 'liahi', 'iha'] },
        { q: "a + su + han = ?", a: "asuhan", opts: ['asuhan', 'suhana', 'huanas', 'uhasan'] },
        { q: "a + dat = ?", a: "adat", opts: ['adat', 'data', 'tadda', 'ddaa'] },
        { q: "a + khbar = ?", a: "akhbar", opts: ['akhbar', 'khbara', 'hbarak', 'barak'] },

        // Additional V + KV + KV words
        { q: "Baca perkataan: obor", a: "obor", opts: ['obor', 'bor o', 'orob', 'rob'] },
        { q: "Baca perkataan: otak", a: "otak", opts: ['otak', 'tako', 'akot', 'kato'] },
        { q: "Baca perkataan: ombak", a: "ombak", opts: ['ombak', 'bakom', 'komb', 'mbako'] },
        { q: "Baca perkataan: organ", a: "organ", opts: ['organ', 'gano', 'narg', 'arg'] },
        { q: "Baca perkataan: orang", a: "orang", opts: ['orang', 'gano', 'narg', 'arga'] },
        { q: "Baca perkataan: ular", a: "ular", opts: ['ular', 'laru', 'ralu', 'arul'] },
        { q: "Baca perkataan: ubat", a: "ubat", opts: ['ubat', 'batu', 'tabu', 'abut'] },
        { q: "Baca perkataan: umur", a: "umur", opts: ['umur', 'muru', 'rumu', 'urmu'] },
        { q: "Baca perkataan: usik", a: "usik", opts: ['usik', 'siku', 'ikus', 'kisu'] },
        { q: "Baca perkataan: ulang", a: "ulang", opts: ['ulang', 'langa', 'ngaul', 'gaul'] },

        // More syllable work
        { q: "Perkataan 'obor' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'otak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'ombak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'organ' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'orang' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'obor' ialah?", a: "o", opts: ['o', 'bor', 'ob', 'bo'] },
        { q: "Suku kata kedua 'obor' ialah?", a: "bor", opts: ['bor', 'o', 'ob', 'bo'] },
        { q: "Suku kata pertama 'otak' ialah?", a: "o", opts: ['o', 'tak', 'ot', 'to'] },
        { q: "Suku kata kedua 'otak' ialah?", a: "tak", opts: ['tak', 'o', 'ot', 'to'] },
        { q: "Suku kata pertama 'ombak' ialah?", a: "om", opts: ['om', 'bak', 'omb', 'mba'] },

        // More pattern work
        { q: "Perkataan 'obor' mengikut corak?", a: "V + KV", opts: ['V + KV', 'KV + V', 'KV + KV', 'V + V'] },
        { q: "Perkataan 'otak' mengikut corak?", a: "V + KV", opts: ['V + KV', 'KV + V', 'KV + KV', 'V + V'] },
        { q: "Perkataan 'ombak' mengikut corak?", a: "V + KV", opts: ['V + KV', 'KV + V', 'KV + KV', 'V + V'] },
        { q: "Perkataan 'organ' mengikut corak?", a: "V + KV", opts: ['V + KV', 'KV + V', 'KV + KV', 'V + V'] },
        { q: "Perkataan 'orang' mengikut corak?", a: "V + KV", opts: ['V + KV', 'KV + V', 'KV + KV', 'V + V'] },
        { q: "Suku kata 'o' dalam 'obor' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'bor' dalam 'obor' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },
        { q: "Suku kata 'o' dalam 'otak' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'tak' dalam 'otak' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },

        // More missing syllable work
        { q: "___ + bor = obor", a: "o", opts: ['o', 'bor', 'ob', 'bo'] },
        { q: "o + ___ = obor", a: "bor", opts: ['bor', 'o', 'ob', 'bo'] },
        { q: "___ + tak = otak", a: "o", opts: ['o', 'tak', 'ot', 'to'] },
        { q: "o + ___ = otak", a: "tak", opts: ['tak', 'o', 'ot', 'to'] },
        { q: "___ + bak = ombak", a: "om", opts: ['om', 'bak', 'omb', 'mba'] },
        { q: "om + ___ = ombak", a: "bak", opts: ['bak', 'om', 'omb', 'mba'] },
        { q: "___ + gan = organ", a: "or", opts: ['or', 'gan', 'org', 'rga'] },
        { q: "or + ___ = organ", a: "gan", opts: ['gan', 'or', 'org', 'rga'] },
        { q: "___ + ran = uran", a: "u", opts: ['u', 'ran', 'ur', 'ru'] },
        { q: "u + ___ = uran", a: "ran", opts: ['ran', 'u', 'ur', 'ru'] },

        // More word completion
        { q: "o + bor = ?", a: "obor", opts: ['obor', 'bor o', 'orob', 'rob'] },
        { q: "o + tak = ?", a: "otak", opts: ['otak', 'tako', 'akot', 'kato'] },
        { q: "om + bak = ?", a: "ombak", opts: ['ombak', 'bakom', 'komb', 'mbako'] },
        { q: "or + gan = ?", a: "organ", opts: ['organ', 'gano', 'narg', 'arga'] },
        { q: "or + rang = ?", a: "orang", opts: ['orang', 'rangor', 'ngaro', 'garo'] },
        { q: "u + lar = ?", a: "ular", opts: ['ular', 'laru', 'ralu', 'arul'] },
        { q: "u + bat = ?", a: "ubat", opts: ['ubat', 'batu', 'tabu', 'abut'] },
        { q: "u + mur = ?", a: "umur", opts: ['umur', 'muru', 'rumu', 'urmu'] },
        { q: "u + sik = ?", a: "usik", opts: ['usik', 'siku', 'ikus', 'kisu'] },
        { q: "u + lang = ?", a: "ulang", opts: ['ulang', 'langa', 'ngaul', 'gaul'] },

        // Application questions
        { q: "Atasi masalah dengan?", a: "usaha", opts: ['usaha', 'makan', 'tidur', 'main'] },
        { q: "Idola adalah?", a: "contoh", opts: ['contoh', 'musuh', 'haiwan', 'benda'] },
        { q: "Utara adalah arah?", a: "atas", opts: ['atas', 'bawah', 'kiri', 'kanan'] },
        { q: "Etika adalah?", a: "peraturan", opts: ['peraturan', 'main', 'makan', 'tidur'] },
        { q: "Amaran ialah?", a: "peringatan", opts: ['peringatan', 'pujian', 'hadiah', 'ganjaran'] },
        { q: "Agama adalah?", a: "kepercayaan", opts: ['kepercayaan', 'makanan', 'pakaian', 'benda'] },
        { q: "Ahli dalam kumpulan ialah?", a: "anggota", opts: ['anggota', 'musuh', 'lawan', 'penentang'] },
        { q: "Asuhan anak adalah?", a: "jaga", opts: ['jaga', 'buang', 'tinggal', 'lari'] },
        { q: "Adat adalah?", a: "tradisi", opts: ['tradisi', 'baru', 'asing', 'asing'] },
        { q: "Akhbar untuk?", a: "baca", opts: ['baca', 'makan', 'minum', 'tidur'] },
        { q: "Alat untuk?", a: "kerja", opts: ['kerja', 'main', 'makan', 'tidur'] },
        { q: "Aroma adalah?", a: "bau", opts: ['bau', 'rasa', 'lihat', 'dengar'] },
        { q: "Asas adalah?", a: "asal", opts: ['asal', 'atas', 'bawah', 'hujung'] },
        { q: "Azab adalah?", a: "siksa", opts: ['siksa', 'ganjaran', 'hadiah', 'pujian'] },
        { q: "Ayam adalah haiwan?", a: "ayam", opts: ['ayam', 'lembu', 'kucing', 'anjing'] },
        { q: "Awan di?", a: "langit", opts: ['langit', 'bumi', 'laut', 'sungai'] },
        { q: "Awas dengan?", a: "bahaya", opts: ['bahaya', 'selamat', 'aman', 'tenang'] },
        { q: "Edar jalan dengan?", a: "kereta", opts: ['kereta', 'basikal', 'perahu', 'kapal'] },
        { q: "Elak dari?", a: "bahaya", opts: ['bahaya', 'selamat', 'aman', 'tenang'] },
        { q: "Enam adalah nombor?", a: "6", opts: ['6', '5', '7', '8'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak V + KV + KV?", a: "atasi", opts: ['atasi', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak V + KV + KV?", a: "idola", opts: ['idola', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak V + KV + KV?", a: "utara", opts: ['utara', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak V + KV + KV?", a: "etika", opts: ['etika', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak V + KV + KV?", a: "amaran", opts: ['amaran', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KV + KV?", a: "bola", opts: ['bola', 'atasi', 'idola', 'utara'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KV + KV?", a: "rumah", opts: ['rumah', 'etika', 'amaran', 'agama'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KV + KV?", a: "meja", opts: ['meja', 'ahli', 'asuhan', 'adat'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KV + KV?", a: "buku", opts: ['buku', 'akhbar', 'alat', 'aroma'] },
        { q: "Antara berikut, yang manakah BUKAN corak V + KV + KV?", a: "saya", opts: ['saya', 'asas', 'azab', 'ayam'] },

        // Sound patterns
        { q: "Perkataan dengan vokal 'a' di awal?", a: "atasi", opts: ['atasi', 'idola', 'utara', 'etika'] },
        { q: "Perkataan dengan vokal 'i' di awal?", a: "idola", opts: ['idola', 'atasi', 'utara', 'etika'] },
        { q: "Perkataan dengan vokal 'u' di awal?", a: "utara", opts: ['utara', 'atasi', 'idola', 'etika'] },
        { q: "Perkataan dengan vokal 'e' di awal?", a: "etika", opts: ['etika', 'atasi', 'idola', 'utara'] },
        { q: "Perkataan dengan vokal 'o' di awal?", a: "obor", opts: ['obor', 'atasi', 'idola', 'utara'] },
        { q: "Perkataan dengan suku kata 'ta' di tengah?", a: "atasi", opts: ['atasi', 'idola', 'utara', 'etika'] },
        { q: "Perkataan dengan suku kata 'do' di tengah?", a: "idola", opts: ['idola', 'atasi', 'utara', 'etika'] },
        { q: "Perkataan dengan suku kata 'ta' di tengah?", a: "utara", opts: ['utara', 'atasi', 'idola', 'etika'] },
        { q: "Perkataan dengan suku kata 'ti' di tengah?", a: "etika", opts: ['etika', 'atasi', 'idola', 'utara'] },
        { q: "Perkataan dengan suku kata 'si' di akhir?", a: "atasi", opts: ['atasi', 'idola', 'utara', 'etika'] },

        // More complex V + KV + KV words
        { q: "Baca perkataan: ibu", a: "ibu", opts: ['ibu', 'bui', 'ubi', 'iub'] },
        { q: "Baca perkataan: itu", a: "itu", opts: ['itu', 'tui', 'uti', 'iut'] },
        { q: "Baca perkataan: ini", a: "ini", opts: ['ini', 'nii', 'iin', 'ini'] },
        { q: "Baca perkataan: iring", a: "iring", opts: ['iring', 'ringi', 'ngiri', 'giri'] },
        { q: "Baca perkataan: ikut", a: "ikut", opts: ['ikut', 'kuti', 'tiku', 'utik'] },
        { q: "Baca perkataan: ilang", a: "ilang", opts: ['ilang', 'langi', 'ngila', 'gila'] },
        { q: "Baca perkataan: imbas", a: "imbas", opts: ['imbas', 'mbasi', 'basim', 'asim'] },
        { q: "Baca perkataan: intip", a: "intip", opts: ['intip', 'nipit', 'tipin', 'ipint'] },
        { q: "Baca perkataan: isyarat", a: "isyarat", opts: ['isyarat', 'syarat i', 'yarat i', 'arat i'] },
        { q: "Baca perkataan: idea", a: "idea", opts: ['idea', 'deai', 'ea id', 'a ide'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan V + KV + KV?", a: "atasi", opts: ['atasi', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan V + KV + KV?", a: "idola", opts: ['idola', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan V + KV + KV?", a: "utara", opts: ['utara', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan V + KV + KV?", a: "etika", opts: ['etika', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan V + KV + KV?", a: "amaran", opts: ['amaran', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KV + KV?", a: "bola", opts: ['bola', 'atasi', 'idola', 'utara'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KV + KV?", a: "rumah", opts: ['rumah', 'etika', 'amaran', 'agama'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KV + KV?", a: "meja", opts: ['meja', 'ahli', 'asuhan', 'adat'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KV + KV?", a: "buku", opts: ['buku', 'akhbar', 'alat', 'aroma'] },
        { q: "Manakah antara berikut BUKAN perkataan V + KV + KV?", a: "saya", opts: ['saya', 'asas', 'azab', 'ayam'] }
    ]
};

export default BM_KP24;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP24;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP24 = BM_KP24;
}
