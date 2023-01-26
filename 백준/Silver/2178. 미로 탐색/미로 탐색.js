const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [length, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

const row = input.length;
const column = input[0].length;

const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

const vis = Array.from(Array(row), () => Array(column).fill(-1));

const isVaild = (x, y) => {
  return x >= 0 && x < row && y >= 0 && y < column;
};

const BFS = (i, j) => {
  const queue = [[0, 0]]; // 시작점
  vis[0][0] = 0;

  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (isVaild(nx, ny) && vis[nx][ny] < 0 && input[nx][ny] === "1") {
        // 범위에 해당되고, 방문하지 않았고, 색칠되어 있을 경우
        vis[nx][ny] = vis[curX][curY] + 1; // 이전 방문지 + 1
        queue.push([nx, ny]); // 방문한 곳 queue에 추가
      }
    }
  }
};

BFS();
console.log(vis[row - 1][column - 1] + 1);
