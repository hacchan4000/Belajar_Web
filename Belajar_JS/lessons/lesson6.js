//Booleans n if statements
import { Random } from "random";

let condition = Random
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
 * challenge n exercise
 */

