/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

$(document).ready(() => {
  console.log('Loaded', Date());

  if ($.session.user_id == null) {
    console.log('No session');

  }
  if ($.session) {
    console.log('user logged in');

  }
});
