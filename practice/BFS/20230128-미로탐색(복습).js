const input = [101111, 101010, 101011, 111011];

const solution = (arr) => {
  const input = arr.map((el) => el.toString().split(""));
  const row = input.length;
  const column = input[0].length;

  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];

  const vis = Array.from(Array(row), () => Array(column).fill(0));
  const queue = [];

  vis[0][0] = 1;
  queue.push([0, 0]);

  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx >= 0 && nx < row && ny >= 0 && ny < column) {
        if (input[nx][ny] === "1" && vis[nx][ny] === 0) {
          // 이동할 수 있는 칸이고 방문하지 않은 경우

          vis[nx][ny] = vis[curX][curY] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return vis[row - 1][column - 1];
};

console.log(solution(input));
