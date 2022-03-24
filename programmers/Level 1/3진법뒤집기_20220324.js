// 처음 작성한 코드

function solution(n) {
  return Number.parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45));

// split을 사용하지 않고 [...n.toString(3)]으로도 처리 할 수 있다는 것을 알았다.
