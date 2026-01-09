// di react banya pake arrow function

export const fungsi = () => {
  //dibawah ini komponen
  return <div> 
    
  </div>
} // di react km buat komponen dan komponen itu fungsi arrow

//fungsi anonim 
// ini fungsi yang gaad namany untuk eksekusi command tanpa buat nama fungsi
<button onClick={() => {console.log('ini fungsi anonim')}}></button>



//pake ternary krn di react pake jsx yg bsa buat nulis js di html secara lgsg 

const hari = 'monday'
const umur = 10

hari === 'monday' ? console.log('waktunya kerja') : console.log('libur')
const sekarang = umur > 5 && console.log('umur skrg > 5') // kalo kondisi sebelah kiri && true jalan console log nya
const dulu = umur > 5 || console.log('umur skrg < 5')
// di react gunanya nanti

const komponen = () => {
  return umur > 5 ? <div>adit</div> : <div>chandra</div>
}

//object ato dict itu mirip
//harus tau destruktur objek

const orang = {
  name : 'adit',
  age : 21,
  isMarried: true
}

const { name, age, isMarried } = orang

const orang2 = {...orang, name:'chandra'} // ... itu spread operator
// gunanya cuma ngubah nama object orang aj yg lainnya sama persis

const array = [1,2,3,4,5]

array.map((item) => {
  return item * 2
})
array.filter((angka) => {
  return angka % 2 === 0
})