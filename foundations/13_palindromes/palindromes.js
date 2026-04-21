const palindromes = function (value) {
  const cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, '');
  let isPalindromes = false;
  let valueArr = cleaned.split('');
  let reverseArr = [];
  let newValueArr = '';
  let newReverseArr = '';

  for (let i = valueArr.length - 1; i >= 0; i--) {
    reverseArr.push(valueArr[i]);
  }

  newValueArr = valueArr.join('');
  newReverseArr = reverseArr.join('');

  console.log(newValueArr);
  console.log(newReverseArr);

  if (newValueArr.localeCompare(newReverseArr) == 0) {
    isPalindromes = true;
    return isPalindromes;
  } else {
    return isPalindromes;
  }
};
// Do not edit below this line
module.exports = palindromes;
