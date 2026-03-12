import { sum } from './index.js';
import test from 'node:test';
import assert from 'node:assert';

const hasil = sum(34,35)

test('Can we stay up all night? ',()=>{
  assert.equal(hasil, 69)
})
