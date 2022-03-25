// 처음 작성한 코드
function solution(d, budget) {
  let count = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let x of d) {
    if (sum + x > budget) break;
    sum += x;
    count++;
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));

// +++++++
// reduce를 이용한 방식도 있었다.
// 코드가 깔끔해 보여서 시도해보았지만 예산이 초과되었음에도 d를 전부 돈다는 차이가 있다.

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
