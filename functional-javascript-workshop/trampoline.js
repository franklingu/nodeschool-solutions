function repeat(operation, num) {
  // if executed num times already, return null as the next step
  if (num <= 0) {
    return;
  }
  // else just return next step. the next step is about invoking operation and repeat with
  // operation and num as arguments. the next step is not invoked inside repeat. the next step
  // will be returned and control is in trampoline
  return function () {
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  var next = fn;
  // if there is next step, invoke it and update it with the return value as the latest next step
  while (next) {
    next = next();
  }
}

module.exports = function (operation, num) {
  trampoline(function () {
    return repeat(operation, num);
  });
}
