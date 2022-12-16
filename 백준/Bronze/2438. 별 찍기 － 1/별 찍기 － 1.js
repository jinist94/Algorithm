const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString();

let star = '';

for(let i = 0; i < input; i++){
  star+= "*";
  console.log(star);
}