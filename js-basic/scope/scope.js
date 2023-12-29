// 1. Local Scope
function greeting(param) {
    const greet = "Selamat datang "  + param;
    return greet;
}

//console.log(greet);

//2. Global Scope

const myName = "Andrian";
function yourName() {
    return myName;
}

console.log(yourName());

//3. Block Scope
if  (1 == 1) {
    const isTrue = "Itu Benar";
    console.log(isTrue);
} else {
    const isTrue = "Maaf Itu Salah";
    console.log(isTrue);
}

function myFavoriteFood(param) {
    if (param === " MI goreng") {
        const favorite = "Ini adalah makanan favorite saya";
        console.log(favorite);
    } else {
        const favorite = "Ini bukan makanan favorite saya";
        console.log(favorite);
    }
}

myFavoriteFood("Mi goreng");