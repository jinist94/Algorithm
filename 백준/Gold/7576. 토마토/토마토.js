const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [length, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

/**
 *
 * 맨 처음 칸을 전부 탐색해서 익은 토마토가 담긴 곳을 모두 찾고 queue에 담는다. vis표시
 * 양옆위아래를 확인해서 안익은 토마토가 있는 경우
 * 안익은 토마토들의 좌표값 queue에 담는다 (vis가 1이 아니고 토마토가 있을 경우(1)에만)
 */

const solution = (input) => {
  const row = input.length;
  const column = input[0].length;
  let queue = [];
  const vis = Array.from(Array(row), () => Array(column).fill(0));

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (input[i][j] === "1") {
        queue.push([i, j]);
        vis[i][j] = 1;
      }
    }
  }

  while (queue.length !== 0) {
    const newQueue = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const [curX, curY] = queue[i]; // 시간 초과나서 shift 변경

      for (let j = 0; j < 4; j++) {
        const nx = curX + dx[j];
        const ny = curY + dy[j];

        if (nx >= 0 && nx < row && ny >= 0 && ny < column) {
          if (input[nx][ny] === "0" && vis[nx][ny] === 0) {
            newQueue.push([nx, ny]);
            vis[nx][ny] = 1;
          }

          if (input[nx][ny] === "-1" && vis[nx][ny] === 0) {
            vis[nx][ny] = -1;
          }
        }
      }
    }

    if (newQueue.length === 0) break;

    count++;
    queue = newQueue;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (vis[i][j] === 0 && input[i][j] === "0") {
        return -1;
      }
    }
  }

  return count;
};

console.log(solution(input));