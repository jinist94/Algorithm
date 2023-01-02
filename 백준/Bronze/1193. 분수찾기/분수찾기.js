const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const a = fs.readFileSync(path).toString().trim();

const input = Number(a);

let number = 0;
let count = 1;

while (number < input) {
  let a = 0;
  let b = count + 1;
  for (let i = 0; i < count; i++) {
    a++;
    b--;

    if (number === input - 1) {
      if (count % 2 === 0) {
        console.log(a + "/" + b);
      } else {
        console.log(b + "/" + a);
      }
    }
    number++;
  }
  count++;
}
