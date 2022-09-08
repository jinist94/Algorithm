function solution(arr) {
  let answer = false;
  const total = arr.reduce((acc, cur) => acc + cur);

  const dfs = (level, sum) => {
    if (answer) {
      return;
    }

    if (level === arr.length) {
      if (sum === total - sum) {
        answer = true;
        return;
      }
    } else {
      dfs(level + 1, sum + arr[level]);
      dfs(level + 1, sum);
    }
  };

  dfs(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));

/* 부분집합 두개의 합을 구할 때 2개로 나눌 필요가 없고
  하나의 부분집합만 구하고 전체 합에서 빼면 나머지 부분집합의 합을 구할 수 있음.
*/
