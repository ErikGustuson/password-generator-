// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


//define what characters are to be used for each selection
function generatePassword() {
  var characters = ""
  var lowercases = "abcdefghijklmnopqrstuvwxyz"
  var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"



// TODO: confirm that at lease one character type has been selected
// TODO: after all criteria is selected a password should be generated and displayed 
//        in an alert or written to the page



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
