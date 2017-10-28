'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var exchangeRouter = require('./router/exchange');
var rateRouter = require('./router/rate');
var cors = require('cors');

// App setup
var app = express();
var PORT = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(cors('*'));

app.use('/exchange', exchangeRouter);
app.use('/rate', rateRouter);

app.listen(PORT, function () {
  console.log('listening ' + PORT + '...');
});