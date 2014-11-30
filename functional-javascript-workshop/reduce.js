function countWords(inputWords) {
  return inputWords.reduce(function (prevValue, currValue) {
    if (prevValue[currValue]) {
      prevValue[currValue]++;
    } else {
      prevValue[currValue] = 1;
    }
    // can be shortened as prevValue[currValue] = prevValue[currValue] ? prevValue[currValue] + 1 : 1;
    // or preValue[currValue] = (prevValue || 0) + 1;

    return prevValue;
  }, {});
}

module.exports = countWords;
