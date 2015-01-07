function loadUsers(userIds, load, done) {
  var users = [];
  var completed = 0;
  userIds.forEach(function (id, index) {
    load(id, function (user) { // load will be invoked with user perimeter
      users[index] = user;  // putting user to the correct position
      if (++completed >= userIds.length) {
        return done(users);  // invoking done when done
      }
    });
  });
}

module.exports = loadUsers;
