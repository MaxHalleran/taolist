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
    method: 'POST',
    url: '/api/user',
  }).done((users) => {
    console.log('hi')
    for(user of users) {
      console.log(user);
      $('<div>').text(user.username).appendTo($('body'));
    }
  });
});
