function solution(arr) {
  let isFind = false;
  let max = 0;

  while (!isFind) {
    max += arr[arr.length - 1];
    isFind = arr.every((num) => max % num === 0);
  }

  return max;
}

console.log(solution([1, 2, 3]));
