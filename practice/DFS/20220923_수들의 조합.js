// n개의 정수중 k개를 뽑는 조합의 합이 M의 배수인 개수가 몇 개 있는지 출력

function solution(k, numbers, m) {
  let answer = 0;
  // let tmp = Array.from({ length: k }); // 조합의 경우 확인하기

  const dfs = (level, start, sum) => {
    if (level === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = start; i < numbers.length; i++) {
        // 중복된 값을 담지 않기 위해 start 값 부터 반복

        // tmp[level] = numbers[i]; // 조합의 경우 확인하기
        dfs(level + 1, i + 1, sum + numbers[i]);
      }
    }
  };

  dfs(0, 0, 0);
  return answer;
}

console.log(solution(3, [2, 4, 5, 8, 12], 6));
