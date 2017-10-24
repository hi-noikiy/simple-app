const express = require('express');
const _ = require('lodash');

const router = express.Router();

let database = _.map(_.range(100), (i) => ({
  id: i + 1,
  amount: Math.random().toFixed(5),
  ratePerDay: Math.random().toFixed(2),
  period: _.random(2, 30, false),
}))

router.get('/', (req, res) => {
  const startIndex = Number(req.query.startIndex || 0) || 1;
  const itemsPerRequest = 20;

  const response = _.slice(database, startIndex - 1, startIndex + itemsPerRequest - 1);

  return res.send({
    rates: response,
  })
})

router.post('/', (req, res) => {
  database.push(req.body);
  return res.send({
    id: database.length,
  })
})


module.exports = router;
