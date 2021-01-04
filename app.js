const express = require('express');

const app = express();
const PORT = 5000;
var countries_router = require('./routes/Countries');
var cors = require('cors')

app.use(cors())
app.use('/', countries_router);

app.listen(PORT);

module.exports = app;