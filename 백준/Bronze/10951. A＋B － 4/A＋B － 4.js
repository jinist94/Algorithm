const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
while(true) {
    try{
        let numbers = input[i].split(' ');
        console.log(Number(numbers[0]) + Number(numbers[1]))
        i++;    
    } catch {
        break;    
    }
}