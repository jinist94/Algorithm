// 3으로 나눈 나머지 숫자가
// 1이면 1,
// 2면 2,
// 0이면 4로 변환되는 패턴

function solution(n) {
  let answer = "";
  const numArr = [4, 1, 2];

  while (n) {
    answer = numArr[n % 3] + answer;

    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
}

console.log(solution(3));
