let animal = ["Singa", "Harimau", " Macan Tutul"];

function deleteElement() {
    return animal.pop();
}

deleteElement(1, 1);// pop digunakan untuk menghapus element akhir
console.log(animal);// Hasil [ 'Singa', 'Harimau' ]