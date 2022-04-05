// 처음 작성한 코드
function solution(a, b) {
  let answer = 0;
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5));

// ++++++++++++++++++++++++++++++++
// 다른 분들의 코드 중 가우스 공식을 사용한 것을 알게 되었다.
// (a+b)*(Math.abs(b-a)+1)/2;
