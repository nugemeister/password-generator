debugger

// Assignment code here (this is the main function)

function writePassword(){
  var mySetting = getSettings()
  var myCharacterSet = buildCharacterSet(mySetting)
  var password = generatePassword(myCharacterSet)

  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Calling the main function to "run"

function getSettings() {
  var useUpper = window.confirm("Would you like to use uppercase letters?\n(OK-Yes Cancel-No)");
  var useLower = window.confirm("Would you like to use lowercase letters?\n(OK-Yes Cancel-No)");
  var useNumbers = window.confirm("Would you like to use numbers?\n(OK-Yes Cancel-No)");
  var useSpecial = window.confirm("Would you like to use special characters?\n(OK-Yes Cancel-No)");

  if (!useUpper && !useLower && !useNumbers && !useSpecial) {

    // Alert the user that they must choose at least one character type
    window.alert("You must select at least one character type to generate your password.");
    return{};
  }

  return {
    useUpper: useUpper,
    useLower: useLower,
    useNumbers: useNumbers,
    useSpecial: useSpecial,
  }
}

// Build the main characterset

function buildCharacterSet(mySetting) {
  var numbers = "0123456789".split("");
  var specialCharacters = ["!","~","`","@","#","$","%","^","&","*","-","+","=","?",".",","];
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  var characterSet = [];

  if (getSettings.useUpper) {
    characterSet = characterSet.concat(upperCaseLetters);
  }

  if (getSettings.useLower) {
    characterSet = characterSet.concat(lowerCaseLetters);
  }

  if (getSettings.useNumbers) {
    characterSet = characterSet.concat(numbers);
  }

  if (getSettings.useSpecial) {
    characterSet = characterSet.concat(specialCharacters);
  }
  
  return characterSet
}

// Generate the randomized password

function generatePassword(characterSet) {
  var length = parseInt(window.prompt("Please enter the selected length for your password.",""));

  if (length <= 8 || length >= 128) {
    return password = "";
  }

  for  (var i = 0; i < length; i++) {
    password += characterSet[Math.floor(Math.random()*characterSet.length)];
    console.log(password);
  }

  // Return the generated password
  return password;
}