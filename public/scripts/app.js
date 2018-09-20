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
  $.ajax({
    method: 'GET',
    url: '/api/user',
  }).done((users) => {
    for(user of users) {
      $('<div>').text(user.username).appendTo($('body'));
    }
  });
});
