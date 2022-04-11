// Pattern: multiple pointers
// Time complexity = O(n)
function averagePair(array, avg) {
  if (array.length === 0) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
  }
}

console.log( averagePair([1, 2, 3], 2.5) );                     // true
console.log( averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) );  // true
console.log( averagePair([-1, 0, 3, 4, 5, 6], 4.1) );           // false
console.log( averagePair([], 4) );                              // false
