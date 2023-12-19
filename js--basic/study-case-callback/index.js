// assesment 
// buat 1 collback dan 1 closure
// callback terdiri 2 function, 1 sebagai callback 1 sebagai pemanggil
// closure terdiri 2 function, 1 sebagai callback 1 sebagai pemanggil
// branch : feat/study-case-callback

// Fungsi callback
function greet(nama) {
    console.log('Hallo Nama Saya ' + [nama]);
  }
  
  // Fungsi yang memanggil callback
  function callGreet(callback) {
    const nama = "Andrian Dwi Nugroho";
    callback(nama);
  }
  
  // Memanggil fungsi yang menggunakan callback
  callGreet(greet);
// Fungsi closure
function Nomer() {
    let angka = 0;
  
    function increment() {
      angka++;
      console.log(`Nomer: ` + [angka]);
    }
  
    return increment;
  }
  
  // Fungsi yang menggunakan closure
  const incrementNomer = Nomer();
  
  // Memanggil fungsi yang menggunakan closure
  incrementNomer();
  incrementNomer();
    