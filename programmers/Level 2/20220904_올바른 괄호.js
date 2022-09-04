function solution(s) {
  let stack = [];

  if (s[0] === ')') {
    // 효율성 검사 부분 추가
    return false;
  }

  for (x of s) {
    if (x === '(') {
      stack.push(x);
    } else {
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution('(()))()'));
