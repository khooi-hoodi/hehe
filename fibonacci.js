const n = 0;

let result = 1;
let n1 = 1;

for (let i = 2; i <= n; i++) {
  result = result + n1;
  n1 = result - n1;
}

console.log(result);
