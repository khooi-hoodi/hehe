function greetings(name, age, introduceAge) {
  console.log(`Hi, my name is ${name}.`);
  introduceAge(age);
}

function introduceAge(age) {
  let ageSuffix = "years";
  if (age <= 1) {
    ageSuffix = "year";
  }
  console.log(`I am ${age} ${ageSuffix} old.`);
}

function fibonacci(n) {
  let result = 1;
  let n1 = 1;

  for (let i = 2; i <= n; i++) {
    result = result + n1;
    n1 = result - n1;
  }

  return result;
}

greetings("Khoi", 1, (age) => {
  console.log(age + "hehehehe");
});

const add = function (a, b) {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const product = (a, b) => a * b;

const diff = minus(1, 2);
console.log(diff);
