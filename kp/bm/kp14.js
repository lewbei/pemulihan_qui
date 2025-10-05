// KP14 — Perkataan KV + KV + KVK

const BM_KP14 = {
    id: 'bm-kp14',
    code: 'KP14',
    name: 'KP14 — Perkataan KV + KV + KVK',
    description: '*(contoh: bapak, kakak, laman)*',
    category: 'bm',
    questionBank: [
        // Basic KV+KV+KVK identification (30 questions)
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "bapak", opts: ["bapak", "ibu", "adik", "kakak"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "kakak", opts: ["kakak", "bapa", "ibu", "adik"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "laman", opts: ["laman", "rumah", "taman", "halaman"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "paman", opts: ["paman", "bapa", "ibu", "adik"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "saman", opts: ["saman", "polis", "denda", "hukuman"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "taman", opts: ["taman", "halaman", "laman", "kebun"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "waman", opts: ["waman", "lelaki", "perempuan", "kanak-kanak"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "kawan", opts: ["kawan", "sahabat", "teman", "rakan"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "jalan", opts: ["jalan", "lorong", "simpang", "lebuh"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "papan", opts: ["papan", "kayu", "besi", "batu"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "sabun", opts: ["sabun", "air", "mandi", "syampu"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "sayur", opts: ["sayur", "buah", "nasi", "ikan"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "tahun", opts: ["tahun", "bulan", "hari", "minggu"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "waktu", opts: ["waktu", "masa", "jam", "saat"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "makan", opts: ["makan", "minum", "tidur", "main"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "minum", opts: ["minum", "makan", "tidur", "jalan"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "tidur", opts: ["tidur", "bangun", "duduk", "berdiri"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "duduk", opts: ["duduk", "berdiri", "jalan", "lari"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "lari", opts: ["lari", "jalan", "berdiri", "duduk"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "main", opts: ["main", "kerja", "belajar", "rehat"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "kerja", opts: ["kerja", "main", "belajar", "rehat"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "belajar", opts: ["belajar", "kerja", "main", "rehat"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "rehat", opts: ["rehat", "kerja", "belajar", "main"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "baca", opts: ["baca", "tulis", "hitung", "lukis"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "tulis", opts: ["tulis", "baca", "hitung", "lukis"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "hitung", opts: ["hitung", "baca", "tulis", "lukis"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "lukis", opts: ["lukis", "baca", "tulis", "hitung"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "nyanyi", opts: ["nyanyi", "menari", "bermain", "berlari"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "menari", opts: ["menari", "nyanyi", "bermain", "berlari"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "bermain", opts: ["bermain", "nyanyi", "menari", "berlari"] },
        
        // More KV+KV+KVK combinations (20 questions)
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "berlari", opts: ["berlari", "nyanyi", "menari", "bermain"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "berjalan", opts: ["berjalan", "berlari", "bermain", "berdiri"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "berdiri", opts: ["berdiri", "berjalan", "berlari", "bermain"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "berbaring", opts: ["berbaring", "berdiri", "berjalan", "berlari"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "bernyanyi", opts: ["bernyanyi", "bermain", "berlari", "berjalan"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "bercakap", opts: ["bercakap", "bernyanyi", "bermain", "berlari"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "berfikir", opts: ["berfikir", "bercakap", "bernyanyi", "bermain"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "berpakaian", opts: ["berpakaian", "berfikir", "bercakap", "bernyanyi"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "bermandi", opts: ["bermandi", "berpakaian", "berfikir", "bercakap"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "bersihkan", opts: ["bersihkan", "bermandi", "berpakaian", "berfikir"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "berus gigi", opts: ["berus gigi", "bersihkan", "bermandi", "berpakaian"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "cuci muka", opts: ["cuci muka", "berus gigi", "bersihkan", "bermandi"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "sikat rambut", opts: ["sikat rambut", "cuci muka", "berus gigi", "bersihkan"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "pakai baju", opts: ["pakai baju", "sikat rambut", "cuci muka", "berus gigi"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "pakai seluar", opts: ["pakai seluar", "pakai baju", "sikat rambut", "cuci muka"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "pakai kasut", opts: ["pakai kasut", "pakai seluar", "pakai baju", "sikat rambut"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "sarapan", opts: ["sarapan", "pakai kasut", "pakai seluar", "pakai baju"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "makan tengahari", opts: ["makan tengahari", "sarapan", "pakai kasut", "pakai seluar"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "makan malam", opts: ["makan malam", "makan tengahari", "sarapan", "pakai kasut"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "minum air", opts: ["minum air", "makan malam", "makan tengahari", "sarapan"] },
        
        // Additional KV+KV+KVK combinations (20 questions)
        { q: "Manakah perkataan KV + KV + KVK?", a: "minum susu", opts: ["minum susu", "minum air", "makan malam", "makan tengahari"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "minum jus", opts: ["minum jus", "minum susu", "minum air", "makan malam"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "pergi sekolah", opts: ["pergi sekolah", "minum jus", "minum susu", "minum air"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "pulang rumah", opts: ["pulang rumah", "pergi sekolah", "minum jus", "minum susu"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "tiba di rumah", opts: ["tiba di rumah", "pulang rumah", "pergi sekolah", "minum jus"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "masuk rumah", opts: ["masuk rumah", "tiba di rumah", "pulang rumah", "pergi sekolah"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "keluar rumah", opts: ["keluar rumah", "masuk rumah", "tiba di rumah", "pulang rumah"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "pergi taman", opts: ["pergi taman", "keluar rumah", "masuk rumah", "tiba di rumah"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "pergi pasar", opts: ["pergi pasar", "pergi taman", "keluar rumah", "masuk rumah"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "pergi kedai", opts: ["pergi kedai", "pergi pasar", "pergi taman", "keluar rumah"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "beli barang", opts: ["beli barang", "pergi kedai", "pergi pasar", "pergi taman"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "bayar duit", opts: ["bayar duit", "beli barang", "pergi kedai", "pergi pasar"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "ambil barang", opts: ["ambil barang", "bayar duit", "beli barang", "pergi kedai"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "bawa pulang", opts: ["bawa pulang", "ambil barang", "bayar duit", "beli barang"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "sampai rumah", opts: ["sampai rumah", "bawa pulang", "ambil barang", "bayar duit"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "buka pintu", opts: ["buka pintu", "sampai rumah", "bawa pulang", "ambil barang"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "tutup pintu", opts: ["tutup pintu", "buka pintu", "sampai rumah", "bawa pulang"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "letak barang", opts: ["letak barang", "tutup pintu", "buka pintu", "sampai rumah"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "ambil rehat", opts: ["ambil rehat", "letak barang", "tutup pintu", "buka pintu"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "duduk rehat", opts: ["duduk rehat", "ambil rehat", "letak barang", "tutup pintu"] },
        
        // More KV+KV+KVK combinations (20 questions)
        { q: "Pilih perkataan KV + KV + KVK:", a: "buka buku", opts: ["buka buku", "duduk rehat", "ambil rehat", "letak barang"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "baca buku", opts: ["baca buku", "buka buku", "duduk rehat", "ambil rehat"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "tulis nota", opts: ["tulis nota", "baca buku", "buka buku", "duduk rehat"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "hitung soalan", opts: ["hitung soalan", "tulis nota", "baca buku", "buka buku"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "selesaikan kerja", opts: ["selesaikan kerja", "hitung soalan", "tulis nota", "baca buku"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "simpan buku", opts: ["simpan buku", "selesaikan kerja", "hitung soalan", "tulis nota"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "tutup buku", opts: ["tutup buku", "simpan buku", "selesaikan kerja", "hitung soalan"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "berdiri rehat", opts: ["berdiri rehat", "tutup buku", "simpan buku", "selesaikan kerja"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "pergi dapur", opts: ["pergi dapur", "berdiri rehat", "tutup buku", "simpan buku"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "ambil makanan", opts: ["ambil makanan", "pergi dapur", "berdiri rehat", "tutup buku"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "makan snek", opts: ["makan snek", "ambil makanan", "pergi dapur", "berdiri rehat"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "minum teh", opts: ["minum teh", "makan snek", "ambil makanan", "pergi dapur"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "cuci tangan", opts: ["cuci tangan", "minum teh", "makan snek", "ambil makanan"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "kering tangan", opts: ["kering tangan", "cuci tangan", "minum teh", "makan snek"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "pergi bilik", opts: ["pergi bilik", "kering tangan", "cuci tangan", "minum teh"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "tidur lena", opts: ["tidur lena", "pergi bilik", "kering tangan", "cuci tangan"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "bangun pagi", opts: ["bangun pagi", "tidur lena", "pergi bilik", "kering tangan"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "siap sedia", opts: ["siap sedia", "bangun pagi", "tidur lena", "pergi bilik"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "pergi sekolah", opts: ["pergi sekolah", "siap sedia", "bangun pagi", "tidur lena"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "belajar rajin", opts: ["belajar rajin", "pergi sekolah", "siap sedia", "bangun pagi"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "pulang rumah", opts: ["pulang rumah", "belajar rajin", "pergi sekolah", "siap sedia"] },
        { q: "Pilih perkataan KV + KV + KVK:", a: "main bersama", opts: ["main bersama", "pulang rumah", "belajar rajin", "pergi sekolah"] },
        { q: "Manakah perkataan KV + KV + KVK?", a: "makan malam", opts: ["makan malam", "main bersama", "pulang rumah", "belajar rajin"] },
        { q: "Yang manakah perkataan KV + KV + KVK?", a: "tidur awal", opts: ["tidur awal", "makan malam", "main bersama", "pulang rumah"] }
    ]
};

export default BM_KP14;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BM_KP14;
}

if (typeof globalThis !== 'undefined') {
    globalThis.BM_KP14 = BM_KP14;
}
