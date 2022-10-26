// Pattern: multiple pointers
// Time complexity = O(n)
function averagePair(array, avg) {
  if (array.length === 0) {
    return false;
  }
  /*
    sum = 2 * avg
    first = 0
    second = last
    loop
      first + second == sum => return true
      first + second >  sum => second = prev of second
      first + second <  sum => first = next of first
    return false
  */
  const sum = avg * 2;
  let first = 0;
  let second = array.length - 1;
  while (first !== second) {
    const pairSum = array[first] + array[second];
    if (pairSum === sum) {
      return true;
    }
    else if (pairSum > sum) {
      second--;
    }
    else if (pairSum < sum) {
      first++;
    }
  }
  return false;
}

console.log( averagePair([1, 2, 3], 2.5) );                     // true
console.log( averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) );  // true
console.log( averagePair([-1, 0, 3, 4, 5, 6], 4.1) );           // false
console.log( averagePair([], 4) );                              // false
