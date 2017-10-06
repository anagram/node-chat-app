const path = require('path');
const express = require('express');

// use path.join
const publicPath = path.join(__dirname, '../public');

// for heroku:
const port = process.env.PORT || 3000;
// const indexPath = path.join(__dirname, '../public/index.html')

var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello Express!</h1>');
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => {
  console.log(`using static! Started up at port ${port}`);
});











// ------- notes-----------
// console.log('OLD WAY:' +  __dirname + '/../public');
// console.log(publicPath);
