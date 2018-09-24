const bcrypt = require('bcrypt');

exports.validateLogin = function validateLogin(targetPassword, currentPassword) {
  if (bcrypt.compareSync(targetPassword, currentPassword)) {
    return true;
  } else {
    return false;
  }
}
