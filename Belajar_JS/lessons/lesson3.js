//strings

/**
 * string itu salah satu tipe data berupa teks ato kumpulan karakter alphanum '...'
 * string bisa digabung pake 'ngen' + 'tot' + ... = 'ngentot' ini namany konkatenasi
 * 
 * klo mau tau tipe sesuatu dlm js bisa pake typeof()
 * 
 * kalo int di konkat sm string hasil akhirny bakal selalu str. cnth : 
 * 'plur' + 1 + 'bus' = 'plur1bus'
 * '$' + (2095 + 799)/100  = '$28.94' kalo g pake kurung tar di konkat dlu sblm angkany ditambah beneran
 * 
 * ada 3 cara bikin string
 * 1. '' ini yg direkomendasiin
 * 2. "" ini dipake klo ad ' di dalem teksny
 * 3. `` ini utk template string untuk masukin value lgsg ke string (interpolasi) dan multi-line string. cnthnya
 *    `Items (${2+2})` =  'Items (4)'
 */

const kata = "aditya"

typeof('')

String(123)

JSON.stringify()

/**
 * lesson 3 exercise
 * 3a 'my name is'
 * 3b 'aditya'
 * 3c 'my name is' + 'bella hadid'
 * 3d 'total cost: $' + (5+3)
 * 3e `total cost: $ ${5+3}`
 * 3f alert(`total cost: $ ${5+3}`)
 * 3j alert(`total cost: $ ${(599+295)/100} \n datang lg y mek`)
 * 
 * challenge n exercise
 * 3k alert(`Items (${2+2}):  $${(2095+799)*2/100}`)
 * 3l
 * 3m const total = ((2095+799)*2/100) + (499*2/100)
      alert(`Items (${2+2}):  $${(2095+799)*2/100} 
      \nShipping n handling : $${499*2/100} 
      \nTotal before tax: $${total}`)
 * 
 * 3n const tax = Math.round(total*100/10)/100
 
      alert(`Items (${2+2}):  $${(2095+799)*2/100} 
      \nShipping n handling : $${499*2/100} 
      \nTotal before tax: $${total}
      \n Estimated tax (10%): $${tax}
      `)
      
 */

      //completed

