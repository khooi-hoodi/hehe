function findMax(arr) {
  let i = arr.length;
  while (i > 1) {
    if (arr[0] > arr[1]) {
      arr.splice(1, 1);
    } else {
      arr.shift();
    }
    i--;
  }
  return arr[0];
}

console.log(findMax([3, 6, 10, 500]));
console.log(findMax([1]));
