function solution(brown, yellow) {
  let total = brown + yellow;

  for (let i = 1; i < total; i++) {
    for (let j = i; j < total; j++) {
      let yellowCount = (i - 2) * (j - 2);
      let brownCount = total - yellowCount;

      if (i * j === total && yellowCount === yellow && brownCount === brown) {
        return [Math.max(i, j), Math.min(i, j)];
      }
    }
  }
}

console.log(solution(10, 2));
