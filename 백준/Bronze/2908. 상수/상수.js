const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().trim().split(' ');

const reverse = input.map(num => num.split('').reverse().join(''));

console.log(Math.max(reverse[0], reverse[1]));