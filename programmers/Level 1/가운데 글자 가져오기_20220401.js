// 처음 작성한 코드
function solution(s) {
let n = s.length;

return n % 2 === 0 ? s[(n/2)-1]+s[n/2] : s[Math.floor(n/2)];
}

console.log(solution("qwer"));


//+++++++++++++++++++++++++++++++++++++++++++++++
// substr을 사용하여 구현하는 코드를 보고 적용해보았다.
function solution(s) {
  let n = s.length;

  return s.substr(Math.ceil(n/2) -1 , n % 2 === 0 ? 2 : 1)
}
  