// Add your code here
const input = document.querySelector('input');
const body = document.querySelector('#text-body');

// Constant for the text in body so we can add highlights without permanently altering the contents
const originalBodyText = body.innerHTML;

// Checks for all matching instances of word and highlights
const handleKeyDown = function handleKeyDown() {
    const inputValue = input.value;

    // A regular expression to quickly search for matching substrings in the string. Word boundary is added at the end of the substring to limit search to full words and not just characters
    const regEx = new RegExp(`${inputValue}\\b`, 'g');

    // Replace substrings in string with span containing highlight class and text inside
    body.innerHTML = originalBodyText.replaceAll(regEx, `<span class="highlight">${inputValue}</span>`);
};

input.addEventListener('keydown', handleKeyDown);
