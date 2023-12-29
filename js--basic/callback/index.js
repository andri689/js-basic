//Apa itu ca;;back dalam JavaScript
//Memanggil function di dalam function 

//contoh
function perkalian(a, b) {
    return a * b
}

function luasPersegi(sisi) {
    const luas = perkalian(sisi, sisi)
    return luas
}

console.log(luasPersegi(4))

//contoh 2
function pertambahan(a, b) {
    return a + b
}

console.log(pertambahan(5, 5))

function kelilingsegiPanjang(panjang, lebar, callbackPerkalian, callbackPertambahan) {
    //function Mencari keliling persegi panjang

    // 2 * p + l

    //callback
    let keliling = pertambahan(panjang, lebar)

    return callbackPerkalian(keliling, 2)
}

console.log('Hasil keliling persegi: ' + kelilingsegiPanjang(10, 5, perkalian, pertambahan))

//contoh 3
function greeting() {
    return "Hello, good morning!";
}

function tampilkan(callbackGreeting) {
    let greetingMessage = callbackGreeting();
    console.log('Tampilkan pesan: ' + greetingMessage);
}

// Menggunakan fungsi tampilkan dengan argumen berupa sebuah fungsi
tampilkan(function() {
    return "Hello from closure";
});

// assesment 
// buat 1 collback dan 1 closure
// callback terdiri 2 function, 1 sebagai callback 1 sebagai pemanggil
// closure terdiri 2 function, 1 sebagai callback 1 sebagai pemanggil
//