// Pattern: frequency counter
// Time complexity = O(n)
function areThereDuplicates(...params) {
  const dict = {};
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    dict[element] = ++dict[element] || 1;
  }
  for (const arg in dict) {
    if (dict.hasOwnProperty(arg) && dict[arg] > 1) {
      return true;
    }
  }
  return false;
}

console.log( areThereDuplicates(1, 2, 3) );             // false
console.log( areThereDuplicates(1, 2, 2) );             // true
console.log( areThereDuplicates('a', 'b', 'c', 'a') );  // true


/** 
 function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
*/