// 처음에 작성한 코드
function solution(price, money, count) {
  let sum = 0;
  for (let i = 0; i <= count; i++) {
    sum += price * i;
  }

  return money > sum ? 0 : sum - money;
}

console.log(solution(3, 20, 4));
