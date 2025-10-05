// KP2 — Huruf kecil

const BM_KP2 = {
    id: 'bm-kp2',
    code: 'KP2',
    name: 'KP2 — Huruf kecil',
    description: '*(a-z)*',
    category: 'bm',
    questionBank: [
        // Basic lowercase identification (30 questions)
        { q: "Huruf kecil pertama ialah?", a: "a", opts: ['a', 'A', 'b', 'B'] },
        { q: "Huruf kecil terakhir ialah?", a: "z", opts: ['z', 'Z', 'y', 'Y'] },
        { q: "Yang manakah huruf kecil?", a: "a", opts: ['a', 'A', 'B', 'C'] },
        { q: "Yang manakah huruf kecil?", a: "b", opts: ['b', 'B', 'C', 'D'] },
        { q: "Yang manakah huruf kecil?", a: "c", opts: ['c', 'C', 'D', 'E'] },
        { q: "Yang manakah huruf kecil?", a: "d", opts: ['d', 'D', 'E', 'F'] },
        { q: "Yang manakah huruf kecil?", a: "e", opts: ['e', 'E', 'F', 'G'] },
        { q: "Yang manakah huruf kecil?", a: "f", opts: ['f', 'F', 'G', 'H'] },
        { q: "Yang manakah huruf kecil?", a: "g", opts: ['g', 'G', 'H', 'I'] },
        { q: "Yang manakah huruf kecil?", a: "h", opts: ['h', 'H', 'I', 'J'] },
        { q: "Yang manakah huruf kecil?", a: "i", opts: ['i', 'I', 'J', 'K'] },
        { q: "Yang manakah huruf kecil?", a: "j", opts: ['j', 'J', 'K', 'L'] },
        { q: "Yang manakah huruf kecil?", a: "k", opts: ['k', 'K', 'L', 'M'] },
        { q: "Yang manakah huruf kecil?", a: "l", opts: ['l', 'L', 'M', 'N'] },
        { q: "Yang manakah huruf kecil?", a: "m", opts: ['m', 'M', 'N', 'O'] },
        { q: "Yang manakah huruf kecil?", a: "n", opts: ['n', 'N', 'O', 'P'] },
        { q: "Yang manakah huruf kecil?", a: "o", opts: ['o', 'O', 'P', 'Q'] },
        { q: "Yang manakah huruf kecil?", a: "p", opts: ['p', 'P', 'Q', 'R'] },
        { q: "Yang manakah huruf kecil?", a: "q", opts: ['q', 'Q', 'R', 'S'] },
        { q: "Yang manakah huruf kecil?", a: "r", opts: ['r', 'R', 'S', 'T'] },
        { q: "Yang manakah huruf kecil?", a: "s", opts: ['s', 'S', 'T', 'U'] },
        { q: "Yang manakah huruf kecil?", a: "t", opts: ['t', 'T', 'U', 'V'] },
        { q: "Yang manakah huruf kecil?", a: "u", opts: ['u', 'U', 'V', 'W'] },
        { q: "Yang manakah huruf kecil?", a: "v", opts: ['v', 'V', 'W', 'X'] },
        { q: "Yang manakah huruf kecil?", a: "w", opts: ['w', 'W', 'X', 'Y'] },
        { q: "Yang manakah huruf kecil?", a: "x", opts: ['x', 'X', 'Y', 'Z'] },
        { q: "Yang manakah huruf kecil?", a: "y", opts: ['y', 'Y', 'Z', 'A'] },
        { q: "Yang manakah huruf kecil?", a: "z", opts: ['z', 'Z', 'A', 'B'] },
        { q: "Yang manakah huruf kecil?", a: "a", opts: ['a', 'B', 'C', 'D'] },
        { q: "Yang manakah huruf kecil?", a: "b", opts: ['b', 'C', 'D', 'E'] },
        
        // Non-lowercase identification (20 questions)
        { q: "Yang manakah BUKAN huruf kecil?", a: "A", opts: ['A', 'a', 'b', 'c'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "B", opts: ['B', 'a', 'b', 'c'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "C", opts: ['C', 'c', 'd', 'e'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "D", opts: ['D', 'd', 'e', 'f'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "E", opts: ['E', 'e', 'f', 'g'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "F", opts: ['F', 'f', 'g', 'h'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "G", opts: ['G', 'g', 'h', 'i'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "H", opts: ['H', 'h', 'i', 'j'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "I", opts: ['I', 'i', 'j', 'k'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "J", opts: ['J', 'j', 'k', 'l'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "K", opts: ['K', 'k', 'l', 'm'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "L", opts: ['L', 'l', 'm', 'n'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "M", opts: ['M', 'm', 'n', 'o'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "N", opts: ['N', 'n', 'o', 'p'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "O", opts: ['O', 'o', 'p', 'q'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "P", opts: ['P', 'p', 'q', 'r'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "Q", opts: ['Q', 'q', 'r', 's'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "R", opts: ['R', 'r', 's', 't'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "S", opts: ['S', 's', 't', 'u'] },
        { q: "Yang manakah BUKAN huruf kecil?", a: "T", opts: ['T', 't', 'u', 'v'] },
        
        // General knowledge about lowercase letters (10 questions)
        { q: "Berapa huruf kecil dalam abjad?", a: "26", opts: ['26', '20', '30', '25'] },
        { q: "Huruf kecil untuk 'A' ialah?", a: "a", opts: ['a', 'A', 'b', 'B'] },
        { q: "Huruf kecil untuk 'B' ialah?", a: "b", opts: ['b', 'B', 'a', 'A'] },
        { q: "Huruf kecil untuk 'C' ialah?", a: "c", opts: ['c', 'C', 'd', 'D'] },
        { q: "Huruf kecil untuk 'D' ialah?", a: "d", opts: ['d', 'D', 'e', 'E'] },
        { q: "Huruf kecil untuk 'E' ialah?", a: "e", opts: ['e', 'E', 'f', 'F'] },
        { q: "Huruf kecil untuk 'F' ialah?", a: "f", opts: ['f', 'F', 'g', 'G'] },
        { q: "Huruf kecil untuk 'G' ialah?", a: "g", opts: ['g', 'G', 'h', 'H'] },
        { q: "Huruf kecil untuk 'H' ialah?", a: "h", opts: ['h', 'H', 'i', 'I'] },
        { q: "Huruf kecil untuk 'I' ialah?", a: "i", opts: ['i', 'I', 'j', 'J'] },
        
        // Word analysis (20 questions)
        { q: "Dalam 'bola', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'rumah', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'buku', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'meja', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'saya', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'kaki', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'tangan', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'mata', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'hidung', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Dalam 'mulut', semua huruf adalah?", a: "huruf kecil", opts: ['huruf kecil', 'huruf besar', 'campuran', 'nombor'] },
        { q: "Perkataan 'buku' ada berapa huruf kecil?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'meja' ada berapa huruf kecil?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'rumah' ada berapa huruf kecil?", a: "5", opts: ['5', '4', '6', '3'] },
        { q: "Perkataan 'bola' ada berapa huruf kecil?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'kaki' ada berapa huruf kecil?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'tangan' ada berapa huruf kecil?", a: "6", opts: ['6', '5', '7', '4'] },
        { q: "Perkataan 'mata' ada berapa huruf kecil?", a: "4", opts: ['4', '3', '5', '2'] },
        { q: "Perkataan 'hidung' ada berapa huruf kecil?", a: "6", opts: ['6', '5', '7', '4'] },
        { q: "Perkataan 'mulut' ada berapa huruf kecil?", a: "5", opts: ['5', '4', '6', '3'] },
        { q: "Perkataan 'telinga' ada berapa huruf kecil?", a: "7", opts: ['7', '6', '8', '5'] },
        
        // Sequence completion (10 questions)
        { q: "Lengkapkan: a, b, c, __", a: "d", opts: ['d', 'D', 'e', 'E'] },
        { q: "Lengkapkan: x, y, __", a: "z", opts: ['z', 'Z', 'w', 'W'] },
        { q: "Lengkapkan: m, n, o, __", a: "p", opts: ['p', 'P', 'q', 'Q'] },
        { q: "Lengkapkan: __, b, c, d", a: "a", opts: ['a', 'A', 'e', 'E'] },
        { q: "Lengkapkan: u, v, w, __", a: "x", opts: ['x', 'X', 'y', 'Y'] },
        { q: "Lengkapkan: __, __, c, d", a: "a b", opts: ['a b', 'b a', 'c d', 'd c'] },
        { q: "Lengkapkan: k, l, __, __", a: "m n", opts: ['m n', 'n m', 'l k', 'k l'] },
        { q: "Lengkapkan: __, q, r, __", a: "p s", opts: ['p s', 's p', 'q r', 'r q'] },
        { q: "Lengkapkan: g, h, __, j", a: "i", opts: ['i', 'I', 'k', 'K'] },
        { q: "Lengkapkan: __, t, u, v", a: "s", opts: ['s', 'S', 'r', 'R'] },
        
        // Order and position (10 questions)
        { q: "Yang manakah turutan yang betul?", a: "a b c", opts: ['a b c', 'c b a', 'A B C', 'C B A'] },
        { q: "Huruf sebelum 'e' ialah?", a: "d", opts: ['d', 'f', 'D', 'F'] },
        { q: "Huruf selepas 'm' ialah?", a: "n", opts: ['n', 'l', 'N', 'L'] },
        { q: "Huruf sebelum 'k' ialah?", a: "j", opts: ['j', 'l', 'J', 'L'] },
        { q: "Huruf selepas 'p' ialah?", a: "q", opts: ['q', 'o', 'Q', 'O'] },
        { q: "Huruf sebelum 'u' ialah?", a: "t", opts: ['t', 'v', 'T', 'V'] },
        { q: "Huruf selepas 'w' ialah?", a: "x", opts: ['x', 'v', 'X', 'V'] },
        { q: "Huruf sebelum 'g' ialah?", a: "f", opts: ['f', 'h', 'F', 'H'] },
        { q: "Huruf selepas 'r' ialah?", a: "s", opts: ['s', 'q', 'S', 'Q'] },
        { q: "Huruf sebelum 'z' ialah?", a: "y", opts: ['y', 'x', 'Y', 'X'] }
    ]
};

export default BM_KP2;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP2;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP2 = BM_KP2;
}
