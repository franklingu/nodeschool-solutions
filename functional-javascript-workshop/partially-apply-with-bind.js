module.exports = function (namespace) {
  return function () {
    var bindedLog = console.log.bind(null, namespace); // bind namespace with console.log
    bindedLog.apply(null, Array.prototype.slice.call(arguments, 0));
  };
  // another--recommended solution from workshop
  // return console.log.bind(console, namespace);
  // meaning that a boundLog function which is bound to console, is created
  // with namespace as first bound parameter, and returned to the user
};
