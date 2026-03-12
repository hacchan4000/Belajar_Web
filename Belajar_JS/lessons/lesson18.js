//Intro to backends

/**
 * backend itu cuma komputer lain yg ngurus data dr website
 * frontend itu komputer yg dipake user yg terdiri dr tampilan etc
 * 
 * komputer ngirim info satu sama lain di internet pake fitur HTTP (hyper text transfer protocol)
 */

console.log('halo')

// untuk ngirim pesan/request HTTP pake class built in XMLHttpRequest
const http = new XMLHttpRequest();

http.addEventListener('load', () => { // nunggu ada event loading trs jalanin fungsi yg didefinisiin
  const respon = http.response()
  console.log(respon)
})

http.open('GET','https://supersimplebackend.dev')// mksd paramny itu tipe pesan HTTP untuk dikirim n URL untuk tau alamat komputer yg nerima pesanny
http.send() // ini kode asinkronus yg bakal ngirim request ke backend n response nya bisa di liat di bagian network
// pas kita ngirim rekues ke backend itu butuh waktu utk nyampe komputer yang dituju n balik lg ke kita jd awalny respon bakal undefined


// mksd GET itu ngambil informasi dr backend
// kalo POST itu ngirim info ke backend
// kalo PUT
// kalo DELETE
//Callbacks

//Promises n fetch

// Async Await

/**
 * lesson 18 exercise
 * 
 * challenge n exercise
 */

