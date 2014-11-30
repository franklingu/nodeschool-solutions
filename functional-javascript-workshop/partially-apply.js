function logger(namespace) {
  return function () {  // create a new function, which captures the namespace param in the parent function
    console.log.apply(null, [namespace].concat(Array.prototype.slice.call(arguments)));  // and apply console.log
  };
}

module.exports = logger;
