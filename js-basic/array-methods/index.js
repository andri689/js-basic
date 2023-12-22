// 
// Function bisa disebut methods

const fruits = ['Orange', 'Apple', 'watermelon', 'Manggo'];

//array.push()
fruits.push('Strawberry');
fruits.push('Other Fruits');

console.log(fruits)

console.log(fruits[0])

console.log(fruits[3])

// array.toString()
console.log(fruits.toString())

// Latihan array.push
// Tambahkan 3 data dengan nama Wiliam, Erik, Thomas.
// Tampilkan data dalam bentuk String.
const person = ['Budi', 'Joni', 'Wahyudi'];

person.push('Wiliam', 'Erik', 'Thomas') // atau bisa juga menggunakan cara di bawah
//person.push('Wiliam')
//person.push('Erik')
//person.push('Thomas')

console.log(person.toString())

// Array Method ForEach
person.forEach(function(data) {
    console.log(data)
})

// Daily Assignment | Tugas Harian 

// Buat 5 array yang kemudian akan ditambahkan data dengan method push()
// Setelah data array ditambahkan, keluar data dan tampilkan dengan forEach()
// 5 array dengan nama myHobbies, myFriends, myFavoriteFods, myLanguage.
// Prefix branch: array-methods
// Reviewer: Rido, Nurohman
