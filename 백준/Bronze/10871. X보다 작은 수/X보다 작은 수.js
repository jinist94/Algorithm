const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split('\n').map(el=> el.split(' '));

const x = Number(input[0][1]);
const array = input[1];

let answer = '';

for(const num of array){
  if(num < x){
    answer += " " + num;
  }
}

console.log(answer.trim());