let animal = ["Singa", "Harimau", "Macan Tutul"];

function Tambah() {
    return animal.unshift("Ayam","Ular");
}

Tambah();// unshift digunakan untuk menambah element dimulai dari index pertama dan seterusnya
console.log(animal);// Hasil [ 'Ayam', 'Ular', 'Singa', 'Harimau', 'Macan Tutul' ]