const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io')


// use path.join
const publicPath = path.join(__dirname, '../public');
// for heroku:
const port = process.env.PORT || 3000;
// const indexPath = path.join(__dirname, '../public/index.html')

var app = express();
var server = http.createServer(app);
// a web sockets server:
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from:  'gollum',
    text: 'server startup emit : what is cheese, precious?',
    createdAt: 123
  });

  // listener
  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
    var stampedMessage = newMessage;
    stampedMessage.createdAt = 345;
    socket.emit('newMessage', stampedMessage);
  });
  // register event
  socket.on('disconnect', () => {
    console.log('user disconnected, sniff');
  });
});

// change from app.listen to server.listen
server.listen(port, () => {
  console.log(`Started io <> on server up at port ${port}`);
});











// ------- notes-----------
// console.log('OLD WAY:' +  __dirname + '/../public');
// console.log(publicPath);
