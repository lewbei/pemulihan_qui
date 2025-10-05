// KP4 — Suku kata KV

const BM_KP4 = {
    id: 'bm-kp4',
    code: 'KP4',
    name: 'KP4 — Suku kata KV',
    description: '*Suku kata KV*',
    category: 'bm',
    questionBank: [
        // Reading KV syllables (30 questions)
        { q: "Baca: ba", a: "ba", opts: ['ba', 'ab', 'bi', 'ib'] },
        { q: "Baca: bi", a: "bi", opts: ['bi', 'ib', 'ba', 'ab'] },
        { q: "Baca: bu", a: "bu", opts: ['bu', 'ub', 'ba', 'ab'] },
        { q: "Baca: ka", a: "ka", opts: ['ka', 'ak', 'ki', 'ik'] },
        { q: "Baca: ki", a: "ki", opts: ['ki', 'ik', 'ka', 'ak'] },
        { q: "Baca: ma", a: "ma", opts: ['ma', 'am', 'mi', 'im'] },
        { q: "Baca: mi", a: "mi", opts: ['mi', 'im', 'ma', 'am'] },
        { q: "Baca: na", a: "na", opts: ['na', 'an', 'ni', 'in'] },
        { q: "Baca: ni", a: "ni", opts: ['ni', 'in', 'na', 'an'] },
        { q: "Baca: pa", a: "pa", opts: ['pa', 'ap', 'pi', 'ip'] },
        { q: "Baca: da", a: "da", opts: ['da', 'ad', 'di', 'id'] },
        { q: "Baca: di", a: "di", opts: ['di', 'id', 'da', 'ad'] },
        { q: "Baca: du", a: "du", opts: ['du', 'ud', 'da', 'ad'] },
        { q: "Baca: ga", a: "ga", opts: ['ga', 'ag', 'gi', 'ig'] },
        { q: "Baca: gi", a: "gi", opts: ['gi', 'ig', 'ga', 'ag'] },
        { q: "Baca: gu", a: "gu", opts: ['gu', 'ug', 'ga', 'ag'] },
        { q: "Baca: ha", a: "ha", opts: ['ha', 'ah', 'hi', 'ih'] },
        { q: "Baca: hi", a: "hi", opts: ['hi', 'ih', 'ha', 'ah'] },
        { q: "Baca: hu", a: "hu", opts: ['hu', 'uh', 'ha', 'ah'] },
        { q: "Baca: ja", a: "ja", opts: ['ja', 'aj', 'ji', 'ij'] },
        { q: "Baca: ji", a: "ji", opts: ['ji', 'ij', 'ja', 'aj'] },
        { q: "Baca: ju", a: "ju", opts: ['ju', 'uj', 'ja', 'aj'] },
        { q: "Baca: la", a: "la", opts: ['la', 'al', 'li', 'il'] },
        { q: "Baca: li", a: "li", opts: ['li', 'il', 'la', 'al'] },
        { q: "Baca: lu", a: "lu", opts: ['lu', 'ul', 'la', 'al'] },
        { q: "Baca: ra", a: "ra", opts: ['ra', 'ar', 'ri', 'ir'] },
        { q: "Baca: ri", a: "ri", opts: ['ri', 'ir', 'ra', 'ar'] },
        { q: "Baca: ru", a: "ru", opts: ['ru', 'ur', 'ra', 'ar'] },
        { q: "Baca: sa", a: "sa", opts: ['sa', 'as', 'si', 'is'] },
        { q: "Baca: si", a: "si", opts: ['si', 'is', 'sa', 'as'] },
        
        // Word formation from KV syllables (20 questions)
        { q: "'ba' + 'tu' = ?", a: "batu", opts: ['batu', 'tuba', 'buta', 'tabu'] },
        { q: "'ma' + 'ta' = ?", a: "mata", opts: ['mata', 'tama', 'maat', 'taam'] },
        { q: "'ka' + 'ki' = ?", a: "kaki", opts: ['kaki', 'ikka', 'kaik', 'ikak'] },
        { q: "'da' + 'ri' = ?", a: "dari", opts: ['dari', 'rida', 'dira', 'ardi'] },
        { q: "'ka' + 'ta' = ?", a: "kata", opts: ['kata', 'taka', 'kaat', 'taak'] },
        { q: "'ma' + 'ri' = ?", a: "mari", opts: ['mari', 'rima', 'mira', 'armi'] },
        { q: "'na' + 'ma' = ?", a: "nama", opts: ['nama', 'mana', 'maan', 'anam'] },
        { q: "'pa' + 'da' = ?", a: "pada", opts: ['pada', 'dapa', 'paad', 'adap'] },
        { q: "'ra' + 'ja' = ?", a: "raja", opts: ['raja', 'jara', 'raaj', 'ajar'] },
        { q: "'sa' + 'ya' = ?", a: "saya", opts: ['saya', 'yasa', 'saay', 'ayas'] },
        { q: "'ta' + 'pi' = ?", a: "tapi", opts: ['tapi', 'pita', 'taip', 'ipat'] },
        { q: "'wa' + 'ni' = ?", a: "wani", opts: ['wani', 'niwa', 'wain', 'inaw'] },
        { q: "'ya' + 'ng' = ?", a: "yang", opts: ['yang', 'ngya', 'yagn', 'agny'] },
        { q: "'za' + 'ma' = ?", a: "zama", opts: ['zama', 'maza', 'zaam', 'amaz'] },
        { q: "'bu' + 'ku' = ?", a: "buku", opts: ['buku', 'kubu', 'ubuk', 'ukub'] },
        { q: "'me' + 'ja' = ?", a: "meja", opts: ['meja', 'jame', 'maej', 'jema'] },
        { q: "'ru' + 'mah' = ?", a: "rumah", opts: ['rumah', 'hamur', 'mahur', 'hurma'] },
        { q: "'bo' + 'la' = ?", a: "bola", opts: ['bola', 'labo', 'obal', 'alob'] },
        { q: "'gi' + 'gi' = ?", a: "gigi", opts: ['gigi', 'igig', 'gigi', 'iggi'] },
        { q: "'ja' + 'lan' = ?", a: "jalan", opts: ['jalan', 'lanja', 'najal', 'jalna'] },
        
        // Syllable identification in words (20 questions)
        { q: "Suku kata pertama 'bola' ialah?", a: "bo", opts: ['bo', 'la', 'ba', 'ol'] },
        { q: "Suku kata kedua 'bola' ialah?", a: "la", opts: ['la', 'bo', 'ol', 'ab'] },
        { q: "Suku kata pertama 'rumah' ialah?", a: "ru", opts: ['ru', 'mah', 'ma', 'uh'] },
        { q: "Suku kata pertama 'buku' ialah?", a: "bu", opts: ['bu', 'ku', 'ub', 'uk'] },
        { q: "Suku kata pertama 'meja' ialah?", a: "me", opts: ['me', 'ja', 'em', 'aj'] },
        { q: "Suku kata pertama 'kaki' ialah?", a: "ka", opts: ['ka', 'ki', 'ak', 'ik'] },
        { q: "Suku kata kedua 'kaki' ialah?", a: "ki", opts: ['ki', 'ka', 'ik', 'ak'] },
        { q: "Suku kata pertama 'tangan' ialah?", a: "ta", opts: ['ta', 'ngan', 'an', 'ng'] },
        { q: "Suku kata pertama 'mata' ialah?", a: "ma", opts: ['ma', 'ta', 'am', 'at'] },
        { q: "Suku kata kedua 'mata' ialah?", a: "ta", opts: ['ta', 'ma', 'at', 'am'] },
        { q: "Suku kata pertama 'hidung' ialah?", a: "hi", opts: ['hi', 'dung', 'ih', 'ng'] },
        { q: "Suku kata pertama 'mulut' ialah?", a: "mu", opts: ['mu', 'lut', 'um', 'ut'] },
        { q: "Suku kata pertama 'telinga' ialah?", a: "te", opts: ['te', 'linga', 'et', 'ga'] },
        { q: "Suku kata pertama 'rambut' ialah?", a: "ram", opts: ['ram', 'but', 'ra', 'mb'] },
        { q: "Suku kata pertama 'gigi' ialah?", a: "gi", opts: ['gi', 'gi', 'ig', 'ig'] },
        { q: "Suku kata pertama 'jari' ialah?", a: "ja", opts: ['ja', 'ri', 'aj', 'ir'] },
        { q: "Suku kata pertama 'pipi' ialah?", a: "pi", opts: ['pi', 'pi', 'ip', 'ip'] },
        { q: "Suku kata pertama 'dahi' ialah?", a: "da", opts: ['da', 'hi', 'ad', 'ih'] },
        { q: "Suku kata pertama 'leher' ialah?", a: "le", opts: ['le', 'her', 'el', 're'] },
        { q: "Suku kata pertama 'bahu' ialah?", a: "ba", opts: ['ba', 'hu', 'ab', 'uh'] },
        
        // Syllable counting (20 questions)
        { q: "Berapa suku kata 'bola'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'buku'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'rumah'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'meja'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'saya'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'kaki'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'tangan'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'mata'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'hidung'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'mulut'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'telinga'?", a: "3", opts: ['3', '2', '1', '4'] },
        { q: "Berapa suku kata 'rambut'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'gigi'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'jari'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'pipi'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'dahi'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'leher'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'bahu'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'siku'?", a: "2", opts: ['2', '1', '3', '4'] },
        { q: "Berapa suku kata 'lutut'?", a: "2", opts: ['2', '1', '3', '4'] },
        
        // Additional KV syllables (10 questions)
        { q: "Baca: su", a: "su", opts: ['su', 'us', 'sa', 'as'] },
        { q: "Baca: tu", a: "tu", opts: ['tu', 'ut', 'ta', 'at'] },
        { q: "Baca: wa", a: "wa", opts: ['wa', 'aw', 'wi', 'iw'] },
        { q: "Baca: ya", a: "ya", opts: ['ya', 'ay', 'yi', 'iy'] },
        { q: "Baca: za", a: "za", opts: ['za', 'az', 'zi', 'iz'] },
        { q: "Baca: be", a: "be", opts: ['be', 'eb', 'ba', 'ab'] },
        { q: "Baca: de", a: "de", opts: ['de', 'ed', 'da', 'ad'] },
        { q: "Baca: ge", a: "ge", opts: ['ge', 'eg', 'ga', 'ag'] },
        { q: "Baca: le", a: "le", opts: ['le', 'el', 'la', 'al'] },
        { q: "Baca: re", a: "re", opts: ['re', 'er', 'ra', 'ar'] }
    ]
};

export default BM_KP4;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP4;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP4 = BM_KP4;
}
