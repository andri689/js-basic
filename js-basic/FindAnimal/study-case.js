function searchAnimal(keyword) {
    const animal = ['Elephant', 'Cat', 'Dog', 'Eagle', 'Crocodile', 'Lion'];
    let result = '';
  
    if (keyword === undefined) {
      return animal;
    }
  
    // Cari data array dengan loop
    for (let i = 0; i < animal.length; i++) {
      if (animal[i] === keyword) {
        result = animal[i];
      } else {
        result = 'Tidak ditemukan';
      } 
    }
  
    // Kembalikan hasil pencarian
    return result;
  }
  
  console.log(searchAnimal('Cat'));
  
  console.log(searchAnimal('Kucing'));
  
  console.log(searchAnimal());
