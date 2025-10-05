// KP3 — Huruf besar

const BM_KP3 = {
    id: 'bm-kp3',
    code: 'KP3',
    name: 'KP3 — Huruf besar',
    description: '*(A-Z)*',
    category: 'bm',
    questionBank: [
        // Basic uppercase identification (30 questions)
        { q: "Huruf besar pertama ialah?", a: "A", opts: ['A', 'a', 'B', 'b'] },
        { q: "Huruf besar terakhir ialah?", a: "Z", opts: ['Z', 'z', 'Y', 'y'] },
        { q: "Yang manakah huruf besar?", a: "A", opts: ['A', 'a', 'b', 'c'] },
        { q: "Yang manakah huruf besar?", a: "B", opts: ['B', 'b', 'a', 'c'] },
        { q: "Yang manakah huruf besar?", a: "C", opts: ['C', 'c', 'a', 'b'] },
        { q: "Yang manakah huruf besar?", a: "D", opts: ['D', 'd', 'e', 'f'] },
        { q: "Yang manakah huruf besar?", a: "E", opts: ['E', 'e', 'f', 'g'] },
        { q: "Yang manakah huruf besar?", a: "F", opts: ['F', 'f', 'g', 'h'] },
        { q: "Yang manakah huruf besar?", a: "G", opts: ['G', 'g', 'h', 'i'] },
        { q: "Yang manakah huruf besar?", a: "H", opts: ['H', 'h', 'i', 'j'] },
        { q: "Yang manakah huruf besar?", a: "I", opts: ['I', 'i', 'j', 'k'] },
        { q: "Yang manakah huruf besar?", a: "J", opts: ['J', 'j', 'k', 'l'] },
        { q: "Yang manakah huruf besar?", a: "K", opts: ['K', 'k', 'l', 'm'] },
        { q: "Yang manakah huruf besar?", a: "L", opts: ['L', 'l', 'm', 'n'] },
        { q: "Yang manakah huruf besar?", a: "M", opts: ['M', 'm', 'n', 'o'] },
        { q: "Yang manakah huruf besar?", a: "N", opts: ['N', 'n', 'o', 'p'] },
        { q: "Yang manakah huruf besar?", a: "O", opts: ['O', 'o', 'p', 'q'] },
        { q: "Yang manakah huruf besar?", a: "P", opts: ['P', 'p', 'q', 'r'] },
        { q: "Yang manakah huruf besar?", a: "Q", opts: ['Q', 'q', 'r', 's'] },
        { q: "Yang manakah huruf besar?", a: "R", opts: ['R', 'r', 's', 't'] },
        { q: "Yang manakah huruf besar?", a: "S", opts: ['S', 's', 't', 'u'] },
        { q: "Yang manakah huruf besar?", a: "T", opts: ['T', 't', 'u', 'v'] },
        { q: "Yang manakah huruf besar?", a: "U", opts: ['U', 'u', 'v', 'w'] },
        { q: "Yang manakah huruf besar?", a: "V", opts: ['V', 'v', 'w', 'x'] },
        { q: "Yang manakah huruf besar?", a: "W", opts: ['W', 'w', 'x', 'y'] },
        { q: "Yang manakah huruf besar?", a: "X", opts: ['X', 'x', 'y', 'z'] },
        { q: "Yang manakah huruf besar?", a: "Y", opts: ['Y', 'y', 'z', 'a'] },
        { q: "Yang manakah huruf besar?", a: "Z", opts: ['Z', 'z', 'a', 'b'] },
        { q: "Yang manakah huruf besar?", a: "A", opts: ['A', 'B', 'C', 'D'] },
        { q: "Yang manakah huruf besar?", a: "B", opts: ['B', 'C', 'D', 'E'] },
        
        // Non-uppercase identification (20 questions)
        { q: "Yang manakah BUKAN huruf besar?", a: "a", opts: ['a', 'A', 'B', 'C'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "b", opts: ['b', 'A', 'B', 'C'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "c", opts: ['c', 'C', 'D', 'E'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "d", opts: ['d', 'D', 'E', 'F'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "e", opts: ['e', 'E', 'F', 'G'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "f", opts: ['f', 'F', 'G', 'H'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "g", opts: ['g', 'G', 'H', 'I'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "h", opts: ['h', 'H', 'I', 'J'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "i", opts: ['i', 'I', 'J', 'K'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "j", opts: ['j', 'J', 'K', 'L'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "k", opts: ['k', 'K', 'L', 'M'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "l", opts: ['l', 'L', 'M', 'N'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "m", opts: ['m', 'M', 'N', 'O'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "n", opts: ['n', 'N', 'O', 'P'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "o", opts: ['o', 'O', 'P', 'Q'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "p", opts: ['p', 'P', 'Q', 'R'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "q", opts: ['q', 'Q', 'R', 'S'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "r", opts: ['r', 'R', 'S', 'T'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "s", opts: ['s', 'S', 'T', 'U'] },
        { q: "Yang manakah BUKAN huruf besar?", a: "t", opts: ['t', 'T', 'U', 'V'] },
        
        // General knowledge about uppercase letters (10 questions)
        { q: "Berapa huruf besar dalam abjad?", a: "26", opts: ['26', '20', '30', '25'] },
        { q: "Huruf besar untuk 'a' ialah?", a: "A", opts: ['A', 'a', 'B', 'b'] },
        { q: "Huruf besar untuk 'b' ialah?", a: "B", opts: ['B', 'b', 'A', 'a'] },
        { q: "Huruf besar untuk 'c' ialah?", a: "C", opts: ['C', 'c', 'D', 'd'] },
        { q: "Huruf besar untuk 'd' ialah?", a: "D", opts: ['D', 'd', 'E', 'e'] },
        { q: "Huruf besar untuk 'e' ialah?", a: "E", opts: ['E', 'e', 'F', 'f'] },
        { q: "Huruf besar untuk 'f' ialah?", a: "F", opts: ['F', 'f', 'G', 'g'] },
        { q: "Huruf besar untuk 'g' ialah?", a: "G", opts: ['G', 'g', 'H', 'h'] },
        { q: "Huruf besar untuk 'h' ialah?", a: "H", opts: ['H', 'h', 'I', 'i'] },
        { q: "Huruf besar untuk 'i' ialah?", a: "I", opts: ['I', 'i', 'J', 'j'] },
        
        // Name capitalization (20 questions)
        { q: "Nama 'Ali' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Siti' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Ahmad' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Fatimah' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Zainal' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Rahman' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Kamal' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Lina' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Muthu' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Nurul' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Omar' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Puteri' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Qistina' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Rosli' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Salmah' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Tan' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Umi' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Vijay' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Wong' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        { q: "Nama 'Xavier' bermula dengan huruf?", a: "huruf besar", opts: ['huruf besar', 'huruf kecil', 'nombor', 'vokal'] },
        
        // Sequence completion (10 questions)
        { q: "Lengkapkan: A, B, C, __", a: "D", opts: ['D', 'd', 'E', 'e'] },
        { q: "Lengkapkan: X, Y, __", a: "Z", opts: ['Z', 'z', 'W', 'w'] },
        { q: "Lengkapkan: M, N, O, __", a: "P", opts: ['P', 'p', 'Q', 'q'] },
        { q: "Lengkapkan: __, B, C, D", a: "A", opts: ['A', 'a', 'E', 'e'] },
        { q: "Lengkapkan: U, V, W, __", a: "X", opts: ['X', 'x', 'Y', 'y'] },
        { q: "Lengkapkan: __, __, C, D", a: "A B", opts: ['A B', 'B A', 'C D', 'D C'] },
        { q: "Lengkapkan: K, L, __, __", a: "M N", opts: ['M N', 'N M', 'L K', 'K L'] },
        { q: "Lengkapkan: __, Q, R, __", a: "P S", opts: ['P S', 'S P', 'Q R', 'R Q'] },
        { q: "Lengkapkan: G, H, __, J", a: "I", opts: ['I', 'i', 'K', 'k'] },
        { q: "Lengkapkan: __, T, U, V", a: "S", opts: ['S', 's', 'R', 'r'] },
        
        // Order and position (10 questions)
        { q: "Yang manakah turutan yang betul?", a: "A B C", opts: ['A B C', 'C B A', 'a b c', 'c b a'] },
        { q: "Huruf sebelum 'E' ialah?", a: "D", opts: ['D', 'F', 'd', 'f'] },
        { q: "Huruf selepas 'M' ialah?", a: "N", opts: ['N', 'L', 'n', 'l'] },
        { q: "Huruf sebelum 'K' ialah?", a: "J", opts: ['J', 'L', 'j', 'l'] },
        { q: "Huruf selepas 'P' ialah?", a: "Q", opts: ['Q', 'O', 'q', 'o'] },
        { q: "Huruf sebelum 'U' ialah?", a: "T", opts: ['T', 'V', 't', 'v'] },
        { q: "Huruf selepas 'W' ialah?", a: "X", opts: ['X', 'V', 'x', 'v'] },
        { q: "Huruf sebelum 'G' ialah?", a: "F", opts: ['F', 'H', 'f', 'h'] },
        { q: "Huruf selepas 'R' ialah?", a: "S", opts: ['S', 'Q', 's', 'q'] },
        { q: "Huruf sebelum 'Z' ialah?", a: "Y", opts: ['Y', 'X', 'y', 'x'] }
    ]
};

export default BM_KP3;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP3;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP3 = BM_KP3;
}
