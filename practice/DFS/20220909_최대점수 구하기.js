/*
  1. 제한시간, [점수, 걸리는 시간]
  2. 제한시간 내 최고 점수 구하기
*/

function solution(m, arr) {
  let answer = 0;

  const dfs = (level, score, time) => {
    if (time > m) {
      return;
    }

    if (level === arr.length) {
      answer = Math.max(answer, score);

      return;
    } else {
      dfs(level + 1, score + arr[level][0], time + arr[level][1]);
      dfs(level + 1, score, time);
    }
  };

  dfs(0, 0, 0);

  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
