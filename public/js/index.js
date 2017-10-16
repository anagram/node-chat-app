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
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);

  });

  // add emitter for acknowlage example.
  // includes a callback function that will execute when message is received
  jQuery('#message-form').on('submit', function (e) {
    console.log('jQuery function');
    // override the defaut behaviour
    e.preventDefault();

    socket.emit('createMessage', {
      from: 'User',
      text: jQuery('[name=message]').val()
    }, function (data) {
      console.log('got it: ', data);
    });
  });

  // socket.emit('createMessage', {
  //   from: 'New User',
  //   text: 'says Hi'
  // }, function (data) {
  //   console.log('got it: ', data);
  // });
