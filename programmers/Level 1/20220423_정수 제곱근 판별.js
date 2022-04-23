function solution(n) {
  let x = Math.sqrt(n);

  if (x % 1 !== 0) {
    // %를 통해 실수 판별
    return -1;
  }

  return x > 0 ? (x + 1) ** 2 : -1;
}
console.log(solution(3));
