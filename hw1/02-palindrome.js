// Define elements from page that get used by these functions
const elem = document.querySelector('input');
const result = document.getElementById('result');

// Checks if input is a palindrome by converting to a string and reversing
const checkPalindrome = function checkPalindrome() {
  const value = elem.value;

  // First check if input is valid
  if (value != '') {
    if (isNaN(value)) {
      changeStatus('Input is not a number, please try again.', false);
      retur1;
    }

    if (value < 0) {
      changeStatus('Cannot use negative numbers, please try again.', false);
      return;
    }
  } else {
    // Set message to default
    changeStatus('', false);
    return;
  }

  // Convert to string and reverse in new constant
  const valueString = value.toString();
  const valueReversed = valueString.split('').reverse().join('');

  // Check if values match
  if (valueString === valueReversed) {
    changeStatus('This is a palindrome.', true);
  } else {
    changeStatus('Not a palindrome.', false);
  }

  return;
};

// Function to update the status of the plaindrome checking form using Bootstrap classes
const changeStatus = function changeStatus(text, correct) {
  result.innerText = text;
  if (correct) {
    result.classList.remove('text-danger');
    result.classList.add('text-success');
  } else {
    result.classList.remove('text-success');
    result.classList.add('text-danger');
  }
  return;
};

// Add listener for input change
elem.addEventListener('input', checkPalindrome);
