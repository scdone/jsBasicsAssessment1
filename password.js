console.log("Welcome to the password validator tool!")

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password to validate" , function(answer) {
    if (answer.length >= 10) {
        console.log("Succes! Your password is valid.")
    } else if (answer.length < 10){
        console.log("Error: your password needs to contain at least 10 characters")
    }
})