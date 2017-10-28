'use strict';

var express = require('express');
var _ = require('lodash');

var router = express.Router();

var database = _.map(_.range(100), function (i) {
  return {
    id: i + 1,
    amount: Math.random().toFixed(5),
    ratePerDay: Math.random().toFixed(2),
    period: _.random(2, 30, false)
  };
});

router.get('/', function (req, res) {
  var startIndex = Number(req.query.startIndex || 0) || 1;
  var itemsPerRequest = 20;

  var response = _.slice(database, startIndex - 1, startIndex + itemsPerRequest - 1);

  return res.send({
    rates: response
  });
});

router.post('/', function (req, res) {
  database.push({
    id: database.length,
    amount: req.body.amount,
    ratePerDay: req.body.ratePerDay,
    period: req.body.period
  });

  return res.send({
    id: database.length
  });
});

router.delete('/:id', function (req, res) {
  var id = Number(req.params.id);
  var itemToRemove = _.find(database, function (item) {
    return item.id === id;
  });
  database = _.pull(database, itemToRemove);
  return res.send({
    id: id
  });
});

router.put('/:id', function (req, res) {
  var id = Number(req.params.id);

  database = _.filter(database, function (item) {
    return item.id !== id;
  });

  database.push({
    id: id,
    amount: req.body.amount,
    ratePerDay: req.body.ratePerDay,
    period: req.body.period
  });

  database = _.sortBy(database, function (item) {
    return item.id;
  });

  return res.send({
    id: id
  });
});

module.exports = router;