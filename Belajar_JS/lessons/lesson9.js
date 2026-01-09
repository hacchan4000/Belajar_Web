//Document Object Model

document.body.innerHTML() // literli ngambil elemen/tag <body> dalam html dan semua isinya


document.body.innerHTML = 'halo' // ngubah semua elemen jd halo
document.body.innerHTML = '' // bisa dimasukkin tag html jg tp dlm bentuk str 

document.querySelector() // untuk ngambil satu elemen/tag spesifik ato class jg bsa 
document.title()


// contoh skenario ada tag input untuk ngambil nilai dalemny itu pake dom n .value

Number('10') // ubah str jd int
String(10)
/**
 * lesson 9 exercise
 * 9a <button>9a</button>
 * 9b <button class="b9" onclick="ganti()">9b</button>
 * 
   function ganti(){
    const kata2 = document.querySelector(".b9").innerHTML
      kata2 === "9b" ? document.querySelector(".b9").innerText ='9b done':document.querySelector(".b9").innerText='9b' 
    }
 * 9c
  <button onclick="show('heads')" >heads</button>
  <button onclick="show('tails')" >tails</button>

  <p class="pilihan"></p>
  <script>
    function show(p){
      p === 'heads' ? document.querySelector(".pilihan").innerHTML = `You pick ${p}` :  document.querySelector(".pilihan").innerHTML = `You pick ${p}`
    }
  </script> 
 * 9d 
  <input class="input" type="text" placeholder="Type ur name" onkeydown="event.key === 'Enter'?display() : '' ">
  <button onclick="display()">submit</button>

  <p class="nama"></p>

    function display(){
      const input = document.querySelector(".input").value
      document.querySelector(".nama").innerHTML = `Your name is ${input}`
    }

 */

  // completed sisanya gampang