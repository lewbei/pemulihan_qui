// KP28 — Perkataan KVKK + KV + KV

const BM_KP28 = {
    id: 'bm-kp28',
    code: 'KP28',
    name: 'KP28 — Perkataan KVKK + KV + KV',
    description: '*Perkataan KVKK + KV + KV (pintu, kunci, lampu, kertas)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVKK + KV + KV pattern
        { q: "Baca perkataan: pintupagi", a: "pintupagi", opts: ['pintupagi', 'tupagipin', 'pagipintu', 'gipintu'] },
        { q: "Baca perkataan: kuncibesi", a: "kuncibesi", opts: ['kuncibesi', 'cibesikun', 'besikunci', 'ikuncib'] },
        { q: "Baca perkataan: lampupeta", a: "lampupeta", opts: ['lampupeta', 'petalamp', 'etalampu', 'pumetal'] },
        { q: "Baca perkataan: kertaskertas", a: "kertaskertas", opts: ['kertaskertas', 'taskertas', 'tasker', 'tasker'] },
        { q: "Baca perkataan: bankjalan", a: "bankjalan", opts: ['bankjalan', 'jalanbank', 'lanbank', 'ankjala'] },
        { q: "Baca perkataan: kampungdesa", a: "kampungdesa", opts: ['kampungdesa', 'pungdesak', 'desakamp', 'pungdesa'] },
        { q: "Baca perkataan: pantaiselat", a: "pantaiselat", opts: ['pantaiselat', 'taiselat', 'selatpant', 'latpanta'] },
        { q: "Baca perkataan: tandasawam", a: "tandasawam", opts: ['tandasawam', 'dasawamt', 'sawamtand', 'awamtand'] },
        { q: "Baca perkataan: bankwang", a: "bankwang", opts: ['bankwang', 'ankwang', 'wangbank', 'kwangban'] },
        { q: "Baca perkataan: kertasbuku", a: "kertasbuku", opts: ['kertasbuku', 'taskubuk', 'bukukerta', 'ukubkert'] },
        { q: "Baca perkataan: lampujalan", a: "lampujalan", opts: ['lampujalan', 'pumjalan', 'jalanlamp', 'lanlampu'] },
        { q: "Baca perkataan: pintukayu", a: "pintukayu", opts: ['pintukayu', 'tukayupin', 'kayupintu', 'ayupintu'] },
        { q: "Baca perkataan: kuncipintu", a: "kuncipintu", opts: ['kuncipintu', 'cipintuk', 'pintukun', 'kunpint'] },
        { q: "Baca perkataan: bankrakyat", a: "bankrakyat", opts: ['bankrakyat', 'ankrakyat', 'rakyatban', 'kyatbank'] },
        { q: "Baca perkataan: kampungbaru", a: "kampungbaru", opts: ['kampungbaru', 'pungbaru', 'barukamp', 'rukampong'] },
        { q: "Baca perkataan: pantaiindah", a: "pantaiindah", opts: ['pantaiindah', 'taiindah', 'indahpant', 'dahpanta'] },
        { q: "Baca perkataan: tandaspakai", a: "tandaspakai", opts: ['tandaspakai', 'daspakait', 'pakaitand', 'kaitandas'] },
        { q: "Baca perkataan: kertaskain", a: "kertaskain", opts: ['kertaskain', 'taskain', 'kainkerta', 'inkertak'] },
        { q: "Baca perkataan: lampubiru", a: "lampubiru", opts: ['lampubiru', 'pumubiru', 'birulampu', 'urulampu'] },
        { q: "Baca perkataan: pintubesar", a: "pintubesar", opts: ['pintubesar', 'tubesar', 'besarpintu', 'pintbes'] },

        // Syllable identification
        { q: "Perkataan 'pintupagi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kuncibesi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'lampupeta' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kertaskertas' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'bankjalan' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kampungdesa' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'pantaiselat' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'tandasawam' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'bankwang' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kertasbuku' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'pintupagi' ialah?", a: "pin", opts: ['pin', 'tu', 'pa', 'gi'] },
        { q: "Suku kata kedua 'pintupagi' ialah?", a: "tu", opts: ['tu', 'pin', 'pa', 'gi'] },
        { q: "Suku kata ketiga 'pintupagi' ialah?", a: "pa", opts: ['pa', 'pin', 'tu', 'gi'] },
        { q: "Suku kata keempat 'pintupagi' ialah?", a: "gi", opts: ['gi', 'pin', 'tu', 'pa'] },
        { q: "Suku kata pertama 'kuncibesi' ialah?", a: "kun", opts: ['kun', 'ci', 'be', 'si'] },
        { q: "Suku kata kedua 'kuncibesi' ialah?", a: "ci", opts: ['ci', 'kun', 'be', 'si'] },
        { q: "Suku kata ketiga 'kuncibesi' ialah?", a: "be", opts: ['be', 'kun', 'ci', 'si'] },
        { q: "Suku kata keempat 'kuncibesi' ialah?", a: "si", opts: ['si', 'kun', 'ci', 'be'] },
        { q: "Suku kata pertama 'lampupeta' ialah?", a: "lam", opts: ['lam', 'pu', 'pe', 'ta'] },
        { q: "Suku kata kedua 'lampupeta' ialah?", a: "pu", opts: ['pu', 'lam', 'pe', 'ta'] },

        // Pattern recognition
        { q: "Perkataan 'pintupagi' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'kuncibesi' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'lampupeta' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'kertaskertas' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'bankjalan' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Suku kata 'pin' dalam 'pintupagi' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'tu' dalam 'pintupagi' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'pa' dalam 'pintupagi' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'gi' dalam 'pintupagi' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'kun' dalam 'kuncibesi' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'ci' dalam 'kuncibesi' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },

        // Missing syllable
        { q: "___ + tu + pa + gi = pintupagi", a: "pin", opts: ['pin', 'tu', 'pa', 'gi'] },
        { q: "pin + ___ + pa + gi = pintupagi", a: "tu", opts: ['tu', 'pin', 'pa', 'gi'] },
        { q: "pin + tu + ___ + gi = pintupagi", a: "pa", opts: ['pa', 'pin', 'tu', 'gi'] },
        { q: "pin + tu + pa + ___ = pintupagi", a: "gi", opts: ['gi', 'pin', 'tu', 'pa'] },
        { q: "___ + ci + be + si = kuncibesi", a: "kun", opts: ['kun', 'ci', 'be', 'si'] },
        { q: "kun + ___ + be + si = kuncibesi", a: "ci", opts: ['ci', 'kun', 'be', 'si'] },
        { q: "kun + ci + ___ + si = kuncibesi", a: "be", opts: ['be', 'kun', 'ci', 'si'] },
        { q: "kun + ci + be + ___ = kuncibesi", a: "si", opts: ['si', 'kun', 'ci', 'be'] },
        { q: "___ + pu + pe + ta = lampupeta", a: "lam", opts: ['lam', 'pu', 'pe', 'ta'] },

        // Word completion
        { q: "pin + tu + pa + gi = ?", a: "pintupagi", opts: ['pintupagi', 'tupagipin', 'pagipintu', 'gipintu'] },
        { q: "kun + ci + be + si = ?", a: "kuncibesi", opts: ['kuncibesi', 'cibesikun', 'besikunci', 'ikuncib'] },
        { q: "lam + pu + pe + ta = ?", a: "lampupeta", opts: ['lampupeta', 'pumupeta', 'peta', 'petalam'] },
        { q: "ker + tas + ker + tas = ?", a: "kertaskertas", opts: ['kertaskertas', 'taskertas', 'tasker', 'taskert'] },
        { q: "ban + k + ja + lan = ?", a: "bankjalan", opts: ['bankjalan', 'jalanbank', 'lanbank', 'ankjala'] },
        { q: "kam + pung + de + sa = ?", a: "kampungdesa", opts: ['kampungdesa', 'pungdesak', 'desakamp', 'pungdesa'] },
        { q: "pan + tai + se + lat = ?", a: "pantaiselat", opts: ['pantaiselat', 'taiselat', 'selatpant', 'latpanta'] },
        { q: "tan + das + a + wam = ?", a: "tandasawam", opts: ['tandasawam', 'dasawamt', 'sawamtand', 'awamtand'] },
        { q: "ban + k + wang = ?", a: "bankwang", opts: ['bankwang', 'ankwang', 'wangbank', 'kwangban'] },
        { q: "ker + tas + bu + ku = ?", a: "kertasbuku", opts: ['kertasbuku', 'taskubuk', 'bukukerta', 'ukubkert'] },

        // Additional KVKK + KV + KV words
        { q: "Baca perkataan: pintubiru", a: "pintubiru", opts: ['pintubiru', 'tubirupin', 'birupintu', 'urupintu'] },
        { q: "Baca perkataan: kuningemas", a: "kuningemas", opts: ['kuningemas', 'ningemas', 'emaskuning', 'maskunin'] },
        { q: "Baca perkataan: lampuhijau", a: "lampuhijau", opts: ['lampuhijau', 'pumuhijau', 'hijaumpu', 'jaumpum'] },
        { q: "Baca perkataan: kertasmerah", a: "kertasmerah", opts: ['kertasmerah', 'taskerah', 'merahkertas', 'rahkertas'] },
        { q: "Baca perkataan: bankbesar", a: "bankbesar", opts: ['bankbesar', 'ankbesar', 'besarbank', 'sarbank'] },
        { q: "Baca perkataan: kampungindah", a: "kampungindah", opts: ['kampungindah', 'pungindah', 'indahkamp', 'dahkampu'] },
        { q: "Baca perkataan: pantailurus", a: "pantailurus", opts: ['pantailurus', 'tailurus', 'luruspant', 'ruspanta'] },
        { q: "Baca perkataan: tandaskotor", a: "tandaskotor", opts: ['tandaskotor', 'daskotor', 'kotortand', 'kortandas'] },
        { q: "Baca perkataan: pintukayu", a: "pintukayu", opts: ['pintukayu', 'tukayupin', 'kayupintu', 'ayupintu'] },
        { q: "Baca perkataan: kuncitali", a: "kuncitali", opts: ['kuncitali', 'citalikun', 'talikunci', 'ilikunc'] },

        // More syllable work
        { q: "Perkataan 'pintubiru' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kuningemas' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'lampuhijau' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kertasmerah' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'bankbesar' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata pertama 'pintubiru' ialah?", a: "pin", opts: ['pin', 'tu', 'bi', 'ru'] },
        { q: "Suku kata kedua 'pintubiru' ialah?", a: "tu", opts: ['tu', 'pin', 'bi', 'ru'] },
        { q: "Suku kata ketiga 'pintubiru' ialah?", a: "bi", opts: ['bi', 'pin', 'tu', 'ru'] },
        { q: "Suku kata keempat 'pintubiru' ialah?", a: "ru", opts: ['ru', 'pin', 'tu', 'bi'] },
        { q: "Suku kata pertama 'kuningemas' ialah?", a: "ku", opts: ['ku', 'ning', 'e', 'mas'] },

        // More pattern work
        { q: "Perkataan 'pintubiru' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'kuningemas' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'lampuhijau' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'kertasmerah' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'bankbesar' mengikut corak?", a: "KVKK + KV + KV", opts: ['KVKK + KV + KV', 'KV + KVKK + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Suku kata 'pin' dalam 'pintubiru' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'tu' dalam 'pintubiru' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'bi' dalam 'pintubiru' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'ru' dalam 'pintubiru' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'ku' dalam 'kuningemas' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'ning' dalam 'kuningemas' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },

        // More missing syllable work
        { q: "___ + tu + bi + ru = pintubiru", a: "pin", opts: ['pin', 'tu', 'bi', 'ru'] },
        { q: "pin + ___ + bi + ru = pintubiru", a: "tu", opts: ['tu', 'pin', 'bi', 'ru'] },
        { q: "pin + tu + ___ + ru = pintubiru", a: "bi", opts: ['bi', 'pin', 'tu', 'ru'] },
        { q: "pin + tu + bi + ___ = pintubiru", a: "ru", opts: ['ru', 'pin', 'tu', 'bi'] },
        { q: "___ + ning + e + mas = kuningemas", a: "ku", opts: ['ku', 'ning', 'e', 'mas'] },
        { q: "ku + ___ + e + mas = kuningemas", a: "ning", opts: ['ning', 'ku', 'e', 'mas'] },
        { q: "ku + ning + ___ + mas = kuningemas", a: "e", opts: ['e', 'ku', 'ning', 'mas'] },
        { q: "ku + ning + e + ___ = kuningemas", a: "mas", opts: ['mas', 'ku', 'ning', 'e'] },
        { q: "___ + pu + hi + jau = lampuhijau", a: "lam", opts: ['lam', 'pu', 'hi', 'jau'] },

        // More word completion
        { q: "pin + tu + bi + ru = ?", a: "pintubiru", opts: ['pintubiru', 'tubirupin', 'birupintu', 'urupintu'] },
        { q: "ku + ning + e + mas = ?", a: "kuningemas", opts: ['kuningemas', 'ningemas', 'emaskuning', 'maskunin'] },
        { q: "lam + pu + hi + jau = ?", a: "lampuhijau", opts: ['lampuhijau', 'pumuhijau', 'hijaumpu', 'jaumpum'] },
        { q: "ker + tas + me + rah = ?", a: "kertasmerah", opts: ['kertasmerah', 'taskerah', 'merahkertas', 'rahkertas'] },
        { q: "ban + k + be + sar = ?", a: "bankbesar", opts: ['bankbesar', 'ankbesar', 'besarbank', 'sarbank'] },
        { q: "kam + pung + in + dah = ?", a: "kampungindah", opts: ['kampungindah', 'pungindah', 'indahkamp', 'dahkampu'] },
        { q: "pan + tai + lu + rus = ?", a: "pantailurus", opts: ['pantailurus', 'tailurus', 'luruspant', 'ruspanta'] },
        { q: "tan + das + ko + tor = ?", a: "tandaskotor", opts: ['tandaskotor', 'daskotor', 'kotortand', 'kortandas'] },
        { q: "pin + tu + ka + yu = ?", a: "pintukayu", opts: ['pintukayu', 'tukayupin', 'kayupintu', 'ayupintu'] },
        { q: "kun + ci + ta + li = ?", a: "kuncitali", opts: ['kuncitali', 'citalikun', 'talikunci', 'ilikunc'] },

        // Application questions
        { q: "Pintupagi dibuka pada?", a: "pagi", opts: ['pagi', 'tengah hari', 'petang', 'malam'] },
        { q: "Kuncibesi dibuat daripada?", a: "besi", opts: ['besi', 'kayu', 'plastik', 'kaca'] },
        { q: "Lampupeta digunakan untuk?", a: "cahaya", opts: ['cahaya', "makan", 'minum', 'tidur'] },
        { q: "Kertaskertas digunakan untuk?", a: "menulis", opts: ['menulis', 'makan', 'minum', 'main'] },
        { q: "Bankjalan ialah bank di?", a: "jalan", opts: ['jalan', 'rumah', 'pejabat', 'pasar'] },
        { q: "Kampungdesa ialah kampung di?", a: "desa", opts: ['desa', 'bandar', 'pantai', 'gunung'] },
        { q: "Pantaiselat ada di?", a: "pinggir laut", opts: ['pinggir laut', 'darat', 'gunung', 'hutan'] },
        { q: "Tandasawam untuk orang?", a: "awam", opts: ['awam', 'peribadi', 'kanak-kanak', 'orang tua'] },
        { q: "Bankwang untuk menyimpan?", a: "wang", opts: ['wang', 'makanan', 'pakaian', 'buku'] },
        { q: "Kertasbuku untuk?", a: "tulisan", opts: ['tulisan', 'makanan', 'pakaian', 'mainan'] },
        { q: "Lampujalan menerangi?", a: "jalan", opts: ['jalan', 'rumah', 'pejabat', 'pasar'] },
        { q: "Pintukayu dibuat daripada?", a: "kayu", opts: ['kayu', 'besi', 'plastik', 'kaca'] },
        { q: "Kuncipintu untuk?", a: "kunci pintu", opts: ['kunci pintu', 'makan', 'minum', 'main'] },
        { q: "Bankrakyat untuk orang?", a: "rakyat", opts: ['rakyat', 'kaya', 'miskin', 'pegawai'] },
        { q: "Kampungbaru ialah kampung yang?", a: "baru", opts: ['baru', 'lama', 'besar', 'kecil'] },
        { q: "Pantaiindah sangat?", a: "indah", opts: ['indah', 'hodoh', 'kusam', 'kotor'] },
        { q: "Tandaspakai untuk orang?", a: "pakai", opts: ['pakai', 'lihat', 'dengar', 'cium'] },
        { q: "Kertaskain dibuat daripada?", a: "kain", opts: ['kain', 'kayu', 'plastik', 'logam'] },
        { q: "Lampubiru berwarna?", a: "biru", opts: ['biru', 'merah', 'hijau', 'kuning'] },
        { q: "Pintubesar saiznya?", a: "besar", opts: ['besar', 'kecil', 'panjang', 'pendek'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KVKK + KV + KV?", a: "pintupagi", opts: ['pintupagi', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV + KV?", a: "kuncibesi", opts: ['kuncibesi', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV + KV?", a: "lampupeta", opts: ['lampupeta', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV + KV?", a: "kertaskertas", opts: ['kertaskertas', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KV + KV?", a: "bankjalan", opts: ['bankjalan', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV + KV?", a: "bola", opts: ['bola', 'pintupagi', 'kuncibesi', 'lampupeta'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV + KV?", a: "rumah", opts: ['rumah', 'kertaskertas', 'bankjalan', 'kampungdesa'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV + KV?", a: "meja", opts: ['meja', 'pantaiselat', 'tandasawam', 'bankwang'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV + KV?", a: "buku", opts: ['buku', 'kertasbuku', 'lampujalan', 'pintukayu'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KV + KV?", a: "saya", opts: ['saya', 'kuncipintu', 'bankrakyat', 'kampungbaru'] },

        // Sound patterns
        { q: "Perkataan dengan 'pin' di awal?", a: "pintupagi", opts: ['pintupagi', 'kuncibesi', 'lampupeta', 'kertaskertas'] },
        { q: "Perkataan dengan 'kun' di awal?", a: "kuncibesi", opts: ['kuncibesi', 'pintupagi', 'lampupeta', 'kertaskertas'] },
        { q: "Perkataan dengan 'lam' di awal?", a: "lampupeta", opts: ['lampupeta', 'pintupagi', 'kuncibesi', 'kertaskertas'] },
        { q: "Perkataan dengan 'ker' di awal?", a: "kertaskertas", opts: ['kertaskertas', 'pintupagi', 'kuncibesi', 'lampupeta'] },
        { q: "Perkataan dengan 'ban' di awal?", a: "bankjalan", opts: ['bankjalan', 'pintupagi', 'kuncibesi', 'lampupeta'] },
        { q: "Perkataan dengan 'tu' di kedua?", a: "pintupagi", opts: ['pintupagi', 'kuncibesi', 'lampupeta', 'kertaskertas'] },
        { q: "Perkataan dengan 'ci' di kedua?", a: "kuncibesi", opts: ['kuncibesi', 'pintupagi', 'lampupeta', 'kertaskertas'] },
        { q: "Perkataan dengan 'pu' di kedua?", a: "lampupeta", opts: ['lampupeta', 'pintupagi', 'kuncibesi', 'kertaskertas'] },
        { q: "Perkataan dengan 'tas' di kedua?", a: "kertaskertas", opts: ['kertaskertas', 'pintupagi', 'kuncibesi', 'lampupeta'] },
        { q: "Perkataan dengan 'k' di kedua?", a: "bankjalan", opts: ['bankjalan', 'pintupagi', 'kuncibesi', 'lampupeta'] },

        // More complex KVKK + KV + KV words
        { q: "Baca perkataan: papanbatu", a: "papanbatu", opts: ['papanbatu', 'panbatu', 'batupap', 'tupapan'] },
        { q: "Baca perkataan: kapalterbang", a: "kapalterbang", opts: ['kapalterbang', 'paltelbang', 'telbang', 'bangkapal'] },
        { q: "Baca perkataan: jalankasar", a: "jalankasar", opts: ['jalankasar', 'lankasar', 'kasarja', 'sarjalan'] },
        { q: "Baca perkataan: keretakencang", a: "keretakencang", opts: ['keretakencang', 'retakenc', 'kencang', 'angkeret'] },
        { q: "Baca perkataan: banknegara", a: "banknegara", opts: ['banknegara', 'anknegara', 'negaraban', 'garabank'] },
        { q: "Baca perkataan: kampunghalaman", a: "kampunghalaman", opts: ['kampunghalaman', 'punghalam', 'halamkam', 'makampung'] },
        { q: "Baca perkataan: pantailangkap", a: "pantailangkap", opts: ['pantailangkap', 'tailangka', 'langkapan', 'kappanta'] },
        { q: "Baca perkataan: tandasawampublik", a: "tandasawampublik", opts: ['tandasawampublik', 'dasawampu', 'awampub', 'pubtandas'] },
        { q: "Baca perkataan: pintukaca", a: "pintukaca", opts: ['pintukaca', 'tukakaca', 'kacapintu', 'utpintu'] },
        { q: "Baca perkataan: kuningperak", a: "kuningperak", opts: ['kuningperak', 'ningperak', 'perak', 'rakuning'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KVKK + KV + KV?", a: "pintupagi", opts: ['pintupagi', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV + KV?", a: "kuncibesi", opts: ['kuncibesi', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV + KV?", a: "lampupeta", opts: ['lampupeta', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV + KV?", a: "kertaskertas", opts: ['kertaskertas', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KV + KV?", a: "bankjalan", opts: ['bankjalan', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV + KV?", a: "bola", opts: ['bola', 'pintupagi', 'kuncibesi', 'lampupeta'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV + KV?", a: "rumah", opts: ['rumah', 'kertaskertas', 'bankjalan', 'kampungdesa'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV + KV?", a: "meja", opts: ['meja', 'pantaiselat', 'tandasawam', 'bankwang'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV + KV?", a: "buku", opts: ['buku', 'kertasbuku', 'lampujalan', 'pintukayu'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KV + KV?", a: "saya", opts: ['saya', 'kuncipintu', 'bankrakyat', 'kampungbaru'] }
    ]
};

export default BM_KP28;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP28;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP28 = BM_KP28;
}
