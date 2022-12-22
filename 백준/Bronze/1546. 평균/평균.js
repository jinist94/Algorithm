const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const array = input[1];

const max = Math.max(...array);
let sum = 0;
array.forEach((el) => {
  const score = (el / max) * 100;
  sum += score;
});

console.log(sum / array.length);