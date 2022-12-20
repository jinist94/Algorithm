const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((el) => el.split(" "));

const array = input[1];

console.log(Math.min(...array) + " " + Math.max(...array));