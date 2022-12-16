const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split("\n").map(el=> el.split(' '));

for(let i = 0; i < input.length; i++){

  const A = Number(input[i][0]);
  const B = Number(input[i][1]);
  const sum = A + B;

  if(A === 0 && B === 0){
    return;
  }

  console.log(sum)
}