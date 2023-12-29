// ubah ke local scope
const animal = "Ayam"

function MyAnimal(){
    return animal
}

// Jawaban local Scope
    function MyAnimal(hewan) {
        const animal = "Ayam" + hewan;
        return animal
    }
    console.log(animal)

//ubah ke global scope
function MyAge(){
    const age = 17
    return age
}

// jawaban Global scope
    const age = 17

    function MyAge() {
        return age
    }
    console.log(MyAge());

//ubah ke block scope
function orderCheck(param){
    let order
    if(param > 0){
        order = "Pesanan sedang diproses"
        return order
    } else {
        order = "Pesanan Kosong"
        return order
    }
}
orderCheck(1)

//Jawaban Block Scope
function orderCheck(param){
    let order
    if(param > 0){
        order = "Pesanan sedang diproses"
        console.log(order)
    } else {
        order = "Pesanan Kosong"
        console.log(order)
    }
}
orderCheck(1)