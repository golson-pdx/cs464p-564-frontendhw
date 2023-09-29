const elem = document.querySelector('input');

elem.addEventListener('input', checkPalindrome);


function checkPalindrome() {
    const value = document.querySelector('input').value;
    const result = document.getElementById('result');

    if (isNaN(value)) {
        result.innerText = "Input is not a number, please try again."
        return 1;
    }

    if (value < 0) {
        result.innerText = "Cannot use negative numbers, please try again."
        return 1;
    }

    valueString = value.toString();
    valueReversed = valueString.split("").reverse().join("");
    
    if (valueString == valueReversed) {
        result.innerText = "This is a palindrome."
    } else {
        result.innerText = "Not a palindrome."
    }

    return 0;
};
