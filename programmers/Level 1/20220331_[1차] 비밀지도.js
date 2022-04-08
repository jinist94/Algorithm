// 처음에 작성한 코드
// 처음엔 복잡하게 작성을 했었다.
function solution(n, arr1, arr2) {
  var answer = [];

  const toBinary = (item) => {
    let num = item.toString(2);
    while (num.length < n) {
      num = "0" + num;
    }
    return num;
  };

  arr1 = arr1.map(toBinary);
  arr2 = arr2.map(toBinary);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] + arr2[i][j] == 0) {
        answer[i] = answer[i] ? answer[i] + " " : " ";
      } else {
        answer[i] = answer[i] ? answer[i] + "#" : "#";
      }
    }
  }

  return answer;
}

// ++++++++++++++++++++++++++++++++++++++++++
// 두 값중 하나라도 1이면 1을 반환하는 비트연산자(|)를 알게되어 적용해보았다.
// 0을 추가하는 addZero함수는 repeat으로 간단하게 처리해보았다.
// replace를 문자열을 변경해보았다.

function solution(n, arr1, arr2) {
  const addZero = (n, s) => {
    return "0".repeat(n - s.length) + s;
  };

  return arr1.map((v, i) => {
    return addZero(n, (v | arr2[i]).toString(2))
      .replace(/0/g, " ")
      .replace(/1/g, "#");
  });
}

// replace 부분은 replace(/0|1/g, a => +a ? "#": " ") 으로 한번 더 간소화 시킬 수 있다.
