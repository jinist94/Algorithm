const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split("\n");

const length = input[0];

for (let i = 1; i <= length; i++) {
  let score = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      score++;
      sum += score;
    } else {
      score = 0;
    }
  }
  console.log(sum);
}
