// 처음 작성한 코드
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) {
      if (a < b) return -1;
      if (a > b) return 1;
    }
  });

  return strings;
}

console.log(solution(["abce", "abcd", "cdx"], 2));

// +++++++++++++++++++++++++++++++++++++
// 다른 사람의 풀이를 보니 좀 더 간단하게 구현할 수 있었다.
// localeCompare을 처음 알게 되었고 a.localeCompare(b)시
// 비교 대상 문자열이 정렬상 전에 오는지,
// 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴한다!
// "a".localeCompare("b") -> -1 리턴

function solution(strings, n) {
  return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}
