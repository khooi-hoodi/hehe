function checkPalindrome(word) {
  const wordArr = word.split("");
  let start = 0;
  let end = wordArr.length - 1;
  for (let i = 0; i <= Math.floor(wordArr.length / 2); i++) {
    if (wordArr[start] !== wordArr[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

function checkPalindrome2(word) {
  const wordArr = word.split("");

  let start = 0;
  let end = wordArr.length - 1;

  while (start < end) {
    if (wordArr[start] !== wordArr[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

console.log(checkPalindrome2("abcba"));
console.log(checkPalindrome2("pauhgpaog"));
console.log(checkPalindrome2("abba"));
console.log(checkPalindrome2("a"));
