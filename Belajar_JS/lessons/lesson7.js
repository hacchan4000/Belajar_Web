//function

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
// ini dipake pas Callback, Inline logic, Event handler



const fungsi2 = (a,b) => {
  return a+b
}

fungsi2(3,4)

/**
 * lesson 7 exercise
 * 
 * challenge n exercise
 */