

// create arrays for lowercase, uppercase, numbers, special characters

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];

// instantiate user input for the Password

var inputLength = "";
var inputLowerCase;
var inputUpperCase;
var inputNumbers;
var inputSpecialChar;

//Define generatePassword
function generatePassword() {
    // Prompt user for password criteria
        // Confirm char length: 8-128 char range
    inputLength = parseInt(prompt("How many characters would you like your password? (Passwords needs to be 8-128 characters."));

        while (inputLength >= 129 || inputLength <= 7) {
            alert("Try Again! Password length needs to be between 8-128");
            inputLength = parseInt(prompt("How many characters would you like your password? (Passwords needs to be 8-128 characters."));
        }

    // Ask parameters
         inputLowerCase = confirm("Add lowercase characters?");
         inputUpperCase = confirm("Add uppercase characters?");
         inputNumbers = confirm("Add numbers?");
         inputSpecialChar = confirm("Add special characters?");
        
        while (inputLowerCase == false && inputUpperCase == false && inputNumbers == false && inputSpecialChar == false)
        {alert("One criteria must be selected.");
            inputLowerCase = confirm("Add lowercase characters?");
            inputUpperCase = confirm("Add uppercase characters?");
            inputNumbers = confirm("Add numbers?");
            inputSpecialChar = confirm("Add special characters?");
            } 

        var randomPassword = [];
        var results = [];

        if (inputLowerCase) {randomPassword = randomPassword.concat(lowercase);}
        if (inputUpperCase) {randomPassword = randomPassword.concat(uppercase);}
        if (inputNumbers) {randomPassword = randomPassword.concat(numbers);}
        if (inputSpecialChar) {randomPassword = randomPassword.concat(specialChar);}

        for (var i = 0; i < inputLength; i++) {
            results = results + randomPassword[Math.floor(Math.random() * randomPassword.length)];
        }
        return results;
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
