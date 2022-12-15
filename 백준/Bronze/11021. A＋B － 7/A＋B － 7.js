const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split("\n").map(el=> el.split(' '));


const length = input[0][0];
let answer = '';

for(let i = 1; i <= length; i++){
  const A = parseInt(input[i][0]);
  const B = parseInt(input[i][1]);

  answer += `Case #${i}: ${A + B}\n`;
}

console.log(answer);