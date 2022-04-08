// 처음에 작성한 코드
function solution(dartResult) {
  let answer = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(Number(dartResult[i]))) {
      if (dartResult[i - 1] == "1") {
        answer[answer.length - 1] = answer[answer.length - 1] + dartResult[i];
      } else {
        answer.push(Number(dartResult[i]));
      }
    } else {
      let number = answer.pop();
      if (dartResult[i] === "S") number = number ** 1;
      if (dartResult[i] === "D") number = number ** 2;
      if (dartResult[i] === "T") number = number ** 3;
      if (dartResult[i] === "*") {
        number = number * 2;
        if (answer[answer.length - 1]) {
          answer.push(answer.pop() * 2);
        }
      }
      if (dartResult[i] === "#") {
        number = number > 0 ? -number : number;
      }

      answer.push(number);
    }
  }

  return answer.reduce((acc, v) => acc + v, 0);
}
console.log(solution("1D2S#10S")); // 2 + -2 + 10

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 일일히 구현했던 지저분한에서 정규표현식을 사용하여 다시 작성해보았다.

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g); // 숫자로 시작하고 문자열로 끝나는 것들
  console.log(darts);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/), // 3개로 나누기
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
