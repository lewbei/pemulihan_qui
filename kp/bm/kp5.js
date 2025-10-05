// KP5 — Perkataan KV + KV

const BM_KP5 = {
    id: 'bm-kp5',
    code: 'KP5',
    name: 'KP5 — Perkataan KV + KV',
    description: '*Perkataan KV + KV*',
    category: 'bm',
    questionBank: [
        // Basic KV+KV word formation (30 questions)
        { q: "'ba' + 'tu' = ?", a: "batu", opts: ['batu', 'tuba', 'buta', 'tabu'] },
        { q: "'ma' + 'ta' = ?", a: "mata", opts: ['mata', 'tama', 'maat', 'taam'] },
        { q: "'ka' + 'ki' = ?", a: "kaki", opts: ['kaki', 'ikka', 'kaik', 'ikak'] },
        { q: "'bo' + 'la' = ?", a: "bola", opts: ['bola', 'labo', 'bolo', 'laba'] },
        { q: "'ru' + 'mah' = ?", a: "rumah", opts: ['rumah', 'mahru', 'ruma', 'maru'] },
        { q: "'bu' + 'ku' = ?", a: "buku", opts: ['buku', 'kubu', 'buka', 'kabu'] },
        { q: "'me' + 'ja' = ?", a: "meja", opts: ['meja', 'jame', 'meju', 'jema'] },
        { q: "'sa' + 'ya' = ?", a: "saya", opts: ['saya', 'yasa', 'saya', 'yasa'] },
        { q: "'da' + 'ri' = ?", a: "dari", opts: ['dari', 'rida', 'dira', 'ardi'] },
        { q: "'ka' + 'ta' = ?", a: "kata", opts: ['kata', 'taka', 'kaat', 'taak'] },
        { q: "'ma' + 'ri' = ?", a: "mari", opts: ['mari', 'rima', 'mira', 'armi'] },
        { q: "'na' + 'ma' = ?", a: "nama", opts: ['nama', 'mana', 'maan', 'anam'] },
        { q: "'pa' + 'da' = ?", a: "pada", opts: ['pada', 'dapa', 'paad', 'adap'] },
        { q: "'ra' + 'ja' = ?", a: "raja", opts: ['raja', 'jara', 'raaj', 'ajar'] },
        { q: "'ta' + 'pi' = ?", a: "tapi", opts: ['tapi', 'pita', 'taip', 'ipat'] },
        { q: "'wa' + 'ni' = ?", a: "wani", opts: ['wani', 'niwa', 'wain', 'inaw'] },
        { q: "'ya' + 'ng' = ?", a: "yang", opts: ['yang', 'ngya', 'yagn', 'agny'] },
        { q: "'za' + 'ma' = ?", a: "zama", opts: ['zama', 'maza', 'zaam', 'amaz'] },
        { q: "'be' + 'li' = ?", a: "beli", opts: ['beli', 'libe', 'bela', 'lebi'] },
        { q: "'di' + 'a' = ?", a: "dia", opts: ['dia', 'adi', 'dai', 'aid'] },
        { q: "'ga' + 'ji' = ?", a: "gaji", opts: ['gaji', 'jiga', 'gaja', 'jagi'] },
        { q: "'ha' + 'ti' = ?", a: "hati", opts: ['hati', 'tiha', 'hata', 'tahi'] },
        { q: "'ja' + 'lan' = ?", a: "jalan", opts: ['jalan', 'lanja', 'jalna', 'lanaj'] },
        { q: "'ke' + 'cil' = ?", a: "kecil", opts: ['kecil', 'cilke', 'kecel', 'cilek'] },
        { q: "'la' + 'gi' = ?", a: "lagi", opts: ['lagi', 'gila', 'laga', 'gali'] },
        { q: "'ma' + 'kan' = ?", a: "makan", opts: ['makan', 'kanma', 'makna', 'kanam'] },
        { q: "'na' + 'nti' = ?", a: "nanti", opts: ['nanti', 'tina', 'nanta', 'tani'] },
        { q: "'pa' + 'gi' = ?", a: "pagi", opts: ['pagi', 'gipa', 'paga', 'gapi'] },
        { q: "'ra' + 'ya' = ?", a: "raya", opts: ['raya', 'yara', 'rayu', 'yura'] },
        { q: "'sa' + 'tu' = ?", a: "satu", opts: ['satu', 'tusa', 'sata', 'tasu'] },
        
        // More KV+KV combinations (20 questions)
        { q: "'ta' + 'ngan' = ?", a: "tangan", opts: ['tangan', 'nganta', 'tagna', 'ngata'] },
        { q: "'wa' + 'ktu' = ?", a: "waktu", opts: ['waktu', 'tukwa', 'wakta', 'tuka'] },
        { q: "'bi' + 'la' = ?", a: "bila", opts: ['bila', 'labi', 'bali', 'labi'] },
        { q: "'ci' + 'ta' = ?", a: "cita", opts: ['cita', 'taci', 'cati', 'taci'] },
        { q: "'di' + 'ri' = ?", a: "diri", opts: ['diri', 'ridi', 'dira', 'radi'] },
        { q: "'fi' + 'kir' = ?", a: "fikir", opts: ['fikir', 'kirfi', 'fikri', 'kirif'] },
        { q: "'gi' + 'gi' = ?", a: "gigi", opts: ['gigi', 'gigi', 'giga', 'giga'] },
        { q: "'hi' + 'dup' = ?", a: "hidup", opts: ['hidup', 'duphi', 'hidpu', 'duhip'] },
        { q: "'ji' + 'wa' = ?", a: "jiwa", opts: ['jiwa', 'waji', 'jiwu', 'waju'] },
        { q: "'ki' + 'ta' = ?", a: "kita", opts: ['kita', 'taki', 'kati', 'taki'] },
        { q: "'li' + 'ma' = ?", a: "lima", opts: ['lima', 'mali', 'limu', 'malu'] },
        { q: "'mi' + 'lik' = ?", a: "milik", opts: ['milik', 'likmi', 'milki', 'likim'] },
        { q: "'ni' + 'lai' = ?", a: "nilai", opts: ['nilai', 'laini', 'nilia', 'laini'] },
        { q: "'pi' + 'lih' = ?", a: "pilih", opts: ['pilih', 'lihpi', 'pili', 'lihip'] },
        { q: "'ri' + 'nggit' = ?", a: "ringgit", opts: ['ringgit', 'gitring', 'ringti', 'gitrin'] },
        { q: "'si' + 'apa' = ?", a: "siapa", opts: ['siapa', 'apasi', 'siap', 'apisa'] },
        { q: "'ti' + 'ga' = ?", a: "tiga", opts: ['tiga', 'gati', 'tigu', 'gatu'] },
        { q: "'vi' + 'si' = ?", a: "visi", opts: ['visi', 'sivi', 'visa', 'siva'] },
        { q: "'wi' + 'bu' = ?", a: "wibu", opts: ['wibu', 'buwi', 'wiba', 'buwa'] },
        { q: "'xi' + 'lo' = ?", a: "xilo", opts: ['xilo', 'loxi', 'xila', 'loxa'] },
        
        // Additional KV+KV combinations (20 questions)
        { q: "'yi' + 'ta' = ?", a: "yita", opts: ['yita', 'tayi', 'yitu', 'tayu'] },
        { q: "'zi' + 'na' = ?", a: "zina", opts: ['zina', 'nazi', 'zinu', 'nazu'] },
        { q: "'bo' + 'lih' = ?", a: "bolih", opts: ['bolih', 'lihbo', 'boli', 'lihob'] },
        { q: "'co' + 'ba' = ?", a: "coba", opts: ['coba', 'baco', 'cobu', 'baco'] },
        { q: "'do' + 'sa' = ?", a: "dosa", opts: ['dosa', 'sado', 'dosu', 'sadu'] },
        { q: "'fo' + 'to' = ?", a: "foto", opts: ['foto', 'tofo', 'fotu', 'tofu'] },
        { q: "'go' + 'long' = ?", a: "golong", opts: ['golong', 'longgo', 'golng', 'longog'] },
        { q: "'ho' + 'ri' = ?", a: "hori", opts: ['hori', 'riho', 'hora', 'riha'] },
        { q: "'jo' + 'mpo' = ?", a: "jompo", opts: ['jompo', 'pojom', 'jomop', 'pojom'] },
        { q: "'ko' + 'ta' = ?", a: "kota", opts: ['kota', 'tako', 'kotu', 'taku'] },
        { q: "'lo' + 'bat' = ?", a: "lobat", opts: ['lobat', 'batlo', 'lobta', 'batol'] },
        { q: "'mo' + 'bil' = ?", a: "mobil", opts: ['mobil', 'bilmo', 'mobli', 'bilom'] },
        { q: "'no' + 'ta' = ?", a: "nota", opts: ['nota', 'tano', 'notu', 'tanu'] },
        { q: "'po' + 'hon' = ?", a: "pohon", opts: ['pohon', 'honpo', 'pohno', 'honop'] },
        { q: "'ro' + 'ti' = ?", a: "roti", opts: ['roti', 'tiro', 'rota', 'tira'] },
        { q: "'so' + 'fa' = ?", a: "sofa", opts: ['sofa', 'faso', 'sofu', 'fasu'] },
        { q: "'to' + 'long' = ?", a: "tolong", opts: ['tolong', 'longto', 'tolng', 'longot'] },
        { q: "'vo' + 'ka' = ?", a: "voka", opts: ['voka', 'kavo', 'voku', 'kavu'] },
        { q: "'wo' + 'man' = ?", a: "woman", opts: ['woman', 'manwo', 'womna', 'manow'] },
        { q: "'xo' + 'ma' = ?", a: "xoma", opts: ['xoma', 'maxo', 'xomu', 'maxu'] },
        
        // More word combinations (20 questions)
        { q: "'yo' + 'ga' = ?", a: "yoga", opts: ['yoga', 'gayo', 'yogu', 'gayu'] },
        { q: "'zo' + 'na' = ?", a: "zona", opts: ['zona', 'nazo', 'zonu', 'nazu'] },
        { q: "'bu' + 'ah' = ?", a: "buah", opts: ['buah', 'habu', 'buha', 'habu'] },
        { q: "'cu' + 'ci' = ?", a: "cuci", opts: ['cuci', 'cicu', 'cuca', 'cica'] },
        { q: "'du' + 'a' = ?", a: "dua", opts: ['dua', 'adu', 'dui', 'aid'] },
        { q: "'fu' + 'ngsi' = ?", a: "fungsi", opts: ['fungsi', 'gsifun', 'fungs', 'gsifu'] },
        { q: "'gu' + 'ru' = ?", a: "guru", opts: ['guru', 'rugu', 'gura', 'raga'] },
        { q: "'hu' + 'jan' = ?", a: "hujan", opts: ['hujan', 'janhu', 'hujna', 'januh'] },
        { q: "'ju' + 'al' = ?", a: "jual", opts: ['jual', 'alju', 'jula', 'aluj'] },
        { q: "'ku' + 'at' = ?", a: "kuat", opts: ['kuat', 'atku', 'kuta', 'atuk'] },
        { q: "'lu' + 'ar' = ?", a: "luar", opts: ['luar', 'arlu', 'lura', 'arul'] },
        { q: "'mu' + 'rah' = ?", a: "murah", opts: ['murah', 'rahmu', 'murha', 'rahum'] },
        { q: "'nu' + 'santara' = ?", a: "nusantara", opts: ['nusantara', 'taransanu', 'nusantra', 'taransun'] },
        { q: "'pu' + 'lang' = ?", a: "pulang", opts: ['pulang', 'langpu', 'pulnga', 'langup'] },
        { q: "'su' + 'ka' = ?", a: "suka", opts: ['suka', 'kasu', 'suka', 'kusa'] },
        { q: "'tu' + 'lis' = ?", a: "tulis", opts: ['tulis', 'listu', 'tulsi', 'lisut'] },
        { q: "'vu' + 'lkan' = ?", a: "vulkan", opts: ['vulkan', 'kanvul', 'vulkna', 'kanuv'] },
        { q: "'wu' + 'jud' = ?", a: "wujud", opts: ['wujud', 'judwu', 'wujdu', 'juduw'] },
        { q: "'xu' + 'nia' = ?", a: "xunia", opts: ['xunia', 'niaxu', 'xunai', 'niaux'] },
        { q: "'yu' + 'p' = ?", a: "yup", opts: ['yup', 'pyu', 'yup', 'puy'] },
        
        // Final KV+KV combinations (10 questions)
        { q: "'zu' + 'hur' = ?", a: "zuhur", opts: ['zuhur', 'hurzu', 'zuhru', 'huru'] },
        { q: "'ba' + 'ca' = ?", a: "baca", opts: ['baca', 'caba', 'bacu', 'cabu'] },
        { q: "'da' + 'lam' = ?", a: "dalam", opts: ['dalam', 'lamda', 'dalma', 'lamad'] },
        { q: "'ha' + 'rap' = ?", a: "harap", opts: ['harap', 'rapha', 'hapra', 'rapah'] },
        { q: "'ka' + 'wan' = ?", a: "kawan", opts: ['kawan', 'wanka', 'kawna', 'wanak'] },
        { q: "'la' + 'in' = ?", a: "lain", opts: ['lain', 'inla', 'lani', 'inal'] },
        { q: "'ma' + 'na' = ?", a: "mana", opts: ['mana', 'nama', 'manu', 'namu'] },
        { q: "'na' + 'si' = ?", a: "nasi", opts: ['nasi', 'sina', 'nasu', 'sinu'] },
        { q: "'pa' + 'kai' = ?", a: "pakai", opts: ['pakai', 'kaipa', 'paka', 'kaip'] },
        { q: "'ra' + 'sa' = ?", a: "rasa", opts: ['rasa', 'sara', 'rasu', 'saru'] }
    ]
};

export default BM_KP5;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP5;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP5 = BM_KP5;
}
