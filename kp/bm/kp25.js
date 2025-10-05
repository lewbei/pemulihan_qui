// KP25 — Perkataan KV + V + KV

const BM_KP25 = {
    id: 'bm-kp25',
    code: 'KP25',
    name: 'KP25 — Perkataan KV + V + KV',
    description: '*Perkataan KV + V + KV (bubuh, leleu, gigit, lilin)*',
    category: 'bm',
    questionBank: [
        // Reading words with KV + V + KV pattern
        { q: "Baca perkataan: bubuh", a: "bubuh", opts: ['bubuh', 'ububh', 'bhu', 'buhub'] },
        { q: "Baca perkataan: leleu", a: "leleu", opts: ['leleu', 'eleu', 'eluel', 'uele'] },
        { q: "Baca perkataan: gigit", a: "gigit", opts: ['gigit', 'igitg', 'gitgi', 'tgi'] },
        { q: "Baca perkataan: lilin", a: "lilin", opts: ['lilin', 'ilin', 'inili', 'ni'] },
        { q: "Baca perkataan: pipi", a: "pipi", opts: ['pipi', 'ipip', 'pipp', 'ipp'] },
        { q: "Baca perkataan: gaga", a: "gaga", opts: ['gaga', 'agag', 'ggaa', 'agga'] },
        { q: "Baca perkataan: lala", a: "lala", opts: ['lala', 'alal', 'llaa', 'alla'] },
        { q: "Baca perkataan: kiki", a: "kiki", opts: ['kiki', 'ikik', 'kik', 'iki'] },
        { q: "Baca perkataan: rara", a: "rara", opts: ['rara', 'arar', 'rraa', 'arra'] },
        { q: "Baca perkataan: sasa", a: "sasa", opts: ['sasa', 'asas', 'ssaa', 'assa'] },
        { q: "Baca perkataan: tata", a: "tata", opts: ['tata', 'atat', 'tta', 'att'] },
        { q: "Baca perkataan: nana", a: "nana", opts: ['nana', 'anan', 'nnna', 'anna'] },
        { q: "Baca perkataan: baba", a: "baba", opts: ['baba', 'abab', 'bbaa', 'abba'] },
        { q: "Baca perkataan: dada", a: "dada", opts: ['dada', 'adad', 'ddaa', 'adda'] },
        { q: "Baca perkataan: kaka", a: "kaka", opts: ['kaka', 'akak', 'kkak', 'akka'] },
        { q: "Baca perkataan: lili", a: "lili", opts: ['lili', 'ili', 'li', 'il'] },
        { q: "Baca perkataan: mama", a: "mama", opts: ['mama', 'amam', 'mmaa', 'amma'] },
        { q: "Baca perkataan: papa", a: "papa", opts: ['papa', 'apap', 'ppa', 'app'] },
        { q: "Baca perkataan: riri", a: "riri", opts: ['riri', 'iri', 'ri', 'ir'] },
        { q: "Baca perkataan: sisi", a: "sisi", opts: ['sisi', 'isi', 'si', 'is'] },

        // Syllable identification
        { q: "Perkataan 'bubuh' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'leleu' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'gigit' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'lilin' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'pipi' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'gaga' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'lala' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kiki' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'rara' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'sasa' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'bubuh' ialah?", a: "bu", opts: ['bu', 'bu', 'h', 'buh'] },
        { q: "Suku kata kedua 'bubuh' ialah?", a: "bu", opts: ['bu', 'bu', 'h', 'buh'] },
        { q: "Suku kata ketiga 'bubuh' ialah?", a: "h", opts: ['h', 'bu', 'bu', 'buh'] },
        { q: "Suku kata pertama 'leleu' ialah?", a: "le", opts: ['le', 'le', 'u', 'lel'] },
        { q: "Suku kata kedua 'leleu' ialah?", a: "le", opts: ['le', 'le', 'u', 'lel'] },
        { q: "Suku kata ketiga 'leleu' ialah?", a: "u", opts: ['u', 'le', 'le', 'lel'] },
        { q: "Suku kata pertama 'gigit' ialah?", a: "gi", opts: ['gi', 'gi', 't', 'gig'] },
        { q: "Suku kata kedua 'gigit' ialah?", a: "gi", opts: ['gi', 'gi', 't', 'gig'] },
        { q: "Suku kata ketiga 'gigit' ialah?", a: "t", opts: ['t', 'gi', 'gi', 'gig'] },
        { q: "Suku kata pertama 'lilin' ialah?", a: "li", opts: ['li', 'li', 'n', 'lil'] },

        // Pattern recognition
        { q: "Perkataan 'bubuh' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'leleu' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'gigit' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'lilin' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'pipi' mengikut corak?", a: "KV + V", opts: ['KV + V', 'V + KV', 'KV + KV', 'V + V'] },
        { q: "Perkataan 'gaga' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Suku kata 'bu' dalam 'bubuh' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },
        { q: "Suku kata 'bu' tengah 'bubuh' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'h' dalam 'bubuh' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'le' dalam 'leleu' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },

        // Missing syllable
        { q: "___ + bu + h = bubuh", a: "bu", opts: ['bu', 'bu', 'h', 'buh'] },
        { q: "bu + ___ + h = bubuh", a: "bu", opts: ['bu', 'bu', 'h', 'buh'] },
        { q: "bu + bu + ___ = bubuh", a: "h", opts: ['h', 'bu', 'bu', 'buh'] },
        { q: "___ + le + u = leleu", a: "le", opts: ['le', 'le', 'u', 'lel'] },
        { q: "le + ___ + u = leleu", a: "le", opts: ['le', 'le', 'u', 'lel'] },
        { q: "le + le + ___ = leleu", a: "u", opts: ['u', 'le', 'le', 'lel'] },
        { q: "___ + gi + t = gigit", a: "gi", opts: ['gi', 'gi', 't', 'gig'] },
        { q: "gi + ___ + t = gigit", a: "gi", opts: ['gi', 'gi', 't', 'gig'] },
        { q: "gi + gi + ___ = gigit", a: "t", opts: ['t', 'gi', 'gi', 'gig'] },
        { q: "___ + li + n = lilin", a: "li", opts: ['li', 'li', 'n', 'lil'] },

        // Word completion
        { q: "bu + bu + h = ?", a: "bubuh", opts: ['bubuh', 'ububh', 'bhu', 'buhub'] },
        { q: "le + le + u = ?", a: "leleu", opts: ['leleu', 'eleu', 'eluel', 'uele'] },
        { q: "gi + gi + t = ?", a: "gigit", opts: ['gigit', 'igitg', 'gitgi', 'tgi'] },
        { q: "li + li + n = ?", a: "lilin", opts: ['lilin', 'ilin', 'inili', 'ni'] },
        { q: "pi + pi = ?", a: "pipi", opts: ['pipi', 'ipip', 'pipp', 'ipp'] },
        { q: "ga + ga = ?", a: "gaga", opts: ['gaga', 'agag', 'ggaa', 'agga'] },
        { q: "la + la = ?", a: "lala", opts: ['lala', 'alal', 'llaa', 'alla'] },
        { q: "ki + ki = ?", a: "kiki", opts: ['kiki', 'ikik', 'kik', 'iki'] },
        { q: "ra + ra = ?", a: "rara", opts: ['rara', 'arar', 'rraa', 'arra'] },
        { q: "sa + sa = ?", a: "sasa", opts: ['sasa', 'asas', 'ssaa', 'assa'] },

        // Additional KV + V + KV words
        { q: "Baca perkataan: bapak", a: "bapak", opts: ['bapak', 'apbak', 'pakba', 'kba'] },
        { q: "Baca perkataan: mama", a: "mama", opts: ['mama', 'amama', 'mam', 'm'] },
        { q: "Baca perkataan: papa", a: "papa", opts: ['papa', 'apapa', 'pap', 'p'] },
        { q: "Baca perkataan: nana", a: "nana", opts: ['nana', 'anana', 'nan', 'n'] },
        { q: "Baca perkataan: kaka", a: "kaka", opts: ['kaka', 'akaka', 'kak', 'k'] },
        { q: "Baca perkataan: rara", a: "rara", opts: ['rara', 'arara', 'rar', 'r'] },
        { q: "Baca perkataan: lala", a: "lala", opts: ['lala', 'alala', 'lal', 'l'] },
        { q: "Baca perkataan: dada", a: "dada", opts: ['dada', 'adada', 'dad', 'd'] },
        { q: "Baca perkataan: sasa", a: "sasa", opts: ['sasa', 'asasa', 'sas', 's'] },
        { q: "Baca perkataan: tata", a: "tata", opts: ['tata', 'atata', 'tat', 't'] },

        // More syllable work
        { q: "Perkataan 'bapak' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'mama' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'papa' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'nana' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kaka' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata pertama 'bapak' ialah?", a: "ba", opts: ['ba', 'pa', 'k', 'bak'] },
        { q: "Suku kata kedua 'bapak' ialah?", a: "pa", opts: ['pa', 'ba', 'k', 'bak'] },
        { q: "Suku kata ketiga 'bapak' ialah?", a: "k", opts: ['k', 'ba', 'pa', 'bak'] },
        { q: "Suku kata pertama 'mama' ialah?", a: "ma", opts: ['ma', 'ma', 'ma', 'mam'] },
        { q: "Suku kata kedua 'mama' ialah?", a: "ma", opts: ['ma', 'ma', 'ma', 'mam'] },

        // More pattern work
        { q: "Perkataan 'bapak' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'mama' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'papa' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'nana' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Perkataan 'kaka' mengikut corak?", a: "KV + V + KV", opts: ['KV + V + KV', 'V + KV + KV', 'KV + KV + V', 'V + V + KV'] },
        { q: "Suku kata 'ba' dalam 'bapak' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },
        { q: "Suku kata 'pa' dalam 'bapak' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'k' dalam 'bapak' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },
        { q: "Suku kata 'ma' dalam 'mama' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVK', 'VKK'] },
        { q: "Suku kata 'ma' tengah 'mama' ialah corak?", a: "V", opts: ['V', 'KV', 'KVK', 'VKK'] },

        // More missing syllable work
        { q: "___ + pa + k = bapak", a: "ba", opts: ['ba', 'pa', 'k', 'bak'] },
        { q: "ba + ___ + k = bapak", a: "pa", opts: ['pa', 'ba', 'k', 'bak'] },
        { q: "ba + pa + ___ = bapak", a: "k", opts: ['k', 'ba', 'pa', 'bak'] },
        { q: "___ + ma + ma = mama", a: "ma", opts: ['ma', 'ma', 'ma', 'mam'] },
        { q: "ma + ___ + ma = mama", a: "ma", opts: ['ma', 'ma', 'ma', 'mam'] },
        { q: "ma + ma + ___ = mama", a: "ma", opts: ['ma', 'ma', 'ma', 'mam'] },
        { q: "___ + pa + pa = papa", a: "pa", opts: ['pa', 'pa', 'pa', 'pap'] },
        { q: "pa + ___ + pa = papa", a: "pa", opts: ['pa', 'pa', 'pa', 'pap'] },
        { q: "pa + pa + ___ = papa", a: "pa", opts: ['pa', 'pa', 'pa', 'pap'] },
        { q: "___ + na + na = nana", a: "na", opts: ['na', 'na', 'na', 'nan'] },

        // More word completion
        { q: "ba + pa + k = ?", a: "bapak", opts: ['bapak', 'apbak', 'pakba', 'kba'] },
        { q: "ma + ma + ma = ?", a: "mama", opts: ['mama', 'amama', 'mamam', 'amam'] },
        { q: "pa + pa + pa = ?", a: "papa", opts: ['papa', 'apapa', 'papap', 'apap'] },
        { q: "na + na + na = ?", a: "nana", opts: ['nana', 'anana', 'nanan', 'anan'] },
        { q: "ka + ka + ka = ?", a: "kaka", opts: ['kaka', 'akaka', 'kakak', 'akak'] },
        { q: "ra + ra + ra = ?", a: "rara", opts: ['rara', 'arara', 'rara', 'arar'] },
        { q: "la + la + la = ?", a: "lala", opts: ['lala', 'alala', 'lalal', 'alal'] },
        { q: "da + da + da = ?", a: "dada", opts: ['dada', 'adada', 'dadad', 'adad'] },
        { q: "sa + sa + sa = ?", a: "sasa", opts: ['sasa', 'asasa', 'sasas', 'asas'] },
        { q: "ta + ta + ta = ?", a: "tata", opts: ['tata', 'atata', 'tatat', 'atat'] },

        // Application questions
        { q: "Bubuh adalah?", a: "bina", opts: ['bina', "makan", 'minum', 'tidur'] },
        { q: "Leleu adalah?", a: "warna", opts: ['warna', 'bentuk', 'saiz', 'berat'] },
        { q: "Gigit dengan?", a: "gigi", opts: ['gigi', 'tangan', 'kaki', 'mata'] },
        { q: "Lilin adalah?", a: "cahaya", opts: ['cahaya', 'gelap', 'panas', 'sejuk'] },
        { q: "Pipit adalah?", a: "jepit", opts: ['jepit', 'buka', 'lengkap', 'kosong'] },
        { q: "Gagah bermaksud?", a: "kuat", opts: ['kuat', 'lemah', 'kecil', 'besar'] },
        { q: "Lala bermaksud?", a: "menyanyi", opts: ['menyanyi', 'menari', 'berlari', 'duduk'] },
        { q: "Kiki kucing?", a: "bunyi", opts: ['bunyi', 'diam', 'marah', 'gembira'] },
        { q: "Rara adalah?", a: "gadis", opts: ['gadis', 'lelaki', 'tua', 'muda'] },
        { q: "Sasa adalah?", a: "garam", opts: ['garam', 'gula', 'cili', 'kunyit'] },
        { q: "Tata adalah?", a: "atur", opts: ['atur', 'kacau', 'sepah', 'rosak'] },
        { q: "Nana adalah?", a: "perempuan", opts: ['perempuan', 'lelaki', 'kanak-kanak', 'orang tua'] },
        { q: "Bapa adalah?", a: "ayah", opts: ['ayah', 'ibu', 'adik', 'kakak'] },
        { q: "Mama adalah?", a: "ibu", opts: ['ibu', 'ayah', 'adik', 'kakak'] },
        { q: "Papa panggilan untuk?", a: "ayah", opts: ['ayah', 'ibu', 'datuk', 'nenek'] },
        { q: "Kaka adalah?", a: "saudara", opts: ['saudara', 'kawan', 'musuh', 'jiran'] },
        { q: "Riri air?", a: "mata air", opts: ['mata air', 'sungai', 'tasik', 'laut'] },
        { q: "Sisi kiri atau?", a: "kanan", opts: ['kanan', 'atas', 'bawah', 'tengah'] },
        { q: "Lili adalah?", a: "bunga", opts: ['bunga', 'pokok', 'rumput', 'buah'] },
        { q: "Baba adalah?", a: "ayah", opts: ['ayah', 'ibu', 'datuk', 'nenek'] },
        { q: "Dada adalah?", a: "dada", opts: ['dada', 'belakang', 'hadapan', 'sisi'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KV + V + KV?", a: "bubuh", opts: ['bubuh', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KV + V + KV?", a: "leleu", opts: ['leleu', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + V + KV?", a: "gigit", opts: ['gigit', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + V + KV?", a: "lilin", opts: ['lilin', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KV + V + KV?", a: "pipi", opts: ['pipi', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + V + KV?", a: "bola", opts: ['bola', 'bubuh', 'leleu', 'gigit'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + V + KV?", a: "rumah", opts: ['rumah', 'lilin', 'pipi', 'gaga'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + V + KV?", a: "meja", opts: ['meja', 'lala', 'kiki', 'rara'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + V + KV?", a: "buku", opts: ['buku', 'sasa', 'tata', 'nana'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + V + KV?", a: "saya", opts: ['saya', 'bapa', 'mama', 'papa'] },

        // Sound patterns
        { q: "Perkataan dengan 'bu' di awal?", a: "bubuh", opts: ['bubuh', 'leleu', 'gigit', 'lilin'] },
        { q: "Perkataan dengan 'le' di awal?", a: "leleu", opts: ['leleu', 'bubuh', 'gigit', 'lilin'] },
        { q: "Perkataan dengan 'gi' di awal?", a: "gigit", opts: ['gigit', 'bubuh', 'leleu', 'lilin'] },
        { q: "Perkataan dengan 'li' di awal?", a: "lilin", opts: ['lilin', 'bubuh', 'leleu', 'gigit'] },
        { q: "Perkataan dengan 'pi' di awal?", a: "pipi", opts: ['pipi', 'bubuh', 'leleu', 'gigit'] },
        { q: "Perkataan dengan 'bu' di tengah?", a: "bubuh", opts: ['bubuh', 'leleu', 'gigit', 'lilin'] },
        { q: "Perkataan dengan 'le' di tengah?", a: "leleu", opts: ['leleu', 'bubuh', 'gigit', 'lilin'] },
        { q: "Perkataan dengan 'gi' di tengah?", a: "gigit", opts: ['gigit', 'bubuh', 'leleu', 'lilin'] },
        { q: "Perkataan dengan 'li' di tengah?", a: "lilin", opts: ['lilin', 'bubuh', 'leleu', 'gigit'] },
        { q: "Perkataan dengan 'pi' di tengah?", a: "pipi", opts: ['pipi', 'bubuh', 'leleu', 'gigit'] },

        // More complex KV + V + KV words
        { q: "Baca perkataan: bebola", a: "bebola", opts: ['bebola', 'bola', 'bela', 'belab'] },
        { q: "Baca perkataan: lelaki", a: "lelaki", opts: ['lelaki', 'laki', 'kale', 'kalel'] },
        { q: "Baca perkataan: gigi", a: "gigi", opts: ['gigi', 'igi', 'gig', 'igig'] },
        { q: "Baca perkataan: lili", a: "lili", opts: ['lili', 'ili', 'lil', 'ilil'] },
        { q: "Baca perkataan: babi", a: "babi", opts: ['babi', 'abi', 'bab', 'abab'] },
        { q: "Baca perkataan: keke", a: "keke", opts: ['keke', 'eke', 'kek', 'eke'] },
        { q: "Baca perkataan: meme", a: "meme", opts: ['meme', 'eme', 'mem', 'emem'] },
        { q: "Baca perkataan: pepet", a: "pepet", opts: ['pepet', 'epet', 'pet', 'epe'] },
        { q: "Baca perkataan: gigi", a: "gigi", opts: ['gigi', 'igi', 'gig', 'igig'] },
        { q: "Baca perkataan: riri", a: "riri", opts: ['riri', 'iri', 'rir', 'irir'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KV + V + KV?", a: "bubuh", opts: ['bubuh', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KV + V + KV?", a: "leleu", opts: ['leleu', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + V + KV?", a: "gigit", opts: ['gigit', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + V + KV?", a: "lilin", opts: ['lilin', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KV + V + KV?", a: "pipi", opts: ['pipi', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + V + KV?", a: "bola", opts: ['bola', 'bubuh', 'leleu', 'gigit'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + V + KV?", a: "rumah", opts: ['rumah', 'lilin', 'pipi', 'gaga'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + V + KV?", a: "meja", opts: ['meja', 'lala', 'kiki', 'rara'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + V + KV?", a: "buku", opts: ['buku', 'sasa', 'tata', 'nana'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + V + KV?", a: "saya", opts: ['saya', 'bapa', 'mama', 'papa'] }
    ]
};

export default BM_KP25;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP25;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP25 = BM_KP25;
}
