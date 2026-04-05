const reverseString = function (inputToBeReversed) {
  let watchArray = [];
  let newStrings = inputToBeReversed.split('');
  console.log(newStrings);

  for (let i = newStrings.length - 1; i >= 0; i--) {
    watchArray.push(newStrings[i]);
  }
  return watchArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
