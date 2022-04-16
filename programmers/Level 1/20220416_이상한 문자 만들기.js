function solution(s) {
  return s
    .split(" ")
    .map((item) => {
      return item.split("").reduce((acc, v, i) => {
        if (i % 2 == 0) {
          return acc + v.toUpperCase();
        } else {
          return acc + v.toLowerCase();
        }
      }, "");
    })
    .join(" ");
}

console.log(solution("try hello world"));
