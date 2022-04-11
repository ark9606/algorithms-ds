function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log( linearSearch([1, 2, 3, 4, 5], 6) );           // -1
console.log( linearSearch([10, 15, 20, 25, 30], 15) );     // 1
