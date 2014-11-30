// use of announomous function in js
function doubleAll(numbers) {
  return numbers.map(function (num) {
    return num * 2;
  });
}

module.exports = doubleAll;
