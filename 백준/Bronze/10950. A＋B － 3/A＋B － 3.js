const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line.split(' ').map(Number));
}).on('close', function(){
    const count = input[0][0];
    
    for(let i = 1; i <= count; i++){
        console.log(input[i][0] + input[i][1]);
    }

    process.exit();
});