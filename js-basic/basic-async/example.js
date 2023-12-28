// Ada yang menyiapkan dan biji kopi
// Contoh analogi di dunia nyata.
// Terdapat 4 orang yang melakukan sebuah pekerjaan dalam waktu bersamaan.
// Ada yang menyiapkan dan menaburkan biji kopi, ada yang memanaskan air dll

function taburkanBijiKopi() {
    setTimeout(function() {
        console.log("Menuangkan biji kopi...")
    })
}

function panaskanAir() {
    setTimeout(function() {
        console.log("Sedang memanaskan air...")
    })
}

function siap() {
    setTimeout(function() {
        console.log("Kopi siap dinikmati!")
    })
}

function adukKopi() {
    setTimeout(function() {
        console.log("Mengaduk kopi...")
    })
}

taburkanBijiKopi()
panaskanAir()
siap()
adukKopi()
