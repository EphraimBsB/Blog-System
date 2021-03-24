const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const postRoute = require('./routes/posts.route');
app.use(express.json())
app.use('/posts', postRoute);

module.exports = app;