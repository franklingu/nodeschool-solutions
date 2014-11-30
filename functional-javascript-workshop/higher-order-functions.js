// recursion is not a feature of functional programming language. but certainly we can do recursion in js
function repeat(func, num) {
  // the following is a loop solution
  // var i;
  // for (i = 0; i < num; i++) {
  //   func();
  // }

  // recursion solution
  if (num <= 0) {
    return;
  }
  func();
  repeat(func, --num);
}

module.exports = repeat;
