const express = require('express');

const router = express.Router();

let database = [{
  exchangePair: 'BTC/USD',
  exchangeRate: '1.24',
}, {
  exchangePair: 'BTC/KRW',
  exchangeRate: '54.32',
}]


router.get('/', (req, res) => {
  return res.send({
    rates: database,
  })
})

router.post('/', (req, res) => {
  database.push(req.body);
  return res.send({
    rates: database,
  })
})

module.exports = router;
