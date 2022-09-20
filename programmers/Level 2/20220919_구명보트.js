function solution(people, limit) {
  var answer = 0;

  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (left === right) {
      return ++answer;
    }
    if (people[left] + people[right] > limit) {
      right--;
      answer++;
    } else {
      left++;
      right--;
      answer++;
    }
  }

  return answer;
}

console.log(solution([70, 80, 50], 100));

// 내림차순으로 정렬 후 가장 가벼운사람 + 가장 무거운사람의 몸무게를 확인하여
// limit보다 클 경우 count하고 다음으로 무거운 사람과 비교하는 방식
