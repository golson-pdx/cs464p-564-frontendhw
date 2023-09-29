const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);


function handleInput() {
    console.log("Valid");
    const value = document.querySelector('input').value;
    valueString = value.toString();
    valueReversed = valueString.split("").reverse().join("");
    console.log("is " + valueString + " == " + valueReversed + "?");
    
    const result = document.getElementById('result');
    if (valueString == valueReversed) {
        result.innerText = "This is a palindrome."
    } else {
        result.innerText = "Not a palindrome."
    }

    return 0;
};
