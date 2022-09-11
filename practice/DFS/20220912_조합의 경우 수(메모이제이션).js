// 조합의 경우 수
// n까지의 숫자 중 r개의 숫자를 뽑았을 때의 경우의 수
// 5C3 = 4C2 + 4C3
function solution(n, r) {
  let answer;

  let dy = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // 메모이제이션 할 공간 만들기

  const dfs = (n, r) => {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }
    if (r === 0 || n === r) {
      return 1;
    } else return (dy[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  };

  answer = dfs(n, r);

  return answer;
}

console.log(solution(5, 3));
// console.log(solution(33, 19));
