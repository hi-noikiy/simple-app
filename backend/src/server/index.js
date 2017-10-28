const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const exchangeRouter = require('./router/exchange')
const rateRouter = require('./router/rate')
const cors = require('cors')
import morgan from 'morgan'
import http from 'http'
import socketIO from 'socket.io'
import BitfinexClient from './lib/bitfinexClient'

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3333
const server = http.createServer(app)
var io = socketIO(server)

// App setup
app.use(express.static(__dirname + '/node_modules'))
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
})

app.use(bodyParser.json())
app.use(cors('*'))
app.use(morgan('combined'))

app.use('/exchange', exchangeRouter)
app.use('/rate', rateRouter)

server.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})
console.log('whats good!!!')

const clientConnections = []

const bf = new BitfinexClient()
bf.init(process.env.API_KEY, process.env.API_SECRET)

bf.on('open', () => {
  bf.subscribe('BTC')
  bf.subscribe('USD')
})
// console.log(bf.ws)

bf.on('data', (channelMetaData, data) => {
  const payloadToSendToClient = {
    channel: 'ticker'
  }

  if (
    channelMetaData.channel === 'ticker' &&
    channelMetaData.currency === 'BTC'
  ) {
    payloadToSendToClient['currency'] = 'BTC'
  }
  if (
    channelMetaData.channel === 'ticker' &&
    channelMetaData.currency === 'USD'
  ) {
    payloadToSendToClient['currency'] = 'USD'
  }

  clientConnections.map(connection => {
    connection.emit('gotValue', Object.assign({}, payloadToSendToClient, data))
  })
})

io.on('connection', function(client) {
  console.log('Client connected...')

  clientConnections.push(client)

  client.on('join', function(data) {
    console.log(data)
  })
})
