const bcrypt = require('bcrypt');

exports.validateLogin = function(targetPassword, currentPassword) {
  if (bcrypt.compareSync(currentPassword, targetPassword)) {
    return true;
  } else {
    return false;
  }
}
