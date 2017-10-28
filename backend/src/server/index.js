const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const exchangeRouter = require('./router/exchange')
const rateRouter = require('./router/rate')
const cors = require('cors')
import morgan from 'morgan'
import BitfinexClient from './lib/bitfinexClient'
require('dotenv').config()

// App setup
const app = express()
const PORT = process.env.PORT || 3333

app.use(bodyParser.json())
app.use(cors('*'))
app.use(morgan('combined'))

app.use('/exchange', exchangeRouter)
app.use('/rate', rateRouter)

// app.listen(PORT, () => {
//   console.log(`listening ${PORT}...`)
// })
console.log('whats good!!!')

const bf = new BitfinexClient()
bf.init(process.env.API_KEY, process.env.API_SECRET)

bf.on('open', () => {
  bf.subscribe('BTC')
  bf.subscribe('USD')
})
// console.log(bf.ws)

bf.on('data', (channelMetaData, data) => {
  console.log(channelMetaData)
  console.log(data)
  if (
    channelMetaData.channel === 'ticker' &&
    channelMetaData.currency === 'BTC'
  ) {
    console.log('emitting btc data to client')
  }
  if (
    channelMetaData.channel === 'ticker' &&
    channelMetaData.currency === 'USD'
  ) {
    console.log('emitting usd data to client')
  }
})
