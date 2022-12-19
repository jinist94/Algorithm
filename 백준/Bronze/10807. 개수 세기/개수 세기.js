const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().split('\n');

const array = input[1].split(" ");
const v = input[2];

console.log(array.filter(n => n === v).length);