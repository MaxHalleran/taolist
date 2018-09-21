const bcrypt = require('bcrypt');

exports.validateLogin = function validateLogin(targetPassword, currentPassword) {
  console.log('validateLogin is firing');
  console.log(targetPassword, currentPassword);
  if (bcrypt.compareSync(currentPassword === targetPassword)) {
    return true;
  } else {
    return false;
  }
}
