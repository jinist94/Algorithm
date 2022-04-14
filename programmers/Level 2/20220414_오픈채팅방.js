// 처음 작성한 코드
// 이 내용으로 제출을 했는데 문제를 잘못 읽고 Leave값이 없는 것을 체크하지 않았다.
// 떠날 때는 닉네임이 없기 때문에 배열의 마지막에 leave를 할 경우 undefined가 뜬다.

function solution(record) {
  let arr = record.map((item) => item.split(" "));
  let id = {};
  let answer = [];

  for (const x of arr) {
    if (x[2]) {
      // 이 부분을 체크하지 못했었다.
      id[x[1]] = x[2];
    }

    if (x[0] === "Enter") {
      answer.push([x[1], "님이 들어왔습니다."]);
    }
    if (x[0] === "Leave") {
      answer.push([x[1], "님이 나갔습니다."]);
    }
  }

  return answer.map((item) => {
    return id[item[0]] + item[1];
  });
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));

// 위의 내용을 좀 더 보기좋게 작성해보았다.

function solution(record) {
  let idMap = {};
  let answer = [];

  record.forEach((item) => {
    const [state, id, name] = item.split(" ");
    if (state !== "Leave") idMap[id] = name;
  });

  record.map((item) => {
    const [state, id, name] = item.split(" ");
    if (state === "Enter") answer.push(`${idMap[id]}님이 들어왔습니다.`);
    if (state === "Leave") answer.push(`${idMap[id]}님이 나갔습니다.`);
  });
  return answer;
}
