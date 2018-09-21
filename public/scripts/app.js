// $(() => {
//   $.ajax({
//     method: 'GET',
//     url: '/api/user'
//   }).done((users) => {
//     for(user of users) {
//       $('<div>').text(user.username).appendTo($('body'));
//     }
//   });
// });
$(() => {
  console.log('ajax fired');
  $.ajax({
    method: 'GET',
    url: '/api/user',
    data: {
      username: 'Alice',
      password: 'password',
    }
  }).done((users) => {
    console.log('hi')
    console.log(users);
  });
});



$(document).ready(() => {



const $settingsForm = $('#settings');
$( "#settings" ).click(function() {
  alert('settings')
  $('#settingsModal').modal()
});
const $signInForm = $('#sign-in');
$( "#sign-in" ).click(function() {
  $('#loginModal').modal()
});
const $registerForm = $('#register');
$( "#register" ).click(function() {
  $('#registerModal').modal()
});
const $logout = $('#logout');
$( "#logout" ).click(function() {
  alert("alerttripped")
});
const $newListButton = $('#newlistbut');
$( "#newlistbut" ).click(function() {
  alert( "newlisttripped." );
});

});
