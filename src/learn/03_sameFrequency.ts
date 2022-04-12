// Pattern: frequency counter
// Time complexity = O(n)
function sameFrequency(num1, num2) {
  // определить цифры
  // составить словарь
  const num1Dict = {};
  for (const char of '' + num1) {
    num1Dict[char] = ++num1Dict[char] || 1;
  }
  const num2Dict = {};
  for (const char of '' + num2) {
    num2Dict[char] = ++num2Dict[char] || 1;
  }
  // сравнить словари
  for (const char in num1Dict) {
    if (!(char in num2Dict)) {
      return false;
    }
    if (num1Dict[char] !== num2Dict[char]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(1821, 2811));       // true
console.log(sameFrequency(43, 14));           // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));          // false