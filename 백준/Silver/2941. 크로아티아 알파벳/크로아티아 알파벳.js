const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = fs.readFileSync(path).toString().trim();

let count = 0;

const map = {
  c: ["=", "-"],
  d: ["-"],
  l: ["j"],
  n: ["j"],
  s: ["="],
  z: ["="],
};

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const text = input[i];

    if (map[text]) {
      if (text === "d" && input[j] === "z" && input[j + 1] === "=") {
        i = i + 2;
        break;
      } else if (map[text].includes(input[j])) {
        i++;
        break;
      }
    }
    break;
  }

  count++;
}

console.log(count);
