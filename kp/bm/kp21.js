// KP21 — Perkataan KVKK + KV

const BM_KP21 = {
    id: 'bm-kp21',
    code: 'KP21',
    name: 'KP21 — Perkataan KVKK + KV',
    description: '*Perkataan KVKK + KV (pilihan, kianan, kuisyen, tandas)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVKK + KV pattern
        { q: "Baca perkataan: pilihan", a: "pilihan", opts: ['pilihan', 'pilhan', 'lihpan', 'hanpil'] },
        { q: "Baca perkataan: kianan", a: "kianan", opts: ['kianan', 'ianank', 'nankia', 'ankian'] },
        { q: "Baca perkataan: kuisyen", a: "kuisyen", opts: ['kuisyen', 'uisyen', 'syenku', 'yenkui'] },
        { q: "Baca perkataan: tandas", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'astand'] },
        { q: "Baca perkataan: kampung", a: "kampung", opts: ['kampung', 'ampungk', 'pungkam', 'ungkamp'] },
        { q: "Baca perkataan: pantai", a: "pantai", opts: ['pantai', 'antaip', 'taipan', 'aipant'] },
        { q: "Baca perkataan: bank", a: "bank", opts: ['bank', 'ankb', 'nkba', 'kban'] },
        { q: "Baca perkataan: klinik", a: "klinik", opts: ['klinik', 'linikk', 'niklik', 'ikklin'] },
        { q: "Baca perkataan: kompleks", a: "kompleks", opts: ['kompleks', 'mpleksko', 'plekskom', 'lekskomp'] },
        { q: "Baca perkataan: kontrak", a: "kontrak", opts: ['kontrak', 'ontrakk', 'trakon', 'akkontr'] },
        { q: "Baca perkataan: sentral", a: "sentral", opts: ['sentral', 'entrals', 'ntralse', 'tralsen'] },
        { q: "Baca perkataan: sementara", a: "sementara", opts: ['sementara', 'ementars', 'mentarase', 'tarasem'] },
        { q: "Baca perkataan: conteng", a: "conteng", opts: ['conteng', 'ontengc', 'tengcon', 'ngcon'] },
        { q: "Baca perkataan: sains", a: "sains", opts: ['sains', 'ainss', 'inssa', 'nssai'] },
        { q: "Baca perkataan: saintis", a: "saintis", opts: ['saintis', 'aintiss', 'intissa', 'ntissai'] },
        { q: "Baca perkataan: teknikal", a: "teknikal", opts: ['teknikal', 'eknikalt', 'knikalte', 'nikalte'] },
        { q: "Baca perkataan: karnivor", a: "karnivor", opts: ['karnivor', 'arnivork', 'rnivorka', 'nivorka'] },
        { q: "Baca perkataan: universiti", a: "universiti", opts: ['universiti', 'niversitu', 'versituni', 'ersituniv'] },
        { q: "Baca perkataan: hospital", a: "hospital", opts: ['hospital', 'ospitahl', 'spitahlo', 'pitahlos'] },
        { q: "Baca perkataan: perpustakaan", a: "perpustakaan", opts: ['perpustakaan', 'erpustakap', 'rpustakape', 'pustakaper'] },

        // Syllable identification
        { q: "Perkataan 'pilihan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kianan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kuisyen' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'tandas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kampung' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'pantai' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bank' ada berapa suku kata?", a: "1", opts: ['1', '2', '3', '4'] },
        { q: "Perkataan 'klinik' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kompleks' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kontrak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'pilihan' ialah?", a: "pi", opts: ['pi', 'li', 'han', 'pil'] },
        { q: "Suku kata kedua 'pilihan' ialah?", a: "li", opts: ['li', 'pi', 'han', 'pil'] },
        { q: "Suku kata ketiga 'pilihan' ialah?", a: "han", opts: ['han', 'pi', 'li', 'pil'] },
        { q: "Suku kata pertama 'kianan' ialah?", a: "ki", opts: ['ki', 'an', 'an', 'kia'] },
        { q: "Suku kata kedua 'kianan' ialah?", a: "an", opts: ['an', 'ki', 'an', 'kia'] },
        { q: "Suku kata ketiga 'kianan' ialah?", a: "an", opts: ['an', 'ki', 'an', 'kia'] },
        { q: "Suku kata pertama 'kuisyen' ialah?", a: "kui", opts: ['kui', 'syen', 'kuis', 'syen'] },
        { q: "Suku kata kedua 'kuisyen' ialah?", a: "syen", opts: ['syen', 'kui', 'kuis', 'syen'] },
        { q: "Suku kata pertama 'tandas' ialah?", a: "tan", opts: ['tan', 'das', 'tand', 'andas'] },
        { q: "Suku kata kedua 'tandas' ialah?", a: "das", opts: ['das', 'tan', 'tand', 'andas'] },

        // Pattern recognition
        { q: "Perkataan 'pilihan' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'kianan' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'kuisyen' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'tandas' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'kampung' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'pantai' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Suku kata 'pil' dalam 'pilihan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'han' dalam 'pilihan' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'kian' dalam 'kianan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'an' dalam 'kianan' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },

        // Missing syllable
        { q: "___ + li + han = pilihan", a: "pi", opts: ['pi', 'li', 'han', 'pil'] },
        { q: "pi + ___ + han = pilihan", a: "li", opts: ['li', 'pi', 'han', 'pil'] },
        { q: "pi + li + ___ = pilihan", a: "han", opts: ['han', 'pi', 'li', 'pil'] },
        { q: "___ + an + an = kianan", a: "ki", opts: ['ki', 'an', 'kian', 'ian'] },
        { q: "ki + ___ + an = kianan", a: "an", opts: ['an', 'ki', 'kian', 'ian'] },
        { q: "ki + an + ___ = kianan", a: "an", opts: ['an', 'ki', 'kian', 'ian'] },
        { q: "___ + syen = kuisyen", a: "kui", opts: ['kui', 'syen', 'kuis', 'syen'] },
        { q: "kui + ___ = kuisyen", a: "syen", opts: ['syen', 'kui', 'kuis', 'syen'] },
        { q: "___ + das = tandas", a: "tan", opts: ['tan', 'das', 'tand', 'andas'] },
        { q: "tan + ___ = tandas", a: "das", opts: ['das', 'tan', 'tand', 'andas'] },

        // Word completion
        { q: "pil + i + han = ?", a: "pilihan", opts: ['pilihan', 'lihanpil', 'hanpil', 'pilhan'] },
        { q: "kian + an + an = ?", a: "kianan", opts: ['kianan', 'anankian', 'nankia', 'ankian'] },
        { q: "kui + syen = ?", a: "kuisyen", opts: ['kuisyen', 'syenkui', 'kuis', 'syen'] },
        { q: "tan + das = ?", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'astand'] },
        { q: "kam + pung = ?", a: "kampung", opts: ['kampung', 'ampungk', 'pungkam', 'ungkamp'] },
        { q: "pan + tai = ?", a: "pantai", opts: ['pantai', 'antaip', 'taipan', 'aipant'] },
        { q: "ban + k = ?", a: "bank", opts: ['bank', 'ankb', 'nkba', 'kban'] },
        { q: "kli + nik = ?", a: "klinik", opts: ['klinik', 'linikk', 'niklik', 'ikklin'] },
        { q: "kom + pleks = ?", a: "kompleks", opts: ['kompleks', 'mpleksko', 'plekskom', 'lekskomp'] },
        { q: "kon + trak = ?", a: "kontrak", opts: ['kontrak', 'ontrakk', 'trakon', 'akkontr'] },

        // Additional KVKK + KV words
        { q: "Baca perkataan: angkasa", a: "angkasa", opts: ['angkasa', 'ngkasan', 'gkasan', 'kasan'] },
        { q: "Baca perkataan: kelawar", a: "kelawar", opts: ['kelawar', 'elawark', 'lawark', 'awarkel'] },
        { q: "Baca perkataan: kapal", a: "kapal", opts: ['kapal', 'apalk', 'palka', 'alkap'] },
        { q: "Baca perkataan: kereta", a: "kereta", opts: ['kereta', 'eretak', 'retak', 'etak'] },
        { q: "Baca perkataan: komputer", a: "komputer", opts: ['komputer', 'omputerk', 'mputerko', 'puterkom'] },
        { q: "Baca perkataan: telefon", a: "telefon", opts: ['telefon', 'elefont', 'lefot', 'efonte'] },
        { q: "Baca perkataan: televisyen", a: "televisyen", opts: ['televisyen', 'elevist', 'leviste', 'evisyent'] },
        { q: "Baca perkataan: restoran", a: "restoran", opts: ['restoran', 'estoran', 'storan', 'torane'] },
        { q: "Baca perkataan: stesen", a: "stesen", opts: ['stesen', 'tesens', 'esenst', 'senste'] },
        { q: "Baca perkataan: tadika", a: "tadika", opts: ['tadika', 'adikat', 'dikata', 'ikatad'] },

        // More syllable work
        { q: "Perkataan 'angkasa' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kelawar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kapal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kereta' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'komputer' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata pertama 'angkasa' ialah?", a: "ang", opts: ['ang', 'ka', 'sa', 'angk'] },
        { q: "Suku kata kedua 'angkasa' ialah?", a: "ka", opts: ['ka', 'ang', 'sa', 'angk'] },
        { q: "Suku kata ketiga 'angkasa' ialah?", a: "sa", opts: ['sa', 'ang', 'ka', 'angk'] },
        { q: "Suku kata pertama 'kelawar' ialah?", a: "ke", opts: ['ke', 'la', 'war', 'kela'] },
        { q: "Suku kata kedua 'kelawar' ialah?", a: "la", opts: ['la', 'ke', 'war', 'kela'] },

        // More pattern work
        { q: "Perkataan 'angkasa' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'kelawar' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'kapal' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'kereta' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Perkataan 'komputer' mengikut corak?", a: "KVKK + KV", opts: ['KVKK + KV', 'KV + KVKK', 'KVKK + KVKK', 'KV + KV'] },
        { q: "Suku kata 'angk' dalam 'angkasa' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'ka' dalam 'angkasa' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },
        { q: "Suku kata 'kela' dalam 'kelawar' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'war' dalam 'kelawar' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'KVK', 'V'] },

        // More missing syllable work
        { q: "___ + ka + sa = angkasa", a: "ang", opts: ['ang', 'ka', 'sa', 'angk'] },
        { q: "ang + ___ + sa = angkasa", a: "ka", opts: ['ka', 'ang', 'sa', 'angk'] },
        { q: "ang + ka + ___ = angkasa", a: "sa", opts: ['sa', 'ang', 'ka', 'angk'] },
        { q: "___ + la + war = kelawar", a: "ke", opts: ['ke', 'la', 'war', 'kela'] },
        { q: "ke + ___ + war = kelawar", a: "la", opts: ['la', 'ke', 'war', 'kela'] },
        { q: "ke + la + ___ = kelawar", a: "war", opts: ['war', 'ke', 'la', 'kela'] },
        { q: "___ + pal = kapal", a: "ka", opts: ['ka', 'pal', 'kap', 'apal'] },
        { q: "ka + ___ = kapal", a: "pal", opts: ['pal', 'ka', 'kap', 'apal'] },
        { q: "___ + eta = kereta", a: "ker", opts: ['ker', 'eta', 'kere', 'erek'] },
        { q: "ker + ___ = kereta", a: "eta", opts: ['eta', 'ker', 'kere', 'erek'] },

        // More word completion
        { q: "angk + a + sa = ?", a: "angkasa", opts: ['angkasa', 'ngkasan', 'gkasan', 'kasan'] },
        { q: "kela + war = ?", a: "kelawar", opts: ['kelawar', 'elawark', 'lawark', 'awarkel'] },
        { q: "ka + pal = ?", a: "kapal", opts: ['kapal', 'apalk', 'palka', 'alkap'] },
        { q: "ker + eta = ?", a: "kereta", opts: ['kereta', 'eretak', 'retak', 'etak'] },
        { q: "kom + puter = ?", a: "komputer", opts: ['komputer', 'omputerk', 'mputerko', 'puterkom'] },
        { q: "tele + fon = ?", a: "telefon", opts: ['telefon', 'elefont', 'lefot', 'efonte'] },
        { q: "tele + visyen = ?", a: "televisyen", opts: ['televisyen', 'elevist', 'leviste', 'evisyent'] },
        { q: "res + toran = ?", a: "restoran", opts: ['restoran', 'estoran', 'storan', 'torane'] },
        { q: "ste + sen = ?", a: "stesen", opts: ['stesen', 'tesens', 'esenst', 'senste'] },
        { q: "tad + ika = ?", a: "tadika", opts: ['tadika', 'adikat', 'dikata', 'ikatad'] },

        // Application questions
        { q: "Tempat belajar ialah?", a: "tadika", opts: ['tadika', 'restoran', 'stesen', 'angkasa'] },
        { q: "Tempat makan ialah?", a: "restoran", opts: ['restoran', 'tadika', 'stesen', 'angkasa'] },
        { q: "Tempat tunggu bas ialah?", a: "stesen", opts: ['stesen', 'tadika', 'restoran', 'angkasa'] },
        { q: "Angkasa ada di?", a: "langit", opts: ['langit', 'bumi', 'laut', 'gunung'] },
        { q: "Kelawar adalah haiwan?", a: "kelawar", opts: ['kelawar', 'kucing', 'anjing', 'burung'] },
        { q: "Kapal ada di?", a: "laut", opts: ['laut', 'darat', 'udara', 'gunung'] },
        { q: "Kereta ada di?", a: "jalan", opts: ['jalan', 'laut', 'udara', 'sungai'] },
        { q: "Komputer digunakan untuk?", a: "kerja", opts: ['kerja', 'makan', 'tidur', 'mandi'] },
        { q: "Telefon digunakan untuk?", a: "hubung", opts: ['hubung', 'makan', 'minum', 'tidur'] },
        { q: "Televisyen untuk?", a: "tonton", opts: ['tonton', 'dengar', 'baca', 'tulis'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KVKK + KV?", a: "pilihan", opts: ['pilihan', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV?", a: "kianan", opts: ['kianan', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV?", a: "kuisyen", opts: ['kuisyen', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV?", a: "tandas", opts: ['tandas', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV?", a: "kampung", opts: ['kampung', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV?", a: "bola", opts: ['bola', 'pilihan', 'kianan', 'kuisyen'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV?", a: "rumah", opts: ['rumah', 'tandas', 'kampung', 'pantai'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV?", a: "meja", opts: ['meja', 'bank', 'klinik', 'kompleks'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV?", a: "buku", opts: ['buku', 'kontrak', 'sentral', 'sementara'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV?", a: "saya", opts: ['saya', 'conteng', 'sains', 'saintis'] },

        // Sound patterns
        { q: "Perkataan dengan suku kata 'pil' di awal?", a: "pilihan", opts: ['pilihan', 'kianan', 'kuisyen', 'tandas'] },
        { q: "Perkataan dengan suku kata 'kian' di awal?", a: "kianan", opts: ['kianan', 'pilihan', 'kuisyen', 'tandas'] },
        { q: "Perkataan dengan suku kata 'kui' di awal?", a: "kuisyen", opts: ['kuisyen', 'pilihan', 'kianan', 'tandas'] },
        { q: "Perkataan dengan suku kata 'tan' di awal?", a: "tandas", opts: ['tandas', 'pilihan', 'kianan', 'kuisyen'] },
        { q: "Perkataan dengan suku kata 'kam' di awal?", a: "kampung", opts: ['kampung', 'pilihan', 'kianan', 'kuisyen'] },
        { q: "Perkataan dengan suku kata 'han' di akhir?", a: "pilihan", opts: ['pilihan', 'kianan', 'kuisyen', 'tandas'] },
        { q: "Perkataan dengan suku kata 'an' di akhir?", a: "kianan", opts: ['kianan', 'pilihan', 'kuisyen', 'tandas'] },
        { q: "Perkataan dengan suku kata 'syen' di akhir?", a: "kuisyen", opts: ['kuisyen', 'pilihan', 'kianan', 'tandas'] },
        { q: "Perkataan dengan suku kata 'das' di akhir?", a: "tandas", opts: ['tandas', 'pilihan', 'kianan', 'kuisyen'] },
        { q: "Perkataan dengan suku kata 'pung' di akhir?", a: "kampung", opts: ['kampung', 'pilihan', 'kianan', 'kuisyen'] },

        // More complex KVKK + KV words
        { q: "Baca perkataan: pusat", a: "pusat", opts: ['pusat', 'usapt', 'saptu', 'atpus'] },
        { q: "Baca perkataan: kabinet", a: "kabinet", opts: ['kabinet', 'abinetk', 'bintka', 'inetka'] },
        { q: "Baca perkataan: dokumen", a: "dokumen", opts: ['dokumen', 'okumend', 'kumendo', 'umendok'] },
        { q: "Baca perkataan: proses", a: "proses", opts: ['proses', 'rosep', 'osepr', 'sepro'] },
        { q: "Baca perkataan: sistem", a: "sistem", opts: ['sistem', 'istems', 'stemsi', 'tensi'] },
        { q: "Baca perkataan: program", a: "program", opts: ['program', 'rogrampr', 'ogrampr', 'grampr'] },
        { q: "Baca perkataan: standard", a: "standard", opts: ['standard', 'tandards', 'andarst', 'ndarst'] },
        { q: "Baca perkataan: kualiti", a: "kualiti", opts: ['kualiti', 'ualitik', 'alitiku', 'litiku'] },
        { q: "Baca perkataan: strategi", a: "strategi", opts: ['strategi', 'trategis', 'rategist', 'ategist'] },
        { q: "Baca perkataan: teknologi", a: "teknologi", opts: ['teknologi', 'eknologit', 'knologite', 'nologite'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KVKK + KV?", a: "pilihan", opts: ['pilihan', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV?", a: "kianan", opts: ['kianan', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV?", a: "kuisyen", opts: ['kuisyen', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV?", a: "tandas", opts: ['tandas', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV?", a: "kampung", opts: ['kampung', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV?", a: "bola", opts: ['bola', 'pilihan', 'kianan', 'kuisyen'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV?", a: "rumah", opts: ['rumah', 'tandas', 'kampung', 'pantai'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV?", a: "meja", opts: ['meja', 'bank', 'klinik', 'kompleks'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV?", a: "buku", opts: ['buku', 'kontrak', 'sentral', 'sementara'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV?", a: "saya", opts: ['saya', 'conteng', 'sains', 'saintis'] }
    ]
};

export default BM_KP21;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP21;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP21 = BM_KP21;
}
