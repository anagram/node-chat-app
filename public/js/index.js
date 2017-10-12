
  var socket = io();

  socket.on('connect', function () {
    console.log('yay! connected to server');

    socket.emit('createEmail', {
      to: 'jen@ex.com',
      text: 'hey guys this is a new email'
    });
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });

  socket.on('newEmail', function (email) {
    console.log('New email', email);
  });


// this is ES6 arrow function, only works in Chrome!
// socket.on('connect', () => {
//   console.log('yay! connected to server');
// });
