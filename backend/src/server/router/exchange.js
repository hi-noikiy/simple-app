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
  database.push({
    id: database.length,
    amount: req.body.amount,
    ratePerDay: req.body.ratePerDay,
    period: req.body.period,
  });

  return res.send({
    id: database.length,
  })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const itemToRemove = _.find(database, item => item.id === id);
  database = _.pull(database, itemToRemove);
  return res.send({
    id,
  })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  database = _.filter(database, (item) => item.id !== id) 

  database.push({
    id: id,
    amount: req.body.amount,
    ratePerDay: req.body.ratePerDay,
    period: req.body.period,
  })

  database = _.sortBy(database, (item) => item.id)

  return res.send({
    id,
  })
})


module.exports = router;
