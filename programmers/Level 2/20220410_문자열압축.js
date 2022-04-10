// 처음에 바로 못 풀어서 다른 사람의 풀이를 참고했다.
// 아직 조금 헷갈려서 비슷한 문제를 좀 더 풀어봐야 할 것 같다
function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let cnt = 1;
    let tempStr = s.substr(0, i);
    let idx = 0;

    for (idx = i; idx <= s.length; idx += i) {
      let nextStr = s.substr(idx, i);
      if (tempStr === nextStr) {
        cnt += 1;
      } else {
        if (cnt === 1) str = str + tempStr;
        else str = str + cnt + tempStr;

        cnt = 1;
        tempStr = nextStr;
      }
    }

    if (cnt === 1) str = str + tempStr;
    else str = str + cnt + tempStr;
    answer = Math.min(answer, str.length);
  }

  return answer;
}

console.log(solution("aabbaccc"));
