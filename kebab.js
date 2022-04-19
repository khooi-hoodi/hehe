function i18n(word) {
  const wordArr = word.split("-");
  const result = [];

  for (let i = 0; i < wordArr.length; i++) {
    const currentWord = wordArr[i];
    const currentWordLength = currentWord.length;

    if (currentWordLength <= 2) {
      result.push(currentWord);
    } else {
      const firstChar = currentWord.charAt(0);
      const lastChar = currentWord.charAt(currentWordLength - 1);
      result.push(`${firstChar}${currentWordLength - 2}${lastChar}`);
    }
  }
  return result.join("-");
}

console.log(i18n("hello-hoodi-my-name-is-An"));
console.log(i18n("hello--my-name-is-An"));
console.log(i18n("---h---"));
console.log(i18n("-"));
console.log(i18n(""));
