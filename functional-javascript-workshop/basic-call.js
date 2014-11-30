function duckCount() {
  return Array.prototype.slice.call(arguments, 0).filter(function (item) {  // transfer to array object and then use filter method
    return Object.prototype.hasOwnProperty.call(item, 'quack');
  }).length;
}

module.exports = duckCount;
