// KP29 — Perkataan KV + KVKK + KV

const BM_KP29 = {
    id: 'bm-kp29',
    code: 'KP29',
    name: 'KP29 — Perkataan KV + KVKK + KV',
    description: '*Perkataan KV + KVKK + KV (kertas, jalan, bantal, papan)*',
    category: 'bm',
    questionBank: [
        // Reading words with KV + KVKK + KV pattern
        { q: "Baca perkataan: kertas", a: "kertas", opts: ['kertas', 'ertask', 'tasker', 'skerta'] },
        { q: "Baca perkataan: jalan", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "Baca perkataan: bantal", a: "bantal", opts: ['bantal', 'tantal', 'antbal', 'balnta'] },
        { q: "Baca perkataan: papan", a: "papan", opts: ['papan', 'panpa', 'anpap', 'npapa'] },
        { q: "Baca perkataan: kampus", a: "kampus", opts: ['kampus', 'ampusk', 'puskam', 'uskamp'] },
        { q: "Baca perkataan: tandas", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'standa'] },
        { q: "Baca perkataan: kapal", a: "kapal", opts: ['kapal', 'pakal', 'apalk', 'palka'] },
        { q: "Baca perkataan: bank", a: "bank", opts: ['bank', 'ankb', 'knba', 'nbak'] },
        { q: "Baca perkataan: pantas", a: "pantas", opts: ['pantas', 'antasp', 'taspan', 'span'] },
        { q: "Baca perkataan: kantor", a: "kantor", opts: ['kantor', 'antork', 'ntorka', 'torkan'] },
        { q: "Baca perkataan: kendera", a: "kendera", opts: ['kendera', 'enderak', 'nderaka', 'derak'] },
        { q: "Baca perkataan: samping", a: "samping", opts: ['samping', 'ampings', 'mpings', 'pingsa'] },
        { q: "Baca perkataan: bengkel", a: "bengkel", opts: ['bengkel', 'engkelb', 'ngkelbe', 'kelben'] },
        { q: "Baca perkataan: hampas", a: "hampas", opts: ['hampas', 'ampash', 'mpasha', 'pasham'] },
        { q: "Baca perkataan: simpul", a: "simpul", opts: ['simpul', 'impuls', 'mpulsi', 'pulsim'] },
        { q: "Baca perkataan: tempang", a: "tempang", opts: ['tempang', 'empangt', 'mpangte', 'pangtem'] },
        { q: "Baca perkataan: kuncit", a: "kuncit", opts: ['kuncit', 'uncitk', 'ncitku', 'citkun'] },
        { q: "Baca perkataan: pintu", a: "pintu", opts: ['pintu', 'intup', 'ntupi', 'tupin'] },
        { q: "Baca perkataan: lampu", a: "lampu", opts: ['lampu', 'ampul', 'mpula', 'pula'] },
        { q: "Baca perkataan: bank", a: "bank", opts: ['bank', 'ankb', 'knba', 'nbak'] },

        // Syllable identification
        { q: "Perkataan 'kertas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'jalan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bantal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'papan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kampus' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'tandas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kapal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bank' ada berapa suku kata?", a: "1", opts: ['1', '2', '3', '4'] },
        { q: "Perkataan 'pantas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kantor' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'kertas' ialah?", a: "ker", opts: ['ker', 'tas', 'kertas', 'ertas'] },
        { q: "Suku kata kedua 'kertas' ialah?", a: "tas", opts: ['tas', 'ker', 'kertas', 'ertas'] },
        { q: "Suku kata pertama 'jalan' ialah?", a: "ja", opts: ['ja', 'lan', 'jalan', 'alan'] },
        { q: "Suku kata kedua 'jalan' ialah?", a: "lan", opts: ['lan', 'ja', 'jalan', 'alan'] },
        { q: "Suku kata pertama 'bantal' ialah?", a: "ban", opts: ['ban', 'tal', 'bantal', 'antal'] },
        { q: "Suku kata kedua 'bantal' ialah?", a: "tal", opts: ['tal', 'ban', 'bantal', 'antal'] },
        { q: "Suku kata pertama 'papan' ialah?", a: "pa", opts: ['pa', 'pan', 'papan', 'apan'] },
        { q: "Suku kata kedua 'papan' ialah?", a: "pan", opts: ['pan', 'pa', 'papan', 'apan'] },
        { q: "Suku kata pertama 'kampus' ialah?", a: "kam", opts: ['kam', 'pus', 'kampus', 'ampus'] },
        { q: "Suku kata kedua 'kampus' ialah?", a: "pus", opts: ['pus', 'kam', 'kampus', 'ampus'] },

        // Pattern recognition
        { q: "Perkataan 'kertas' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'jalan' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'bantal' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'papan' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'kampus' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Suku kata 'ker' dalam 'kertas' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'tas' dalam 'kertas' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'ja' dalam 'jalan' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'lan' dalam 'jalan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'ban' dalam 'bantal' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'tal' dalam 'bantal' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },

        // Missing syllable
        { q: "___ + tas = kertas", a: "ker", opts: ['ker', 'tas', 'kertas', 'ertas'] },
        { q: "ker + ___ = kertas", a: "tas", opts: ['tas', 'ker', 'kertas', 'ertas'] },
        { q: "___ + lan = jalan", a: "ja", opts: ['ja', 'lan', 'jalan', 'alan'] },
        { q: "ja + ___ = jalan", a: "lan", opts: ['lan', 'ja', 'jalan', 'alan'] },
        { q: "___ + tal = bantal", a: "ban", opts: ['ban', 'tal', 'bantal', 'antal'] },
        { q: "ban + ___ = bantal", a: "tal", opts: ['tal', 'ban', 'bantal', 'antal'] },
        { q: "___ + pan = papan", a: "pa", opts: ['pa', 'pan', 'papan', 'apan'] },
        { q: "pa + ___ = papan", a: "pan", opts: ['pan', 'pa', 'papan', 'apan'] },
        { q: "___ + pus = kampus", a: "kam", opts: ['kam', 'pus', 'kampus', 'ampus'] },

        // Word completion
        { q: "ker + tas = ?", a: "kertas", opts: ['kertas', 'ertask', 'tasker', 'skerta'] },
        { q: "ja + lan = ?", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "ban + tal = ?", a: "bantal", opts: ['bantal', 'tantal', 'antbal', 'balnta'] },
        { q: "pa + pan = ?", a: "papan", opts: ['papan', 'panpa', 'anpap', 'npapa'] },
        { q: "kam + pus = ?", a: "kampus", opts: ['kampus', 'ampusk', 'puskam', 'uskamp'] },
        { q: "tan + das = ?", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'standa'] },
        { q: "ka + pal = ?", a: "kapal", opts: ['kapal', 'pakal', 'apalk', 'palka'] },
        { q: "pan + tas = ?", a: "pantas", opts: ['pantas', 'antasp', 'taspan', 'span'] },
        { q: "kan + tor = ?", a: "kantor", opts: ['kantor', 'antork', 'ntorka', 'torkan'] },
        { q: "ken + dera = ?", a: "kendera", opts: ['kendera', 'enderak', 'nderaka', 'derak'] },

        // Additional KV + KVKK + KV words
        { q: "Baca perkataan: pukal", a: "pukal", opts: ['pukal', 'palku', 'kalup', 'lakpu'] },
        { q: "Baca perkataan: runcit", a: "runcit", opts: ['runcit', 'uncitr', 'ncitru', 'citrun'] },
        { q: "Baca perkataan: gumpal", a: "gumpal", opts: ['gumpal', 'umpalg', 'mpalgu', 'palgum'] },
        { q: "Baca perkataan: hampas", a: "hampas", opts: ['hampas', 'ampash', 'mpasha', 'pasham'] },
        { q: "Baca perkataan: simpul", a: "simpul", opts: ['simpul', 'impuls', 'mpulsi', 'pulsim'] },
        { q: "Baca perkataan: sendal", a: "sendal", opts: ['sendal', 'endals', 'ndalse', 'dalsen'] },
        { q: "Baca perkataan: tandas", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'standa'] },
        { q: "Baca perkataan: tempang", a: "tempang", opts: ['tempang', 'empangt', 'mpangte', 'pangtem'] },
        { q: "Baca perkataan: pundak", a: "pundak", opts: ['pundak', 'ndakpu', 'dakpun', 'akpun'] },
        { q: "Baca perkataan: puncak", a: "puncak", opts: ['puncak', 'cunpuk', 'nuncak', 'cakpun'] },

        // More syllable work
        { q: "Perkataan 'pukal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'runcit' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'gumpal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'hampas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'simpul' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'pukal' ialah?", a: "pu", opts: ['pu', 'kal', 'pukal', 'ukal'] },
        { q: "Suku kata kedua 'pukal' ialah?", a: "kal", opts: ['kal', 'pu', 'pukal', 'ukal'] },
        { q: "Suku kata pertama 'runcit' ialah?", a: "run", opts: ['run', 'cit', 'runcit', 'uncit'] },
        { q: "Suku kata kedua 'runcit' ialah?", a: "cit", opts: ['cit', 'run', 'runcit', 'uncit'] },
        { q: "Suku kata pertama 'gumpal' ialah?", a: "gum", opts: ['gum', 'pal', 'gumpal', 'umpal'] },

        // More pattern work
        { q: "Perkataan 'pukal' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'runcit' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'gumpal' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'hampas' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Perkataan 'simpul' mengikut corak?", a: "KV + KVKK + KV", opts: ['KV + KVKK + KV', 'KVKK + KV + KV', 'KV + KV + KVKK', 'KVK + KV + KV'] },
        { q: "Suku kata 'pu' dalam 'pukal' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'kal' dalam 'pukal' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'run' dalam 'runcit' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'cit' dalam 'runcit' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'gum' dalam 'gumpal' ialah corak?", a: "KV", opts: ['KV', 'KVKK', 'V', 'KVK'] },
        { q: "Suku kata 'pal' dalam 'gumpal' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },

        // More missing syllable work
        { q: "___ + kal = pukal", a: "pu", opts: ['pu', 'kal', 'pukal', 'ukal'] },
        { q: "pu + ___ = pukal", a: "kal", opts: ['kal', 'pu', 'pukal', 'ukal'] },
        { q: "___ + cit = runcit", a: "run", opts: ['run', 'cit', 'runcit', 'uncit'] },
        { q: "run + ___ = runcit", a: "cit", opts: ['cit', 'run', 'runcit', 'uncit'] },
        { q: "___ + pal = gumpal", a: "gum", opts: ['gum', 'pal', 'gumpal', 'umpal'] },
        { q: "gum + ___ = gumpal", a: "pal", opts: ['pal', 'gum', 'gumpal', 'umpal'] },
        { q: "___ + pas = hampas", a: "ham", opts: ['ham', 'pas', 'hampas', 'ampas'] },
        { q: "ham + ___ = hampas", a: "pas", opts: ['pas', 'ham', 'hampas', 'ampas'] },
        { q: "___ + pul = simpul", a: "sim", opts: ['sim', 'pul', 'simpul', 'impul'] },

        // More word completion
        { q: "pu + kal = ?", a: "pukal", opts: ['pukal', 'palku', 'kalup', 'lakpu'] },
        { q: "run + cit = ?", a: "runcit", opts: ['runcit', 'uncitr', 'ncitru', 'citrun'] },
        { q: "gum + pal = ?", a: "gumpal", opts: ['gumpal', 'umpalg', 'mpalgu', 'palgum'] },
        { q: "ham + pas = ?", a: "hampas", opts: ['hampas', 'ampash', 'mpasha', 'pasham'] },
        { q: "sim + pul = ?", a: "simpul", opts: ['simpul', 'impuls', 'mpulsi', 'pulsim'] },
        { q: "sen + dal = ?", a: "sendal", opts: ['sendal', 'endals', 'ndalse', 'dalsen'] },
        { q: "tan + das = ?", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'standa'] },
        { q: "tem + pang = ?", a: "tempang", opts: ['tempang', 'empangt', 'mpangte', 'pangtem'] },
        { q: "pun + dak = ?", a: "pundak", opts: ['pundak', 'ndakpu', 'dakpun', 'akpun'] },
        { q: "pun + cak = ?", a: "puncak", opts: ['puncak', 'cunpuk', 'nuncak', 'cakpun'] },

        // Application questions
        { q: "Kertas digunakan untuk?", a: "menulis", opts: ['menulis', 'makan', 'minum', 'main'] },
        { q: "Jalan untuk?", a: "berjalan", opts: ['berjalan', 'terbang', 'berenang', 'memandu'] },
        { q: "Bantal untuk?", a: "tidur", opts: ['tidur', 'makan', 'minum', 'main'] },
        { q: "Papan ialah?", a: "kayu", opts: ['kayu', 'plastik', 'logam', 'kaca'] },
        { q: "Kampus ialah tempat?", a: "belajar", opts: ['belajar', 'kerja', 'main', 'makan'] },
        { q: "Tandas ialah tempat?", a: "membuang", opts: ['membuang', 'makan', 'minum', 'main'] },
        { q: "Kapal ialah pengangkutan?", a: "laut", opts: ['laut', 'udara', 'darat', 'sungai'] },
        { q: "Bank ialah tempat?", a: "simpan wang", opts: ['simpan wang', 'makan', 'minum', 'main'] },
        { q: "Pantas bermaksud?", a: "cepat", opts: ['cepat', 'lambat', 'besar', 'kecil'] },
        { q: "Kantor ialah tempat?", a: "kerja", opts: ['kerja', 'main', 'makan', 'tidur'] },
        { q: "Kenderaan ialah?", a: "pengangkutan", opts: ['pengangkutan', 'makanan', 'pakaian', 'mainan'] },
        { q: "Samping ialah?", a: "sebelah", opts: ['sebelah', 'tengah', 'atas', 'bawah'] },
        { q: "Bengkel ialah tempat?", a: "baiki", opts: ['baiki', 'buat', 'jual', 'beli'] },
        { q: "Hampas ialah?", a: "sisa", opts: ['sisa', 'makanan', 'minuman', 'pakaian'] },
        { q: "Simpul ialah?", a: "ikat", opts: ['ikat', 'buka', 'lipat', 'koyak'] },
        { q: "Tempang ialah?", a: "cacat", opts: ['cacat', 'sihat', 'kuat', 'pandai'] },
        { q: "Kuncit ialah?", a: "kunci kecil", opts: ['kunci kecil', 'pintu besar', 'tingkap', 'gerbang'] },
        { q: "Pintu ialah?", a: "pintu", opts: ['pintu', 'tingkap', 'atap', 'dinding'] },
        { q: "Lampu ialah?", a: "cahaya", opts: ['cahaya', 'gelap', 'panas', 'sejuk'] },
        { q: "Bank ialah tempat?", a: "simpan wang", opts: ['simpan wang', 'makan', 'minum', 'main'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KV + KVKK + KV?", a: "kertas", opts: ['kertas', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK + KV?", a: "jalan", opts: ['jalan', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK + KV?", a: "bantal", opts: ['bantal', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK + KV?", a: "papan", opts: ['papan', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KV + KVKK + KV?", a: "kampus", opts: ['kampus', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK + KV?", a: "bola", opts: ['bola', 'kertas', 'jalan', 'bantal'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK + KV?", a: "rumah", opts: ['rumah', 'papan', 'kampus', 'tandas'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK + KV?", a: "meja", opts: ['meja', 'kapal', 'bank', 'pantas'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK + KV?", a: "buku", opts: ['buku', 'kantor', 'kendera', 'samping'] },
        { q: "Antara berikut, yang manakah BUKAN corak KV + KVKK + KV?", a: "saya", opts: ['saya', 'bengkel', 'hampas', 'simpul'] },

        // Sound patterns
        { q: "Perkataan dengan 'ker' di awal?", a: "kertas", opts: ['kertas', 'jalan', 'bantal', 'papan'] },
        { q: "Perkataan dengan 'ja' di awal?", a: "jalan", opts: ['jalan', 'kertas', 'bantal', 'papan'] },
        { q: "Perkataan dengan 'ban' di awal?", a: "bantal", opts: ['bantal', 'kertas', 'jalan', 'papan'] },
        { q: "Perkataan dengan 'pa' di awal?", a: "papan", opts: ['papan', 'kertas', 'jalan', 'bantal'] },
        { q: "Perkataan dengan 'kam' di awal?", a: "kampus", opts: ['kampus', 'kertas', 'jalan', 'bantal'] },
        { q: "Perkataan dengan 'tas' di akhir?", a: "kertas", opts: ['kertas', 'jalan', 'bantal', 'papan'] },
        { q: "Perkataan dengan 'lan' di akhir?", a: "jalan", opts: ['jalan', 'kertas', 'bantal', 'papan'] },
        { q: "Perkataan dengan 'tal' di akhir?", a: "bantal", opts: ['bantal', 'kertas', 'jalan', 'papan'] },
        { q: "Perkataan dengan 'pan' di akhir?", a: "papan", opts: ['papan', 'kertas', 'jalan', 'bantal'] },
        { q: "Perkataan dengan 'pus' di akhir?", a: "kampus", opts: ['kampus', 'kertas', 'jalan', 'bantal'] },

        // More complex KV + KVKK + KV words
        { q: "Baca perkataan: belakang", a: "belakang", opts: ['belakang', 'lakangeb', 'akangbel', 'ngbel'] },
        { q: "Baca perkataan: delapan", a: "delapan", opts: ['delapan', 'lapadel', 'apadel', 'padela'] },
        { q: "Baca perkataan: gembira", a: "gembira", opts: ['gembira', 'mbirage', 'biragem', 'iragem'] },
        { q: "Baca perkataan: kelabu", a: "kelabu", opts: ['kelabu', 'labuke', 'bukela', 'abuke'] },
        { q: "Baca perkataan: merah", a: "merah", opts: ['merah', 'erahme', 'rahmer', 'ahmer'] },
        { q: "Baca perkataan: biru", a: "biru", opts: ['biru', 'irubi', 'rubin', 'ubin'] },
        { q: "Baca perkataan: hijau", a: "hijau", opts: ['hijau', 'ijauh', 'jauhi', 'auhij'] },
        { q: "Baca perkataan: kuning", a: "kuning", opts: ['kuning', 'ningku', 'ingkun', 'gkunin'] },
        { q: "Baca perkataan: putih", a: "putih", opts: ['putih', 'utihp', 'tihpu', 'ihput'] },
        { q: "Baca perkataan: hitam", a: "hitam", opts: ['hitam', 'itami', 'tamhi', 'amhit'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KV + KVKK + KV?", a: "kertas", opts: ['kertas', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK + KV?", a: "jalan", opts: ['jalan', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK + KV?", a: "bantal", opts: ['bantal', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK + KV?", a: "papan", opts: ['papan', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KV + KVKK + KV?", a: "kampus", opts: ['kampus', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK + KV?", a: "bola", opts: ['bola', 'kertas', 'jalan', 'bantal'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK + KV?", a: "rumah", opts: ['rumah', 'papan', 'kampus', 'tandas'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK + KV?", a: "meja", opts: ['meja', 'kapal', 'bank', 'pantas'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK + KV?", a: "buku", opts: ['buku', 'kantor', 'kendera', 'samping'] },
        { q: "Manakah antara berikut BUKAN perkataan KV + KVKK + KV?", a: "saya", opts: ['saya', 'bengkel', 'hampas', 'simpul'] }
    ]
};

export default BM_KP29;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP29;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP29 = BM_KP29;
}
