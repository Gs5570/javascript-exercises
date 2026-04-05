const removeFromArray = function (arrayParam, ...valueToBeRemoved) {
  let watchArray = [];
  for (let i = 0; i < arrayParam.length; i++) {
    // use watch value to skip the index that has the element that is the value to the  be removed form the array;
    let shouldRemove = false;
    for (let j = 0; j < valueToBeRemoved.length; j++) {
      if (valueToBeRemoved[j] === arrayParam[i]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      watchArray.push(arrayParam[i]);
    }
  }
  return watchArray;
};

// Do not edit below this line
module.exports = removeFromArray;
