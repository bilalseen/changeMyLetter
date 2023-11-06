let resetChoiceButton = document.getElementById("choiceResetButton");
let radioVowel = document.getElementById("radioVowel");
let radioConsonant = document.getElementById("radioConsonant");
let isVowelChecked = false;
let isConsonantChecked = false;

radioVowel.addEventListener("change", function () {
  isVowelChecked = radioVowel.checked;
  isConsonantChecked = radioConsonant.checked;
});

radioConsonant.addEventListener("change", function () {
  isVowelChecked = radioVowel.checked;
  isConsonantChecked = radioConsonant.checked;
});

resetChoiceButton.addEventListener("click", function () {
  radioVowel.checked = false;
  radioConsonant.checked = false;
  isVowelChecked = false;
  isConsonantChecked = false;
});

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeText();
  });

function changeText() {
  let userInput = document.getElementById("userTextInput").value;
  let userChangeCharacter = document.getElementById(
    "userChangeCharacter"
  ).value;
  let userAddCharacter = document.getElementById("userAddCharacter").value;

  // user input and user add character control
  if (isNaN(userInput) && isNaN(userAddCharacter)) {
    let inputArray = userInput.split("");

    if (isVowelChecked) {
      // We are here because the vowel radio button is checked.
      // Change only vowel letters
      for (let i = 0; i < inputArray.length; i++) {
        if (isVowel(inputArray[i])) {
          inputArray[i] = userAddCharacter;
        }
      }
    } else if (isConsonantChecked) {
      // If consonant radio button is selected, change only consonant letters
      for (let i = 0; i < inputArray.length; i++) {
        if (isConsonant(inputArray[i])) {
          inputArray[i] = userAddCharacter;
        }
      }
    } else {
      // We are here because the user entered another letter for change
      if (isNaN(userChangeCharacter)) {
        for (let i = 0; i < inputArray.length; i++) {
          if (inputArray[i].toLowerCase() === userChangeCharacter) {
            inputArray[i] = userAddCharacter;
          }
        }
      } else {
        alert("Please enter the correct input");
      }
    }

    let resultText = inputArray.join("");
    document.getElementById("resultText").innerHTML = resultText;
  } else {
    alert("Please enter the correct input");
  }
}

function isVowel(letter) {
  var vowelLetters = "aeıioöuü";
  return vowelLetters.includes(letter.toLowerCase());
}

function isConsonant(letter) {
  const consonants = "bcçdfgğhjklmnprsştvyzxqw";
  return consonants.includes(letter.toLowerCase());
}
