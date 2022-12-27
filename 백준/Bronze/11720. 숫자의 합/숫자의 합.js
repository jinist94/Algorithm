const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const str = input[1];

const sum = str.split("").reduce((acc, cur) => acc + Number(cur), 0);

console.log(sum);