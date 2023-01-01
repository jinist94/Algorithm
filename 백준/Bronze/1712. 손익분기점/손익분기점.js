const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [A, B, C] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

// A = 고정비용, B = 생산비용, C = 판매가격
// answer = 최초로 이익이 발생하는 판매량

const fn = (a, b, c) => {
  if (b >= c) {
    return -1;
  }

  const d = c - b;
  return Math.floor(a / d) + 1;
};

console.log(fn(A, B, C));