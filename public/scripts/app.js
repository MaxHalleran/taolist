/* eslint-disable */

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
// $(() => {
//   console.log('ajax fired');
//   $.ajax({
//     method: 'GET',
//     url: '/api/user',
//     data: {
//       username: 'Alice',
//       password: 'password',
//     }
//   }).done((users) => {
//     console.log('hi')
//     console.log(users);
//   });
// });



$(document).ready(() => {
  const $settingsForm = $('#settings');
  $( "#settings" ).click(function() {
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

  // const $logout = $('#logout');
  // $( "#logout" ).click(function() {
  //   alert("alerttripped")
  // });

  $("#logout").on("click", function(){
    $.ajax({
      type: 'POST',
      url: '/logout',
    }).then(function(){
      console.log("post to /logout");
    })
  });

  const $newListButton = $('#newlistbut');
  const $newListName = $('#nlist');

  const createNewList = function createNewList() {
    console.log($newListName.val());
    $.ajax({
      type: 'POST',
      url: '/api/list',
      data: {
        listName: $newListName.val(),
      }
    })
      .then(console.log('Finished'));
  }

  $( "#newlistbut" ).on('click', createNewList);

  const $settingsGetList = $('.modal-settings-get-list');
  const $settingsGetMultipleList = $('.modal-settings-get-multiple-list');

  const settingsGetListBut = function $settingsGetListBut() {
    event.preventDefault();
    console.log('single');

    $.ajax({
      type: 'GET',
      url: `/api/list/${$('#listid').val()}`,
    })
      .then((list) => {
        console.log(list);
      })
  }

  const settingsGetMultipleListBut = function $settingsGetMultipleListBut() {
    event.preventDefault();
    console.log('multiple');

    $.ajax({
      type: 'GET',
      url: `/api/list/user/${$('#listid').val()}`,
    })
      .then((list) => {
        console.log(list);
      })
  }

  $settingsGetList.on('click', settingsGetListBut);
  $settingsGetMultipleList.on('click', settingsGetMultipleListBut);

  const $makeItem = $('.modal-settings-make-item');
  const $getItem = $('.modal-settings-get-item');

  const makeItem = function makeItem() {

  }

  const getItem = function getItem() {

  }

  $makeItem.on('click', makeItem);
  $getItem.on('click', getItem);

});
