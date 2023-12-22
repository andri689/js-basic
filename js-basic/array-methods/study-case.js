
// Daily Assignment | Tugas Harian 

// Buat 5 array yang kemudian akan ditambahkan data dengan method push()
// Setelah data array ditambahkan, keluar data dan tampilkan dengan forEach()
// 5 array dengan nama myHobbies, myFriends, myFavoriteFods, myLanguage.
// Prefix branch: array-methods
// Reviewer: Rido, Nurohman

const myHobbies = ['Membaca Novel','Mendengarkan Musik'];
const myFriends = ['Ramzi', 'Dimaz', 'Fito', 'Nanta', 'Abi'];
const myFavoriteFods = ['Nasi Goreng', 'Mi Goreng', 'Sate'];
const myLanguage     = ['Indonesia'];

myHobbies.push('Menonton Film','Membaca Manga')
console.log(myHobbies.toString())

myFriends.push('Arifin')
console.log(myFriends.toString())

myFavoriteFods.push('Mi Ayam')
console.log(myFavoriteFods.toString())

myLanguage.push('Jawa')
console.log(myLanguage.toString())

myHobbies.forEach(function(data) {
    console.log(data)
})

myFriends.forEach(function(data) {
    console.log(data)
})

myFavoriteFods.forEach(function(data) {
    console.log(data)
})

myLanguage.forEach(function(data) {
    console.log(data)
})