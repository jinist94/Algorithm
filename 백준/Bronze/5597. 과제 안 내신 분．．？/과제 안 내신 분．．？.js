const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split("\n").map(Number);

const map = {};
let answer = [];

for (let i = 1; i <= 30; i++) {
  map[i] = 1;
}

for (let j = 0; j < 30; j++) {
  map[input[j]] = 0;
}

for (let key in map) {
  if (map[key] === 1) {
    answer.push(key);
  }
}

console.log(answer.join("\n"));