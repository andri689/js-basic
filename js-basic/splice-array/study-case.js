let animal = ["Singa", "Harimau", " Macan Tutul"];

function deleteElement(index, totalElement) {
    return animal.splice(index, totalElement);
}

deleteElement(1, 1);// splice digunakan untuk menghapus element 1
console.log(animal);// Hasil [ 'Singa', ' Macan Tutul' ]