// 많은 실패 끝에 통과한 코드..
// 정렬 시 sort() 안에 오름차순인지 내림차순인지 코드 작성하기

function solution(n, lost, reserve) {
  let cnt = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let fake = lost.filter((item) => reserve.includes(item));

  lost = lost.filter((item) => !fake.includes(item));
  reserve = reserve.filter((item) => !fake.includes(item));

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j] - 1) {
        cnt++;
        reserve.shift();
        break;
      }
      if (lost[i] === reserve[j] + 1) {
        cnt++;
        reserve.shift();
        break;
      }
    }
  }
  return n - lost.length + cnt;
}

console.log(solution(5, [2, 3, 5], [2, 4]));

//
/// 제출 후 객체 방식으로 구현한 코드가 인상 깊어서 보고서 따라 구현해 본 코드
// 정렬도 안해도 되고 의도에 맞는 코드같았다.

function solution(n, lost, reserve) {
  let answer = 0;
  let students = {};

  //체육복 개수 1로 초기화
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  //잃어버린 학생의 체육복 개수 차감
  lost.forEach((num) => {
    students[num] -= 1;
  });

  // 여벌을 가진 학생의 체육복 개수 추가
  reserve.forEach((num) => {
    students[num] += 1;
  });

  for (let i = 1; i <= n; i++) {
    if (students[i] == 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] == 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }

  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }

  return answer;
}
