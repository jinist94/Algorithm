const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [A, B, V] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));