// 1부터 n까지 숫자를 m번 뽑아 나열하기
function solution(n, m) {
  let answer = [];
  let tmp = [];

  const dfs = (level) => {
    if (level >= m) {
      answer.push([...tmp]); // tmp를 그대로 넣어버리면 answer에 마지막 값으로만 채워짐
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[level] = i;
        dfs(level + 1);
      }
    }
  };

  dfs(0);
  return answer;
}

console.log(solution(3, 2));
