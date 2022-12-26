const array = Array.from({ length: 10000 }, () => 1);

for (let i = 1; i <= 10000; i++) {
  const number = i
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), i);

  if (number <= 10000) {
    array[number] = 0;
  }
}

array.forEach((v, i) => {
  if (i === 0) return;
  if (v === 1) {
    console.log(i);
  }
});