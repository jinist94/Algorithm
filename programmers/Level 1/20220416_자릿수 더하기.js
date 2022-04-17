function solution(s) {
  let sum = 0;
  for (const x of String(s)) {
    sum += parseInt(x);
  }
  return sum;
}

console.log(solution(123));

// reduce를 사용하는 방식도 있다.
// (s+"").split("").reduce((acc, n)=> acc + parsInt(n), 0);
