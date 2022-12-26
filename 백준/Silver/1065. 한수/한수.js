const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = Number(fs.readFileSync(path));

const fn = (n) => {
  if (n <= 99) {
    return n;
  }

  let count = 99;

  for (let i = 100; i <= n; i++) {
    const numArray = i.toString().split("");

    if (numArray[0] - numArray[1] === numArray[1] - numArray[2]) {
      count++;
    }
  }
  return count;
};

console.log(fn(input));