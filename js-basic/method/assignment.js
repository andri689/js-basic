// Assignment: Method and keyword 'this'
// Kerjakan dalam format file study-case.js

// #1 Lengkapilah kode di bawah ini.
const tiger = {
    name: "Daniel",
    fur: "Orange",
    food: ["Raw Chicken Meat", "Beef"],
    // Buatlah sebuah method untuk me-return property 'foods'
    // Method dinamai dengan nama getFood()
    // Return harus dalam bentuk string bukan array. Sehingga memerlukan loop untuk mengeluarkan datanya
    // Hasil return harus berupa format: 'Daniel likes ' + food
    getName() {
        return "Nama " + this.name
    },
    getFur() {
        return "Warna Kesukaan " + this.fur
    },
    getFood() {
        return 'Daniel like ' + this.food
    }
}

const myName = tiger.getName()
console.log(myName)

const warna = tiger.getFur()
console.log(warna)

const favoriteFood = tiger.getFood()
console.log(favoriteFood)


// #2 Buatlah object sebuah burung Elang / Eagle
// Dengan ketentuan property object:
// name, fur, food, voice(), 
const eagle = {
    // Kerjakan di sini.
    // ...
    name: "Rico",
    fur : "White",
    food: ["Beef","Ikan"],
    voice: "caw-caw",
    getName() {
        return "Nama " + this.name
    },
    getCollor() {
        return "Warna " + this.fur
    },
    getFoodLike() {
        return "Makanan " + this.food
    },
    getVoice() {
        return "Suara" + this.voice
    }
}

const nama = eagle.getName()
console.log(nama)

const furcollor = eagle.getCollor()
console.log(furcollor)

const sukaMakan = eagle.getFoodLike()
console.log(sukaMakan)

const suara = eagle.getVoice()
console.log(suara)


// #3 Lengkapilah kode di bawah ini
const uniqueNumber = {
    n: [3, 7, 5, 15, 13, 2, 30, 27, 45],
    result: [],
    // Buatlah method multipleOfFive() 
    // Method ini me-return sebuah array dari property n 
    // Hasil return berupa angka kelipatan 5.
    multipleOfFive() {
        // Kerjakan di sini
        //return this.n.filter(num => num % 5 === 0);
        let arr = this.n
        for(let i = 0; 1 < arr.length; i++){
            //jika n dibagi 5 habis
            //Maka isi array kosong
            if(arr[i] % 5 === 0 ) {
                this.result.push(arr[i])
                // Alternatif lain
                // Result = n
            }

            return this.result
        }
    }
}

const hasil = uniqueNumber.multipleOfFive();
console.log(hasil);