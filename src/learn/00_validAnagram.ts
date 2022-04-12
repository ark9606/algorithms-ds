// Pattern: frequency counter
// Time complexity = O(n)
function validAnagram(word1, word2) {
  const dict = {};
  if (word1.length !== word2.length) {
    return false;
  }
  for (const char of word1) {
    dict[char] = ++dict[char] || 1;
  }
  for (const char of word2) {
    if (char in dict && dict[char]-- > 0) {
      continue;
    }
    return false;
  }
  return true;  
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
