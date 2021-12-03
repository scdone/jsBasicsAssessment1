console.log("Welcome to the password validator tool!")

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter a password to validate" , function(answer) {
    if (answer.length >= 10 && answer.includes("!") && answer.includes("&")) {
        console.log("Succes! Your password is valid.")
    } else {
        console.log("Error: your password must contain at least 10 characters and both of the following symbols '!' '&'")
    }
})