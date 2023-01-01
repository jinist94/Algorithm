const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [n, ...words] = fs.readFileSync(path).toString().trim().split("\n");

let answer = 0;
words.forEach((word) => {
  const map = { [word[0]]: 1 };

  let currentText = word[0];
  let isGroupWord = true;

  for (const text of word) {
    if (currentText !== text) {
      if (map[text]) {
        isGroupWord = false;
        break;
      } else {
        map[text] = 1;
      }
    }

    currentText = text;
  }

  if (isGroupWord) {
    answer++;
  }
});

console.log(answer);
