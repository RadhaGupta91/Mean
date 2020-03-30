const http = require('http'); //To create server and handle request/response
var createError = require('http-errors');
var express = require('express');
var path = require('path');  //to resolve static path
var logger = require('morgan'); //for printing info into console
const cors = require('cors');

//mongo connection
const mongoConnection = require('./connect');

//routes
const contactRouter = require('./routes/contact');

//use express
const app = express();
app.use(cors());
//default setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routerSetup
app.use('/contact',contactRouter);

//server setup
const hostname = 'localhost';
const port = 3000;
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});