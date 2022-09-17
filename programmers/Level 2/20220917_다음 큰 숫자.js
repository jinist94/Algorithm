function solution(n) {
  const binaryCount = n.toString(2).split('1').length;

  while (true) {
    n++;
    const nextCount = n.toString(2).split('1').length;
    if (nextCount === binaryCount) {
      return n;
    }
  }
}

console.log(solution(78));
// split말고 .match(/1/g)를 사용하는 방법도 있음
