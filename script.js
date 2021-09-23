// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var uppercase



return "password"
}

// TODO: define what characters are to be used for each selection
// TODO: check to see how many characters are to be used 8 to 128
// TODO: create propts so that user can go though and select characters wanted
//        choices lowercase, uppercase, numeric, and/or special characters
// TODO: confirm that at lease one character type has been selected
// TODO: after all criteria is selected a password should be generated and displayed 
//        in an alert or written to the page



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
