// 처음 작성한 코드
function solution(str) {
  let p = 0;
  let y = 0;

  str = str.toLowerCase();
  console.log(str);
  for (const x of str) {
    if (x === "p") p++;
    if (x === "y") y++;
  }

  return p !== y ? false : true;
}

console.log(solution("pPoooyY"));

// ++++++++++++++++++++++++++++++++
// 정규식 표현으로 구현한 위 코드

function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
