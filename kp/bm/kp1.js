// KP1 — Huruf-huruf vokal (a, e, i, o, u)

const BM_KP1 = {
    id: 'bm-kp1',
    code: 'KP1',
    name: 'KP1 — Huruf-huruf vokal',
    description: '*(a, e, i, o, u)*',
    category: 'bm',
    questionBank: [
        // Basic vowel identification (20 questions)
        { q: "Yang manakah huruf vokal?", a: "a", opts: ["a", "b", "c", "d"] },
        { q: "Yang manakah huruf vokal?", a: "e", opts: ["e", "f", "g", "h"] },
        { q: "Yang manakah huruf vokal?", a: "i", opts: ["i", "j", "k", "l"] },
        { q: "Yang manakah huruf vokal?", a: "o", opts: ["o", "p", "q", "r"] },
        { q: "Yang manakah huruf vokal?", a: "u", opts: ["u", "v", "w", "x"] },
        { q: "Yang manakah huruf vokal?", a: "a", opts: ["a", "m", "n", "p"] },
        { q: "Yang manakah huruf vokal?", a: "e", opts: ["e", "r", "s", "t"] },
        { q: "Yang manakah huruf vokal?", a: "i", opts: ["i", "v", "w", "x"] },
        { q: "Yang manakah huruf vokal?", a: "o", opts: ["o", "y", "z", "b"] },
        { q: "Yang manakah huruf vokal?", a: "u", opts: ["u", "c", "d", "f"] },
        { q: "Yang manakah huruf vokal?", a: "a", opts: ["a", "g", "h", "j"] },
        { q: "Yang manakah huruf vokal?", a: "e", opts: ["e", "k", "l", "m"] },
        { q: "Yang manakah huruf vokal?", a: "i", opts: ["i", "n", "p", "q"] },
        { q: "Yang manakah huruf vokal?", a: "o", opts: ["o", "r", "s", "t"] },
        { q: "Yang manakah huruf vokal?", a: "u", opts: ["u", "v", "w", "x"] },
        { q: "Yang manakah huruf vokal?", a: "a", opts: ["a", "y", "z", "b"] },
        { q: "Yang manakah huruf vokal?", a: "e", opts: ["e", "c", "d", "f"] },
        { q: "Yang manakah huruf vokal?", a: "i", opts: ["i", "g", "h", "j"] },
        { q: "Yang manakah huruf vokal?", a: "o", opts: ["o", "k", "l", "m"] },
        { q: "Yang manakah huruf vokal?", a: "u", opts: ["u", "n", "p", "q"] },
        
        // True/False questions (20 questions)
        { q: "Huruf 'a' adalah vokal. Betul atau salah?", a: "Betul", opts: ["Betul", "Salah"] },
        { q: "Huruf 'b' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'c' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'd' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'e' adalah vokal. Betul atau salah?", a: "Betul", opts: ["Betul", "Salah"] },
        { q: "Huruf 'f' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'g' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'h' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'i' adalah vokal. Betul atau salah?", a: "Betul", opts: ["Betul", "Salah"] },
        { q: "Huruf 'j' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'k' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'l' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'm' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'n' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'o' adalah vokal. Betul atau salah?", a: "Betul", opts: ["Betul", "Salah"] },
        { q: "Huruf 'p' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'q' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 'r' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 's' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        { q: "Huruf 't' adalah vokal. Betul atau salah?", a: "Salah", opts: ["Salah", "Betul"] },
        
        // Non-vowel identification (20 questions)
        { q: "Yang manakah BUKAN huruf vokal?", a: "b", opts: ["b", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "c", opts: ["c", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "d", opts: ["d", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "f", opts: ["f", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "g", opts: ["g", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "h", opts: ["h", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "j", opts: ["j", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "k", opts: ["k", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "l", opts: ["l", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "m", opts: ["m", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "n", opts: ["n", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "p", opts: ["p", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "q", opts: ["q", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "r", opts: ["r", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "s", opts: ["s", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "t", opts: ["t", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "v", opts: ["v", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "w", opts: ["w", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "x", opts: ["x", "a", "e", "i"] },
        { q: "Yang manakah BUKAN huruf vokal?", a: "y", opts: ["y", "a", "e", "i"] },
        
        // Sequence completion (10 questions)
        { q: "Lengkapkan: a, e, __, o, u", a: "i", opts: ["i", "j", "k", "l"] },
        { q: "Lengkapkan: a, e, i, o, __", a: "u", opts: ["u", "v", "w", "y"] },
        { q: "Lengkapkan: __, e, i, o, u", a: "a", opts: ["a", "b", "c", "d"] },
        { q: "Lengkapkan: a, __, i, o, u", a: "e", opts: ["e", "f", "g", "h"] },
        { q: "Lengkapkan: a, e, i, __, u", a: "o", opts: ["o", "p", "q", "r"] },
        { q: "Lengkapkan: __, __, i, o, u", a: "a e", opts: ["a e", "e a", "a i", "i e"] },
        { q: "Lengkapkan: a, e, __, __, u", a: "i o", opts: ["i o", "o i", "a e", "e a"] },
        { q: "Lengkapkan: __, e, __, o, u", a: "a i", opts: ["a i", "i a", "e o", "o e"] },
        { q: "Lengkapkan: a, __, i, __, u", a: "e o", opts: ["e o", "o e", "a i", "i a"] },
        { q: "Lengkapkan: __, __, __, o, u", a: "a e i", opts: ["a e i", "e i a", "i a e", "a i e"] },
        
        // General knowledge about vowels (10 questions)
        { q: "Huruf vokal pertama ialah?", a: "a", opts: ["a", "e", "i", "o"] },
        { q: "Huruf vokal terakhir ialah?", a: "u", opts: ["u", "e", "i", "o"] },
        { q: "Berapa bilangan huruf vokal?", a: "5", opts: ["5", "3", "7", "10"] },
        { q: "Huruf vokal kedua ialah?", a: "e", opts: ["e", "a", "i", "o"] },
        { q: "Huruf vokal ketiga ialah?", a: "i", opts: ["i", "a", "e", "o"] },
        { q: "Huruf vokal keempat ialah?", a: "o", opts: ["o", "a", "e", "i"] },
        { q: "Huruf vokal kelima ialah?", a: "u", opts: ["u", "a", "e", "i"] },
        { q: "Antara berikut, yang manakah huruf vokal?", a: "a e i", opts: ["a e i", "b c d", "x y z", "f g h"] },
        { q: "Antara berikut, yang manakah huruf vokal?", a: "o u a", opts: ["o u a", "p q r", "s t v", "w x y"] },
        { q: "Antara berikut, yang manakah huruf vokal?", a: "e i o", opts: ["e i o", "f g h", "j k l", "m n p"] },
        
        // Vowel counting in words (20 questions)
        { q: "Dalam perkataan 'bola', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'rumah', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'buku', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'meja', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'saya', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'kaki', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'tangan', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'mata', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'hidung', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'mulut', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'telinga', berapa huruf vokal?", a: "3", opts: ["3", "2", "1", "4"] },
        { q: "Dalam perkataan 'rambut', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'gigi', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'jari', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'pipi', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'dahi', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'leher', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'bahu', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'siku', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] },
        { q: "Dalam perkataan 'lutut', berapa huruf vokal?", a: "2", opts: ["2", "1", "3", "4"] }
    ]
};

export default BM_KP1;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP1;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP1 = BM_KP1;
}
