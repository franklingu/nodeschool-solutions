function curryN(fn, n) {
  // this solution is not recommended--making use of a partically global args
  // and a hack is need for calling curriyA more than once
  var num = n || fn.length;
  var args = [];
  function internalCurry(arg) {
    // if supplied parameters were enough update the latest--a hack for calling curryA more than once
    if (args.length >= num) {
      args[args.length - 1] = arg;
    } else {
      args.push(arg);
    }
    if (args.length >= num) {
      return fn.apply(null, args);
    }
    return internalCurry;
  }
  return internalCurry;
}

// the recommended solution from the workshop
/**
function curryN(fn, n) {
  n = (typeof n !== "number") ? fn.length : n;
  var getCurriedFn = function (prev) {
    //prev is an array containing all the previous supplied parameters
    return function (arg) {
      var args = prev.concat(arg);
      if (args.length >= n) {
        return fn.apply(this, args);
      } else {
        return getCurriedFn(args);
      }
    }
  }
}
 */

module.exports = curryN;
