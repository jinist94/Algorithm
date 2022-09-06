function solution(s) {
  let answer = [];
  for (x of s) {
    let str = x.toString(2);
    let bit = str[0] === '1' ? '0' + str : str;
    let arr = [...bit];

    // 짝수의 경우 맨 뒤 숫자는 무조건 0;
    if (x % 2 == 0) {
      answer.push(x + 1);
    } else {
      for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === '0') {
          arr[i] = '1';
          arr[i + 1] = '0';

          break;
        }
      }
      answer.push(parseInt(arr.join(''), 2));
    }
  }
  return answer;
}

console.log(solution([2, 7]));
