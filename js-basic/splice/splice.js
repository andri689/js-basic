let animal = ["Kucing","Sapi", "Kambing", "Ayam"];

//animal.splice(2, 2);// ini hasil [ 'Kucing', 'Sapi' ] yang dihapus index ke 2 dan yang dihapus ada 2 element ["Kambing", "Ayam"]
animal.splice(2, 1);// ini hasil [ 'Kucing', 'Sapi', 'Ayam' ] yang dihapus index ke 2 dan yang dihapus cuma 1 element atau yang terhapus ["Kambing"]
//animal.splice(0, 0, "Ikan Mas")// Menambah data ke array Hasil [ 'Ikan Mas', 'Kucing', 'Sapi' ]
console.log(animal)