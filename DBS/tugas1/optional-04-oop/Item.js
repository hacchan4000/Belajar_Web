/**

 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */
import Inventory from './Inventory';

class Item extends Inventory { // class children extends parents
  constructor(id, name, quantity, price){ // constructor untuk inisialisasi properti objek
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  updateDetails(name, quantity, price){

    this.items.map((item)=>{
      item.name = name;
      item.quantity = quantity;
      item.price = price;
    })
  }
  displayDetails(){
    return `ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}`
  }
}

// Jangan hapus kode di bawah ini!
export default Item;
