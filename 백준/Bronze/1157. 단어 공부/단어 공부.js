const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const str = fs.readFileSync(path).toString().trim().toUpperCase();

const map = {};

for (const s of str) {
  map[s] = map[s] ? map[s] + 1 : 1;
}

let maxCount = 0;
let answer = [];

for (const key in map) {
  if (maxCount === map[key]) {
    answer.push(key);
  }
  if (maxCount < map[key]) {
    maxCount = map[key];
    answer = [key];
  }
}

console.log(answer.length === 1 ? answer[0] : "?");