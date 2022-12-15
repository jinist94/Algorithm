const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split("\n").map(el=> el.split(' ').map(Number));

const total = input[0][0];
const number = input[1][0];
let sum = 0;

for(let i = 2; i < number+2; i++){
  sum += (input[i][0] * input[i][1]);
}

console.log(sum === total? "Yes" : "No");