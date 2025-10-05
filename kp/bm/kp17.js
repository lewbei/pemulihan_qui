// KP17 — Suku kata KVKK

const BM_KP17 = {
    id: 'bm-kp17',
    code: 'KP17',
    name: 'KP17 — Suku kata KVKK',
    description: '*Suku kata KVKK (las, kan, mah, ku, lan)*',
    category: 'bm',
    questionBank: [
        // Reading KVKK syllables
        { q: "Baca suku kata: las", a: "las", opts: ['las', 'sal', 'als', 'asl'] },
        { q: "Baca suku kata: kan", a: "kan", opts: ['kan', 'nak', 'akn', 'kna'] },
        { q: "Baca suku kata: mah", a: "mah", opts: ['mah', 'ham', 'amh', 'hma'] },
        { q: "Baca suku kata: ku", a: "ku", opts: ['ku', 'uk', 'khu', 'kh'] },
        { q: "Baca suku kata: lan", a: "lan", opts: ['lan', 'nal', 'aln', 'lna'] },
        { q: "Baca suku kata: kat", a: "kat", opts: ['kat', 'tak', 'akt', 'tka'] },
        { q: "Baca suku kata: samp", a: "samp", opts: ['samp', 'pams', 'mpas', 'pasm'] },
        { q: "Baca suku kata: namp", a: "namp", opts: ['namp', 'pamn', 'mnamp', 'pmna'] },
        { q: "Baca suku kata: tump", a: "tump", opts: ['tump', 'mput', 'ptum', 'pmut'] },
        { q: "Baca suku kata: temp", a: "temp", opts: ['temp', 'mpte', 'pemt', 'mtep'] },
        { q: "Baca suku kata: kemp", a: "kemp", opts: ['kemp', 'pmek', 'mekp', 'pmke'] },
        { q: "Baca suku kata: semp", a: "semp", opts: ['semp', 'pmes', 'msep', 'pmse'] },
        { q: "Baca suku kata: lemp", a: "lemp", opts: ['lemp', 'pmel', 'melp', 'pmle'] },
        { q: "Baca suku kata: bemp", a: "bemp", opts: ['bemp', 'pmeb', 'mebp', 'pmbe'] },
        { q: "Baca suku kata: cemp", a: "cemp", opts: ['cemp', 'pmec', 'mecp', 'pmce'] },
        { q: "Baca suku kata: demp", a: "demp", opts: ['demp', 'pmed', 'medp', 'pmde'] },
        { q: "Baca suku kata: femp", a: "femp", opts: ['femp', 'pmef', 'mefp', 'pmfe'] },
        { q: "Baca suku kata: gemp", a: "gemp", opts: ['gemp', 'pmeg', 'megp', 'pmge'] },
        { q: "Baca suku kata: hemp", a: "hemp", opts: ['hemp', 'pmeh', 'mehp', 'pmhe'] },

        // Pattern recognition
        { q: "Suku kata 'las' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'kan' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'mah' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'lan' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'kat' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'samp' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'namp' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'tump' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'gemp' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },
        { q: "Suku kata 'temp' mengikut corak?", a: "KVKK", opts: ['KVKK', 'KV', 'KVK', 'V'] },

        // Syllable completion
        { q: "k + e + ___ = kek", a: "k", opts: ['k', 'e', 'ke', 'ek'] },
        { q: "p + a + ___ = pak", a: "k", opts: ['k', 'p', 'pa', 'ap'] },
        { q: "t + a + ___ = tak", a: "k", opts: ['k', 't', 'ta', 'at'] },
        { q: "l + a + ___ = lak", a: "k", opts: ['k', 'l', 'la', 'al'] },
        { q: "m + a + ___ = mak", a: "k", opts: ['k', 'm', 'ma', 'am'] },
        { q: "n + a + ___ = nak", a: "k", opts: ['k', 'n', 'na', 'an'] },
        { q: "s + a + ___ = sak", a: "k", opts: ['k', 's', 'sa', 'as'] },
        { q: "b + a + ___ = bak", a: "k", opts: ['k', 'b', 'ba', 'ab'] },
        { q: "d + a + ___ = dak", a: "k", opts: ['k', 'd', 'da', 'ad'] },
        { q: "g + a + ___ = gak", a: "k", opts: ['k', 'g', 'ga', 'ag'] },

        // Missing sound
        { q: "___ + e + k = kek", a: "k", opts: ['k', 'e', 'kek', 'ke'] },
        { q: "p + ___ + k = pak", a: "a", opts: ['a', 'p', 'pak', 'pa'] },
        { q: "t + a + ___ = tak", a: "k", opts: ['k', 't', 'tak', 'ta'] },
        { q: "___ + a + k = lak", a: "l", opts: ['l', 'a', 'lak', 'la'] },
        { q: "m + ___ + k = mak", a: "a", opts: ['a', 'm', 'mak', 'ma'] },
        { q: "___ + a + k = nak", a: "n", opts: ['n', 'a', 'nak', 'na'] },
        { q: "s + a + ___ = sak", a: "k", opts: ['k', 's', 'sak', 'sa'] },
        { q: "___ + a + k = bak", a: "b", opts: ['b', 'a', 'bak', 'ba'] },
        { q: "d + ___ + k = dak", a: "a", opts: ['a', 'd', 'dak', 'da'] },
        { q: "g + a + ___ = gak", a: "k", opts: ['k', 'g', 'gak', 'ga'] },

        // More KVKK syllables
        { q: "Baca suku kata: bet", a: "bet", opts: ['bet', 'teb', 'ebt', 'bte'] },
        { q: "Baca suku kata: set", a: "set", opts: ['set', 'tes', 'est', 'tse'] },
        { q: "Baca suku kata: let", a: "let", opts: ['let', 'tel', 'etl', 'tle'] },
        { q: "Baca suku kata: net", a: "net", opts: ['net', 'ten', 'etn', 'tne'] },
        { q: "Baca suku kata: ret", a: "ret", opts: ['ret', 'ter', 'etr', 'tre'] },
        { q: "Baca suku kata: pet", a: "pet", opts: ['pet', 'tep', 'etp', 'tpe'] },
        { q: "Baca suku kata: ket", a: "ket", opts: ['ket', 'tek', 'ekt', 'tke'] },
        { q: "Baca suku kata: get", a: "get", opts: ['get', 'teg', 'egt', 'tge'] },
        { q: "Baca suku kata: het", a: "het", opts: ['het', 'teh', 'eth', 'the'] },
        { q: "Baca suku kata: fet", a: "fet", opts: ['fet', 'tef', 'etf', 'tfe'] },

        // Syllable matching
        { q: "Antara berikut, yang manakah suku kata KVKK?", a: "las", opts: ['las', 'ka', 'su', 'ta'] },
        { q: "Antara berikut, yang manakah suku kata KVKK?", a: "kan", opts: ['kan', 'ba', 'si', 'ri'] },
        { q: "Antara berikut, yang manakah suku kata KVKK?", a: "mah", opts: ['mah', 'me', 'ja', 'bu'] },
        { q: "Antara berikut, yang manakah suku kata KVKK?", a: "lan", opts: ['lan', 'go', 'li', 'ru'] },
        { q: "Antara berikut, yang manakah suku kata KVKK?", a: "kat", opts: ['kat', 'bi', 'la', 'sa'] },
        { q: "Antara berikut, yang manakah BUKAN suku kata KVKK?", a: "ba", opts: ['ba', 'las', 'kan', 'mah'] },
        { q: "Antara berikut, yang manakah BUKAN suku kata KVKK?", a: "me", opts: ['me', 'lan', 'kat', 'mah'] },
        { q: "Antara berikut, yang manakah BUKAN suku kata KVKK?", a: "su", opts: ['su', 'kan', 'las', 'lan'] },
        { q: "Antara berikut, yang manakah BUKAN suku kata KVKK?", a: "ri", opts: ['ri', 'mah', 'kat', 'kan'] },
        { q: "Antara berikut, yang manakah BUKAN suku kata KVKK?", a: "ta", opts: ['ta', 'lan', 'mah', 'las'] },

        // Sound identification
        { q: "Huruf pertama dalam 'las' ialah?", a: "l", opts: ['l', 'a', 's', 'las'] },
        { q: "Huruf terakhir dalam 'las' ialah?", a: "s", opts: ['s', 'l', 'a', 'las'] },
        { q: "Huruf kedua dalam 'las' ialah?", a: "a", opts: ['a', 'l', 's', 'las'] },
        { q: "Huruf pertama dalam 'kan' ialah?", a: "k", opts: ['k', 'a', 'n', 'kan'] },
        { q: "Huruf terakhir dalam 'kan' ialah?", a: "n", opts: ['n', 'k', 'a', 'kan'] },
        { q: "Huruf kedua dalam 'kan' ialah?", a: "a", opts: ['a', 'k', 'n', 'kan'] },
        { q: "Huruf pertama dalam 'mah' ialah?", a: "m", opts: ['m', 'a', 'h', 'mah'] },
        { q: "Huruf terakhir dalam 'mah' ialah?", a: "h", opts: ['h', 'm', 'a', 'mah'] },
        { q: "Huruf kedua dalam 'mah' ialah?", a: "a", opts: ['a', 'm', 'h', 'mah'] },
        { q: "Huruf pertama dalam 'lan' ialah?", a: "l", opts: ['l', 'a', 'n', 'lan'] },

        // Sound matching
        { q: "Huruf 'l' ada dalam suku kata?", a: "las", opts: ['las', 'kan', 'mah', 'kat'] },
        { q: "Huruf 'k' ada dalam suku kata?", a: "kan", opts: ['kan', 'las', 'mah', 'lan'] },
        { q: "Huruf 'm' ada dalam suku kata?", a: "mah", opts: ['mah', 'las', 'kan', 'lan'] },
        { q: "Huruf 'n' ada dalam suku kata?", a: "lan", opts: ['lan', 'las', 'kan', 'mah'] },
        { q: "Huruf 't' ada dalam suku kata?", a: "kat", opts: ['kat', 'las', 'kan', 'mah'] },
        { q: "Huruf 's' ada dalam suku kata?", a: "las", opts: ['las', 'kan', 'mah', 'kat'] },
        { q: "Huruf 'h' ada dalam suku kata?", a: "mah", opts: ['mah', 'las', 'kan', 'lan'] },
        { q: "Huruf 'p' ada dalam suku kata?", a: "pak", opts: ['pak', 'las', 'kan', 'mah'] },
        { q: "Huruf 'b' ada dalam suku kata?", a: "bak", opts: ['bak', 'las', 'kan', 'mah'] },
        { q: "Huruf 'd' ada dalam suku kata?", a: "dak", opts: ['dak', 'las', 'kan', 'mah'] },

        // More KVKK patterns
        { q: "Baca suku kata: wang", a: "wang", opts: ['wang', 'gwan', 'ngaw', 'awng'] },
        { q: "Baca suku kata: yang", a: "yang", opts: ['yang', 'gnya', 'nagy', 'ayng'] },
        { q: "Baca suku kata: rang", a: "rang", opts: ['rang', 'gnar', 'nrag', 'argn'] },
        { q: "Baca suku kata: sang", a: "sang", opts: ['sang', 'gnas', 'nsag', 'asng'] },
        { q: "Baca suku kata: bang", a: "bang", opts: ['bang', 'gnab', 'nbag', 'abng'] },
        { q: "Baca suku kata: dang", a: "dang", opts: ['dang', 'gnad', 'ndag', 'adng'] },
        { q: "Baca suku kata: gang", a: "gang", opts: ['gang', 'gnag', 'ngag', 'agng'] },
        { q: "Baca suku kata: hang", a: "hang", opts: ['hang', 'gnah', 'nhag', 'ahng'] },
        { q: "Baca suku kata: jang", a: "jang", opts: ['jang', 'gnaj', 'njag', 'ajng'] },
        { q: "Baca suku kata: kangs", a: "kangs", opts: ['kangs', 'skang', 'ngaks', 'gansk'] },

        // Word building with KVKK syllables
        { q: "las + kan = ?", a: "laskan", opts: ['laskan', 'kanlas', 'laskn', 'knasla'] },
        { q: "mah + kan = ?", a: "mahkan", opts: ['mahkan', 'kanmah', 'mahkna', 'knahma'] },
        { q: "lan + kat = ?", a: "lankat", opts: ['lankat', 'katlan', 'lankta', 'ktalan'] },
        { q: "las + mah = ?", a: "lasmah", opts: ['lasmah', 'mahlas', 'lasmha', 'hmasla'] },
        { q: "kan + lan = ?", a: "kanlan", opts: ['kanlan', 'lankan', 'kanlna', 'lnakna'] },
        { q: "mah + kat = ?", a: "mahkat", opts: ['mahkat', 'katmah', 'mahkta', 'ktamha'] },
        { q: "lan + kan = ?", a: "lankan", opts: ['lankan', 'kanlan', 'lankna', 'knalna'] },
        { q: "kat + las = ?", a: "katlas", opts: ['katlas', 'laskat', 'katlsa', 'lstaka'] },
        { q: "las + lan = ?", a: "laslan", opts: ['laslan', 'lanlas', 'laslna', 'lnasla'] },
        { q: "kan + mah = ?", a: "kanmah", opts: ['kanmah', 'mahkan', 'kanmha', 'mhakna'] },

        // Syllable counting
        { q: "laskan ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "mahkan ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "lankat ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "lasmah ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "kanlan ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "mahkat ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "lankan ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "katlas ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "laslan ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "kanmah ada berapa suku kata?", a: "2", opts: ['2', '1', '3', '4'] },

        // More complex KVKK syllables
        { q: "Baca suku kata: bank", a: "bank", opts: ['bank', 'knab', 'nbak', 'akbn'] },
        { q: "Baca suku kata: sank", a: "sank", opts: ['sank', 'knas', 'nsak', 'aksn'] },
        { q: "Baca suku kata: tank", a: "tank", opts: ['tank', 'knat', 'ntak', 'aktn'] },
        { q: "Baca suku kata: rank", a: "rank", opts: ['rank', 'knar', 'nrak', 'akrn'] },
        { q: "Baca suku kata: pink", a: "pink", opts: ['pink', 'knip', 'npik', 'akpn'] },
        { q: "Baca suku kata: bonk", a: "bonk", opts: ['bonk', 'knob', 'nbok', 'akbn'] },
        { q: "Baca suku kata: sonk", a: "sonk", opts: ['sonk', 'knos', 'nsok', 'aksn'] },
        { q: "Baca suku kata: tonk", a: "tonk", opts: ['tonk', 'knot', 'ntok', 'aktn'] },
        { q: "Baca suku kata: ronk", a: "ronk", opts: ['ronk', 'knor', 'nrok', 'akrn'] },
        { q: "Baca suku kata: ponk", a: "ponk", opts: ['ponk', 'knop', 'npok', 'akpn'] },

        // Application questions
        { q: "Perkataan 'kelas' ada suku kata KVKK?", a: "las", opts: ['las', 'ke', 'kelas', 'kel'] },
        { q: "Perkataan 'makan' ada suku kata KVKK?", a: "kan", opts: ['kan', 'ma', 'makan', 'mak'] },
        { q: "Perkataan 'rumah' ada suku kata KVKK?", a: "mah", opts: ['mah', 'ru', 'rumah', 'rum'] },
        { q: "Perkataan 'buku' ada suku kata KVKK?", a: "ku", opts: ['ku', 'bu', 'buku', 'buk'] },
        { q: "Perkataan 'jalan' ada suku kata KVKK?", a: "lan", opts: ['lan', 'ja', 'jalan', 'jal'] },
        { q: "Perkataan 'kertas' ada suku kata KVKK?", a: "ret", opts: ['ret', 'ker', 'kertas', 'kert'] },
        { q: "Perkataan 'meja' ada suku kata KVKK?", a: "ja", opts: ['ja', 'me', 'meja', 'mej'] },
        { q: "Perkataan 'enam' ada suku kata KVKK?", a: "nam", opts: ['nam', 'e', 'enam', 'ena'] },
        { q: "Perkataan 'lima' ada suku kata KVKK?", a: "ma", opts: ['ma', 'li', 'lima', 'lim'] },
        { q: "Perkataan 'tujuh' ada suku kata KVKK?", a: "juh", opts: ['juh', 'tu', 'tujuh', 'tuj'] },

        // More syllable work
        { q: "Suku kata 'las' ada berapa huruf?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata 'kan' ada berapa huruf?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata 'mah' ada berapa huruf?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata 'lan' ada berapa huruf?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata 'kat' ada berapa huruf?", a: "3", opts: ['3', '2', '4', '1'] },
        { q: "Suku kata 'samp' ada berapa huruf?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Suku kata 'namp' ada berapa huruf?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Suku kata 'tump' ada berapa huruf?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Suku kata 'gemp' ada berapa huruf?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Suku kata 'temp' ada berapa huruf?", a: "4", opts: ['4', '3', '5', '2'] },

        // Sound patterns
        { q: "Antara berikut, yang mempunyai bunyi 's' di hujung?", a: "las", opts: ['las', 'kan', 'mah', 'kat'] },
        { q: "Antara berikut, yang mempunyai bunyi 'n' di hujung?", a: "kan", opts: ['kan', 'las', 'mah', 'kat'] },
        { q: "Antara berikut, yang mempunyai bunyi 'h' di hujung?", a: "mah", opts: ['mah', 'las', 'kan', 'kat'] },
        { q: "Antara berikut, yang mempunyai bunyi 'n' di hujung?", a: "lan", opts: ['lan', 'las', 'mah', 'kat'] },
        { q: "Antara berikut, yang mempunyai bunyi 't' di hujung?", a: "kat", opts: ['kat', 'las', 'kan', 'mah'] },
        { q: "Antara berikut, yang mempunyai bunyi 'p' di hujung?", a: "samp", opts: ['samp', 'las', 'kan', 'mah'] },
        { q: "Antara berikut, yang mempunyai bunyi 'm' di hujung?", a: "namp", opts: ['namp', 'las', 'kan', 'mah'] },
        { q: "Antara berikut, yang mempunyai bunyi 'p' di hujung?", a: "tump", opts: ['tump', 'las', 'kan', 'mah'] },
        { q: "Antara berikut, yang mempunyai bunyi 'p' di hujung?", a: "gemp", opts: ['gemp', 'las', 'kan', 'mah'] },
        { q: "Antara berikut, yang mempunyai bunyi 'p' di hujung?", a: "temp", opts: ['temp', 'las', 'kan', 'mah'] },

        // Final review questions
        { q: "Manakah antara berikut adalah suku kata KVKK?", a: "las", opts: ['las', 'ka', 'su', 'ta'] },
        { q: "Manakah antara berikut adalah suku kata KVKK?", a: "kan", opts: ['kan', 'me', 'ja', 'bu'] },
        { q: "Manakah antara berikut adalah suku kata KVKK?", a: "mah", opts: ['mah', 'bi', 'la', 'sa'] },
        { q: "Manakah antara berikut adalah suku kata KVKK?", a: "lan", opts: ['lan', 'go', 'li', 'ru'] },
        { q: "Manakah antara berikut adalah suku kata KVKK?", a: "kat", opts: ['kat', 'ba', 'si', 'ri'] },
        { q: "Manakah antara berikut BUKAN suku kata KVKK?", a: "ba", opts: ['ba', 'las', 'kan', 'mah'] },
        { q: "Manakah antara berikut BUKAN suku kata KVKK?", a: "me", opts: ['me', 'lan', 'kat', 'mah'] },
        { q: "Manakah antara berikut BUKAN suku kata KVKK?", a: "su", opts: ['su', 'kan', 'las', 'lan'] },
        { q: "Manakah antara berikut BUKAN suku kata KVKK?", a: "ri", opts: ['ri', 'mah', 'kat', 'kan'] },
        { q: "Manakah antara berikut BUKAN suku kata KVKK?", a: "ta", opts: ['ta', 'lan', 'mah', 'las'] }
    ]
};

export default BM_KP17;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP17;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP17 = BM_KP17;
}