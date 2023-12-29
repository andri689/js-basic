function computerSelect() {
    let select = ["batu", "gunting", "kertas"];
    let index = Math.floor(Math.random() * select.length)
    return select[index];
}

function winner(param1, param2) {
    if(param1 === param2) {
        return Seri;
    } else if (
        (param1 === "gunting" && param2 === "batu") || 
        (param1 === "kertas" && param2 === "gunting") ||
        (param1 === "batu" && param2 === "kertas")
    ) {
        return "Pemain menang";
    } else {
        return "Computer menang"
    }
}

function play(main) {
    let user = main
    let computer = computerSelect();
    let result = winner(user, computerSelect);
    console.log(`Pemain memilih ${user}`);
    console.log(`Komputer memilih ${computer}`);
    console.log(`Hasil: ${result}`);
}

// Contoh pemanggilan fungsi play dengan pilihan pemain "gunting"
play("gunting");