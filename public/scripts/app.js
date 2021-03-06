/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

$(document).ready(() => {
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

  const editItem = function editItem() {
    console.log('editing ', this.dataset.item_id);
    $.ajax({
      type: 'PUT',
      url: '/api/item',
      data: {
        item_id: this.dataset.item_id,
      },
    });
  };

  $deleteButton.on('click', deleteItem);
  $editButton.on('click', editItem);
});
