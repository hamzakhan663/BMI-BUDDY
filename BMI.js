let sleep = ms => {  
    return new Promise(resolve => setTimeout(resolve, ms));  
    };  
      
//
sleep(2000).then(() => {
console.log("Welcome to the BMI Buddy❤️‍🩹.")
});
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sleep(2000).then(() => {
    rl.question("Please what is your name?\n",function(name){
        sleep(2000).then(() => {
        console.log("Hello " + name + ", We are pleased to have you here.");
        });
    });
    
});
