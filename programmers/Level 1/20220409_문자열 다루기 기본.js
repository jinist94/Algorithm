function solution(s) {
  var answer = true;

  for (const x of s) {
    if (isNaN(Number(x))) {
      return (answer = false);
    }
  }

  if (s.length !== 4 && s.length !== 6) {
    return (answer = false);
  }
  return answer;
}

console.log(solution("1234"));
