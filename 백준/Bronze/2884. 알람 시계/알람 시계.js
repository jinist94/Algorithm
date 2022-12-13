
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function(){
    const fn = (h, m) => {
        let hours = h;
        let minutes = m;

        if(m < 45){
            minutes = 60 - 45 + m;
            hours = h > 0 ? h - 1 : 23;
        } else {
            minutes = m - 45;
        }
        
        console.log(hours, minutes);   
    }
    
    fn(input[0], input[1]);
    process.exit();
})