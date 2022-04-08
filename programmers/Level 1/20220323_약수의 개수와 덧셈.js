// 처음 작성한 코드

function solution(left, right) {
  answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }

    count % 2 == 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}
console.log(solution(13, 17));

// ++++++++++++++++++++
// 새롭게 알게 된 사실!
// 제곱근이 정수면 약수의 개수는 홀수이다.
// 아래와 같이 제곱근을 구하고 정수인 지 판별하여 처리할 수도 있다.

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
