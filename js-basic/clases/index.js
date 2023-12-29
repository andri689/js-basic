// Class bisa digambarkan sebagai blue-print
// Atau bisa dikatakan sebuat sketsa
// Class sebaiknya dinamakan dengan PascalCase
class Kucing {
    // Constructor bisa dikatakan sebagai initial nilai
    constructor (jenis, warna_bulu) {
        // Property
        this.jenis = jenis
        this.warna_bulu = warna_bulu
    }

    // Method
    getJenis(){
        return this.jenis
    }
    getWarna(){
        return this.warna_bulu
    }
}

// Untuk menggunakan Class, kita perlu membuat instance dari Class tersebut
// Tipe data instance
const instanceKucing = new Kucing(`Anggora`,`Hitam`)
console.log("Jenis Kucingnya adalah " + instanceKucing.getJenis(), "Dan warnanya " + instanceKucing.getWarna())

// Kalau object
// 

// const Cat = {
//     jenis: "Anggora",
//     warna_bulu: "Hitam",
//     getJenis() {
//         return this.jenis
//     },
//     getWarna() {
//         return this.warna_bulu
//     }
// }

// console.log("Jenis Kucingnya adalah " + cat.getJenis())