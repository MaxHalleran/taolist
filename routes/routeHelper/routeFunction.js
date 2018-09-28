const bcrypt = require('bcrypt');

/** validateLogin
* checks the users attempt at loggin in against the stored password
* @param {String} targetPassword
* @param {String} currentPassword
*/
exports.validateLogin = function validateLogin(targetPassword, currentPassword) {
  if (bcrypt.compareSync(targetPassword, currentPassword)) {
    return true;
  } else {
    return false;
  }
}
