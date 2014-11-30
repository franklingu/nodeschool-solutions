function Spy(target, method) {
  var tracker = {
    count: 0
  };
  var originalMethod = target[method];
  target[method] = function () {
    tracker.count++;
    return originalMethod.apply(this, arguments);
  };
  return tracker;
}

module.exports = Spy;
