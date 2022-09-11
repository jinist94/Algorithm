// 순열 구하기
// 10 이하의 자연수 numbers가 주어지면 M개를 뽑아 일렬로 나열하는 방법을 모두 출력
// 한번 뽑은 것이 중복으로 들어가면 안됨

function solution(numbers, m) {
  let answer = [];
  let tmp = [];
  let check = Array.from({ length: numbers.length }, () => 0);

  const dfs = (level) => {
    if (level >= m) {
      answer.push([...tmp]); // 깊은 복사
      return;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (check[i] === 1) {
          continue;
        } else {
          tmp[level] = numbers[i];
          check[i] = 1;
          dfs(level + 1);
          check[i] = 0; // * 다시 돌아올 때 체크한 것을 풀어주어야 함
        }
      }
    }
  };

  dfs(0);

  return answer;
}

console.log(solution([3, 6, 9, 5], 2));
