const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);





function calculateGrade(marks) {
    if(marks > 79) {
        return "A";
    }
    if(marks >= 60 && marks <= 79) {
        return "B";
    }
    if(marks >= 49 && marks <=59) {
        return "C";
    }
    if(marks >= 40 && marks <= 49) {
        return "D"
    }
    return "E"
}
//console.log(calculateGrade(49));


function main() {
    rl.question("What is your mark\n ", (score) => {
        let s = parseInt(score);
        if(isNaN(s)) {
            console.log("Please enter a number \n ");
            main();
            return;
        }
    let grade = calculateGrade(s);    
    console.log("Your grade is: " + grade + "\n");
    rl.close();
  });
}

main();