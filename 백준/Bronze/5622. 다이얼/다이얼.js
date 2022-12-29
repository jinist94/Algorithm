const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().trim();

let map = {};
let answer = 0;

const array = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

array.forEach((arr, num) => {
  arr.forEach((alp) => {
    map[alp] = num + 2;
  });
});

for (const x of input) {
  answer = answer + map[x] + 1;
}

console.log(answer);