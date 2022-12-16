const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = Number(fs.readFileSync(path));

for(let i = 0; i < input; i++){
  let star = '';

  for(let j = input - i; j > 1; j--) {
    star += " ";
  }
  for(let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}
