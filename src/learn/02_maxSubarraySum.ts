// Pattern: sliding window
// Time complexity = O(n)
function maxSubarraySum(array, n) {
  if (n > array.length) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 1));    // 8
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));   // 17
console.log(maxSubarraySum([4, 2, 1, 6], 2));           // 7
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));       // 13
console.log(maxSubarraySum([], 4));                   // null
