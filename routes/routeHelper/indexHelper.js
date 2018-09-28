const dbAccess = require('../../public/scripts/utility/dbAccess');

/** logStatus
* takes a cookie and return false if it is empty and true otherwise.
* the cookie will only be full if they are logged in.
* @param {Object}cookie
*/
exports.logStatus = function logStatus(cookie) {
  console.log('testing log status');
  if (Object.keys(cookie).length === 0) {
    return false;
  }
  if (Object.keys(cookie).length !== 0) {
    return true;
  }
  return false;
};

/** asyncForEach
* an async version of the forEach loop.
* @param {Array}array the array to be iterated through
* @param {Function}callback the callback function to be called on the array
*/
exports.asyncForEach = async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
