const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
    const fn = (x, y) => {
        if(x >= 0){
            return y >= 0 ? 1 : 4;
        } else {
            return y >= 0 ? 2 : 3;
        }
    };
    console.log(fn(input[0], input[1]));
    process.exit();
})