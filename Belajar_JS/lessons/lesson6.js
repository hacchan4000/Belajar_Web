//Booleans n if statements


/**
 * boolean itu cuma ada false n true
 * === cek apa dua value itu sama persis
 * == convert kedua val jd tipe yang sama
 * operator perbandingan itu prioritas terendah dalam ordo operasi
 * 
 * di js ada namany truthy (semua nilai yg gaad di falsy) dan falsy (false, 0,'', NaN, undefined, null)
 * 
 */

let condition = Math.random()
let isLaper = true



// if else dalam bentuk ternier 
const hasil = condition > 0.5 ? '' : '' // kondisi ? nilaiJikaTrue : nilaiJikaFalse




//if else biasa
if (condition) {
    
} else if (condition) {

}
else {
    
}




//switch case
let angka = condition 

switch (angka) { 
  case angka >= 0.5:
    console.log('idk')
    break; // break WAJIB (kecuali sengaja fall-through)
  case angka <= 0.5:
    console.log('kalah')
    break;
  default:
    break;
}




//Conditional dengan Logical Operator (masi kurang paham)

isLaper && console.log("user laper")
/**
 * diatas artinya:
if (isLaper) {
  console.log("User laper");
}
 */
let nama = isLaper || "user kenyang";
/**
 * diatas artinya:
if (!isLaper) {
  console.log("User kenyang");
}
 */
let user = input ?? "Guest"; //Gunakan ?? kalau 0 / "" adalah nilai valid

//optional chaining
if (user?.profile?.email) { //Tanpa error walau user undefined
  console.log("Ada email");
}




/**
 * lesson 6 exercise
 * 
 * 6a - 6c :
 
  let hour = 7
  const namaku = 'adit'

  if (hour > 6 && hour < 12) {
    console.log(`morning ${namaku}`)
  } else if (hour > 13 && hour < 17) {
    console.log(`afternoon ${namaku}`)
  }
  else {
    console.log(`night ${namaku}`)
  }

 * 6d-6e:

  let age = 8
  const isHoliday = true

  if ((age < 6 || age > 65) && !isHoliday) {
    console.log('diskon')
  } else {
    console.log('ga diskon')
  }
  
  * 6f-6j :
  let randomNum = Math.random()
  let res = ''
  const tebak = 'head'


  randomNum < 0.5 ? res='head' : res='tail'

  tebak === res ? console.log('menang') : console.log('kalah')

 * challenge n exercise
 */

//completed

