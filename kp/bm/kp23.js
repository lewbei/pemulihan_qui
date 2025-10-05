// KP23 — Perkataan KVKK + KVKK

const BM_KP23 = {
    id: 'bm-kp23',
    code: 'KP23',
    name: 'KP23 — Perkataan KVKK + KVKK',
    description: '*Perkataan KVKK + KVKK (kompleks, kontrak, sentral, standard)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVKK + KVKK pattern
        { q: "Baca perkataan: kompleks", a: "kompleks", opts: ['kompleks', 'mpleksko', 'plekskom', 'lekskomp'] },
        { q: "Baca perkataan: kontrak", a: "kontrak", opts: ['kontrak', 'ontrakk', 'trakon', 'akkontr'] },
        { q: "Baca perkataan: sentral", a: "sentral", opts: ['sentral', 'entrals', 'ntralse', 'tralsen'] },
        { q: "Baca perkataan: standard", a: "standard", opts: ['standard', 'tandards', 'andarst', 'ndarst'] },
        { q: "Baca perkataan: kontras", a: "kontras", opts: ['kontras', 'ntrask', 'traskon', 'raskon'] },
        { q: "Baca perkataan: komplemen", a: "komplemen", opts: ['komplemen', 'mplemenk', 'plemenko', 'lemkom'] },
        { q: "Baca perkataan: konteks", a: "konteks", opts: ['konteks', 'nteksk', 'tekskon', 'kskont'] },
        { q: "Baca perkataan: konflik", a: "konflik", opts: ['konflik', 'nflikk', 'flikkon', 'likkon'] },
        { q: "Baca perkataan: kompleksiti", a: "kompleksiti", opts: ['kompleksiti', 'mpleksit', 'pleksitk', 'leksitk'] },
        { q: "Baca perkataan: komprehensif", a: "komprehensif", opts: ['komprehensif', 'mrehensifk', 'rehensifk', 'hensifko'] },
        { q: "Baca perkataan: konspirasi", a: "konspirasi", opts: ['konspirasi', 'nspirask', 'spiraskon', 'pirasko'] },
        { q: "Baca perkataan: kontinjen", a: "kontinjen", opts: ['kontinjen', 'ntinjens', 'tinjenk', 'injenko'] },
        { q: "Baca perkataan: konfrontasi", a: "konfrontasi", opts: ['konfrontasi', 'nfrontask', 'frontaskon', 'rontasko'] },
        { q: "Baca perkataan: komponen", a: "komponen", opts: ['komponen', 'mponenk', 'ponenko', 'nenkom'] },
        { q: "Baca perkataan: konsekuensi", a: "konsekuensi", opts: ['konsekuensi', 'nsekuenk', 'sekuenk', 'kuenkons'] },
        { q: "Baca perkataan: kompromi", a: "kompromi", opts: ['kompromi', 'mpromik', 'promiko', 'romiko'] },
        { q: "Baca perkataan: konklusi", a: "konklusi", opts: ['konklusi', 'nklusik', 'klusikon', 'lusikon'] },
        { q: "Baca perkataan: komplemen", a: "komplemen", opts: ['komplemen', 'mplemenk', 'plemenko', 'lemkom'] },
        { q: "Baca perkataan: konstantin", a: "konstantin", opts: ['konstantin', 'nstantink', 'stantinko', 'tantink'] },
        { q: "Baca perkataan: konkurensi", a: "konkurensi", opts: ['konkurensi', 'nkurensk', 'kurensik', 'urensik'] },

        // Syllable identification
        { q: "Perkataan 'kompleks' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kontrak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'sentral' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'standard' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kontras' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'komplemen' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'konteks' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'konflik' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kompleksiti' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'komprehensif' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'kompleks' ialah?", a: "kom", opts: ['kom', 'pleks', 'komp', 'omp'] },
        { q: "Suku kata kedua 'kompleks' ialah?", a: "pleks", opts: ['pleks', 'kom', 'komp', 'omp'] },
        { q: "Suku kata pertama 'kontrak' ialah?", a: "kon", opts: ['kon', 'trak', 'kont', 'ont'] },
        { q: "Suku kata kedua 'kontrak' ialah?", a: "trak", opts: ['trak', 'kon', 'kont', 'ont'] },
        { q: "Suku kata pertama 'sentral' ialah?", a: "sen", opts: ['sen', 'tral', 'sent', 'ent'] },
        { q: "Suku kata kedua 'sentral' ialah?", a: "tral", opts: ['tral', 'sen', 'sent', 'ent'] },
        { q: "Suku kata pertama 'standard' ialah?", a: "stan", opts: ['stan', 'dard', 'stand', 'tand'] },
        { q: "Suku kata kedua 'standard' ialah?", a: "dard", opts: ['dard', 'stan', 'stand', 'tand'] },
        { q: "Suku kata pertama 'kontras' ialah?", a: "kon", opts: ['kon', 'tras', 'kont', 'ont'] },
        { q: "Suku kata kedua 'kontras' ialah?", a: "tras", opts: ['tras', 'kon', 'kont', 'ont'] },

        // Pattern recognition
        { q: "Perkataan 'kompleks' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kontrak' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'sentral' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'standard' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kontras' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'komplemen' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Suku kata 'kom' dalam 'kompleks' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'pleks' dalam 'kompleks' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'kon' dalam 'kontrak' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'trak' dalam 'kontrak' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },

        // Missing syllable
        { q: "___ + pleks = kompleks", a: "kom", opts: ['kom', 'pleks', 'komp', 'omp'] },
        { q: "kom + ___ = kompleks", a: "pleks", opts: ['pleks', 'kom', 'komp', 'omp'] },
        { q: "___ + trak = kontrak", a: "kon", opts: ['kon', 'trak', 'kont', 'ont'] },
        { q: "kon + ___ = kontrak", a: "trak", opts: ['trak', 'kon', 'kont', 'ont'] },
        { q: "___ + tral = sentral", a: "sen", opts: ['sen', 'tral', 'sent', 'ent'] },
        { q: "sen + ___ = sentral", a: "tral", opts: ['tral', 'sen', 'sent', 'ent'] },
        { q: "___ + dard = standard", a: "stan", opts: ['stan', 'dard', 'stand', 'tand'] },
        { q: "stan + ___ = standard", a: "dard", opts: ['dard', 'stan', 'stand', 'tand'] },
        { q: "___ + tras = kontras", a: "kon", opts: ['kon', 'tras', 'kont', 'ont'] },
        { q: "kon + ___ = kontras", a: "tras", opts: ['tras', 'kon', 'kont', 'ont'] },

        // Word completion
        { q: "kom + pleks = ?", a: "kompleks", opts: ['kompleks', 'plekskom', 'mpleksko', 'lekskomp'] },
        { q: "kon + trak = ?", a: "kontrak", opts: ['kontrak', 'trakon', 'ontrakk', 'rakkon'] },
        { q: "sen + tral = ?", a: "sentral", opts: ['sentral', 'tralsen', 'entrals', 'ntralse'] },
        { q: "stan + dard = ?", a: "standard", opts: ['standard', 'dardstan', 'andstan', 'ndard'] },
        { q: "kon + tras = ?", a: "kontras", opts: ['kontras', 'traskon', 'ntrask', 'raskon'] },
        { q: "kom + plemen = ?", a: "komplemen", opts: ['komplemen', 'plemenkom', 'mplemenk', 'lemkom'] },
        { q: "kon + teks = ?", a: "konteks", opts: ['konteks', 'tekskon', 'nteksk', 'kskont'] },
        { q: "kon + flik = ?", a: "konflik", opts: ['konflik', 'flikkon', 'nflikk', 'likkon'] },
        { q: "kom + pleksiti = ?", a: "kompleksiti", opts: ['kompleksiti', 'pleksitik', 'mpleksit', 'leksitk'] },
        { q: "kom + prehensif = ?", a: "komprehensif", opts: ['komprehensif', 'prehensifk', 'mrehensifk', 'rehensif'] },

        // Additional KVKK + KVKK words
        { q: "Baca perkataan: kompleksiti", a: "kompleksiti", opts: ['kompleksiti', 'mpleksit', 'pleksitk', 'leksitk'] },
        { q: "Baca perkataan: konflik", a: "konflik", opts: ['konflik', 'nflikk', 'flikkon', 'likkon'] },
        { q: "Baca perkataan: konspirasi", a: "konspirasi", opts: ['konspirasi', 'nspirask', 'spiraskon', 'pirasko'] },
        { q: "Baca perkataan: kontinjen", a: "kontinjen", opts: ['kontinjen', 'ntinjens', 'tinjenk', 'injenko'] },
        { q: "Baca perkataan: konfrontasi", a: "konfrontasi", opts: ['konfrontasi', 'nfrontask', 'frontaskon', 'rontasko'] },
        { q: "Baca perkataan: komponen", a: "komponen", opts: ['komponen', 'mponenk', 'ponenko', 'nenkom'] },
        { q: "Baca perkataan: konsekuensi", a: "konsekuensi", opts: ['konsekuensi', 'nsekuenk', 'sekuenk', 'kuenkons'] },
        { q: "Baca perkataan: kompromi", a: "kompromi", opts: ['kompromi', 'mpromik', 'promiko', 'romiko'] },
        { q: "Baca perkataan: konklusi", a: "konklusi", opts: ['konklusi', 'nklusik', 'klusikon', 'lusikon'] },
        { q: "Baca perkataan: konkurensi", a: "konkurensi", opts: ['konkurensi', 'nkurensk', 'kurensik', 'urensik'] },

        // More syllable work
        { q: "Perkataan 'kompleksiti' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'konflik' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'konspirasi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kontinjen' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'konfrontasi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Suku kata pertama 'kompleksiti' ialah?", a: "kom", opts: ['kom', 'plek', 'sit', 'i'] },
        { q: "Suku kata kedua 'kompleksiti' ialah?", a: "plek", opts: ['plek', 'kom', 'sit', 'i'] },
        { q: "Suku kata ketiga 'kompleksiti' ialah?", a: "sit", opts: ['sit', 'kom', 'plek', 'i'] },
        { q: "Suku kata keempat 'kompleksiti' ialah?", a: "i", opts: ['i', 'kom', 'plek', 'sit'] },
        { q: "Suku kata pertama 'konflik' ialah?", a: "kon", opts: ['kon', 'flik', 'konf', 'onf'] },

        // More pattern work
        { q: "Perkataan 'kompleksiti' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'konflik' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'konspirasi' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'kontinjen' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Perkataan 'konfrontasi' mengikut corak?", a: "KVKK + KVKK", opts: ['KVKK + KVKK', 'KV + KVKK', 'KVKK + KV', 'KVK + KVKK'] },
        { q: "Suku kata 'kom' dalam 'kompleksiti' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'plek' dalam 'kompleksiti' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'kon' dalam 'konflik' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'flik' dalam 'konflik' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },

        // More missing syllable work
        { q: "___ + plek + sit + i = kompleksiti", a: "kom", opts: ['kom', 'plek', 'sit', 'i'] },
        { q: "kom + ___ + sit + i = kompleksiti", a: "plek", opts: ['plek', 'kom', 'sit', 'i'] },
        { q: "kom + plek + ___ + i = kompleksiti", a: "sit", opts: ['sit', 'kom', 'plek', 'i'] },
        { q: "kom + plek + sit + ___ = kompleksiti", a: "i", opts: ['i', 'kom', 'plek', 'sit'] },
        { q: "___ + flik = konflik", a: "kon", opts: ['kon', 'flik', 'konf', 'onf'] },
        { q: "kon + ___ = konflik", a: "flik", opts: ['flik', 'kon', 'konf', 'onf'] },
        { q: "___ + spirasi = konspirasi", a: "kon", opts: ['kon', 'spir', 'pir', 'ras'] },
        { q: "kon + ___ + asi = konspirasi", a: "spir", opts: ['spir', 'kon', 'pir', 'ras'] },
        { q: "kon + spir + ___ = konspirasi", a: "asi", opts: ['asi', 'kon', 'spir', 'pir'] },
        { q: "___ + tin + jen = kontinjen", a: "kon", opts: ['kon', 'tin', 'jen', 'kon'] },

        // More word completion
        { q: "kom + plek + sit + i = ?", a: "kompleksiti", opts: ['kompleksiti', 'pleksitiko', 'sitikompl', 'ikompleks'] },
        { q: "kon + flik = ?", a: "konflik", opts: ['konflik', 'flikkon', 'nflikk', 'likkon'] },
        { q: "kon + spirasi = ?", a: "konspirasi", opts: ['konspirasi', 'spiraskon', 'pirasko', 'raskoni'] },
        { q: "kon + tin + jen = ?", a: "kontinjen", opts: ['kontinjen', 'tinjenko', 'jenkont', 'nkonti'] },
        { q: "kon + frontasi = ?", a: "konfrontasi", opts: ['konfrontasi', 'frontaskon', 'ontaskon', 'ntaskon'] },
        { q: "kom + ponen = ?", a: "komponen", opts: ['komponen', 'ponenkom', 'nenkomp', 'enkomp'] },
        { q: "kon + sequensi = ?", a: "konsekuensi", opts: ['konsekuensi', 'sekuensik', 'kuensikon', 'uensik'] },
        { q: "kom + promi = ?", a: "kompromi", opts: ['kompromi', 'promiko', 'romikom', 'omikro'] },
        { q: "kon + klusi = ?", a: "konklusi", opts: ['konklusi', 'klusikon', 'lusikon', 'usikon'] },
        { q: "kon + kurensi = ?", a: "konkurensi", opts: ['konkurensi', 'kurensik', 'urensik', 'rensik'] },

        // Application questions
        { q: "Kompleks adalah?", a: "bangunan", opts: ['bangunan', "makanan", 'pakaian', 'buku'] },
        { q: "Kontrak adalah?", a: "perjanjian", opts: ['perjanjian', 'makanan', 'pakaian', 'buku'] },
        { q: "Sentral adalah?", a: "pusat", opts: ['pusat', 'tepi', 'jauh', 'dekat'] },
        { q: "Standard adalah?", a: "piawaian", opts: ['piawaian', 'biasa', 'rendah', 'mahal'] },
        { q: "Kontras adalah?", a: "beza", opts: ['beza', 'sama', 'serupa', 'mirip'] },
        { q: "Komplemen adalah?", a: "lengkap", opts: ['lengkap', 'kurang', 'besar', 'kecil'] },
        { q: "Konteks adalah?", a: "konteks", opts: ['konteks', 'teks', 'maksud', 'ayat'] },
        { q: "Konflik adalah?", a: "pertelingkahan", opts: ['pertelingkahan', 'persetujuan', 'keamanan', 'harmoni'] },
        { q: "Kompleksiti adalah?", a: "kesukaran", opts: ['kesukaran', 'kemudahan', 'senang', 'mudah'] },
        { q: "Komprehensif adalah?", a: "lengkap", opts: ['lengkap', 'tidak lengkap', 'sebahagian', 'separuh'] },
        { q: "Konspirasi adalah?", a: "rancangan", opts: ['rancangan', 'terbuka', 'jelas', 'nyata'] },
        { q: "Kontinjen adalah?", a: "kumpulan", opts: ['kumpulan', 'individu', 'satu', 'sendirian'] },
        { q: "Konfrontasi adalah?", a: "berhadapan", opts: ['berhadapan', 'mengelak', 'lari', 'sembunyi'] },
        { q: "Komponen adalah?", a: "bahagian", opts: ['bahagian', 'keseluruhan', 'penuh', 'lengkap'] },
        { q: "Konsekuensi adalah?", a: "akibat", opts: ['akibat', 'punca', 'sebab', 'asal'] },
        { q: "Kompromi adalah?", a: "persetujuan", opts: ['persetujuan', 'pertelingkahan', 'perang', 'peperangan'] },
        { q: "Konklusi adalah?", a: "kesimpulan", opts: ['kesimpulan', 'pendahuluan', 'permulaan', 'awal'] },
        { q: "Konstantin adalah?", a: "tempat", opts: ['tempat', 'orang', 'benda', 'haiwan'] },
        { q: "Konkurensi adalah?", a: "persaingan", opts: ['persaingan', 'kerjasama', 'bantu-membantu', 'sokongan'] },
        { q: "Komprehensif adalah?", a: "menyeluruh", opts: ['menyeluruh', 'separuh', 'sebahagian', 'tidak lengkap'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KVKK + KVKK?", a: "kompleks", opts: ['kompleks', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVKK?", a: "kontrak", opts: ['kontrak', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVKK?", a: "sentral", opts: ['sentral', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVKK?", a: "standard", opts: ['standard', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + KVKK?", a: "kontras", opts: ['kontras', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVKK?", a: "bola", opts: ['bola', 'kompleks', 'kontrak', 'sentral'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVKK?", a: "rumah", opts: ['rumah', 'standard', 'kontras', 'komplemen'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVKK?", a: "meja", opts: ['meja', 'konteks', 'konflik', 'kompleksiti'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVKK?", a: "buku", opts: ['buku', 'komprehensif', 'konspirasi', 'kontinjen'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + KVKK?", a: "saya", opts: ['saya', 'konfrontasi', 'komponen', 'konsekuensi'] },

        // Sound patterns
        { q: "Perkataan dengan suku kata 'kom' di awal?", a: "kompleks", opts: ['kompleks', 'kontrak', 'sentral', 'standard'] },
        { q: "Perkataan dengan suku kata 'kon' di awal?", a: "kontrak", opts: ['kontrak', 'kompleks', 'sentral', 'standard'] },
        { q: "Perkataan dengan suku kata 'sen' di awal?", a: "sentral", opts: ['sentral', 'kompleks', 'kontrak', 'standard'] },
        { q: "Perkataan dengan suku kata 'stan' di awal?", a: "standard", opts: ['standard', 'kompleks', 'kontrak', 'sentral'] },
        { q: "Perkataan dengan suku kata 'pleks' di akhir?", a: "kompleks", opts: ['kompleks', 'kontrak', 'sentral', 'standard'] },
        { q: "Perkataan dengan suku kata 'trak' di akhir?", a: "kontrak", opts: ['kontrak', 'kompleks', 'sentral', 'standard'] },
        { q: "Perkataan dengan suku kata 'tral' di akhir?", a: "sentral", opts: ['sentral', 'kompleks', 'kontrak', 'standard'] },
        { q: "Perkataan dengan suku kata 'dard' di akhir?", a: "standard", opts: ['standard', 'kompleks', 'kontrak', 'sentral'] },
        { q: "Perkataan dengan suku kata 'tras' di akhir?", a: "kontras", opts: ['kontras', 'kompleks', 'kontrak', 'sentral'] },
        { q: "Perkataan dengan suku kata 'plek' di akhir?", a: "kompleksiti", opts: ['kompleksiti', 'konflik', 'konspirasi', 'kontinjen'] },

        // More complex KVKK + KVKK words
        { q: "Baca perkataan: komposit", a: "komposit", opts: ['komposit', 'mpositk', 'positko', 'oskom'] },
        { q: "Baca perkataan: kontraksi", a: "kontraksi", opts: ['kontraksi', 'ntraksik', 'traksik', 'aksik'] },
        { q: "Baca perkataan: konduktor", a: "konduktor", opts: ['konduktor', 'nduktork', 'duktork', 'uktork'] },
        { q: "Baca perkataan: konversyen", a: "konversyen", opts: ['konversyen', 'nversys', 'versyen', 'rsyen'] },
        { q: "Baca perkataan: konkrit", a: "konkrit", opts: ['konkrit', 'nkritk', 'kritkon', 'itkon'] },
        { q: "Baca perkataan: komplemen", a: "komplemen", opts: ['komplemen', 'mplemenk', 'plemenko', 'emenko'] },
        { q: "Baca perkataan: konsentrasi", a: "konsentrasi", opts: ['konsentrasi', 'nsentrask', 'sentrask', 'trask'] },
        { q: "Baca perkataan: konvensional", a: "konvensional", opts: ['konvensional', 'nvensionk', 'vensionk', 'nsionk'] },
        { q: "Baca perkataan: kompres", a: "kompres", opts: ['kompres', 'mpresk', 'presko', 'resko'] },
        { q: "Baca perkataan: konsonan", a: "konsonan", opts: ['konsonan', 'nsonank', 'sonank', 'onank'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KVKK + KVKK?", a: "kompleks", opts: ['kompleks', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVKK?", a: "kontrak", opts: ['kontrak', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVKK?", a: "sentral", opts: ['sentral', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVKK?", a: "standard", opts: ['standard', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + KVKK?", a: "kontras", opts: ['kontras', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVKK?", a: "bola", opts: ['bola', 'kompleks', 'kontrak', 'sentral'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVKK?", a: "rumah", opts: ['rumah', 'standard', 'kontras', 'komplemen'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVKK?", a: "meja", opts: ['meja', 'konteks', 'konflik', 'kompleksiti'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVKK?", a: "buku", opts: ['buku', 'komprehensif', 'konspirasi', 'kontinjen'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + KVKK?", a: "saya", opts: ['saya', 'konfrontasi', 'komponen', 'konsekuensi'] }
    ]
};

export default BM_KP23;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP23;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP23 = BM_KP23;
}
