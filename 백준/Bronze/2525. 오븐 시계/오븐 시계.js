const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line.split(' ').map((el) => parseInt(el)));
}).on('close', function(){
    const fn = (h, m, time) => {
        let hours = h + Math.floor(time / 60);
        let minutes = m + (time % 60);

        if(minutes >= 60){
            minutes -= 60;
            hours++;
        }

        if(hours >= 24){
            hours -= 24;
        }
    
        console.log(hours, minutes);
    }
    
    fn(input[0][0], input[0][1], input[1][0]);
    process.exit();
})