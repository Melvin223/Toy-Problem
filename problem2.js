const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);



function checkSpeed(speed) {
    if(speed < 70) {
        return "OK";
    }

    let diff = speed -70;
    let point = Math.floor(diff / 5);

    if(point > 12) {
        return "Licence suspended";
    }
    
    return "Points deducted " + point;
}

function main() {
    rl.question("Enter your speed\n ", (speed) => {
        let s = parseInt(speed);
        if(isNaN(s)) {
            console.log("Please enter a number \n ");
            main();
            return;
        }
    console.log(checkSpeed(s));
    rl.close();
  });
}

main();