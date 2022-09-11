function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = i;
    if (sum === n) {
      answer++;
    }
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
  return answer;
}

// 다른 사람의 풀이
// 약수를 이용하면 for문 한개로 처리를 할 수 있다.
// 주어진 숫자의 약수 중 홀수가 정답과 동일

function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}

console.log(solution(15));
