function solution(a, b) {
  var answer = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let today = new Date(2016, a - 1, b);

  return answer[today.getDay()];
}

console.log(solution(5, 24));
