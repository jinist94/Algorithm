const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [length, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const xl = input.length;
const yl = input[0].length;

const isValidIndex = (x, y) => {
  return x >= 0 && x < xl && y >= 0 && y < yl;
};

const vis = Array.from(Array(xl), () => Array(yl).fill(0));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let drowCount = 0;
let maxArea = 0;

for (let i = 0; i < xl; i++) {
  for (let j = 0; j < yl; j++) {
    if (vis[i][j] === 0 && input[i][j] === "1") {
      vis[i][j] = 1;
      const queue = [[i, j]];
      let count = 1;
      drowCount++;
      while (queue.length !== 0) {
        const [curX, curY] = queue.shift();

        for (let k = 0; k < 4; k++) {
          const chX = curX + dx[k]; // 0
          const chY = curY + dy[k]; // -1

          if (isValidIndex(chX, chY)) {
            if (vis[chX][chY] === 0 && input[chX][chY] === "1") {
              vis[chX][chY] = 1;
              count++;
              queue.push([chX, chY]);
            }
          }
        }
      }

      maxArea = Math.max(maxArea, count);
    }
  }
}

console.log(drowCount);
console.log(maxArea);
