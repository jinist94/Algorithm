const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [_, ...array] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

array.forEach((el, i) => {
  const count = el[0];
  const currentText = el[1];
  let word = "";

  for (const text of currentText) {
    for (let i = 0; i < count; i++) {
      word += text;
    }
  }
  console.log(word);
});