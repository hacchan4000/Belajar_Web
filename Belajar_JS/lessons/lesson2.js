//numbers and math

/**
 * js bisa ngitung angka dan decimal
 * 
 * operator aritmatika dalam js ada :
   + - * / ()
 * angka diitung sesuai urutan operasi dan kurung
   kali ato bagi dluan baru tambah ato kurang kecuali ad kurung maka yg 
   dalem kurung duluan
 */

/**
 * komputer susa nyimpen floats karena representasi biner dari float panjang dan 
   hanya mendekati nilai tertentu
   contoh: 
 * 0.1 + 0.2 = 0.30000000000000004
 * kalo ngitung uang pake floats bisa masalah
 * cara nangulanginnya
 * 1. instead 20.95 + 7.99 yang hasilnya 28.93999999998 pake (2095 + 799)/100 hasilnya 28.94
 * 2. di buletin pake method Math.round() cnthya Math.round((2095 + 799)*0.1)/100 hasilnnya 2.89
 */

const angka = Math.round((2095 + 799)*0.1)/100

const random = Math.random()
Math.ceil()
Math.floor()

/**
 * Lesson 2 exercise 
 * 2a 10 + 8 * 3 + 5 = 39
 * 2b. 39 / 3 = 13
 * 2c. 18.50 + 2 * 7.50
 * 2h. Math.round((1899 + 2095 + 799 + 499) * 0.1)/100
 * challenge n exercise
 * 2j. cara biar selalu bulatin keatas Math.ceil()
 * 2k. cara biar selalu bulatin kebawah Math.floor()
 * 2l. 25 Celcius = (25 * 9/5)+32 = 77 Fahrenheit
 * 2m. 86 Fahrenheit = (86-32)*5/9 = 30 Celcius
 */

//completed