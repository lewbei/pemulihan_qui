// KP20 — Perkataan KVK + KVKK

const BM_KP20 = {
    id: 'bm-kp20',
    code: 'KP20',
    name: 'KP20 — Perkataan KVK + KVKK',
    description: '*Perkataan KVK + KVKK (kampung, pantai, tandas, bank)*',
    category: 'bm',
    questionBank: [
        // Reading words with KVK + KVKK pattern
        { q: "Baca perkataan: kampung", a: "kampung", opts: ['kampung', 'pungkam', 'gampun', 'pungam'] },
        { q: "Baca perkataan: pantai", a: "pantai", opts: ['pantai', 'taipan', 'nipata', 'tainpa'] },
        { q: "Baca perkataan: tandas", a: "tandas", opts: ['tandas', 'dastan', 'sadtan', 'tadnas'] },
        { q: "Baca perkataan: bank", a: "bank", opts: ['bank', 'knab', 'nbak', 'akbn'] },
        { q: "Baca perkataan: lantai", a: "lantai", opts: ['lantai', 'talan', 'nital', 'tainla'] },
        { q: "Baca perkataan: samping", a: "samping", opts: ['samping', 'pingams', 'gamsin', 'mingsap'] },
        { q: "Baca perkataan: tanduk", a: "tanduk", opts: ['tanduk', 'duktan', 'ktandu', 'duktna'] },
        { q: "Baca perkataan: bancuh", a: "bancuh", opts: ['bancuh', 'cuhban', 'hancbu', 'buhcna'] },
        { q: "Baca perkataan: kandang", a: "kandang", opts: ['kandang', 'dangkan', 'ngadka', 'gankda'] },
        { q: "Baca perkataan: pancing", a: "pancing", opts: ['pancing', 'cingpan', 'ngacip', 'cngipa'] },
        { q: "Baca perkataan: sandang", a: "sandang", opts: ['sandang', 'dangsan', 'ngadsa', 'gandas'] },
        { q: "Baca perkataan: banci", a: "banci", opts: ['banci', 'cibna', 'inbac', 'nciba'] },
        { q: "Baca perkataan: tanda", a: "tanda", opts: ['tanda', 'danta', 'natan', 'antda'] },
        { q: "Baca perkataan: lampu", a: "lampu", opts: ['lampu', 'pular', 'rampa', 'amplu'] },
        { q: "Baca perkataan: rantai", a: "rantai", opts: ['rantai', 'taira', 'nitra', 'aitran'] },
        { q: "Baca perkataan: bantal", a: "bantal", opts: ['bantal', 'talban', 'lanbat', 'natabl'] },
        { q: "Baca perkataan: kawat", a: "kawat", opts: ['kawat', 'tawka', 'wakat', 'atkwa'] },
        { q: "Baca perkataan: sampan", a: "sampan", opts: ['sampan', 'pamsan', 'mansap', 'napsam'] },
        { q: "Baca perkataan: damai", a: "damai", opts: ['damai', 'maidam', 'idama', 'amida'] },
        { q: "Baca perkataan: catan", a: "catan", opts: ['catan', 'tanca', 'nacta', 'antca'] },

        // Syllable identification
        { q: "Perkataan 'kampung' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'pantai' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'tandas' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bank' ada berapa suku kata?", a: "1", opts: ['1', '2', '3', '4'] },
        { q: "Perkataan 'lantai' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'samping' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'tanduk' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bancuh' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kandang' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'pancing' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // Syllable breakdown
        { q: "Suku kata pertama 'kampung' ialah?", a: "kam", opts: ['kam', 'pung', 'kamp', 'ampk'] },
        { q: "Suku kata kedua 'kampung' ialah?", a: "pung", opts: ['pung', 'kam', 'kamp', 'ampk'] },
        { q: "Suku kata pertama 'pantai' ialah?", a: "pan", opts: ['pan', 'tai', 'pant', 'antp'] },
        { q: "Suku kata kedua 'pantai' ialah?", a: "tai", opts: ['tai', 'pan', 'pant', 'antp'] },
        { q: "Suku kata pertama 'tandas' ialah?", a: "tan", opts: ['tan', 'das', 'tand', 'antd'] },
        { q: "Suku kata kedua 'tandas' ialah?", a: "das", opts: ['das', 'tan', 'tand', 'antd'] },
        { q: "Suku kata pertama 'lantai' ialah?", a: "lan", opts: ['lan', 'tai', 'lant', 'antl'] },
        { q: "Suku kata kedua 'lantai' ialah?", a: "tai", opts: ['tai', 'lan', 'lant', 'antl'] },
        { q: "Suku kata pertama 'samping' ialah?", a: "sam", opts: ['sam', 'ping', 'samp', 'amps'] },
        { q: "Suku kata kedua 'samping' ialah?", a: "ping", opts: ['ping', 'sam', 'samp', 'amps'] },

        // Pattern recognition
        { q: "Perkataan 'kampung' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'pantai' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'tandas' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'lantai' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'samping' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Suku kata 'kam' dalam 'kampung' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },
        { q: "Suku kata 'pung' dalam 'kampung' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'pan' dalam 'pantai' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },
        { q: "Suku kata 'tai' dalam 'pantai' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'tan' dalam 'tandas' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },

        // Missing syllable
        { q: "___ + pung = kampung", a: "kam", opts: ['kam', 'pung', 'kamp', 'ampk'] },
        { q: "kam + ___ = kampung", a: "pung", opts: ['pung', 'kam', 'kamp', 'ampk'] },
        { q: "___ + tai = pantai", a: "pan", opts: ['pan', 'tai', 'pant', 'antp'] },
        { q: "pan + ___ = pantai", a: "tai", opts: ['tai', 'pan', 'pant', 'antp'] },
        { q: "___ + das = tandas", a: "tan", opts: ['tan', 'das', 'tand', 'antd'] },
        { q: "tan + ___ = tandas", a: "das", opts: ['das', 'tan', 'tand', 'antd'] },
        { q: "___ + tai = lantai", a: "lan", opts: ['lan', 'tai', 'lant', 'antl'] },
        { q: "lan + ___ = lantai", a: "tai", opts: ['tai', 'lan', 'lant', 'antl'] },
        { q: "___ + ping = samping", a: "sam", opts: ['sam', 'ping', 'samp', 'amps'] },
        { q: "sam + ___ = samping", a: "ping", opts: ['ping', 'sam', 'samp', 'amps'] },

        // Word completion
        { q: "kam + pung = ?", a: "kampung", opts: ['kampung', 'pungkam', 'gampun', 'pungam'] },
        { q: "pan + tai = ?", a: "pantai", opts: ['pantai', 'taipan', 'nipata', 'tainpa'] },
        { q: "tan + das = ?", a: "tandas", opts: ['tandas', 'dastan', 'sadtan', 'tadnas'] },
        { q: "lan + tai = ?", a: "lantai", opts: ['lantai', 'talan', 'nital', 'tainla'] },
        { q: "sam + ping = ?", a: "samping", opts: ['samping', 'pingams', 'gamsin', 'mingsap'] },
        { q: "tan + duk = ?", a: "tanduk", opts: ['tanduk', 'duktan', 'ktandu', 'duktna'] },
        { q: "ban + cuh = ?", a: "bancuh", opts: ['bancuh', 'cuhban', 'hancbu', 'buhcna'] },
        { q: "kan + dang = ?", a: "kandang", opts: ['kandang', 'dangkan', 'ngadka', 'gankda'] },
        { q: "pan + cing = ?", a: "pancing", opts: ['pancing', 'cingpan', 'ngacip', 'cngipa'] },
        { q: "san + dang = ?", a: "sandang", opts: ['sandang', 'dangsan', 'ngadsa', 'gandas'] },

        // Additional KVK + KVKK words
        { q: "Baca perkataan: jalan", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "Baca perkataan: bukan", a: "bukan", opts: ['bukan', 'kanbu', 'nubak', 'akbn'] },
        { q: "Baca perkataan: taman", a: "taman", opts: ['taman', 'manat', 'natma', 'atmn'] },
        { q: "Baca perkataan: kawan", a: "kawan", opts: ['kawan', 'nawak', 'wakan', 'akwn'] },
        { q: "Baca perkataan: jarak", a: "jarak", opts: ['jarak', 'raja', 'kajra', 'ajark'] },
        { q: "Baca perkataan: nanti", a: "nanti", opts: ['nanti', 'tinan', 'inant', 'antin'] },
        { q: "Baca perkataan: bantu", a: "bantu", opts: ['bantu', 'tuba', 'nabtu', 'abtn'] },
        { q: "Baca perkataan: pukul", a: "pukul", opts: ['pukul', 'kulp', 'lupuk', 'upkl'] },
        { q: "Baca perkataan: cukup", a: "cukup", opts: ['cukup', 'kupcu', 'pukcu', 'ukpc'] },
        { q: "Baca perkataan: tunjuk", a: "tunjuk", opts: ['tunjuk', 'nuktuj', 'junkt', 'ktunj'] },

        // More syllable work
        { q: "Perkataan 'jalan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'bukan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'taman' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'kawan' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Perkataan 'jarak' ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Suku kata pertama 'jalan' ialah?", a: "ja", opts: ['ja', 'lan', 'jal', 'laj'] },
        { q: "Suku kata kedua 'jalan' ialah?", a: "lan", opts: ['lan', 'ja', 'jal', 'laj'] },
        { q: "Suku kata pertama 'bukan' ialah?", a: "bu", opts: ['bu', 'kan', 'buk', 'kbu'] },
        { q: "Suku kata kedua 'bukan' ialah?", a: "kan", opts: ['kan', 'bu', 'buk', 'kbu'] },
        { q: "Suku kata pertama 'taman' ialah?", a: "tam", opts: ['tam', 'an', 'tama', 'amt'] },

        // More pattern work
        { q: "Perkataan 'jalan' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'bukan' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'taman' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'kawan' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Perkataan 'jarak' mengikut corak?", a: "KVK + KVKK", opts: ['KVK + KVKK', 'KVKK + KVK', 'KV + KV', 'V + KV'] },
        { q: "Suku kata 'ja' dalam 'jalan' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },
        { q: "Suku kata 'lan' dalam 'jalan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'bu' dalam 'bukan' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },
        { q: "Suku kata 'kan' dalam 'bukan' ialah corak?", a: "KVKK", opts: ['KVKK', 'KVK', 'KV', 'V'] },
        { q: "Suku kata 'tam' dalam 'taman' ialah corak?", a: "KVK", opts: ['KVK', 'KVKK', 'KV', 'V'] },

        // More missing syllable work
        { q: "___ + lan = jalan", a: "ja", opts: ['ja', 'lan', 'jal', 'laj'] },
        { q: "ja + ___ = jalan", a: "lan", opts: ['lan', 'ja', 'jal', 'laj'] },
        { q: "___ + kan = bukan", a: "bu", opts: ['bu', 'kan', 'buk', 'kbu'] },
        { q: "bu + ___ = bukan", a: "kan", opts: ['kan', 'bu', 'buk', 'kbu'] },
        { q: "___ + an = taman", a: "tam", opts: ['tam', 'an', 'tama', 'amt'] },
        { q: "tam + ___ = taman", a: "an", opts: ['an', 'tam', 'tama', 'amt'] },
        { q: "___ + wan = kawan", a: "ka", opts: ['ka', 'wan', 'kaw', 'wak'] },
        { q: "ka + ___ = kawan", a: "wan", opts: ['wan', 'ka', 'kaw', 'wak'] },
        { q: "___ + rak = jarak", a: "ja", opts: ['ja', 'rak', 'jar', 'raj'] },
        { q: "ja + ___ = jarak", a: "rak", opts: ['rak', 'ja', 'jar', 'raj'] },

        // More word completion
        { q: "ja + lan = ?", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        { q: "bu + kan = ?", a: "bukan", opts: ['bukan', 'kanbu', 'nubak', 'akbn'] },
        { q: "tam + an = ?", a: "taman", opts: ['taman', 'manat', 'natma', 'atmn'] },
        { q: "ka + wan = ?", a: "kawan", opts: ['kawan', 'nawak', 'wakan', 'akwn'] },
        { q: "ja + rak = ?", a: "jarak", opts: ['jarak', 'raja', 'kajra', 'ajark'] },
        { q: "nan + ti = ?", a: "nanti", opts: ['nanti', 'tinan', 'inant', 'antin'] },
        { q: "ban + tu = ?", a: "bantu", opts: ['bantu', 'tuba', 'nabtu', 'abtn'] },
        { q: "puk + ul = ?", a: "pukul", opts: ['pukul', 'kulp', 'lupuk', 'upkl'] },
        { q: "cuk + up = ?", a: "cukup", opts: ['cukup', 'kupcu', 'pukcu', 'ukpc'] },
        { q: "tun + juk = ?", a: "tunjuk", opts: ['tunjuk', 'nuktuj', 'junkt', 'ktunj'] },

        // Application questions
        { q: "Tempat tinggal di kampung ialah?", a: "rumah", opts: ['rumah', 'kelas', 'jalan', 'pasar'] },
        { q: "Pantai ada di tepi?", a: "laut", opts: ['laut', 'gunung', 'hutan', 'padang'] },
        { q: "Tanda jalan ada di?", a: "jalan", opts: ['jalan', 'rumah', 'kelas', 'pasar'] },
        { q: "Bank menyimpan?", a: "wang", opts: ['wang', 'buku', 'makan', 'mainan'] },
        { q: "Lantai adalah bahagian?", a: "bawah", opts: ['bawah', 'atas', 'sisi', 'hadapan'] },
        { q: "Samping bermaksud?", a: "tepi", opts: ['tepi', 'tengah', 'atas', 'bawah'] },
        { q: "Tanduk ada pada?", a: "lembu", opts: ['lembu', 'kucing', 'anjing', 'kambing'] },
        { q: "Bancuh air untuk?", a: "minum", opts: ['minum', 'makan', 'main', 'tidur'] },
        { q: "Kandang untuk?", a: "haiwan", opts: ['haiwan', 'orang', 'tumbuhan', 'benda'] },
        { q: "Pancing digunakan untuk?", a: "menangkap ikan", opts: ['menangkap ikan', 'bermain', 'belajar', 'makan'] },
        { q: "Sandang dipakai untuk?", a: "menyandang", opts: ['menyandang', 'berjalan', 'duduk', 'tidur'] },
        { q: "Banci ialah alat?", a: "memasak", opts: ['memasak', 'menulis', 'membaca', 'mewarna'] },
        { q: "Tanda menunjukkan?", a: "arah", opts: ['arah', 'tempat', 'waktu', 'nama'] },
        { q: "Lampu memberi?", a: "cahaya", opts: ['cahaya', 'gelap', 'panas', 'sejuk'] },
        { q: "Rantai digunakan untuk?", a: "mengikat", opts: ['mengikat', 'memotong', 'menulis', 'mewarna'] },
        { q: "Bantal untuk?", a: "tidur", opts: ['tidur', 'duduk', 'makan', 'belajar'] },
        { q: "Kawat digunakan untuk?", a: "mengukur", opts: ['mengukur', 'memotong', 'menulis', 'mewarna'] },
        { q: "Sampan ialah bot?", a: "kecil", opts: ['kecil', 'besar', 'panjang', 'pendek'] },
        { q: "Damai bermaksud?", a: "tenang", opts: ['tenang', 'marah', 'sedih', 'gembira'] },
        { q: "Catan digunakan untuk?", a: "melukis", opts: ['melukis', 'membaca', 'menulis', 'mewarna'] },

        // Pattern matching
        { q: "Antara berikut, yang manakah corak KVK + KVKK?", a: "kampung", opts: ['kampung', 'bola', 'meja', 'buku'] },
        { q: "Antara berikut, yang manakah corak KVK + KVKK?", a: "pantai", opts: ['pantai', 'rumah', 'kelas', 'jalan'] },
        { q: "Antara berikut, yang manakah corak KVK + KVKK?", a: "tandas", opts: ['tandas', 'guru', 'bola', 'api'] },
        { q: "Antara berikut, yang manakah corak KVK + KVKK?", a: "lantai", opts: ['lantai', 'makan', 'nasi', 'air'] },
        { q: "Antara berikut, yang manakah corak KVK + KVKK?", a: "samping", opts: ['samping', 'kata', 'bola', 'api'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVK + KVKK?", a: "bola", opts: ['bola', 'kampung', 'pantai', 'tandas'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVK + KVKK?", a: "rumah", opts: ['rumah', 'lantai', 'samping', 'tanduk'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVK + KVKK?", a: "meja", opts: ['meja', 'bancuh', 'kandang', 'pancing'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVK + KVKK?", a: "buku", opts: ['buku', 'sandang', 'banci', 'tanda'] },
        { q: "Antara berikut, yang manakah BUKAN corak KVK + KVKK?", a: "kelas", opts: ['kelas', 'lampu', 'rantai', 'bantal'] },

        // Sound patterns
        { q: "Perkataan dengan suku kata pertama 'kam'?", a: "kampung", opts: ['kampung', 'pantai', 'tandas', 'lantai'] },
        { q: "Perkataan dengan suku kata pertama 'pan'?", a: "pantai", opts: ['pantai', 'kampung', 'tandas', 'lantai'] },
        { q: "Perkataan dengan suku kata pertama 'tan'?", a: "tandas", opts: ['tandas', 'kampung', 'pantai', 'lantai'] },
        { q: "Perkataan dengan suku kata pertama 'lan'?", a: "lantai", opts: ['lantai', 'kampung', 'pantai', 'tandas'] },
        { q: "Perkataan dengan suku kata pertama 'sam'?", a: "samping", opts: ['samping', 'kampung', 'pantai', 'tandas'] },
        { q: "Perkataan dengan suku kata kedua 'pung'?", a: "kampung", opts: ['kampung', 'pantai', 'tandas', 'lantai'] },
        { q: "Perkataan dengan suku kata kedua 'tai'?", a: "pantai", opts: ['pantai', 'lantai', 'kampung', 'tandas'] },
        { q: "Perkataan dengan suku kata kedua 'das'?", a: "tandas", opts: ['tandas', 'pantai', 'lantai', 'kampung'] },
        { q: "Perkataan dengan suku kata kedua 'tai'?", a: "lantai", opts: ['lantai', 'tandas', 'pantai', 'kampung'] },
        { q: "Perkataan dengan suku kata kedua 'ping'?", a: "samping", opts: ['samping', 'lantai', 'tandas', 'pantai'] },

        // More words with KVK + KVKK pattern
        { q: "Baca perkataan: kolar", a: "kolar", opts: ['kolar', 'larka', 'rakol', 'kolra'] },
        { q: "Baca perkataan: kanvas", a: "kanvas", opts: ['kanvas', 'vaska', 'sakvan', 'vaksan'] },
        { q: "Baca perkataan: kalung", a: "kalung", opts: ['kalung', 'lungka', 'ngakla', 'lukgan'] },
        { q: "Baca perkataan: kampus", a: "kampus", opts: ['kampus', 'puskam', 'sukam', 'mpusa'] },
        { q: "Baca perkataan: kampong", a: "kampong", opts: ['kampong', 'pongkam', 'ngakmp', 'gompak'] },
        { q: "Baca perkataan: kapur", a: "kapur", opts: ['kapur', 'purka', 'rakup', 'ukpr'] },
        { q: "Baca perkataan: karat", a: "karat", opts: ['karat', 'tarak', 'rakat', 'akrt'] },
        {q: "Baca perkataan: kasut", a: "kasut", opts: ['kasut', 'suka', 'takas', 'utkas'] },
        { q: "Baca perkataan: katil", a: "katil", opts: ['katil', 'tilak', 'lakit', 'kalti'] },
        { q: "Baca perkataan: kemas", a: "kemas", opts: ['kemas', 'make', 'sakem', 'mekas'] },

        // Sentence completion
        { q: "Saya tinggal di ___", a: "kampung", opts: ['kampung', 'bandar', 'bandar', 'bandar'] },
        { q: "Saya mandi di ___", a: "pantai", opts: ['pantai', 'kolam', 'sungai', 'tasik'] },
        { q: "Saya beli di ___", a: "tandas", opts: ['tandas', 'pasar', 'pejabat', 'kedai'] },
        { q: "Saya simpan wang di ___", a: "bank", opts: ['bank', 'dompet', 'peti', 'bawah katil'] },
        { q: "Saya duduk di ___ lantai", a: "atas", opts: ['atas', 'bawah', 'sisi', 'hadapan'] },
        { q: "Saya duduk ___ kerusi", a: "di", opts: ['di', 'atas', 'bawah', 'sisi'] },
        { q: "Saya berdiri ___ tepi", a: "di", opts: ['di', 'atas', 'bawah', 'sisi'] },
        { q: "Saya ___ di bawah pokok", a: "berdiri", opts: ['berdiri', 'duduk', 'baring', 'berjalan'] },
        { q: "Saya ___ ikan dengan pancing", a: "tangkap", opts: ['tangkap', 'beli', 'jual', 'masak'] },
        { q: "Saya ___ buku dengan tanda", a: "tanda", opts: ['tanda', "baca", 'tulis', 'warna'] },

        // Final review questions
        { q: "Manakah antara berikut adalah perkataan KVK + KVKK?", a: "kampung", opts: ['kampung', 'bola', 'meja', 'buku'] },
        { q: "Manakah antara berikut adalah perkataan KVK + KVKK?", a: "pantai", opts: ['pantai', 'rumah', 'kelas', 'jalan'] },
        { q: "Manakah antara berikut adalah perkataan KVK + KVKK?", a: "tandas", opts: ['tandas', 'guru', 'bola', 'api'] },
        { q: "Manakah antara berikut adalah perkataan KVK + KVKK?", a: "lantai", opts: ['lantai', 'makan', 'nasi', 'air'] },
        { q: "Manakah antara berikut adalah perkataan KVK + KVKK?", a: "samping", opts: ['samping', 'kata', 'bola', 'api'] },
        { q: "Manakah antara berikut BUKAN perkataan KVK + KVKK?", a: "bola", opts: ['bola', 'kampung', 'pantai', 'tandas'] },
        { q: "Manakah antara berikut BUKAN perkataan KVK + KVKK?", a: "rumah", opts: ['rumah', 'lantai', 'samping', 'tanduk'] },
        { q: "Manakah antara berikut BUKAN perkataan KVK + KVKK?", a: "meja", opts: ['meja', 'bancuh', 'kandang', 'pancing'] },
        { q: "Manakah antara berikut BUKAN perkataan KVK + KVKK?", a: "buku", opts: ['buku', 'sandang', 'banci', 'tanda'] },
        { q: "Manakah antara berikut BUKAN perkataan KVK + KVKK?", a: "kelas", opts: ['kelas', 'lampu', 'rantai', 'bantal'] }
    ]
};

export default BM_KP20;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP20;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP20 = BM_KP20;
}