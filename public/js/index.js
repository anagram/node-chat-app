// client
  var socket = io();

  socket.on('connect', function () {
    console.log('yay! connected to server');

    socket.emit('createMessage', {
      from: 'bilbo',
      text: 'client script emitted where is my ring?!'
    });
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });

  socket.on('newMessage', function (message) {
    console.log('newMessage', message);
  });


// this is ES6 arrow function, only works in Chrome!
// socket.on('connect', () => {
//   console.log('yay! connected to server');
// });
