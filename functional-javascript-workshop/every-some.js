// things are getting more and more complicated--:P
function checkUsersValid(goodUsers) {
  return function (someUsers) {
    return someUsers.every(function (user) {  // every user must fulfill the following condition
      return goodUsers.some(function (validUser) {  // which is: id is equal to some entry's id in goodUser
        return user.id === validUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;
