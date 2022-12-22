const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);

const list = new Set();

input.forEach((el) => {
  const number = el % 42;
  list.add(number);
});

console.log(list.size);