// 처음 코드

// function solution(progresses, speeds) {
//   let answer = [];
//   let count = 0;
//   let deployDay = 0;

//   progresses.forEach((progress, idx) => {
//     if (count === 0) {
//       deployDay = Math.ceil((100 - progress) / speeds[idx]);
//       count += 1;
//     } else {
//       let current = Math.ceil((100 - progress) / speeds[idx]);
//       if (deployDay >= current) {
//         count += 1;
//       } else {
//         answer.push(count);
//         count = 1;
//         deployDay = current;
//       }
//     }

//     if (idx === progresses.length - 1) {
//       answer.push(count);
//     }
//   });
//   return answer;
// }

function solution(progresses, speeds) {
  let answer = [0];
  let maxDay = Math.ceil((100 - progresses[0]) / speeds[0]);

  for (let i = 0, j = 0; i < progresses.length; i++) {
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (day <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = day;
      answer[++j] = 1;
    }
  }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
