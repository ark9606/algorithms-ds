// Pattern: multiple pointers
// Time complexity = O(n)
function countUniqueValues(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let uniquePointer = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i-1]){
      uniquePointer++;
      // form an array of unique numbers
      numbers[uniquePointer] = numbers[i];
    }
  }
  return uniquePointer + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));

/*
function countUniqueValues0(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}
*/