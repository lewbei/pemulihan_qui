// KP27 — Perkataan KV + KV + V + KV

const BM_KP27 = {
    id: 'bm-kp27',
    code: 'KP27',
    name: 'KP27 — Perkataan KV + KV + V + KV',
    description: '*Perkataan KV + KV + V + KV (sekolah, kelapa, belajar, kereta)*',
    category: 'bm',
    questionBank: [
        // Reading words with KV + KV + V + KV pattern
        { q: "Baca perkataan: sekolah", a: "sekolah", opts: ['sekolah', 'kolehas', 'olahsek', 'haskol'] },
        { q: "Baca perkataan: kelapa", a: "kelapa", opts: ['kelapa', 'lapake', 'pakela', 'akelp'] },
        { q: "Baca perkataan: belajar", a: "belajar", opts: ['belajar', 'larjabe', 'jarabel', 'rabel'] },
        { q: "Baca perkataan: kereta", a: "kereta", opts: ['kereta', 'retake', 'etaker', 'taker'] },
        { q: "Baca perkataan: pejabat", a: "pejabat", opts: ['pejabat', 'jabatep', 'bapejat', 'jabat'] },
        { q: "Baca perkataan: kembara", a: "kembara", opts: ['kembara', 'barakem', 'rakemba', 'akemb'] },
        { q: "Baca perkataan: telaga", a: "telaga", opts: ['telaga', 'lagate', 'agatel', 'gatela'] },
        { q: "Baca perkataan: seramai", a: "seramai", opts: ['seramai', 'ramaise', 'maiser', 'aiser'] },
        { q: "Baca perkataan: perabot", a: "perabot", opts: ['perabot', 'rabotep', 'botepra', 'otper'] },
        { q: "Baca perkataan: beruang", a: "beruang", opts: ['beruang', 'ruangbe', 'uangber', 'angber'] },
        { q: "Baca perkataan: gelombang", a: "gelombang", opts: ['gelombang', 'lombange', 'banggelo', 'ombang'] },
        { q: "Baca perkataan: selamat", a: "selamat", opts: ['selamat', 'lamates', 'matsela', 'lamat'] },
        { q: "Baca perkataan: terapung", a: "terapung", opts: ['terapung', 'rapungte', 'pungtera', 'ungter'] },
        { q: "Baca perkataan: kelabu", a: "kelabu", opts: ['kelabu', 'labuke', 'bukela', 'abuke'] },
        { q: "Baca perkataan: pelangi", a: "pelangi", opts: ['pelangi', 'langipe', 'ngipela', 'gipel'] },
        { q: "Baca perkataan: kemudi", a: "kemudi", opts: ['kemudi', 'mudike', 'dikemu', 'ikemu'] },
        { q: "Baca perkataan: serangga", a: "serangga", opts: ['serangga', 'ranggase', 'nggaser', 'ggaser'] },
        { q: "Baca perkataan: terbang", a: "terbang", opts: ['terbang', 'bangte', 'bangter', 'ngter'] },
        { q: "Baca perkataan: keladi", a: "keladi", opts: ['keladi', 'ladike', 'dikel', 'ikela'] },
        { q: "Baca perkataan: penjaga", a: "penjaga", opts: ['penjaga', 'njagape', 'jagapen', 'gapen'] },

        // Syllable identification
        { q: "Perkataan 'sekolah' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelapa' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'belajar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kereta' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'pejabat' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kembara' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'telaga' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'seramai' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'perabot' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'beruang' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'sekolah' ialah?", a: "se", opts: ['se', 'ko', 'lah', 'seko'] },
        { q: "Suku kata kedua 'sekolah' ialah?", a: "ko", opts: ['ko', 'se', 'lah', 'seko'] },
        { q: "Suku kata ketiga 'sekolah' ialah?", a: "lah", opts: ['lah', 'se', 'ko', 'seko'] },
        { q: "Suku kata pertama 'kelapa' ialah?", a: "ke", opts: ['ke', 'la', 'pa', 'kela'] },
        { q: "Suku kata kedua 'kelapa' ialah?", a: "la", opts: ['la', 'ke', 'pa', 'kela'] },
        { q: "Suku kata ketiga 'kelapa' ialah?", a: "pa", opts: ['pa', 'ke', 'la', 'kela'] },
        { q: "Suku kata pertama 'belajar' ialah?", a: "be", opts: ['be', 'la', 'jar', 'bela'] },
        { q: "Suku kata kedua 'belajar' ialah?", a: "la", opts: ['la', 'be', 'jar', 'bela'] },
        { q: "Suku kata ketiga 'belajar' ialah?", a: "jar", opts: ['jar', 'be', 'la', 'bela'] },
        { q: "Suku kata pertama 'kereta' ialah?", a: "ke", opts: ['ke', 're', 'ta', 'kere'] },

        // Pattern recognition
        { q: "Perkataan 'sekolah' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'kelapa' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'belajar' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'kereta' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'pejabat' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Suku kata 'se' dalam 'sekolah' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'ko' dalam 'sekolah' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'lah' dalam 'sekolah' ialah corak?", a: "V + KV", opts: ['V + KV', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'ke' dalam 'kelapa' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'la' dalam 'kelapa' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'pa' dalam 'kelapa' ialah corak?", a: "V + KV", opts: ['V + KV', 'KV', 'V', 'KVK'] },

        // Missing syllable
        { q: "___ + ko + lah = sekolah", a: "se", opts: ['se', 'ko', 'lah', 'seko'] },
        { q: "se + ___ + lah = sekolah", a: "ko", opts: ['ko', 'se', 'lah', 'seko'] },
        { q: "se + ko + ___ = sekolah", a: "lah", opts: ['lah', 'se', 'ko', 'seko'] },
        { q: "___ + la + pa = kelapa", a: "ke", opts: ['ke', 'la', 'pa', 'kela'] },
        { q: "ke + ___ + pa = kelapa", a: "la", opts: ['la', 'ke', 'pa', 'kela'] },
        { q: "ke + la + ___ = kelapa", a: "pa", opts: ['pa', 'ke', 'la', 'kela'] },
        { q: "___ + la + jar = belajar", a: "be", opts: ['be', 'la', 'jar', 'bela'] },
        { q: "be + ___ + jar = belajar", a: "la", opts: ['la', 'be', 'jar', 'bela'] },
        { q: "be + la + ___ = belajar", a: "jar", opts: ['jar', 'be', 'la', 'bela'] },
        { q: "___ + re + ta = kereta", a: "ke", opts: ['ke', 're', 'ta', 'kere'] },

        // Word completion
        { q: "se + ko + lah = ?", a: "sekolah", opts: ['sekolah', 'kolehas', 'olahsek', 'haskol'] },
        { q: "ke + la + pa = ?", a: "kelapa", opts: ['kelapa', 'lapake', 'pakela', 'akelp'] },
        { q: "be + la + jar = ?", a: "belajar", opts: ['belajar', 'larjabe', 'jarabel', 'rabel'] },
        { q: "ke + re + ta = ?", a: "kereta", opts: ['kereta', 'retake', 'etaker', 'taker'] },
        { q: "pe + ja + bat = ?", a: "pejabat", opts: ['pejabat', 'jabatep', 'bapejat', 'jabat'] },
        { q: "kem + ba + ra = ?", a: "kembara", opts: ['kembara', 'barakem', 'rakemba', 'akemb'] },
        { q: "te + la + ga = ?", a: "telaga", opts: ['telaga', 'lagate', 'agatel', 'gatela'] },
        { q: "se + ra + mai = ?", a: "seramai", opts: ['seramai', 'ramaise', 'maiser', 'aiser'] },
        { q: "pe + ra + bot = ?", a: "perabot", opts: ['perabot', 'rabotep', 'botepra', 'otper'] },
        { q: "be + ru + ang = ?", a: "beruang", opts: ['beruang', 'ruangbe', 'uangber', 'angber'] },

        // Additional KV + KV + V + KV words
        { q: "Baca perkataan: selasih", a: "selasih", opts: ['selasih', 'lasiseh', 'sihse', 'lasih'] },
        { q: "Baca perkataan: keladi", a: "keladi", opts: ['keladi', 'ladike', 'dikel', 'ikela'] },
        { q: "Baca perkataan: pelajar", a: "pelajar", opts: ['pelajar', 'larjape', 'jarpela', 'rjape'] },
        { q: "Baca perkataan: tembaga", a: "tembaga", opts: ['tembaga', 'bagatem', 'gatem', 'atem'] },
        { q: "Baca perkataan: serai", a: "serai", opts: ['serai', 'raise', 'raiser', 'aiser'] },
        { q: "Baca perkataan: kelapa", a: "kelapa", opts: ['kelapa', 'lapake', 'pakela', 'akelp'] },
        { q: "Baca perkataan: telaga", a: "telaga", opts: ['telaga', 'lagate', 'agatel', 'gatela'] },
        { q: "Baca perkataan: kemudi", a: "kemudi", opts: ['kemudi', 'mudike', 'dikemu', 'ikemu'] },
        { q: "Baca perkataan: serangga", a: "serangga", opts: ['serangga', 'ranggase', 'nggaser', 'ggaser'] },
        { q: "Baca perkataan: terapung", a: "terapung", opts: ['terapung', 'rapungte', 'pungtera', 'ungter'] },

        // More syllable work
        { q: "Perkataan 'selasih' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'keladi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'pelajar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'tembaga' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'serai' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'selasih' ialah?", a: "se", opts: ['se', 'la', 'sih', 'sela'] },
        { q: "Suku kata kedua 'selasih' ialah?", a: "la", opts: ['la', 'se', 'sih', 'sela'] },
        { q: "Suku kata ketiga 'selasih' ialah?", a: "sih", opts: ['sih', 'se', 'la', 'sela'] },
        { q: "Suku kata pertama 'keladi' ialah?", a: "ke", opts: ['ke', 'la', 'di', 'kela'] },
        { q: "Suku kata kedua 'keladi' ialah?", a: "la", opts: ['la', 'ke', 'di', 'kela'] },

        // More pattern work
        { q: "Perkataan 'selasih' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'keladi' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'pelajar' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'tembaga' mengikut corak?", a: "KV + KV + V + KV", opts: ['KV + KV + V + KV', 'KV + V + KV + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Perkataan 'serai' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'KV + KV + V + KV', 'V + KV + KV + KV', 'KV + KV + KV + V'] },
        { q: "Suku kata 'se' dalam 'selasih' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'la' dalam 'selasih' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'sih' dalam 'selasih' ialah corak?", a: "V + KV", opts: ['V + KV', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'ke' dalam 'keladi' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'la' dalam 'keladi' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'KVKK'] },
        { q: "Suku kata 'di' dalam 'keladi' ialah corak?", a: "V + KV", opts: ['V + KV', 'KV', 'V', 'KVK'] },

        // More missing syllable work
        { q: "___ + la + sih = selasih", a: "se", opts: ['se', 'la', 'sih', 'sela'] },
        { q: "se + ___ + sih = selasih", a: "la", opts: ['la', 'se', 'sih', 'sela'] },
        { q: "se + la + ___ = selasih", a: "sih", opts: ['sih', 'se', 'la', 'sela'] },
        { q: "___ + la + di = keladi", a: "ke", opts: ['ke', 'la', 'di', 'kela'] },
        { q: "ke + ___ + di = keladi", a: "la", opts: ['la', 'ke', 'di', 'kela'] },
        { q: "ke + la + ___ = keladi", a: "di", opts: ['di', 'ke', 'la', 'kela'] },
        { q: "___ + la + jar = pelajar", a: "pe", opts: ['pe', 'la', 'jar', 'pela'] },
        { q: "pe + ___ + jar = pelajar", a: "la", opts: ['la', 'pe', 'jar', 'pela'] },
        { q: "pe + la + ___ = pelajar", a: "jar", opts: ['jar', 'pe', 'la', 'pela'] },
        { q: "___ + ba + ga = tembaga", a: "tem", opts: ['tem', 'ba', 'ga', 'temba'] },

        // More word completion
        { q: "se + la + sih = ?", a: "selasih", opts: ['selasih', 'lasiseh', 'sihse', 'lasih'] },
        { q: "ke + la + di = ?", a: "keladi", opts: ['keladi', 'ladike', 'dikel', 'ikela'] },
        { q: "pe + la + jar = ?", a: "pelajar", opts: ['pelajar', 'larjape', 'jarpela', 'rjape'] },
        { q: "tem + ba + ga = ?", a: "tembaga", opts: ['tembaga', 'bagatem', 'gatem', 'atem'] },
        { q: "se + ra + i = ?", a: "serai", opts: ['serai', 'raise', 'raiser', 'aiser'] },
        { q: "ke + la + pa = ?", a: "kelapa", opts: ['kelapa', 'lapake', 'pakela', 'akelp'] },
        { q: "te + la + ga = ?", a: "telaga", opts: ['telaga', 'lagate', 'agatel', 'gatela'] },
        { q: "ke + mu + di = ?", a: "kemudi", opts: ['kemudi', 'mudike', 'dikemu', 'ikemu'] },
        { q: "se + rang + ga = ?", a: "serangga", opts: ['serangga', 'ranggase', 'nggaser', 'ggaser'] },
        { q: "te + ra + pung = ?", a: "terapung", opts: ['terapung', 'rapungte', 'pungtera', 'ungter'] },

        // Application questions
        { q: "Sekolah adalah tempat untuk?", a: "belajar", opts: ['belajar', 'makan', 'tidur', 'main'] },
        { q: "Kelapa adalah?", a: "buah", opts: ['buah', 'sayur', 'daging', 'ikan'] },
        { q: "Belajar untuk dapat?", a: "ilmu", opts: ['ilmu', 'wang', 'makan', 'main'] },
        { q: "Kereta adalah kenderaan?", a: "darat", opts: ['darat', 'udara', 'laut', 'sungai'] },
        { q: "Pejabat adalah tempat?", a: "kerja", opts: ['kerja', 'main', 'makan', 'tidur'] },
        { q: "Kembara adalah?", a: "pengembaraan", opts: ['pengembaraan', 'kerja', 'main', 'makan'] },
        { q: "Telaga mengandungi?", a: "air", opts: ['air', 'minyak', 'pasir', 'batu'] },
        { q: "Seramai orang di?", a: "majlis", opts: ['majlis', "rumah", 'pasar', 'kedai'] },
        { q: "Perabot di dalam?", a: "rumah", opts: ['rumah', 'jalan', 'taman', 'hutan'] },
        { q: "Beruang adalah haiwan?", a: "liar", opts: ['liar', 'peliharaan', 'ternakan', 'jinak'] },
        { q: "Gelombang di?", a: "laut", opts: ['laut', 'darat', 'udara', 'gunung'] },
        { q: "Selamat dari?", a: "bahaya", opts: ['bahaya', 'selamat', 'aman', 'tenang'] },
        { q: "Terapung di atas?", a: "air", opts: ['air', 'darat', 'udara', 'pasir'] },
        { q: "Kelabu adalah warna?", a: "neutral", opts: ['neutral', 'merah', 'hijau', 'biru'] },
        { q: "Pelangi ada berapa warna?", a: "7", opts: ['7', '5', '6', '8'] },
        { q: "Kemudi untuk belok ke?", a: "kiri/kanan", opts: ['kiri/kanan', 'atas', 'bawah', 'depan'] },
        { q: "Serangga kecil seperti?", a: "semut", opts: ['semut', 'gajah', 'kerbau', 'kuda'] },
        { q: "Terbang menggunakan?", a: "sayap", opts: ['sayap', 'kaki', 'tangan', 'ekor'] },
        { q: "Keladi adalah?", a: "umbi", opts: ['umbi', 'buah', 'daun', 'batang'] },
        { q: "Penjaga menjaga?", a: "keselamatan", opts: ['keselamatan', 'bahaya', 'musuh', 'pencuri'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KV + KV + V + KV?", a: "sekolah", opts: ['sekolah', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KV + KV + V + KV?", a: "kelapa", opts: ['kelapa', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + KV + V + KV?", a: "belajar", opts: ['belajar', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + KV + V + KV?", a: "kereta", opts: ['kereta', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KV + KV + V + KV?", a: "pejabat", opts: ['pejabat', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KV + V + KV?", a: "bola", opts: ['bola', 'sekolah', 'kelapa', 'belajar'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KV + V + KV?", a: "rumah", opts: ['rumah', 'kereta', 'pejabat', 'kembara'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KV + V + KV?", a: "meja", opts: ['meja', 'telaga', 'seramai', 'perabot'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KV + V + KV?", a: "buku", opts: ['buku', 'beruang', 'gelombang', 'selamat'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KV + V + KV?", a: "saya", opts: ['saya', 'terapung', 'kelabu', 'pelangi'] },

        // Sound patterns
        { q: "Perkataan dengan 'se' di awal?", a: "sekolah", opts: ['sekolah', 'kelapa', 'belajar', 'kereta'] },
        { q: "Perkataan dengan 'ke' di awal?", a: "kelapa", opts: ['kelapa', 'sekolah', 'belajar', 'kereta'] },
        { q: "Perkataan dengan 'be' di awal?", a: "belajar", opts: ['belajar', 'sekolah', 'kelapa', 'kereta'] },
        { q: "Perkataan dengan 'ke' di awal?", a: "kereta", opts: ['kereta', 'sekolah', 'kelapa', 'belajar'] },
        { q: "Perkataan dengan 'pe' di awal?", a: "pejabat", opts: ['pejabat', 'sekolah', 'kelapa', 'belajar'] },
        { q: "Perkataan dengan 'ko' di tengah?", a: "sekolah", opts: ['sekolah', 'kelapa', 'belajar', 'kereta'] },
        { q: "Perkataan dengan 'la' di tengah?", a: "kelapa", opts: ['kelapa', 'sekolah', 'belajar', 'kereta'] },
        { q: "Perkataan dengan 'la' di tengah?", a: "belajar", opts: ['belajar', 'sekolah', 'kelapa', 'kereta'] },
        { q: "Perkataan dengan 're' di tengah?", a: "kereta", opts: ['kereta', 'sekolah', 'kelapa', 'belajar'] },
        { q: "Perkataan dengan 'ja' di tengah?", a: "pejabat", opts: ['pejabat', 'sekolah', 'kelapa', 'belajar'] },

        // More complex KV + KV + V + KV words
        { q: "Baca perkataan: seloka", a: "seloka", opts: ['seloka', 'lokase', 'kase', 'okase'] },
        { q: "Baca perkataan: kelmarin", a: "kelmarin", opts: ['kelmarin', 'marinke', 'rinke', 'inkel'] },
        { q: "Baca perkataan: peluru", a: "peluru", opts: ['peluru', 'lurup', 'ruple', 'uple'] },
        { q: "Baca perkataan: tembok", a: "tembok", opts: ['tembok', 'boktem', 'oktem', 'ktemb'] },
        { q: "Baca perkataan: serambi", a: "serambi", opts: ['serambi', 'ramise', 'miser', 'iser'] },
        { q: "Baca perkataan: kelabu", a: "kelabu", opts: ['kelabu', 'labuke', 'bukela', 'abuke'] },
        { q: "Baca perkataan: pelancong", a: "pelancong", opts: ['pelancong', 'lancong', 'congpel', 'ngpel'] },
        { q: "Baca perkataan: tembakau", a: "tembakau", opts: ['tembakau', 'bakaut', 'kautem', 'autem'] },
        { q: "Baca perkataan: selinder", a: "selinder", opts: ['selinder', 'linder', 'dersel', 'ersel'] },
        { q: "Baca perkataan: keranjang", a: "keranjang", opts: ['keranjang', 'ranjang', 'jangke', 'angke'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KV + KV + V + KV?", a: "sekolah", opts: ['sekolah', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KV + KV + V + KV?", a: "kelapa", opts: ['kelapa', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + KV + V + KV?", a: "belajar", opts: ['belajar', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + KV + V + KV?", a: "kereta", opts: ['kereta', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KV + KV + V + KV?", a: "pejabat", opts: ['pejabat', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KV + V + KV?", a: "bola", opts: ['bola', 'sekolah', 'kelapa', 'belajar'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KV + V + KV?", a: "rumah", opts: ['rumah', 'kereta', 'pejabat', 'kembara'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KV + V + KV?", a: "meja", opts: ['meja', 'telaga', 'seramai', 'perabot'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KV + V + KV?", a: "buku", opts: ['buku', 'beruang', 'gelombang', 'selamat'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KV + V + KV?", a: "saya", opts: ['saya', 'terapung', 'kelabu', 'pelangi'] }
    ]
};

export default BM_KP27;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP27;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP27 = BM_KP27;
}
