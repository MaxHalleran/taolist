/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

$(document).ready(() => {
  // Get the header
  // var header = $(".container-fluid");
  
  // // Get the offset position of the navbar
  // var sticky = header.outerHeight();

//   $(window).scroll(function(){
//     console.log("--------------window.pageYOffset", window.pageYOffset, "sticky", sticky);
//     if ($(window).scrollTop() >= 240) {
//         header.addClass('sticky');
//     }
//     else {
//         header.removeClass('sticky');
//     }
// });

//   window.onscroll = function() {myFunction()};
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.addClass("sticky");
//   } else {
//     header.removeClass("sticky");
//   }
// }

// myFunction();
  const $settingsForm = $('#settings');
  $( "#settings" ).click(function() {
    $('#settingsModal').modal();
  });

  const $signInForm = $('#sign-in');
  $( "#sign-in" ).click(function() {
    $('#loginModal').modal()
  });

  const $registerForm = $('#register');
  $( "#register" ).click(function() {
  $('#registerModal').modal()
  });

  const logout = function logout() {
    event.preventDefault();
    console.log('logged out button clicked');
    $.ajax({
      type: 'POST',
      url: '/logout',
   })
  };

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
      });
  };

  const settingsGetMultipleListBut = function $settingsGetMultipleListBut() {
    event.preventDefault();
    console.log('multiple');

    $.ajax({
      type: 'GET',
      url: `/api/list/user/${$('#listid').val()}`,
    })
      .then((list) => {
        console.log(list);
      });
  };

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
      });
  };

  const makeItem = function makeItem() {
    event.preventDefault();
    // console.log($('#new-task').val());

    $.ajax({
      type: 'POST',
      url: `/api/item`,
      data: {
        itemName: $('.itemid').val(),
        listid: $('#multi-input').val(),
      },
    })
      .then((item) => {
        console.log(item);
      });
  };

  $getItem.on('click', getItem);
  $makeItem.on('click', makeItem);

  const $deleteButton = $('.deleteButton');
  const $editButton = $('.editButton');

  const deleteItem = function deleteItem() {
    console.log('deleting ', this.dataset.item_id);
    $.ajax({
      type: 'DELETE',
      url: '/api/item',
      data: {
        item_id: this.dataset.item_id,
      },
    });
  };

  const showEditForm = function(){
    $(`.editItem${this.dataset.item_id}`).show();
  }
  
  $editButton.on('click', showEditForm);
  
  $deleteButton.on('click', deleteItem);
});
