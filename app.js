const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const postsRoute = require('./routes/post');
const testRoute = require('./routes/test');

app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use('/test', testRoute);

module.exports = app;

