class CoffeShop {
    constructor(nama,menu){
        this.nama = nama
        this.menu = ["Signature Coffee","Milk Tea","Framboze Milk"]
    }
    getNama(){
        return this.nama
    }
    getMenu(){
        return this.menu
    }
}
const instanceCoffeShop = new CoffeShop("Gustea",'')
console.log("Nama Toko : " + instanceCoffeShop.getNama())
console.log("Daftar Menu : " + instanceCoffeShop.getMenu())
