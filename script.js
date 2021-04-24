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

//array to store all of the characters the user wants to include
var finalPW = [];

function generatePassword() {
  var userInputLength = parseInt(
    prompt(
      "How many characters would you like your password to have? Note: Password must contain between 8 and 128 characters"
    )
  );

  while (userInputLength < 8 || userInputLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    // returns user to prompt to select how many characters they want
    userInputLength = parseInt(
      prompt(
        "How many characters would you like your password to have? Note: Password must contain between 8 and 128 characters"
      )
    );
  }

  // boolean value stored
  var userInputLowercase = confirm(
    "Would you like to have lowercase letters in your password?"
  );

  // if they want lower case characters it concats the lowercase array to the array of password characters (finalPW)
  if (userInputLowercase === true) {
    finalPW = finalPW.concat(lowerCase);
  }

  var userInputUppercase = confirm(
    "Would you like to have uppercase letters in your password?"
  );
  if (userInputUppercase === true) {
    finalPW = finalPW.concat(upperCase);
  }
  var userInputSpecialChars = confirm(
    "Would you like to include special characters in your password?"
  );
  if (userInputSpecialChars === true) {
    finalPW = finalPW.concat(specialChars);
  }

  var userInputNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  if (userInputNumbers === true) {
    finalPW = finalPW.concat(numbers);
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

  // holds the randomly chosen characters for password generation
  var passwordConstruction = [];

  // for loop accessing finalPW array and using math.floor to generate a random number on that index
  for (var i = 0; i < userInputLength; i++) {
    var ranChar = finalPW[Math.floor(Math.random() * finalPW.length)];
    // adding the argument above to the passwordConstruction array
    passwordConstruction.push(ranChar);
  }

  // returns the randomly generated password
  return passwordConstruction.join("");
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
