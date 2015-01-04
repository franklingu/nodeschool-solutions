function loadUsers(userIds, load, done) {
  var users = userIds.map(function (userId) {
    var temp = load(userId);
    console.log(temp);
    return load(userId);
  });
  //console.log(users);
  return users;
}

module.exports = loadUsers;
