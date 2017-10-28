'use strict';

var express = require('express');
var _ = require('lodash');
var request = require('request');

var router = express.Router();

router.get('/:currency', function (req, res) {
  // const lendbookApi = new ApiClient('https://api.bitfinex.com/v1/lendbook/btc');

  var currency = req.params.currency;
  request('https://api.bitfinex.com/v1/trades/btcusd', function (error, response, body) {
    if (error) {
      res.send({ error: error });
    }

    console.log(body);
    try {
      res.send({ results: JSON.parse(body) });
    } catch (e) {
      res.send({ results: [] });
    }
  });
});

module.exports = router;