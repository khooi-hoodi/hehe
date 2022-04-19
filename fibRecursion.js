function fibRecursion(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibRecursion(n - 2) + fibRecursion(n - 1);
  }
}

console.log(fibRecursion(5));
