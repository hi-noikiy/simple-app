const express = require('express')
const _ = require('lodash')
const request = require('request')

const router = express.Router()

router.get('/:currency', (req, res) => {
  // const lendbookApi = new ApiClient('https://api.bitfinex.com/v1/lendbook/btc');

  const currency = req.params.currency
  request('https://api.bitfinex.com/v1/trades/btcusd', function(
    error,
    response,
    body
  ) {
    if (error) {
      res.send({ error })
    }
    try {
      res.send({ results: JSON.parse(body) })
    } catch (e) {
      res.send({ results: [] })
    }
  })
})

module.exports = router
