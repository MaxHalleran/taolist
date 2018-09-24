/** logStatus
* takes a cookie and return false if it is empty and true otherwise.
* @param {Object}cookie
*/
module.exports = {
  logStatus: function(cookie) {
  console.log('testing log status');
  if (Object.keys(cookie).length === 0) {
    console.log('Logged out: ', cookie);
    return false;
  }
  if (Object.keys(cookie).length !== 0) {
    console.log('logged in: ', cookie);
    return true;
  }
  return false;
},

  
}

