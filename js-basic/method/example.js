// Mengenal keyword "this".
const cat = {
    name: "Tobi",
    fur: "Black",
    sibling: 3,
    food: ['Fish', 'Meat', 'Whiskas'],
    getName() {
        return "Nama Kucing adalah " + this.name
    },
    getCollor() {
        return "Warna Kucing " + this.fur
    },
    getAge() {
        return "Umur Kucing " + this.sibling
    },
    getFood() {
        return "Makanan Kucing " + this.food
    }
}

const makananCat = cat.getFood()
console.log(makananCat)

const umurCat = cat.getAge()
console.log(umurCat)

const warnaKucing = cat.getCollor()
console.log(warnaKucing)

const namaKucing = cat.getName()
console.log(namaKucing)