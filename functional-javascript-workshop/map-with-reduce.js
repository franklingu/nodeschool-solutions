module.exports = function (arr, fn) {
  return arr.reduce(function (prev, curr, idx, a) {
    // take a notice here: Array.prototype.push will modify the original array and will return new lendth intead
    // prev.push(fn(curr, idx, a)); return prev;
    return prev.concat(fn(curr, idx, a));
  }, []);
};
