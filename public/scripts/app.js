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

const $newTaskForm = $('#settings');
$( "#settings" ).click(function() {
  alert( "Handler for .click() called." );
});
const $settingsForm = $('#sign-in');
$( "#sign-in" ).click(function() {
  alert( "Handler for .click() called." );
});
const $registerForm = $('#register');
$( "#register" ).click(function() {
  alert( "Handler for .click() called." );
});
const $newTask = $('#new-task');
$( "#new-task" ).click(function() {
  alert( "Handler for .click() called." );
});



});

