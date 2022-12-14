const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;

rl.on('line', function(line){
    number = line;
}).on('close', function(){
    const fn = (n) => {
        for(let i = 1; i <= 9; i++){
            console.log(`${n} * ${i} = ${n*i}`)
        }
    }
    fn(number);
    process.exit();
})