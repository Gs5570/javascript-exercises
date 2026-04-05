const repeatString = function (string, num) {
  let numWatch = 0;
  let newString = '';
  let stdOut = 'ERROR';

  if (num > 0) {
    while (numWatch < num) {
      newString += string;
      numWatch++;
    }
    return newString;
  } else if (num == 0) {
    return newString;
  } else {
    if (string == '') {
      return newString;
    }
    return stdOut;
  }
};

// Do not edit below this line
module.exports = repeatString;
