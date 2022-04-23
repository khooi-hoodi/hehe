function reverseNumber(number) {
  let digits = [];
  while (number > 0) {
    digits.push(number % 10);
    number = Math.trunc(number / 10);
  }
  return digits.join("");
}
console.log(reverseNumber(12314));
