const dbAccess = require('../../public/scripts/utility/dbAccess');

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
<<<<<<< HEAD
},

  
}

=======
};

exports.asyncForEach = async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
};
>>>>>>> 7a15bbb09f2299ce51483917923348573bbcb7ba
