const express = require("express");
const cors = require("cors");
const app = express();
const controller = require('./controller.js');
const {getHomepage, getCSS, getJS, getRollbar} = controller;
require('dotenv').config();

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'f6fa480d554e4760ac11ba0f768be238',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.use(cors());
app.use(express.json());
app.use(express.static('client'))

const port = process.env.PORT || 4000;

app.get('/', getHomepage);
app.get('/rollbar', getRollbar);
app.get('/css',getCSS);
app.get('/js', getJS);
app.listen(port,console.log(`Server running on ${port}`))

