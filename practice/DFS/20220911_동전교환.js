// 동전의 종류 개수 coin, 거스러줄 금액 change
// 거슬러 줄 동전의 최소 개수 구하기
function solution(coins, change) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (level, sum) => {
    if (sum > change) {
      return;
    }

    if (level >= answer) {
      // edge cut
      return;
    }
    if (sum === change) {
      answer = Math.min(answer, level);
      return;
    } else {
      for (let i = 0; i < coins.length; i++) {
        dfs(level + 1, sum + coins[i]);
      }
    }
  };

  dfs(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
