//function

/**
 * diajarin hal dasar kea gmn namain function, scope var dlm function, return dan params default value,
 */

//fungsi biasa
function name(params) {
  
}



//async funtcion
async function ambilData(params) { // karena ada async nya brarti fungsi ini bakal selalu kembaliin Promise
  // bsa pake await
  // bsa di hoist
    
  // cnthh
  const hasil = await fetch('api/data')
  return hasil.json()
}
//cara manggil
ambilData().then(data => console.log(data)) 
// dipake pas API calls, database ato file systems



//async arrow function
setTimeout(async (params) => {
    
},10)
// ini dipake pas Callback, Inline logic, Event handler. contoh
const fungsi2 = (a,b) => {
  return a+b
}
fungsi2(3,4)





/**
 * lesson 7 exercise
 * 
 * 7a-7c 
      function greet(name='there') {
          console.log(`hello ${name}`)
      }
      greet('adit')
 * 7d-7f 
      function convertToFahrenheit(celcius) {
        let hasil = (celcius*9/5)+32
        return console.log(hasil)
      }
      function convertToCelcius(fahrenheit) {
        let hasil = (fahrenheit-32)*5/9
        return console.log(hasil)
      }
      function convertTemp(degree, unit) {
        if (unit === 'C') {
          convertToFahrenheit(degree)
        } else {
          convertToCelcius(degree)
        }
      }
      convertTemp(25,'C')
      convertTemp(86,'F')
  * 7g - 7i
      
    function convertLength(length, from, to) {

  switch (from) {
    case 'miles':
      if (to === 'km') {
        return console.log(`${length*1.6} km`)
      } else if(to === 'feets'){
        return console.log(`${length*5280} ft`)
      } else if (to === 'miles'){
        return console.log(`${length} miles`)
      } else {
        return `invalid unit ${to}`
      }
      break;
    case 'km':
      if (to === 'km') {
        return console.log(`${length} km`)
      } else if(to === 'feets'){
        return console.log(`${length*3281} ft`)
      } else if (to === 'miles'){
        return console.log(`${length/1.6} miles`)
      } else {
        return `invalid unit ${to}`
      }
      break;
    case 'feets':
      if (to === 'km') {
        return console.log(`${length/3281} km`)
      } else if(to === 'feets'){
        return console.log(`${length} ft`)
      } else if (to === 'miles'){
        return console.log(`${length} miles`)
      } else {
        return `invalid unit ${to}`
      }
      break;
  
    default:
      return `invalid unit ${from}`
      break;
  }

}
convertLength(50, 'miles', 'km')
convertLength(32, 'km', 'miles')

 * challenge n exercise
 */

//completed