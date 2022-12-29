const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().trim();


console.log(input.length === 0 ? 0 : input.split(' ').length);