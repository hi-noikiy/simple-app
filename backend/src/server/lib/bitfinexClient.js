import WebSocket from 'ws'
import { EventEmitter } from 'events'
import { parseFundingTickerData } from './parsers'

class BitfinexClient extends EventEmitter {
  constructor(apiKey, apiSecretKey) {
    super()
    this.apiKey = apiKey
    this.apiSecretKey = apiSecretKey
    this.websocketURI = 'wss://api.bitfinex.com/ws/2'
    this.channelMap = {} // Map event and channel id
  }

  init() {
    console.log('Initiate Bitfinex Websocket Client')
    this.ws = new WebSocket(this.websocketURI)
    this.ws.on('message', this._handleMessage.bind(this))
    this.ws.on('open', this._onOpen.bind(this))
  }

  _handleMessage(msg) {
    let parsedMsg
    try {
      parsedMsg = JSON.parse(msg)
    } catch (e) {
      console.error('Error in parsing message' + JSON.stringify(e))
    }

    // TODO: handle subscribe events
    // console.log('Received Message')
    // Ignore Heartbeat messages
    if (parsedMsg[1] === 'hb') {
      return
    }
    if (parsedMsg.event === 'info') return
    if (parsedMsg.event === 'subscribed') {
      this.channelMap[parsedMsg.chanId] = parsedMsg
      // Delete key, value pairs that are needed for channelMap
      delete this.channelMap[parsedMsg.chanId].event
      delete this.channelMap[parsedMsg.chanId].chanId
      return
    }
    // console.log(parsedMsg)
    const channelId = parsedMsg[0]
    const payload = parsedMsg[1]
    this.emit(
      'data',
      this.channelMap[channelId],
      parseFundingTickerData(payload)
    )
  }

  _onOpen(e) {
    console.log('Connection is now open, emitting open')
    this.emit('open')
  }

  _send(msg) {
    console.log('Sending :' + JSON.stringify(msg))
    this.ws.send(JSON.stringify(msg))
  }

  subscribe(channelName) {
    this._send({
      event: 'subscribe',
      channel: 'fticker',
      symbol: channelName
    })
  }
}

export default BitfinexClient
