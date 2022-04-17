const n = 5;

for (let i = 0; i < n; i++) {
  let star = "*";
  let space = " ";
  for (let j = 0; j < i; j++) {
    star = star + "**";
  }

  for (let k = 0; k < n - i - 1; k++) {
    space = space + " ";
  }
  console.log(space + star);
}
