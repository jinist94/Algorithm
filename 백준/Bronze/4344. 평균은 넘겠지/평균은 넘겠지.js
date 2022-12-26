const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [length, ...scoreList] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < length; i++) {
  const [student, ...scores] = scoreList[i].split(" ").map(Number);

  const sum = scores.reduce((acc, cur) => (acc += cur), 0);
  const average = sum / student;
  const pass = scores.filter((el) => el > average).length;
  const passPercent = (pass / student) * 100;

  console.log(passPercent.toFixed(3) + "%");
}