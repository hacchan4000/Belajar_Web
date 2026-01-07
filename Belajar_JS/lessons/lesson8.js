//objects
const orang = { // ini object gunanya untuk nge gabungin sekumpulan nilai supaya kode rapi
    nama : 'aditya',
    age : 21,
    gender: 'male',
    'fav-things' : ['pizza','games'],
    baju : {
        top : 'tshirt',
        bottom : 'pants',
        isWearingUnderwear : false
    },
    greet : function greetMe(){ // ini itu method ato fungsi dalem object
        console.log('halo')
    },
    //ada namanya shorthand method
    method(){ // ini sama aj kea method diatas
        console.log('ini method valid')
    }
}



// ini cara akses n reassign properti objek
orang.nama = 'chandra' 
orang['fav-things'].push('novus') // ini dipake klo nama properti gabisa diakses pake dot notation
orang.baju.isWearingUnderwear // hasilnya true
orang.greet()

console.log(orang.nama)
orang.height = 175 // nambahin properti baru ke objek
console.log(orang)
delete orang.height // cara hapus properti dr objek
typeof(orang)// tipenya object


//build in objects

//json ato javascript object notation itu syntax yg mirip object tp dikit fiturnya krn g support function dan harus pake double quotes untuk str
//json bsa dipake di semua bhs pemrogaman jd lebih universal
// json itu untuk ngirim data antar computer yang make bhs pemrogaman yg beda
//json juga dipake untuk nyimpen data

//ini utk convert object ke json
const myJson = JSON.stringify(orang) // bakal ngehasilin string isi object orang tp methodny g bakal muncul di outputnya

//ini untuk convert json ke object
JSON.parse(myJson)



//localStorage

localStorage.setItem() // untuk save nilai secara permanen dan g ilang pas web refresh
// kalo sesuatu gaad di local storage maka outputny null
//null vs undefined

// null dipake pas kita emg pingin sesuatu itu kosong/empty

//auto boxing
/**
 * sebagian besar syntax dlm js itu punya properi dan methodny sendiri bahkan string biasa, cnthny
 * console.log('kontol'.toUpperCase())
 * ini karena js wrap string kedalam sebuah object spesial yang punya properti n method sendiri scr otomatis
 */


// object itu refensi ke memory komputer
const object0 = { // komputer baca var ini cm nyimpen refrensi ke properti di bawah
    message: 'halo'
}
//jd meski objectny pake const properti di dalemny masi bisa diubah

// kalo misal mau ngeluarin value dr properti dalam object ada shortcutnya, contoh

const object1 = {
    pesan : "adili jokowi",
    sentence: 10
}




//ini namany destructuring
const { pesan,sentence } = object1 // ini bakal buat var dengan nama pesan yg nanti ngambil properti pesan dr object jg
// diatas itu sama kaya const pesan = object1.pesan


/**
 * lesson 8 exercise
 * 8a-8d:
 
    const product = {
        nama: 'basketball',
        price : 2095,
        'delivery-time' : '3 days'
    }
    const productLain = {
        nama: 'sempak',
        price : 500,
        'delivery-time' : '3 days'
    }
    product.price += 500
    //console.log(product)

    function comparePrices(p1,p2) {
        let hasil = p1.price < p2.price ? p1.nama : p2.nama
        return console.log(`produk yg lebih murah adalah ${hasil}`)
    }
    comparePrices(product,productLain)

 * 8e
function isSameProduct(p1, p2) {
    if (p1.nama === p2.nama && p1.price === p2.price) {
        return console.log('sama')
    } else {
        return console.log('ga sama')
    }
}
isSameProduct(product,productLain)
 * 8f 'GOOD MORNING'.toLowerCase()
 * 8g console.log('test'.repeat(2))
 * 8h
 * challenge n exercise
 */

//completed