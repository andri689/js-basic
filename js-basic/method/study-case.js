// Tugas
// Sebuah warung kopi 
// Format file study-case-2.js
// Branch: feat/argumen-method

// const coffeeShop = {
//     name: 'Gustea',
//     menus: {
//         // Stok Menu
//         signature_tea: 5,
//         milk_tea: 3,
//         cireng: 10,
//         gorengan: 5,
//     },
    // Buat method dengann nama orderA()
    // Order A akan mengurangi isi dari property:
    // signature_tea -1
    // cireng - 3
    // gorengan -3
//    orderA() {
        // Kerjakan di sini
        // Return nilai adalah sisa stok menu,
        // Sample Output
        // "Sisa Stok Signature Tea: " + menus.signature_tea
        // "Sisa Stok Mik Tea: " + menus.milk_tea
        // "Sisa Stok Cireng: " + menus.cireng
        // "Sisa Stok Gorengan: " + menus.gorengan
//     }
// }

const coffeeShop = {
    name: 'Gustea',
    menus: {
        signature_tea: 5,
        milk_tea: 3,
        cireng: 10,
        gorengan: 5,
    },
    orderA() {
        // Mengurangi jumlah stok menu
        this.menus.signature_tea -= 1;
        this.menus.cireng -= 3;
        this.menus.gorengan -= 3;

        // Return nilai sisa stok menu
        return {
            "Sisa Stok Signature Tea": this.menus.signature_tea,
            "Sisa Stok Milk Tea": this.menus.milk_tea,
            "Sisa Stok Cireng": this.menus.cireng,
            "Sisa Stok Gorengan": this.menus.gorengan,
        };
    }
};

// Memanggil method orderA() dan menampilkan sisa stok menu
const remainingStock = coffeeShop.orderA();
for (const item in remainingStock) {
    console.log(item + ": " + remainingStock[item]);
}
