// 처음에 작성한 코드
function solution(nums) {
  let max = nums.length / 2;
  let select = [];

  nums.forEach((num) => {
    if (!select.includes(num)) {
      select.push(num);
    }
  });

  return select.length >= max ? max : select.length;
}

console.log(solution([3, 3, 3, 2, 2, 2]));

// ++++++++++++++++++++++++++++++++++++++
// Set을 사용하여 중복 제거하는 코드 사용
// Set을 spread연산자로 사용하여 중복을 제거한 배열을 만들 수 있다는 것을 다시 깨달았다.

function solution(nums) {
  let max = nums.length / 2;
  let select = [...new Set(nums)];

  return select.length >= max ? max : select.length;
}
