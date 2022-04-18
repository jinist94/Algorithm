function solution(n) {
  return (n + "")
    .split("")
    .map((item) => {
      return parseInt(item);
    })
    .reverse();
}
console.log(solution(123));
