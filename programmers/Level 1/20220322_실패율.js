// 처음에 작성한 코드

function solution(N, stages) {
  let answer = [];
  let fail = new Array(N).fill(0);
  let challenge = new Array(N).fill(0);

  //실패한 스테이지, 도전한 스테이지를 각 배열에 담는다.
  for (let i = 0; i < stages.length; i++) {
    let cnt = 0;
    while (cnt <= stages[i] - 1) {
      if (cnt > N - 1) break;
      if (cnt < stages[i] - 1) {
        challenge[cnt]++;
      }
      if (cnt === stages[i] - 1) {
        challenge[cnt]++;
        fail[cnt]++;
      }
      cnt++;
    }
  }

  // answer객체에 스테이지(idx)와 실패율을 담는다.
  for (let i = 0; i < N; i++) {
    answer[i] = { idx: i + 1, ratio: fail[i] / challenge[i] };
  }

  // 내림차순으로 정렬한다.
  answer.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1;
    } else if (a.ratio < b.ratio) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  // 정렬한 배열에 스테이지만 남도록 한다.
  return answer.map((x) => x.idx);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// +++++++++++++++++++++++++++++++++++++++++++++++++
// 답 제출 후 filter를 사용하여 스테이지를 나누고
// sort를 간결하게 작성한 것을 보고 다시 풀어보았다.

function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    // stages에서 스테이지 i에 도전한 사람의 명 수 구하기
    let challenge = stages.filter((x) => x >= i).length;
    // statges에서 스테이지 i에 실패한 사람의 명 수 구하기
    let fail = stages.filter((x) => x === i).length;

    // 구한 값을 토대로 answer에 해당 스테이지와 실패율 추가
    answer.push([i, fail / challenge]);
  }

  // 이미 작은 번호순서대로 정렬이 되어있기 때문에
  // 아래와 같이 ratio를 기준으로 내림차순 정렬 시 ratio가 같다면 작은번호 순서대로 정렬이 된다.
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((x) => x[0]);
}
