// function solution(n) {
//   var answer = 0;

//   const dfs = (sum) => {
//     if (sum > n) {
//       return;
//     }
//     if (sum === n) {
//       answer++;
//       return;
//     }

//     dfs(sum + 1);
//     dfs(sum + 2);
//   };

//   dfs(0);
//   return answer % 1234567;
// }

// 위 코드로 풀었다가 콜스택 오버플로우 발생함..

function solution(n) {
  let arr = Array.from({ length: n + 1 }, () => 0);
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }
  return arr[n];
}

console.log(solution(4));
