//strings

/**
 * string itu salah satu tipe data berupa teks ato kumpulan karakter alphanum
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

