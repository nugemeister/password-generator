debugger

// Assignment code here (this is the main function)
function main(){
  var mySetting = getSettings()
  var myCharacterSet = buildCharacterSet(mySetting)
  var password = generatePassword(myCharacterSet)

  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}

// Calling the main function to "run"
