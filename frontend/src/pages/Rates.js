import React from 'react'
import io from 'socket.io-client'

export default class Rates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdfundingData: {},
      btcFundingData: {}
    }
    this.socket = io.connect('http://localhost:3333')

    this.socket.on('connect', function() {
      console.log('Connected to server... Fetching Funding Data')
    })
  }

  componentDidMount = () => {
    this.socket.on('gotValue', data => {
      console.log(data)
      if (data.currency === 'BTC') {
        this.setState({
          btcFundingData: data
        })
      }
      if (data.currency === 'USD') {
        this.setState({
          usdfundingData: data
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Rates</h1>
      </div>
    )
  }
}
