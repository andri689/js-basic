let tasks = [];

//fungsi tambahan tugas 
function addTasks(task) {
    tasks.push(task);
    console.log(`Tugas ${task} berhasil ditambahkan`);
}

//Fungsi tampilkan semua tugas 
function showTasks() {
    if (tasks.length === 0) {
        console.log("Tidak ada tugas saat ini");
    } else {
        for (let i = 0; i < tasks.length; i++) { 
            console.log(`${i + 1}. ${tasks[i]}`);
        }
    }
}

//fungsi hapus tugas
function deleteTask(index) {
    if(index >= 0 && index < tasks.length) {
        let deleteTask = tasks.splice(index, 1);
        console.log(`Tugas ${tasks[deleteTask]} berhasil dihapus`);
        tasks.splice(index, 1);
    } else {
        console.log("Index tugas tidak valid");
    }
}

//panggil fungsi tambah
addTasks("belajar js");
addTasks("study Kasus Javascript");

console.log("");
showTasks();

console.log("");
deleteTask(0);
