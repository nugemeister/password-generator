// Assignment code here
var generateBtn = document.querySelector("#generate");

// Print password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// What sort of data does my application need to work?

// Storing all needed characters in variables.

// numbers
var numbers = "0123456789".split("");

// special characters
var specialCharacters = ["!","~","`","@","#","$","%","^","&","*","-","+","=","?",".",","];

// lower case letters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");

// upper case letters
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


// What sorts of actions/tasks does my code need to complete?

// Generate Password
function generatePassword() {

  // local variables
  var characterSet = [];
  var generatePassword = "";

  var length;

  var useUpper;
  var useLower;
  var useNumbers;
  var useSpecial;

// Prompt the user for their password length and store it in a variable

length = window.prompt( "Please enter the selected length for your password.", "" );


// Validate the password length and make sure it's a number between or equal to 8 and 128

// If password length doesn't meet criteria, return blank

if (length <= 8 && length >++= 128) {
  return "";
}

if ()
    useUpper = window.confirm( "Would you like to use uppercase letters?\n(OK-Yes Cancel-No)" );
   
    useLower = window.confirm( "Would you like to use lowercase letters?\n(OK-Yes Cancel-No)" );

    useNumbers = window.confirm( "Would you like to use numbers?\n(OK-Yes Cancel-No)" );

    useSpecial = window.confirm( "Would you like to use special characters?\n(OK-Yes Cancel-No)" );

// validate that >= 1 type of character has been selected
if (useUpper || useLower || useNumbers || useSpecial) {

  // assemble a character set from the selected variables (i.e.; character types)
  if (useUpper) {
    characterSet = characterSet.concat( upperCaseLetters );

  }

  if (useLower) {
    characterSet = characterSet.concat( lowerCaseLetters );

  }

  if (useNumbers) {
    characterSet = characterSet.concat( numbers );

  }

  if (specialCharacters) {
    characterSet = characterSet.concat( specialCharacters );

  }
}
  }



// Prompt the user for if they want special characters and store it in a variable

}

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


