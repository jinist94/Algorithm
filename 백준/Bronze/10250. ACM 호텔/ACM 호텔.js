const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const [n, ...array] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

array.forEach((item) => {
  const H = Number(item[0]);
  const W = Number(item[1]);
  const number = Number(item[2]);

  const YY = number % H === 0 ? H : number % H;
  const X = Math.ceil(number / H);

  const XX = X > 9 ? X : `0${X}`;

  console.log(YY + String(XX));
});
