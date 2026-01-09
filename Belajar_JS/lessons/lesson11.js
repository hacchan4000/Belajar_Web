//Arrays n loops

//ARRAYS
const array2 = []
const array = [1,2,3,4,5,6,7,8]
const arr = new Array(1, 2, 3) // array constructor
const arr2 = Array.of(5)// buat array 5 elemen

const kamus = {}
const kamus2 = {
    key: 'aditya',
    key: 'chandra',
    key: 'nugraha',
}


//LOOPS

//loops biasa antara array, object ato data async dengan index sebagai cara untuk memutari semua elemen dalam array 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
    
} // ini loop paling biasa yang ngasi kontrol penuh



// loop untuk data yang datangnya bertahap
for await (const element of object) {
    
} // contohnya
for await (const chunk of readFileStream()) {
  process(chunk)
}



// loop untuk melakukan sesuatu ke tiap elemennya tanpa break/return
array.forEach(element => {
    element++ // nambah 1 untuk semua elemen
    console.log(element);
});// biasanya dipake buat Logging, Render DOM, Update state dsb



const object = {
    nama : 'adit',
    age: 21,
    isVirgin: false
}
// loop untuk  dapatin value dari key object
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(element)
    
    
} // for versi keempat


// loop untuk iter valueny aj g peduli index
for (const element of object) {
    
}
//contoh 
for (const char of "hello") {
  console.log(char)
}


// ini bukan loop umum karena gunanya map adalah untuk MENGUBAH setiap elemen array menjadi bentuk BARU dan menghasilkan ARRAY BARU
const arrayBaru = array.map((item, index, arrayAsli) => {
  return item * 2 // tiap elemenny array dikali 2
})
console.log(arrayBaru)

array.filter(() => {
  
})


const roleHandler = {
  admin: () => "Dashboard Admin",
  user: () => "Dashboard User",
};

/**
 * lesson 11 exercise
 * 
 * challenge n exercise
 */



