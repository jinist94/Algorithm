const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split("\n").map(Number);

let max = 0;
let number = 0;

for (let i = 0; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    number = i + 1;
  }
}

console.log(max + "\n" + number);