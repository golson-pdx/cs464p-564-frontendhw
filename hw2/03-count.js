// Exercise 03 - Count
const input = document.querySelector('input');
const body = document.querySelector('#text-body');

// Constant for the text in body so we can add highlights without permanently altering the contents
const originalBodyText = body.innerHTML;

// Checks for all matching instances of word and highlights
const handleKeyDown = function handleKeyDown() {
    const inputValue = input.value.replace(/\s/g, '');

    // A regular expression to quickly search for matching substrings in the string. Word boundaries are added at the beginning & end of the substring to limit search to full words and not just characters
    const regEx = new RegExp(`\\b(${inputValue})\\b`, 'ig');

    // Replace substrings in string with span containing highlight class and text inside
    body.innerHTML = originalBodyText.replaceAll(regEx, `<span class="highlight">$1</span>`);
};

input.addEventListener('keydown', handleKeyDown);
