function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;
  let mid = -1;
  while(min <= max) {
    mid = Math.floor((min + max) / 2);
    if (array[mid] === value) {
      return mid;
    }
    if (value < array[mid]) {
      max = mid - 1;
    }
    else {
      min = mid + 1;
    }
  }
  return -1;
}

console.log( binarySearch([1, 2, 3, 4, 5], 6) );           // -1
console.log( binarySearch([10, 15, 20, 25, 30], 15) );     // 1
