// Mengenal tentang opsional parameter
// opsional parameter adalah parameter yang tidak diisi pada function Javascript
// opsional parameter biasa diletakan di urutan paling akhir  

//Contoh 1
function kali(a, b) {
    // Inisialisasi nilai bawaan
    if (b === undefined) {
        b = 5;
    }
    return a * b
}

console.log(kali(10))

//Contoh 2
function menyapa(nama) {
    if (nama === undefined) {
        nama = "Jhon Doe"
    }
    return nama
}

console.log("Hai, selamat siang " + menyapa("Andri"))

// Latihan 
// Buat 3 function dengan parameter opsional
// kalau opsional parameter tidak diisi, maka return nilai default
// Sedangkan kalau opsional parameter diisi, maka yang direturn adalah nilai parameter