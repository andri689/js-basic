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
