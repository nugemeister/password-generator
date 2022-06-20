debugger

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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

  var password = "";

// Prompt the user for their password length and store it in a variable

length = parseInt(window.prompt( "Please enter the selected length for your password.", "" ));

// Validate the password length and make sure it's a number between or equal to 8 and 128

// If password length doesn't meet criteria, return blank

if (length <= 8 || length >= 128) {
  return password = "";
}

    // Prompt the user to determine if they want uppercase characters and store it in a variable

    useUpper = window.confirm( "Would you like to use uppercase letters?\n(OK-Yes Cancel-No)" );
   
    // Prompt the user to determine if they want lowercase characters and store it in a variable

    useLower = window.confirm( "Would you like to use lowercase letters?\n(OK-Yes Cancel-No)" );

    // Prompt the user to determine if they want numbers and store it in a variable

    useNumbers = window.confirm( "Would you like to use numbers?\n(OK-Yes Cancel-No)" );

    // Prompt the user to determine if they want special characters and store it in a variable

    useSpecial = window.confirm( "Would you like to use special characters?\n(OK-Yes Cancel-No)" );


  // validate that >= 1 type of character has been selected (i.e.; at least one character choice is true)

  if (!useUpper && !useLower && !useNumbers && !useSpecial) {
    // Alert the user that they must choose at least one character type
    window.alert("You must select at least one character type to generate your password.");
    return "";
  }

  // Declare a new empty array to store the characters we want to use


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

    // DECLARE an empty string to store the password characters


    // for (var i = 0; i < passwordLength; i++ )
    for(var i=0; i < length; i++) {
      password += characterSet[Math.floor(Math.random()*characterSet.length)];
      console.log(password);
    }
    // alert(newPassword);

    return password;

    // randomly select characters


    // add those characters to a building password phrase / string;

    // RETURN the completed string;


}



// Get references to the #generate element


