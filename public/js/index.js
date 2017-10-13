// client
  var socket = io();

  socket.on('connect', function () {
    console.log('yay! connected to server');

    // socket.emit('createMessage', {
    //   from: 'bilbo',
    //   text: 'client script emitted where is my ring?!'
    // });
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });

  socket.on('newMessage', function (message) {
    console.log('newMessage', message);
  });

  // add emitter for acknowlage example.
  // includes a callback function that will execute when message is received

  socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
  }, function (data) {
    console.log('got it: ', data);
  });

// this is ES6 arrow function, only works in Chrome!
// socket.on('connect', () => {
//   console.log('yay! connected to server');
// });
