// KP26 — Perkataan KVKK + V + KV

const BM_KP26 = {
    id: 'bm-kp26',
    code: 'KP26',
    name: 'KP26 — Perkataan KVKK + V + KV',
    description: '*Perkataan KVKK + V + KV (kontrak, kompleks, kontinjen, konspirasi)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVKK + V + KV pattern
        { q: "Baca perkataan: kontrak", a: "kontrak", opts: ['kontrak', 'ontrakk', 'trakon', 'akkontr'] },
        { q: "Baca perkataan: kompleks", a: "kompleks", opts: ['kompleks', 'mpleksko', 'plekskom', 'lekskomp'] },
        { q: "Baca perkataan: kontinjen", a: "kontinjen", opts: ['kontinjen', 'ntinjens', 'tinjenk', 'injenko'] },
        { q: "Baca perkataan: konspirasi", a: "konspirasi", opts: ['konspirasi', 'nspirask', 'spiraskon', 'pirasko'] },
        { q: "Baca perkataan: kontraksi", a: "kontraksi", opts: ['kontraksi', 'ntraksik', 'traksik', 'akni'] },
        { q: "Baca perkataan: konsentrasi", a: "konsentrasi", opts: ['konsentrasi', 'nsentrask', 'sentrask', 'ntren'] },
        { q: "Baca perkataan: konvensyen", a: "konvensyen", opts: ['konvensyen', 'nvensys', 'vensyon', 'enkon'] },
        { q: "Baca perkataan: konfeksi", a: "konfeksi", opts: ['konfeksi', 'nfekso', 'fekson', 'sokon'] },
        { q: "Baca perkataan: kontekstual", a: "kontekstual", opts: ['kontekstual', 'ntekstu', 'tekstua', 'stuan'] },
        { q: "Baca perkataan: konklusif", a: "konklusif", opts: ['konklusif', 'nklusi', 'klusik', 'usik'] },
        { q: "Baca perkataan: kompresif", a: "kompresif", opts: ['kompresif', 'mpresif', 'presif', 'sifko'] },
        { q: "Baca perkataan: kongresif", a: "kongresif", opts: ['kongresif', 'ngresif', 'gresif', 'sifko'] },
        { q: "Baca perkataan: konflik", a: "konflik", opts: ['konflik', 'nflikk', 'flikkon', 'likkon'] },
        { q: "Baca perkataan: komplemen", a: "komplemen", opts: ['komplemen', 'mplemenk', 'plemenko', 'lemen'] },
        { q: "Baca perkataan: konsekuat", a: "konsekuat", opts: ['konsekuat', 'nsekua', 'sekua', 'uako'] },
        { q: "Baca perkataan: kontradiksi", a: "kontradiksi", opts: ['kontradiksi', 'ntradik', 'tradik', 'dikon'] },
        { q: "Baca perkataan: kompilasi", a: "kompilasi", opts: ['kompilasi', 'mpilas', 'pilasi', 'asiko'] },
        { q: "Baca perkataan: kontribusi", a: "kontribusi", opts: ['kontribusi', 'ntribus', 'ribusi', 'busik'] },
        { q: "Baca perkataan: konduktif", a: "konduktif", opts: ['konduktif', 'nduk', 'dukif', 'tikon'] },
        { q: "Baca perkataan: konvalesen", a: "konvalesen", opts: ['konvalesen', 'nvales', 'vales', 'lesen'] },
        { q: "Baca perkataan: konsistensi", a: "konsistensi", opts: ['konsistensi', 'nsisten', 'sisten', 'tenso'] },
        { q: "Baca perkataan: konstruktif", a: "konstruktif", opts: ['konstruktif', 'ntruk', 'trukti', 'kto'] },
        { q: "Baca perkataan: konsumen", a: "konsumen", opts: ['konsumen', 'nsumen', 'sumen', 'meng'] },

        // Syllable identification
        { q: "Perkataan 'kontrak' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kompleks' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kontinjen' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'konspirasi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kontraksi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'konsentrasi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'konvensyen' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'konfeksi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kontekstual' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'konklusif' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'kontrak' ialah?", a: "kon", opts: ['kon', 'tra', 'k', 'kon'] },
        { q: "Suku kata kedua 'kontrak' ialah?", a: "tra", opts: ['tra', 'kon', 'k', 'kon'] },
        { q: "Suku kata ketiga 'kontrak' ialah?", a: "k", opts: ['k', 'kon', 'tra', 'kon'] },
        { q: "Suku kata pertama 'kompleks' ialah?", a: "kom", opts: ['kom', 'ple', 'ks', 'kom'] },
        { q: "Suku kata kedua 'kompleks' ialah?", a: "ple", opts: ['ple', 'kom', 'ks', 'kom'] },
        { q: "Suku kata ketiga 'kompleks' ialah?", a: "ks", opts: ['ks', 'kom', 'ple', 'kom'] },
        { q: "Suku kata pertama 'kontinjen' ialah?", a: "kon", opts: ['kon', 'tin', 'j', 'kon'] },
        { q: "Suku kata kedua 'kontinjen' ialah?", a: "tin", opts: ['tin', 'kon', 'j', 'kon'] },
        { q: "Suku kata ketiga 'kontinjen' ialah?", a: "j", opts: ['j', 'kon', 'tin', 'kon'] },
        { q: "Suku kata keempat 'kontinjen' ialah?", a: "en", opts: ['en', 'kon', 'tin', 'kon'] },

        // Pattern recognition
        { q: "Perkataan 'kontrak' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'kompleks' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'kontinjen' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'konspirasi' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'kontraksi' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'konsentrasi' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Suku kata 'kon' dalam 'kontrak' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'tra' dalam 'kontrak' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'k' dalam 'kontrak' ialah corak?", a: "KV", opts: ['KV', 'V', 'KVKK', 'KVK'] },
        { q: "Suku kata 'kom' dalam 'kompleks' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },

        // Missing syllable
        { q: "___ + tra + k = kontrak", a: "kon", opts: ['kon', 'tra', 'k', 'kon'] },
        { q: "kon + ___ + k = kontrak", a: "tra", opts: ['tra', 'kon', 'k', 'kon'] },
        { q: "kon + tra + ___ = kontrak", a: "k", opts: ['k', 'kon', 'tra', 'kon'] },
        { q: "___ + ple + ks = kompleks", a: "kom", opts: ['kom', 'ple', 'ks', 'kom'] },
        { q: "kom + ___ + ks = kompleks", a: "ple", opts: ['ple', 'kom', 'ks', 'kom'] },
        { q: "kom + ple + ___ = kompleks", a: "ks", opts: ['ks', 'kom', 'ple', 'kom'] },
        { q: "___ + tin + j + en = kontinjen", a: "kon", opts: ['kon', 'tin', 'j', 'kon'] },
        { q: "kon + ___ + j + en = kontinjen", a: "tin", opts: ['tin', 'kon', 'j', 'kon'] },
        { q: "kon + tin + ___ + en = kontinjen", a: "j", opts: ['j', 'kon', 'tin', 'kon'] },
        { q: "kon + tin + j + ___ = kontinjen", a: "en", opts: ['en', 'kon', 'tin', 'j'] },

        // Word completion
        { q: "kon + tra + k = ?", a: "kontrak", opts: ['kontrak', 'trakon', 'ontrakk', 'rakkon'] },
        { q: "kom + ple + ks = ?", a: "kompleks", opts: ['kompleks', 'plekskom', 'mpleksko', 'lekskomp'] },
        { q: "kon + tin + j + en = ?", a: "kontinjen", opts: ['kontinjen', 'tinjenk', 'jin', 'enkon'] },
        { q: "kon + spir + a + si = ?", a: "konspirasi", opts: ['konspirasi', 'spirasko', 'pirasko', 'raskon'] },
        { q: "kon + trak + si = ?", a: "kontraksi", opts: ['kontraksi', 'trakasi', 'aksikon', 'siak'] },
        { q: "kon + sen + tra + si = ?", a: "konsentrasi", opts: ['konsentrasi', 'sentrask', 'askon', 'naskon'] },
        { q: "kon + ven + sy + en = ?", a: "konvensyen", opts: ['konvensyen', 'vensyon', 'nsyon', 'yonk'] },
        { q: "kon + fek + si = ?", a: "konfeksi", opts: ['konfeksi', 'fekson', 'sokon', 'konf'] },
        { q: "kon + tek + su + a + l = ?", a: "kontekstual", opts: ['kontekstual', 'tekstual', 'stual', 'kon'] },
        { q: "kon + klu + si + f = ?", a: "konklusif", opts: ['konklusif', 'klusif', 'usikon', 'klusi'] },

        // Additional KVKK + V + KV words
        { q: "Baca perkataan: komprehensif", a: "komprehensif", opts: ['komprehensif', 'mrehensif', 'rehensif', 'henso'] },
        { q: "Baca perkataan: konkrit", a: "konkrit", opts: ['konkrit', 'nkritk', 'kritkon', 'itkon'] },
        { q: "Baca perkataan: konduktor", a: "konduktor", opts: ['konduktor', 'nduktor', 'dukt', 'uktor'] },
        { q: "Baca perkataan: kontribusi", a: "kontribusi", opts: ['kontribusi', 'ntribus', 'ribusi', 'busik'] },
        { q: "Baca perkataan: kontradisi", a: "kontradisi", opts: ['kontradisi', 'ntradi', 'radis', 'adisi'] },
        { q: "Baca perkataan: konvokesyen", a: "konvokesyen", opts: ['konvokesyen', 'nvok', 'vokes', 'okes'] },
        { q: "Baca perkataan: konseptual", a: "konseptual", opts: ['konseptual', 'nseptu', 'septua', 'tua'] },
        { q: "Baca perkataan: konvensional", a: "konvensional", opts: ['konvensional', 'nvens', 'vensi', 'ens'] },
        { q: "Baca perkataan: konstruktif", a: "konstruktif", opts: ['konstruktif', 'ntruk', 'truk', 'kto'] },
        { q: "Baca perkataan: konstitusyen", a: "konstitusyen", opts: ['konstitusyen', 'nstus', 'tusy', 'sye'] },
        { q: "Baca perkataan: kontemporari", a: "kontemporari", opts: ['kontemporari', 'ntempo', 'tempora', 'pora'] },

        // More syllable work
        { q: "Perkataan 'komprehensif' ada berapa suku kata?", a: "5", opts: ['5', '4', '6', '3'] },
        { q: "Perkataan 'konkrit' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'konduktor' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kontribusi' ada berapa suku kata?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Perkataan 'kontradisi' ada berapa suku kata?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Suku kata pertama 'komprehensif' ialah?", a: "kom", opts: ['kom', 'pre', 'hen', 'kom'] },
        { q: "Suku kata kedua 'komprehensif' ialah?", a: "pre", opts: ['pre', 'kom', 'hen', 'kom'] },
        { q: "Suku kata ketiga 'komprehensif' ialah?", a: "hen", opts: ['hen', 'kom', 'pre', 'kom'] },
        { q: "Suku kata keempat 'komprehensif' ialah?", a: "si", opts: ['si', 'kom', 'pre', 'hen'] },
        { q: "Suku kata kelima 'komprehensif' ialah?", a: "f", opts: ['f', 'kom', 'pre', 'hen'] },

        // More pattern work
        { q: "Perkataan 'komprehensif' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'konkrit' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'konduktor' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'kontribusi' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Perkataan 'kontradisi' mengikut corak?", a: "KVKK + V + KV", opts: ['KVKK + V + KV', 'KV + V + KVKK', 'KVKK + KV + V', 'V + KVKK + KV'] },
        { q: "Suku kata 'kom' dalam 'komprehensif' ialah corak?", a: "KVKK", opts: ['KVKK', 'KV', 'V', 'KVK'] },
        { q: "Suku kata 'pre' dalam 'komprehensif' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'hen' dalam 'komprehensif' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'si' dalam 'komprehensif' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },
        { q: "Suku kata 'f' dalam 'komprehensif' ialah corak?", a: "V", opts: ['V', 'KVKK', 'KV', 'KVK'] },

        // More missing syllable work
        { q: "___ + pre + hen + si + f = komprehensif", a: "kom", opts: ['kom', 'pre', 'hen', 'si', 'f'] },
        { q: "kom + ___ + hen + si + f = komprehensif", a: "pre", opts: ['pre', 'kom', 'hen', 'si', 'f'] },
        { q: "kom + pre + ___ + si + f = komprehensif", a: "hen", opts: ['hen', 'kom', 'pre', 'si', 'f'] },
        { q: "kom + pre + hen + ___ + f = komprehensif", a: "si", opts: ['si', 'kom', 'pre', 'hen', 'f'] },
        { q: "kom + pre + hen + si + ___ = komprehensif", a: "f", opts: ['f', 'kom', 'pre', 'hen', 'si'] },
        { q: "___ + rit + k = konkrit", a: "kon", opts: ['kon', 'rit', 'k', 'kon'] },
        { q: "kon + ___ + k = konkrit", a: "rit", opts: ['rit', 'kon', 'k', 'kon'] },
        { q: "kon + rit + ___ = konkrit", a: "k", opts: ['k', 'kon', 'rit', 'kon'] },
        { q: "___ + duk + tor = konduktor", a: "kon", opts: ['kon', 'duk', 'tor', 'kon'] },
        { q: "kon + ___ + tor = konduktor", a: "duk", opts: ['duk', 'kon', 'tor', 'kon'] },
        { q: "kon + duk + ___ = konduktor", a: "tor", opts: ['tor', 'kon', 'duk', 'kon'] },
        { q: "___ + tri + bu + si = kontribusi", a: "kon", opts: ['kon', 'tri', 'bu', 'si', 'kon'] },

        // More word completion
        { q: "kom + pre + hen + si + f = ?", a: "komprehensif", opts: ['komprehensif', 'mrehensif', 'rehensif', 'henso'] },
        { q: "kon + rit + k = ?", a: "konkrit", opts: ['konkrit', 'kritkon', 'nkritk', 'itkon'] },
        { q: "kon + duk + tor = ?", a: "konduktor", opts: ['konduktor', 'duktork', 'uktor', 'kond'] },
        { q: "kon + tri + bu + si = ?", a: "kontribusi", opts: ['kontribusi', 'ribusi', 'busik', 'sik'] },
        { q: "kon + tra + di + si = ?", a: "kontradisi", opts: ['kontradisi', 'radis', 'adisi', 'ntra'] },
        { q: "kon + vo + kes + yen = ?", a: "konvokesyen", opts: ['konvokesyen', 'vokesyen', 'nvokes', 'okes'] },
        { q: "kon + sep + tu + al = ?", a: "konseptual", opts: ['konseptual', 'septual', 'nseptu', 'tua'] },
        { q: "kon + ven + si + on + al = ?", a: "konvensional", opts: ['konvensional', 'vensional', 'nvens', 'ens'] },
        { q: "kon + struk + tif = ?", a: "konstruktif", opts: ['konstruktif', 'truktif', 'ntruk', 'kto'] },
        { q: "kon + sti + tus + yen = ?", a: "konstitusyen", opts: ['konstitusyen', 'tusyen', 'nstus', 'sye'] },
        { q: "kon + tem + po + ra = ?", a: "kontemporari", opts: ['kontemporari', 'temporari', 'ntempo', 'pora'] },

        // Application questions
        { q: "Kontrak adalah?", a: "perjanjian", opts: ['perjanjian', 'makanan', 'pakaian', 'buku'] },
        { q: "Kompleks adalah?", a: "bangunan", opts: ['bangunan', "rumah", 'jalan', 'taman'] },
        { q: "Kontinjen adalah?", a: "kumpulan", opts: ['kumpulan', 'individu', 'satu', 'sendirian'] },
        { q: "Konspirasi adalah?", a: "rancangan", opts: ['rancangan', 'terbuka', 'jelas', 'nyata'] },
        { q: "Kontraksi adalah?", a: "kecil", opts: ['kecil', 'besar', 'panjang', 'pendek'] },
        { q: "Konsentrasi adalah?", a: "fokus", opts: ['fokus', 'santai', 'kacau', 'banyak'] },
        { q: "Konvensyen adalah?", a: "peraturan", opts: ['peraturan', 'biasa', 'luar biasa', 'asing'] },
        { q: "Konfeksi adalah?", a: "gula-gula", opts: ['gula-gula', 'makanan', 'minuman', 'pakaian'] },
        { q: "Kontekstual adalah?", a: "hubungan", opts: ['hubungan', 'asing', 'sendiri', 'terasing'] },
        { q: "Konklusif adalah?", a: "kesimpulan", opts: ['kesimpulan', 'pendahuluan', 'permulaan', 'awal'] },
        { q: "Komprehensif adalah?", a: "lengkap", opts: ['lengkap', 'separuh', 'sebahagian', 'tidak lengkap'] },
        { q: "Kongresif adalah?", a: "mesyuarat", opts: ['mesyuarat', 'sakit', 'sihat', 'kuat'] },
        { q: "Konflik adalah?", a: "pertelingkahan", opts: ['pertelingkahan', 'persetujuan', 'keamanan', 'harmoni'] },
        { q: "Komplemen adalah?", a: "lengkap", opts: ['lengkap', 'kurang', 'besar', 'kecil'] },
        { q: "Konsekuat adalah?", a: "akibat", opts: ['akibat', 'punca', 'sebab', 'asal'] },
        { q: "Kontradiksi adalah?", a: "bertentang", opts: ['bertentang', 'sama', 'serupa', 'mirip'] },
        { q: "Kompilasi adalah?", a: "kumpul", opts: ['kumpul', 'pisah', 'asing', 'terpisah'] },
        { q: "Kontribusi adalah?", a: "bantuan", opts: ['bantuan', 'halangan', 'musuh', 'lawan'] },
        { q: "Konduktor adalah?", a: "pengarah", opts: ['pengarah', 'murid', 'kerja', 'main'] },
        { q: "Konvalesen adalah?", a: "pemulihan", opts: ['pemulihan', 'sakit', 'sejuk', 'panas'] },
        { q: "Konsistensi adalah?", a: "tetap", opts: ['tetap', 'berubah', 'berbeza', 'sama'] },
        { q: "Konstruktif adalah?", a: "bina", opts: ['bina', "rusak", 'baiki', 'pulihara'] },
        { q: "Konsumen adalah?", a: "pengguna", opts: ['pengguna', 'pembuat', 'jual', 'beli'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KVKK + V + KV?", a: "kontrak", opts: ['kontrak', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + V + KV?", a: "kompleks", opts: ['kompleks', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + V + KV?", a: "kontinjen", opts: ['kontinjen', 'api', 'air', 'guru'] },
        { q: "Antara berikut, yang manakah corak KVKK + V + KV?", a: "konspirasi", opts: ['konspirasi', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVKK + V + KV?", a: "kontraksi", opts: ['kontraksi', 'rumah', 'saya', 'guru'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + V + KV?", a: "bola", opts: ['bola', 'kontrak', 'kompleks', 'kontinjen'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + V + KV?", a: "rumah", opts: ['rumah', 'konspirasi', 'kontraksi', 'konsentrasi'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + V + KV?", a: "meja", opts: ['meja', 'konfeksi', 'kontekstual', 'konklusif'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + V + KV?", a: "buku", opts: ['buku', 'komprehensif', 'konkrit', 'konduktor'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVKK + V + KV?", a: "saya", opts: ['saya', 'kontribusi', 'kontradisi', 'konvokesyen'] },

        // Sound patterns
        { q: "Perkataan dengan 'kon' di awal?", a: "kontrak", opts: ['kontrak', 'kompleks', 'kontinjen', 'konspirasi'] },
        { q: "Perkataan dengan 'kom' di awal?", a: "kompleks", opts: ['kompleks', 'kontrak', 'kontinjen', 'konspirasi'] },
        { q: "Perkataan dengan 'kon' di tengah?", a: "kontinjen", opts: ['kontinjen', 'kontrak', 'kompleks', 'konspirasi'] },
        { q: "Perkataan dengan 'kon' di akhir?", a: "konspirasi", opts: ['konspirasi', 'kontrak', 'kompleks', 'kontinjen'] },
        { q: "Perkataan dengan 'tra' di tengah?", a: "kontrak", opts: ['kontrak', 'kompleks', 'kontinjen', 'konspirasi'] },
        { q: "Perkataan dengan 'ple' di tengah?", a: "kompleks", opts: ['kompleks', 'kontrak', 'kontinjen', 'konspirasi'] },
        { q: "Perkataan dengan 'tin' di tengah?", a: "kontinjen", opts: ['kontinjen', 'kontrak', 'kompleks', 'konspirasi'] },
        { q: "Perkataan dengan 'spir' di tengah?", a: "konspirasi", opts: ['konspirasi', 'kontrak', 'kompleks', 'kontinjen'] },
        { q: "Perkataan dengan 'trak' di akhir?", a: "kontrak", opts: ['kontrak', 'kompleks', 'kontinjen', 'konspirasi'] },
        { q: "Perkataan dengan 'pleks' di akhir?", a: "kompleks", opts: ['kompleks', 'kontrak', 'kontinjen', 'konspirasi'] },

        // More complex KVKK + V + KV words
        { q: "Baca perkataan: komponen", a: "komponen", opts: ['komponen', 'mponenk', 'ponenko', 'nenkom'] },
        { q: "Baca perkataan: komposisi", a: "komposisi", opts: ['komposisi', 'mposi', 'posiko', 'sikom'] },
        { q: "Baca perkataan: kompromi", a: "kompromi", opts: ['kompromi', 'mpromik', 'promiko', 'romiko'] },
        { q: "Baca perkataan: komputer", a: "komputer", opts: ['komputer', 'omputer', 'mputer', 'puter'] },
        { q: "Baca perkataan: komunikasi", a: "komunikasi", opts: ['komunikasi', 'munikasi', 'nikasi', 'ikasi'] },
        { q: "Baca perkataan: komposit", a: "komposit", opts: ['komposit', 'mpositk', 'positko', 'om'] },
        { q: "Baca perkataan: komuniti", a: "komuniti", opts: ['komuniti', 'muniti', 'unitik', 'tikom'] },
        { q: "Baca perkataan: konkurensi", a: "konkurensi", opts: ['konkurensi', 'nkurensk', 'kurensi', 'ensi'] },
        { q: "Baca perkataan: konfigurasi", a: "konfigurasi", opts: ['konfigurasi', 'nfigura', 'figurasi', 'uras'] },
        { q: "Baca perkataan: konfirmasi", a: "konfirmasi", opts: ['konfirmasi', 'nfirmas', 'firmasi', 'ras'] },
        { q: "Baca perkataan: konservasi", a: "konservasi", opts: ['konservasi', 'nservasi', 'servasi', 'ras'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KVKK + V + KV?", a: "kontrak", opts: ['kontrak', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + V + KV?", a: "kompleks", opts: ['kompleks', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + V + KV?", a: "kontinjen", opts: ['kontinjen', 'api', 'air', 'guru'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + V + KV?", a: "konspirasi", opts: ['konspirasi', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVKK + V + KV?", a: "kontraksi", opts: ['kontraksi', 'rumah', 'saya', 'guru'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + V + KV?", a: "bola", opts: ['bola', 'kontrak', 'kompleks', 'kontinjen'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + V + KV?", a: "rumah", opts: ['rumah', 'konspirasi', 'kontraksi', 'konsentrasi'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + V + KV?", a: "meja", opts: ['meja', 'konfeksi', 'kontekstual', 'konklusif'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + V + KV?", a: "buku", opts: ['buku', 'komprehensif', 'konkrit', 'konduktor'] },
        { q: "Manakah antara berikut BUKAN perkataan KVKK + V + KV?", a: "saya", opts: ['saya', 'kontribusi', 'kontradisi', 'konvokesyen'] }
    ]
};

export default BM_KP26;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP26;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP26 = BM_KP26;
}
