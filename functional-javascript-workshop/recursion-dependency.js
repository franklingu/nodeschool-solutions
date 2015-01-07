function getDependencies(tree, result) {
  result = result || [];
  var dep;
  if (tree && tree.hasOwnProperty('dependencies')) {
    var dependencies = tree['dependencies'];
    for (var key in dependencies) {
      getDependencies(dependencies[key], result);
      dep = key + '@' + dependencies[key]['version'];
      if (result.indexOf(dep) === -1) {
        result.push(dep);
      }
    }
  }
  return result.sort();
}

module.exports = getDependencies;
