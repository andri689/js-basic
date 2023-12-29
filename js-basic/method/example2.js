const shark = {
    type: 'Great White Shark',
    teeth: 'Sharp',
    isMammal: true,
    isPredator: true,
    attack(target){
        return this.type + " is attacking " + target
    },
    inFish: true,
}
const execution = shark.attack('Octopus')
console.log(execution)

function akuFunction(nama){
    return "Halo namaku adalah " + nama
}

const eksekusi = akuFunction("Budi")

console.log(eksekusi)