
function fibonacci(n) {
  if (n === 0) {
    return []
  }
  if (n === 1) {
    return [0]
  }
  if (n === 2) {
    return [0,1]
  }

  const myArray = fibonacci(n-1);
  const nextNum = myArray[myArray.length -1]+myArray[myArray.length-2]
  myArray.push(nextNum)

  return myArray
  
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
