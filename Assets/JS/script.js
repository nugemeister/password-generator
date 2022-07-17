debugger
// Assignment code here (this is the main function)

function generatePassword() {

    // Providing all available output
    var numbers = "0123456789".split("");
    var specialCharacters = ["!","~","`","@","#","$","%","^","&","*","-","+","=","?",".",","];
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Input for user's password length
  var length = passwordLength();

  function passwordLength() {
    var length = prompt("Please enter the selected length for your password. This value must be from 8 to 128 characters.");
    if (length === null){
      return;
    }
    else if (length <= 8 || length >= 128 || isNaN(length)) {
      alert("Please enter a length between 8 and 128 characters.");
      return passwordLength();
    } else {
      return length;
    }
  }

// Returns user if they cancel operation for pw entry
  if (length === undefined) {
    return "Your Secure Password";
  }

  console.log(length)
  
  // Collecting the set of settings the user prefers
  var mySetting = getSettings()

  function getSettings() {
    var useUpper = window.confirm("Would you like to use uppercase letters?\n(OK-Yes Cancel-No)");
    var useLower = window.confirm("Would you like to use lowercase letters?\n(OK-Yes Cancel-No)");
    var useNumbers = window.confirm("Would you like to use numbers?\n(OK-Yes Cancel-No)");
    var useSpecial = window.confirm("Would you like to use special characters?\n(OK-Yes Cancel-No)");
  
    if (!useUpper && !useLower && !useNumbers && !useSpecial) {
  
      // Alert the user that they must choose at least one character type
      window.alert("You must select at least one character type to generate your password.");
      return getSettings();
    } else {
      return [useUpper, useLower, useNumbers, useSpecial];
    }
  }

  // Build the main array for pulling the characterset / password given user setting preference(s)
  var characterSet = [];

  if (mySetting[0]) {
    characterSet = characterSet.concat(upperCaseLetters);
  }

  if (mySetting[1]) {
    characterSet = characterSet.concat(lowerCaseLetters);
  }

  if (mySetting[2]) {
    characterSet = characterSet.concat(numbers);
  }

  if (mySetting[3]) {
    characterSet = characterSet.concat(specialCharacters);
  }

  console.log(characterSet)

// Generate the randomized password

var newPassword = createPassword();

function createPassword(){
  var newPassword = "";
  for (var i = 0; i < length; i++) {
    var choice = Math.floor(Math.random() * characterSet.length);
    newPassword = newPassword.concat(characterSet[choice]);
  }

  console.log(newPassword)
}
// Return the generated password
  return newPassword;
}

// Starter Code

var generateBtn = document.querySelector("#generate");

// Logging new generated password value to the #password value

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
