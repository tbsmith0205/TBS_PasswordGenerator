//Creating variables for characters used in password generation
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChars = [
  " ",
  "!",
  "'",
  "@",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword() {
  var passwordConstruction = " ";
  var passwordAdd = " ";

  var userInputLength = prompt(
    "How many characters would you like your password to have? Note: Password must contain between 8 and 128 characters"
  );

  while (userInputLength < 8 || userInputLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    userInputLength();
  }

  // userInputLength =

  var userInputLowercase = confirm(
    "Would you like to have lowercase letters in your password?"
  );

  if ((userInputLowercase = true)) {
    passwordAdd += lowerCase;
  }

  var userInputUppercase = confirm(
    "Would you like to have uppercase letters in your password?"
  );
  if ((userInputUppercase = true)) {
    passwordAdd += upperCase;
  }
  var userInputSpecialChars = confirm(
    "Would you like to include special characters in your password?"
  );
  if ((userInputSpecialChars = true)) {
    passwordAdd += specialChars;
  }

  var userInputNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  if ((userInputNumbers = true)) {
    passwordAdd += numbers;
  }

  if (
    userInputLowercase === false &&
    userInputUppercase === false &&
    userInputSpecialChars === false &&
    userInputNumbers === false
  ) {
    alert(
      "Note: You must choose have at least one of lowercase letters, uppercase letters, special characters, or numbers selected to generate a password."
    );
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
