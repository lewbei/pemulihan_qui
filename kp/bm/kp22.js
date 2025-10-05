// KP22 — Perkataan KVKK + KVK

const BM_KP22 = {
    id: 'bm-kp22',
    code: 'KP22',
    name: 'KP22 — Perkataan KVKK + KVK',
    description: '*Perkataan KVKK + KVK (pintu, kuncit, sains, kontan)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVKK + KVK pattern
        { q: "Baca perkataan: pintu", a: "pintu", opts: ['pintu', 'tunpi', 'niput', 'utpin'] },
        { q: "Baca perkataan: kuncit", a: "kuncit", opts: ['kuncit', 'uncitk', 'ncitku', 'citkun'] },
        { q: "Baca perkataan: sains", a: "sains", opts: ['sains', 'ainss', 'inssa', 'nssai'] },
        { q: "Baca perkataan: kontan", a: "kontan", opts: ['kontan', 'ontank', 'ntanko', 'tankon'] },
        { q: "Baca perkataan: kompleks", a: "kompleks", opts: ['kompleks', 'mpleksko', 'plekskom', 'lekskomp'] },
        { q: "Baca perkataan: kontrak", a: "kontrak", opts: ['kontrak', 'ontrakk', 'trakon', 'akkontr'] },
        { q: "Baca perkataan: sentral", a: "sentral", opts: ['sentral', 'entrals', 'ntralse', 'tralsen'] },
        { q: "Baca perkataan: kontek", a: "kontek", opts: ['kontek', 'ontekk', 'ntekko', 'tekkon'] },
        { q: "Baca perkataan: saintis", a: "saintis", opts: ['saintis', 'aintiss', 'intissa', 'ntissai'] },
        { q: "Baca perkataan: kontang", a: "kontang", opts: ['kontang', 'ontangk', 'ntangk', 'angkon'] },
        { q: "Baca perkataan: klinik", a: "klinik", opts: ['klinik', 'linikk', 'niklik', 'ikklin'] },
        { q: "Baca perkataan: kontraktor", a: "kontraktor", opts: ['kontraktor', 'ontrakt', 'traktork', 'raktorkon'] },
        { q: "Baca perkataan: konsert", a: "konsert", opts: ['konsert', 'onsertk', 'nsertko', 'sertkon'] },
        { q: "Baca perkataan: komplemen", a: "komplemen", opts: ['komplemen', 'mplemenk', 'plemenko', 'lemkom'] },
        { q: "Baca perkataan: kontinjen", a: "kontinjen", opts: ['kontinjen', 'ntinjeko', 'tinjkon', 'jentkon'] },
        { q: "Baca perkataan: kompas", a: "kompas", opts: ['kompas', 'ompask', 'mpasko', 'paskom'] },
        { q: "Baca perkataan: kontur", a: "kontur", opts: ['kontur', 'onturk', 'nturko', 'turkon'] },
        { q: "Baca perkataan: kenderaan", a: "kenderaan", opts: ['kenderaan', 'enderaank', 'nderaank', 'raanende'] },
        { q: "Baca perkataan: komputer", a: "komputer", opts: ['komputer', 'omputerk', 'mputerko', 'puterkom'] },
        { q: "Baca perkataan: konkrit", a: "konkrit", opts: ['konkrit', 'onkritk', 'kritkon', 'kritkon'] },

        // Syllable identification
        { q: "Perkataan 'pintu' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kuncit' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'sains' ada berapa suku kata?", a: "1", opts: ['1', '2', '3', '4'] },
        { q: "Perkataan 'kontan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kompleks' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kontrak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'sentral' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kontek' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'saintis' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kontang' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'pintu' ialah?", a: "pin", opts: ['pin', 'tu', 'pint', 'int'] },
        { q: "Suku kata kedua 'pintu' ialah?", a: "tu", opts: ['tu', 'pin', 'pint', 'int'] },
        { q: "Suku kata pertama 'kuncit' ialah?", a: "kun", opts: ['kun', 'cit', 'kunc', 'unc'] },
        { q: "Suku kata kedua 'kuncit' ialah?", a: "cit", opts: ['cit', 'kun', 'kunc', 'unc'] },
        { q: "Suku kata pertama 'kontan' ialah?", a: "kon", opts: ['kon', 'tan', 'kont', 'ont'] },
        { q: "Suku kata kedua 'kontan' ialah?", a: "tan", opts: ['tan', 'kon', 'kont', 'ont'] },
        { q: "Suku kata pertama 'kompleks' ialah?", a: "kom", opts: ['kom', 'pleks', 'komp', 'omp'] },
        { q: "Suku kata kedua 'kompleks' ialah?", a: "pleks", opts: ['pleks', 'kom', 'komp', 'omp'] },
        { q: "Suku kata pertama 'kontrak' ialah?", a: "kon", opts: ['kon', 'trak', 'kont', 'ont'] },
        { q: "Suku kata kedua 'kontrak' ialah?", a: "trak", opts: ['trak', 'kon', 'kont', 'ont'] },

        // Pattern recognition
        { q: "Perkataan 'pintu' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kuncit' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'sains' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kontan' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kompleks' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kontrak' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Suku kata 'pin' dalam 'pintu' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'tu' dalam 'pintu' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },
        { q: "Suku kata 'kun' dalam 'kuncit' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'cit' dalam 'kuncit' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },

        // Missing syllable
        { q: "___ + tu = pintu", a: "pin", opts: ['pin', 'tu', 'pint', 'int'] },
        { q: "pin + ___ = pintu", a: "tu", opts: ['tu', 'pin', 'pint', 'int'] },
        { q: "___ + cit = kuncit", a: "kun", opts: ['kun', 'cit', 'kunc', 'unc'] },
        { q: "kun + ___ = kuncit", a: "cit", opts: ['cit', 'kun', 'kunc', 'unc'] },
        { q: "___ + tan = kontan", a: "kon", opts: ['kon', 'tan', 'kont', 'ont'] },
        { q: "kon + ___ = kontan", a: "tan", opts: ['tan', 'kon', 'kont', 'ont'] },
        { q: "___ + pleks = kompleks", a: "kom", opts: ['kom', 'pleks', 'komp', 'omp'] },
        { q: "kom + ___ = kompleks", a: "pleks", opts: ['pleks', 'kom', 'komp', 'omp'] },
        { q: "___ + trak = kontrak", a: "kon", opts: ['kon', 'trak', 'kont', 'ont'] },
        { q: "kon + ___ = kontrak", a: "trak", opts: ['trak', 'kon', 'kont', 'ont'] },

        // Word completion
        { q: "pin + tu = ?", a: "pintu", opts: ['pintu', 'tupin', 'intup', 'tup'] },
        { q: "kun + cit = ?", a: "kuncit", opts: ['kuncit', 'cunkit', 'itkun', 'citkun'] },
        { q: "sains = ?", a: "sains", opts: ['sains', 'ainss', 'inssa', 'nssai'] },
        { q: "kon + tan = ?", a: "kontan", opts: ['kontan', 'tankon', 'onktan', 'nkanto'] },
        { q: "kom + pleks = ?", a: "kompleks", opts: ['kompleks', 'plekskom', 'mpleksko', 'lekskomp'] },
        { q: "kon + trak = ?", a: "kontrak", opts: ['kontrak', 'trakon', 'ontrakk', 'rakkon'] },
        { q: "sen + tral = ?", a: "sentral", opts: ['sentral', 'tralsen', 'entrals', 'ntralse'] },
        { q: "kon + tek = ?", a: "kontek", opts: ['kontek', 'tekkon', 'ontekk', 'ktekon'] },
        { q: "sain + tis = ?", a: "saintis", opts: ['saintis', 'tissain', 'aintiss', 'ntissa'] },
        { q: "kon + tang = ?", a: "kontang", opts: ['kontang', 'tangkon', 'ontangk', 'angkon'] },

        // Additional KVKK + KVK words
        { q: "Baca perkataan: papan", a: "papan", opts: ['papan', 'panpa', 'anpap', 'npapa'] },
        { q: "Baca perkataan: kapal", a: "kapal", opts: ['kapal', 'pakal', 'apalk', 'palka'] },
        { q: "Baca perkataan: jalan", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "Baca perkataan: kertas", a: "kertas", opts: ['kertas', 'tarske', 'sakter', 'rasket'] },
        { q: "Baca perkataan: kampus", a: "kampus", opts: ['kampus', 'ampusk', 'puskam', 'uskamp'] },
        { q: "Baca perkataan: kandang", a: "kandang", opts: ['kandang', 'andak', 'ndak', 'dakan'] },
        { q: "Baca perkataan: kendera", a: "kendera", opts: ['kendera', 'enderak', 'nderak', 'derak'] },
        { q: "Baca perkataan: kenderaan", a: "kenderaan", opts: ['kenderaan', 'enderaank', 'nderaank', 'raanende'] },
        { q: "Baca perkataan: kompang", a: "kompang", opts: ['kompang', 'ompangk', 'mpangko', 'pangkom'] },
        { q: "Baca perkataan: kontang", a: "kontang", opts: ['kontang', 'ontangk', 'ntangk', 'angkon'] },

        // More syllable work
        { q: "Perkataan 'papan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kapal' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'jalan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kertas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kampus' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'papan' ialah?", a: "pa", opts: ['pa', 'pan', 'pap', 'ppa'] },
        { q: "Suku kata kedua 'papan' ialah?", a: "pan", opts: ['pan', 'pa', 'pap', 'ppa'] },
        { q: "Suku kata pertama 'kapal' ialah?", a: "ka", opts: ['ka', 'pal', 'kap', 'pak'] },
        { q: "Suku kata kedua 'kapal' ialah?", a: "pal", opts: ['pal', 'ka', 'kap', 'pak'] },
        { q: "Suku kata pertama 'jalan' ialah?", a: "ja", opts: ['ja', 'lan', 'jal', 'laj'] },

        // More pattern work
        { q: "Perkataan 'papan' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kapal' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'jalan' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kertas' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kampus' mengikut corak?", a: "KVKK + KVK", opts: ['KVKK + KVK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Suku kata 'pa' dalam 'papan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'pan' dalam 'papan' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },
        { q: "Suku kata 'ka' dalam 'kapal' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'pal' dalam 'kapal' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },

        // More missing syllable work
        { q: "___ + pan = papan", a: "pa", opts: ['pa', 'pan', 'pap', 'ppa'] },
        { q: "pa + ___ = papan", a: "pan", opts: ['pan', 'pa', 'pap', 'ppa'] },
        { q: "___ + pal = kapal", a: "ka", opts: ['ka', 'pal', 'kap', 'pak'] },
        { q: "ka + ___ = kapal", a: "pal", opts: ['pal', 'ka', 'kap', 'pak'] },
        { q: "___ + lan = jalan", a: "ja", opts: ['ja', 'lan', 'jal', 'laj'] },
        { q: "ja + ___ = jalan", a: "lan", opts: ['lan', 'ja', 'jal', 'laj'] },
        { q: "___ + tas = kertas", a: "ker", opts: ['ker', 'tas', 'kert', 'ertk'] },
        { q: "ker + ___ = kertas", a: "tas", opts: ['tas', 'ker', 'kert', 'ertk'] },
        { q: "___ + pus = kampus", a: "kam", opts: ['kam', 'pus', 'kamp', 'amp'] },
        { q: "kam + ___ = kampus", a: "pus", opts: ['pus', 'kam', 'kamp', 'amp'] },

        // More word completion
        { q: "pa + pan = ?", a: "papan", opts: ['papan', 'panpa', 'anpap', 'npapa'] },
        { q: "ka + pal = ?", a: "kapal", opts: ['kapal', 'palka', 'pakal', 'akpal'] },
        { q: "ja + lan = ?", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "ker + tas = ?", a: "kertas", opts: ['kertas', 'tarske', 'sakter', 'rasket'] },
        { q: "kam + pus = ?", a: "kampus", opts: ['kampus', 'pukam', 'ukamp', 'kampu'] },
        { q: "kan + dang = ?", a: "kandang", opts: ['kandang', 'dangak', 'angkda', 'ngakda'] },
        { q: "ken + dera = ?", a: "kendera", opts: ['kendera', 'deraken', 'raken', 'enderak'] },
        { q: "kom + pang = ?", a: "kompang", opts: ['kompang', 'pangkom', 'ompangk', 'mpangk'] },
        { q: "kon + tang = ?", a: "kontang", opts: ['kontang', 'tangkon', 'ontangk', 'ngkon'] },
        { q: "san + tis = ?", a: "santis", opts: ['santis', 'tissan', 'issann', 'ssann'] },

        // Application questions
        { q: "Pintu ada di?", a: "rumah", opts: ['rumah', 'jalan', 'taman', 'pasar'] },
        { q: "Kuncit digunakan untuk?", a: "kunci", opts: ['kunci', 'makan', 'minum', 'tidur'] },
        { q: "Sains adalah subjek?", a: "sains", opts: ['sains', 'matematik', 'bahasa', 'seni'] },
        { q: "Kontan ialah?", a: "wang", opts: ['wang', 'makanan', 'pakaian', 'buku'] },
        { q: "Kompleks adalah?", a: "bangunan", opts: ['bangunan', 'makanan', 'pakaian', 'buku'] },
        { q: "Kontrak adalah?", a: "perjanjian", opts: ['perjanjian', 'makanan', 'pakaian', 'buku'] },
        { q: "Sentral adalah?", a: "pusat", opts: ['pusat', 'tepi', 'jauh', 'dekat'] },
        { q: "Kontek adalah?", a: "tekstur", opts: ['tekstur', 'warna', 'bau', 'rasa'] },
        { q: "Saintis adalah?", a: "ahli", opts: ['ahli', 'murid', 'guru', 'kerja'] },
        { q: "Kontang adalah?", a: "kosong", opts: ['kosong', 'penuh', 'besar', 'kecil'] },
        { q: "Klinik adalah tempat?", a: "rawat", opts: ['rawat', 'belajar', 'makan', 'main'] },
        { q: "Kontraktor adalah?", a: "builder", opts: ['builder', 'guru', 'doktor', 'jururawat'] },
        { q: "Konsert adalah?", a: "muzik", opts: ['muzik', 'makanan', 'pakaian', 'buku'] },
        { q: "Komplemen adalah?", a: "lengkap", opts: ['lengkap', 'kurang', 'besar', 'kecil'] },
        { q: "Kontinjen adalah?", a: "kumpulan", opts: ['kumpulan', 'individu', 'satu', 'dua'] },
        { q: "Kompas adalah?", a: "arah", opts: ['arah', 'makanan', 'pakaian', 'buku'] },
        { q: "Kontur adalah?", a: "garisan", opts: ['garisan', 'warna', 'bau', 'rasa'] },
        { q: "Kenderaan adalah?", a: "transport", opts: ['transport', 'makanan', 'pakaian', 'buku'] },
        { q: "Komputer adalah?", a: "elektronik", opts: ['elektronik', 'makanan', 'pakaian', 'buku'] },
        { q: "Konkrit adalah?", a: "batu", opts: ['batu', 'kayu', 'plastik', 'logam'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KVKK + KVK?", a: "pintu", opts: ['pintu', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVK?", a: "kuncit", opts: ['kuncit', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVK?", a: "sains", opts: ['sains', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVK?", a: "kontan", opts: ['kontan', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVK?", a: "kompleks", opts: ['kompleks', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVK?", a: "bola", opts: ['bola', 'pintu', 'kuncit', 'sains'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVK?", a: "rumah", opts: ['rumah', 'kontan', 'kompleks', 'kontrak'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVK?", a: "meja", opts: ['meja', 'sentral', 'kontek', 'saintis'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVK?", a: "buku", opts: ['buku', 'kontang', 'klinik', 'kontraktor'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVK?", a: "saya", opts: ['saya', 'konsert', 'komplemen', 'kontinjen'] },

        // Sound patterns
        { q: "Perkataan dengan suku kata 'pin' di awal?", a: "pintu", opts: ['pintu', 'kuncit', 'sains', 'kontan'] },
        { q: "Perkataan dengan suku kata 'kun' di awal?", a: "kuncit", opts: ['kuncit', 'pintu', 'sains', 'kontan'] },
        { q: "Perkataan dengan suku kata 'sain' di awal?", a: "sains", opts: ['sains', 'pintu', 'kuncit', 'kontan'] },
        { q: "Perkataan dengan suku kata 'kon' di awal?", a: "kontan", opts: ['kontan', 'pintu', 'kuncit', 'sains'] },
        { q: "Perkataan dengan suku kata 'kom' di awal?", a: "kompleks", opts: ['kompleks', 'pintu', 'kuncit', 'sains'] },
        { q: "Perkataan dengan suku kata 'tu' di akhir?", a: "pintu", opts: ['pintu', 'kuncit', 'sains', 'kontan'] },
        { q: "Perkataan dengan suku kata 'cit' di akhir?", a: "kuncit", opts: ['kuncit', 'pintu', 'sains', 'kontan'] },
        { q: "Perkataan dengan suku kata 'tan' di akhir?", a: "kontan", opts: ['kontan', 'pintu', 'kuncit', 'sains'] },
        { q: "Perkataan dengan suku kata 'pleks' di akhir?", a: "kompleks", opts: ['kompleks', 'pintu', 'kuncit', 'sains'] },
        { q: "Perkataan dengan suku kata 'trak' di akhir?", a: "kontrak", opts: ['kontrak', 'pintu', 'kuncit', 'sains'] },

        // More complex KVKK + KVK words
        { q: "Baca perkataan: pukal", a: "pukal", opts: ['pukal', 'palku', 'kalup', 'lakpu'] },
        { q: "Baca perkataan: puncak", a: "puncak", opts: ['puncak', 'cunpuk', 'nuncak', 'cakpun'] },
        { q: "Baca perkataan: pundak", a: "pundak", opts: ['pundak', 'ndakpu', 'dakpun', 'akpun'] },
        { q: "Baca perkataan: runcit", a: "runcit", opts: ['runcit', 'uncitr', 'ncitru', 'citrun'] },
        { q: "Baca perkataan: gumpal", a: "gumpal", opts: ['gumpal', 'umpalg', 'mpalgu', 'palgum'] },
        { q: "Baca perkataan: hampas", a: "hampas", opts: ['hampas', 'ampash', 'mpasha', 'pasham'] },
        { q: "Baca perkataan: simpul", a: "simpul", opts: ['simpul', 'impuls', 'mpulsi', 'pulsim'] },
        { q: "Baca perkataan: sendal", a: "sendal", opts: ['sendal', 'endals', 'ndalse', 'dalsen'] },
        { q: "Baca perkataan: tandas", a: "tandas", opts: ['tandas', 'andast', 'dastan', 'astand'] },
        { q: "Baca perkataan: tempang", a: "tempang", opts: ['tempang', 'empangt', 'mpangte', 'pangtem'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KVKK + KVK?", a: "pintu", opts: ['pintu', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVK?", a: "kuncit", opts: ['kuncit', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVK?", a: "sains", opts: ['sains', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVK?", a: "kontan", opts: ['kontan', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVK?", a: "kompleks", opts: ['kompleks', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVK?", a: "bola", opts: ['bola', 'pintu', 'kuncit', 'sains'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVK?", a: "rumah", opts: ['rumah', 'kontan', 'kompleks', 'kontrak'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVK?", a: "meja", opts: ['meja', 'sentral', 'kontek', 'saintis'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVK?", a: "buku", opts: ['buku', 'kontang', 'klinik', 'kontraktor'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVK?", a: "saya", opts: ['saya', 'konsert', 'komplemen', 'kontinjen'] }
    ]
};

export default BM_KP22;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP22;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP22 = BM_KP22;
}
