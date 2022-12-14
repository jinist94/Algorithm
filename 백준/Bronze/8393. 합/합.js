const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function(line){
    input = line;
}).on('close', function(){
    let sum = 0;
    
    for(let i = 1; i <= input; i++){
        sum += i;
    }
    
    console.log(sum);

    process.exit();
});