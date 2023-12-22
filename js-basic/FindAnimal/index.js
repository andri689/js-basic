function foo(cari) {
    const data = ['satu', 'dua', 'tiga', 'empat'];
    let result = '';
   
    if (cari === undefined) {
      return data;
    }
   
   // Cari data array dengan loop
   for(let i = 0; i < data.length; i ++) {
     if(data[i] === cari) {
       result = data[i];
     } else {
      result = 'Tidak ditemukan'; 
      }
   }
   
   // Kembalikan hasil pencarian
   return result
     
   }
   
   console.log(foo('dua'))
   // Output: dua -> Karena 'dua' ada dalam array.
   
   console.log(foo('sepuluh'))
   // Output: Tidak ditemukan -> karena 'sepuluh' tidak ada di array.
   
   console.log(foo())
   // Output: ['satu', 'dua', 'tiga', 'empat'] -> karena kita tidak memberikan argumen, seluruh data ditampilkan
   
   