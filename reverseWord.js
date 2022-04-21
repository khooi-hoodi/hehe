function reverseWord(word) {
  let wordArr = word.split("");
  let newWordEnd = [];
  let i = 0;
  let j = wordArr.length - 1;
  let start;
  let end;

  while (j >= i) {
    end = wordArr[i];
    newWordEnd.unshift(end);
    i++;
    j--;
  }

  i = 0;
  j = wordArr.length - 1;
  let newWordStart = [];

  while (i < j) {
    start = wordArr[j];
    newWordStart.push(start);
    i++;
    j--;
  }

  let newWord = newWordStart.concat(newWordEnd);
  return newWord.join("");
}
console.log(reverseWord("Hello World"));
console.log(reverseWord("a"));
console.log(reverseWord(" "));
console.log(reverseWord(""));
