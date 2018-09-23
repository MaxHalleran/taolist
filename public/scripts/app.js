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

  const $getItem = $('.modal-settings-get-item');
  const $makeItem = $('.modal-settings-make-item');
  const $itemId = $('#itemid');

  const getItem = function getItem() {
    event.preventDefault();
    console.log('getItem button clicked');

    $.ajax({
      type: 'GET',
      url: `/api/item/${$('#itemid').val()}`,
    })
      .then((list) => {
        console.log(list);
      })
  }

  const makeItem = function makeItem() {
    event.preventDefault();
    console.log('makeItem button clicked');

    $.ajax({
      type: 'POST',
      url: `/api/item`,
      data: {
        itemName: $('#itemid').val(),
      }
    })
      .then((item) => {
        console.log(item);
      })
  }

  $getItem.on('click', getItem);
  $makeItem.on('click', makeItem);

});
