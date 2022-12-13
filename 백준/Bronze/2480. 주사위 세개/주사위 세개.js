const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function(){
    const fn = (a, b, c) => {
        let money = 0;
        
        if(a === b && a === c){
            money = 10000 + (a * 1000);
        } else if(a === b || a === c){
            money = 1000 + (a * 100);
        } else if(b === c){
            money = 1000 + (b * 100);
        } else {
            money = Math.max(a,b,c) * 100;
        }
    
        return money;
    }
    console.log(fn(input[0], input[1], input[2]));
    process.exit();
})