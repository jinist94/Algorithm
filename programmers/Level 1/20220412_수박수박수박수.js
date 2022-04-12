// 처음 작성한 코드
function solution(n) {
  var answer = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer += "수";
    if (i % 2 === 0) answer += "박";
  }
  return answer;
}

console.log(solution(3));

//+++++++++++++++++++++++++++++++++++++
// repeat으로 반복 후 짝수라면 추가로 문자를 붙이는 방식

function waterMelon(n) {
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
}

console.log(waterMelon(3));
