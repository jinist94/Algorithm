function solution(arr) {
  let min = Math.min(...arr);

  let answer = arr.filter((num) => num !== min);
  return answer.length > 1 ? answer : [-1];
}
console.log(solution([4, 3, 2, 1]));
