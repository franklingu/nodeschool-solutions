function reduce(arr, fn, initial) {
  // assuming fn only taks prev and curr 2 params
  // if (arr.length <= 0) {
  //   return initial;
  // }
  // var curr = arr[0];
  // var remaining = arr.slice(1);
  // return reduce(remaining, fn, fn(initial, curr));

  // the solution below work exactly like array.reduce. also google immediately-invoked function expression (IIFE) for another elegant js feature
  return (function reduceOnce(arrInner, idx, prev) {
    if (idx >= arrInner.length) {
      return prev;
    }
    return reduceOnce(arrInner, idx + 1, fn(initial, arrInner[idx], idx, arrInner));
  }(arr, 0, initial));
}

module.exports = reduce;
