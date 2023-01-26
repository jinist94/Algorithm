const input = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
];

const row = input.length;
const column = input[0].length;

const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

const vis = Array.from(Array(row), () => Array(column).fill(false));

const isVaild = (x, y) => {
  return x >= 0 && x < row && y >= 0 && y < column;
};

const BFS = (i, j) => {
  const queue = [[i, j]];
  let area = 1;
  vis[i][j] = true;

  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (isVaild(nx, ny) && !vis[nx][ny] && input[nx][ny] === "1") {
        // 범위에 해당되고, 방문하지 않았고, 색칠되어 있을 경우
        vis[nx][ny] = true; // 방문 체크
        queue.push([nx, ny]); // 방문한 곳 queue에 추가
        area++; // 색칠된 영역 증가
      }
    }
  }

  return area;
};

const solution = () => {
  let drawCount = 0;
  let maxArea = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (input[i][j] === "1" && vis[i][j] === false) {
        drawCount++;

        const area = BFS(i, j); // 얼만큼 색칠되어 있는지?

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  console.log(drawCount);
  console.log(maxArea);
};

solution();
