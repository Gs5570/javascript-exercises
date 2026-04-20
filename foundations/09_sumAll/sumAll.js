const sumAll = function (min, max) {
  let numRange = [];
  let total = 0;
  let stdOut = 'ERROR';

  if (typeof min !== 'number' || typeof max !== 'number') {
    return stdOut;
  } else if (min < max) {
    if (min < 0) {
      return stdOut;
    }
    if (!Number.isInteger(min)) {
      return stdOut;
    }
    if (min >= 0 || max >= 0) {
      for (let i = min; i <= max; i++) {
        numRange.push(i);
      }
      for (let j = 0; j < numRange.length; j++) {
        total += numRange[j];
      }
      return total;
    }
  } else if (min > max) {
    for (let i = max; i <= min; i++) {
      numRange.push(i);
    }
    for (let j = 0; j < numRange.length; j++) {
      total += numRange[j];
    }
    return total;
  } else if (min < 0 || max < 0) {
    return stdOut;
  } else {
    return stdOut;
  }
};

// Do not edit below this line
module.exports = sumAll;
