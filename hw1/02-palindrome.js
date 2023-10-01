const elem = document.querySelector("input");

elem.addEventListener("input", checkPalindrome);

function checkPalindrome() {
  const value = document.querySelector("input").value;
  const result = document.getElementById("result");

  if (value != "") {
    if (isNaN(value)) {
      changeStatus("Input is not a number, please try again.", false);
      return 1;
    }

    if (value < 0) {
      changeStatus("Cannot use negative numbers, please try again.", false);
      return 1;
    }
  } else {
    changeStatus("", false);
    return 1;
  }

  valueString = value.toString();
  valueReversed = valueString.split("").reverse().join("");

  if (valueString == valueReversed) {
    changeStatus("This is a palindrome.", true);
  } else {
    changeStatus("Not a palindrome.", false);
  }

  return 0;
}

function changeStatus(text, correct) {
    result.innerText = text;
    if (correct) {
        result.classList.remove("incorrect");
        result.classList.add("correct");
    } else {
        result.classList.remove("correct");
        result.classList.add("incorrect");
    }
    return 0;
}
