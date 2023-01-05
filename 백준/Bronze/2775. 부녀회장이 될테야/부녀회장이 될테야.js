const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [length, ...input] = fs.readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < length; i++) {
  const k = +input.shift();
  const n = +input.shift();

  let house = Array.from({ length: k + 1 }, () => Array.from({ length: n + 1 }, () => 0));

  for (let i = 0; i <= n; i++) {
    house[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }

  console.log(house[k][n]);
}
