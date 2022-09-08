function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  const dfs = (number) => {
    if (number > n) {
      let tmp = '';
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) {
          tmp += i + ' ';
        }
      }

      if (tmp.length > 0) {
        answer.push(tmp.trim());
        return;
      }
    } else {
      ch[number] = 1;
      dfs(number + 1);
      ch[number] = 0; // 위에서 체크한 것 초기화
      dfs(number + 1);
    }
  };
  dfs(1);
  return answer;
}

console.log(solution(3));
