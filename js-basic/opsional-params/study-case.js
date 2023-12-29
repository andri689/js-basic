function pembagian(x,y){
    if(y === undefined){
        y = 100
    }
    return x/y
}
console.log(pembagian(500))

function pertambahan(a,b){
    if(b === undefined){
        b = 10
    }
    return a+b
}
console.log(pertambahan(10))

function pengurangan(num1,num2) {
    if(num2 === undefined) {
        num2 = 20
    }
    return num1-num2
}
console.log(pengurangan(30))

function mySchool(tempat){
    if(tempat === undefined){
        tempat = "SMK N 2 Karanganyar"
    }
    return tempat
}
console.log("Saya Sekolah di " + mySchool())