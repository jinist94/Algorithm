// 1부터 n까지 번호가 적힌 구슬 중 m개를 뽑는 방법의 수

function solution(n, m) {
  const answer = [];
  const tmp = Array.from({ length: m }, () => 0);

  const dfs = (level, number) => {
    if (level === m) {
      answer.push([...tmp]);
      return;
    } else {
      for (let i = number; i <= n; i++) {
        tmp[level] = i;
        dfs(level + 1, i + 1);
      }
    }
  };

  dfs(0, 1);

  return answer;
}

console.log(solution(4, 2));
