function basicFizzBuzz(n) {
  let numArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      numArr.push("Buzz");
    } else if (i % 3 === 0) {
      numArr.push("Fizz");
    } else {
      numArr.push(i);
    }
  }
  return numArr.join("");
}
console.log(basicFizzBuzz(10));
