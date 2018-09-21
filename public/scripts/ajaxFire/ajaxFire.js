$(document).ready(() => {

  const login = function() {
    console.log('trying to log in');
  }

  const $loginButton = $('.model-login-button');
  $loginButton.on('submit', login());

});
