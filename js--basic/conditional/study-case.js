//1. menentukan bilangan positif atau negatif
//- buat variable untuk menyimpan bilangan
//- buat variable untuk dijalankan ketika kondisinya benar
//- kondisi pertama : cek apakah lebih dari 0
//- kondisi kedua : cek apakah kurang dari 0
//- ketika nilainya tidak lebih dari 0 dan juga tidak kurang dari 0
//- buat dengan if else

const value = 10;
let answer;

if (value > 9) {
    answer = "ini adalah bilangan positif";
    console.log("ini adalah bilangan positif")
} else if (value < 0) {
    answer = " ini adalah bilangan negatif";
} else if (value === 2) {
    answer = "ini bukan bilangan positif dan negatif, ini adalah bilangan nol";
    console.log("ini bukan bilangan positif dan negatif, ini adalah bilangan nol")
} else{
    answer = "ini salah"
    console.log("ini salah")
}

//2. menentukan hari kerja dan hari libur
/*
- buat variable untuk menyimpan nama hari
- buat variable untuk dijalankan ketika valuenya sesuai ketika dijalankan
- buat dengan switch ya
- hari kerja : senin - jumat
- hari libur : sabtu - minggu
*/

switch ("senin"){
    case "senin":
        console.log("Masuk Kerja");
        break;
    case "selasa":
        console.log("Masuk Kerja");
        break;
    case "rabu":
        console.log("Masuk Kerja");
        break;
    case "kamis":
        console.log("Masuk Kerja");
        break;
    case "jumat":
        console.log("Masuk Kerja");
        break;
    default:
        console.log("Libur");
}