const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message');
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

  // socket.emit from admin - welcome to chat
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));
  // socket.broadcast - new user joined from admin
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));


  // listener
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    // emit to every single connection
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('this is from server');
    // send to everyone but me
    // socket.broadcast.emit('newMessage', {
    //   from: newMessage.from,
    //   text: newMessage.text,
    //   createdAt: new Date().getTime()
    // })

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
