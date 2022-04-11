function productOfArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1,2,3]));      // 6
console.log(productOfArray([1,2,3,10]));   // 60
