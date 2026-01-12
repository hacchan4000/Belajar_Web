//Intro to backends

/**
 * backend itu cuma komputer lain yg ngurus data dr website
 * frontend itu komputer yg dipake user yg terdiri dr tampilan etc
 * 
 * komputer ngirim info satu sama lain di internet pake fitur HTTP (hyper text transfer protocol)
 */

// untuk ngirim pesan/request HTTP pake class built in XMLHttpRequest
const request = new XMLHttpRequest();

request.open('GET','https://supersimplebackend.dev')// mksd paramny itu tipe pesan HTTP untuk dikirim n URL untuk tau alamat komputer yg nerima pesanny
request.send()

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

