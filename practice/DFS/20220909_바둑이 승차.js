function solution(c, w) {
  let answer = 0;

  const dfs = (level, sum) => {
    if (sum > c) {
      return;
    }

    if (level === w.length) {
      answer = Math.max(answer, sum);
    } else {
      dfs(level + 1, sum + w[level]);
      dfs(level + 1, sum);
    }
  };

  dfs(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
