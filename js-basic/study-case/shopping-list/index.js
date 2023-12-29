//daftar belanja
/*
- tambah item
- hapus item
- tampilkan item
*/

let shoppingList = ["hp", "laptop", "macbook"];

// fungsi tambah item
const addItem = (itemName) => {
  const toLowerCase = itemName.toLowerCase();
  shoppingList.push(toLowerCase);
  console.log(`${itemName} telah ditambahkan`);
};

// fungsi untuk hapus item
const removeItem = (item) => {
  const toLowerCase = item.toLowerCase();
  const removeIndex = shoppingList.indexOf(toLowerCase);
  shoppingList.splice(removeIndex, 1);
  console.log(`${item} berhasil dihapus`);
};

// fungsi untuk menampilkan item
const showItem = () => {
  console.log("Daftar Item");
  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
};

addItem("Laptop");
addItem("maCbOok");
addItem("Aqua");
addItem("Le minerale");
console.log("");
showItem();
console.log("");
removeItem("aqua");
console.log("");
showItem();

//merge branch ini
//kita pull ke repo local kita
//git checkout -b refactor/folder-structure