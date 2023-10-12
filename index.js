function isPalindrome(word) {
  // Pseudocode:
  // 1. Remove non-alphabet characters and convert to lowercase.
  // 2. Check if the word is equal to its reverse.
  // 3. If equal, return true (it's a palindrome); otherwise, return false.

  // Remove any non-alphabet characters and convert the word to lowercase
  word = word.replace(/[^a-z]/g, "").toLowerCase();

  // Compare the original word with its reverse
  return word === word.split("").reverse().join("");
}

module.exports = isPalindrome;
