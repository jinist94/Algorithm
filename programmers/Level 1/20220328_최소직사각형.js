function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let x of sizes) {
    width = Math.max(width, Math.max(x[0], x[1]));
    height = Math.max(height, Math.min(x[0], x[1]));
  }
  return width * height;
}

console.log(solution(6, [7, 10]));
