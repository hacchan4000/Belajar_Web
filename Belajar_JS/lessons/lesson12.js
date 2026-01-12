//Advanced functions
/**
 * function itu jg values jd bsa di simpen ke dlm variabel
 */
const myArray = [1,2,3,4,5,6]

const anu = myArray.filter((val, index)=>{  // ini bakal buat array baru yg filter array ori sesuai kriteria yg kita tetapin
  /*
  if (val % 2 === 0) { // kriteriany angka genap
    return true
  } else {
    return false
  }
    ato
    */
   return val % 2 === 0 // ini sama aj kea yg diatas

})
console.log(anu);
myArray.map(()=>{})


fungsi1()

// fungsi dibawah bsa di panggil bahkan sebelum di definisikan (hoisting)
const fungsi1 = function halo(params) { // ini tipe variabelny itu function
  // nama fuctionny jg bsa diilangin biar jd func anonim
  console.log(params)
}
//console.log(fungsi1())
fungsi1(function name() { // manggil function di dalam function lain
  console.log('haloo') // ini namany callback function
})

const objek1 = {
  nama: 'adit',
  greet: function (params) {
    console.log('halo lg')
  }
}

objek1.greet()


// bsa pass function ke dalam function sbg paramny


// setTimeout membuat kita bisa jalanin function nanti an
setTimeout(() => {// ini fungsi anonnim yg dijalanin nanti
  console.log('timeout')
},3000)// ini param untuk nunggu berapa lama sblm fungsi dijalanin dalam milisekon

// kode asinkronus artinya komp g bakal nunggu setTimeout slese sblm jalanin kode berikutny
console.log('next line')

const add = function() {
  console.log(2+3)
}



setInterval(() => { // ini mirip kea setTimeout tipe berulang setiap detik yang dikasi
  console.log('interval')
},3000)


const arrowFunction = () => {

}
//bisa ditulis jg

/**
 * lesson 12 exercise
 * 12a 
 * const add = () => {
    console.log(2+3)
  }
  add()
 * 12b 
  const runTwice = function (params) {
    console.log(2+3)
  }
  runTwice(add())
 * 12c
 * 12d
 * 12e
 * 12f
 * 12g
 * 12h
 * 12i
 * 12j 
 const kali = (n1,n2) => console.log(n1*n2)
 kali(5,6)
 * 12l
 * 12m
 * 12n
 * 12o
 * 12p
 * 12q
 * 12r
 * 12s
 * 12t
 * 12u
 * challenge n exercise
 */

// completed