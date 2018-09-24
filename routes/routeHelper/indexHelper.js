const dbAccess = require('../../public/scripts/utility/dbAccess');

/** logStatus
* takes a cookie and return false if it is empty and true otherwise.
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

exports.asyncForEach = async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
