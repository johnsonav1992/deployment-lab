const express = require("express");
const cors = require("cors");
const app = express();
const controller = require('./controller.js');
const {getHomepage, getCSS, getJS} = controller;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('client'))

const port = process.env.PORT || 4000;

app.get('/', getHomepage);
app.get('/css',getCSS);
app.get('/js', getJS);
app.listen(port,console.log(`Server running on ${port}`))

