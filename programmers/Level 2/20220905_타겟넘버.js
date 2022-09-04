function solution(numbers, target) {
  var answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      // 만족하는 조건 입력
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
