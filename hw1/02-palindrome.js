const elem = document.querySelector("input");

elem.addEventListener("input", checkPalindrome);

function checkPalindrome() {
  const value = document.querySelector("input").value;
  const result = document.getElementById("result");

  if (value != "") {
    if (isNaN(value)) {
      result.innerText = "Input is not a number, please try again.";
      changeStatus(false);
      return 1;
    }

    if (value < 0) {
      result.innerText = "Cannot use negative numbers, please try again.";
      changeStatus(false);
      return 1;
    }
  } else {
    result.innerText = "";
    return 1;
  }

  valueString = value.toString();
  valueReversed = valueString.split("").reverse().join("");

  if (valueString == valueReversed) {
    result.innerText = "This is a palindrome.";
    changeStatus(true);
  } else {
    result.innerText = "Not a palindrome.";
    changeStatus(false);
  }

  return 0;
}

function changeStatus(correct) {
    if (correct) {
        result.classList.remove("incorrect");
        result.classList.add("correct");
    } else {
        result.classList.remove("correct");
        result.classList.add("incorrect");
    }
    return 0;
}
