const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = Number(fs.readFileSync(path));


const fn = (num) => {
  let cycle = 0;
  let newNumber = String(num);

  while(true){
    let splitNumber = newNumber.split('').map(Number); 
    let sum = splitNumber[0]; 

    if(splitNumber.length > 1){
      sum = splitNumber[0] + splitNumber[1]; 
    }

    const rightNumber = String(sum)

    newNumber = String(splitNumber[splitNumber.length -1]) + rightNumber[rightNumber.length-1]; 
    cycle++; 

    if(num === Number(newNumber)){
      return cycle;
    }
}
}

console.log(fn(input))