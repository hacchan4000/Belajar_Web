import sum from './index.js';
import test from 'node:test';
import assert from 'node:assert';

/* 
const hasil = sum(34,35)
const hasil1 = sum('adit',35)
const hasil2 = sum(34,'chandra')
const hasil3 = sum(-34,35)
*/
const testList = [
  [34, 35, 69],
  ['adit', 35, 0],
  [34, 'chandra', 0],
  [-34, 35, 0]
]

for (let index = 0; index < testList.length; index++) {
  const [a, b, hasil] = testList[index];
  
  test(`hasil penjumlahan ${a} dan ${b} adalah:`,()=>{
    assert.equal(sum(a,b),hasil)
  })
}