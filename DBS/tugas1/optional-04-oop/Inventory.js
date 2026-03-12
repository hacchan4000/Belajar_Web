/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor(){
    this.items = [] // ini properti items yg bertipe list
  }

  addItem(items){
    this.items.push(items) // pake this untuk merujuk ke properti
  }
  listItems(){
    return this.items.map((item)=> item.displayDetails()).join('\n')
  }
  removeItems(id){
    this.items = this.items.filter( item => item.id !== id)
  }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
