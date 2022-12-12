const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');

const fn = (num) => {
    return ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) ? 1 : 0;
}
console.log(fn(input));