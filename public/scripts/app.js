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
  }).done((users) => {
    console.log('hi')
    for(user of users) {
      console.log(user);
      $('<div>').text(user.username).appendTo($('body'));
    }
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
  alert( "register." );
});
const $newTask = $('#new-task');
$( "#new-task" ).click(function() {
  alert( "new-task." );
});
const $newListButton = $('#newlistbut');
$( "#newlistbut" ).click(function() {
  alert( "newListbut." );
});

});

