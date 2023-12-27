let animal = ["Singa", "Harimau", " Macan Tutul"];

function deleteElement() {
    return animal.shift();
}

deleteElement();// shift digunakan untuk menghapus element Pertama
console.log(animal);// Hasil [ 'Harimau', ' Macan Tutul' ]