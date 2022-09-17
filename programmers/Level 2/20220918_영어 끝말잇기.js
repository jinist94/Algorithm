// function solution(n, words) {
//   const answer = [];
//   let count = 0;
//   let last = words[0][0];

//   for (let i = 0; i < words.length; i++) {
//     if (i % n === 0) {
//       count++;
//     }

//     if (answer.includes(words[i]) || last !== words[i][0]) {
//       return [(i % n) + 1, parseInt(i/n)]; //
//     } else {
//       answer.push(words[i]);
//       last = words[i][words[i].length - 1];
//     }
//   }

//   return [0, 0];
// }

// 처음에 위처럼 풀었는데 count 값과 last값을 삭제하기위해 아래처럼 다시 풀었다.

function solution(n, words) {
  const answer = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (answer.includes(words[i]) || answer[i - 1][answer[i - 1].length - 1] !== words[i][0]) {
      return [(i % n) + 1, parseInt(i / n + 1)]; // 나눔으로써 count값 삭제
    } else {
      answer.push(words[i]);
      last = words[i][words[i].length - 1];
    }
  }

  return [0, 0];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
