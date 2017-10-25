import React from 'react'
import ApiClient from 'helpers/apiClient';


const lendbookApi = new ApiClient('https://api.bitfinex.com/v1/lendbook/btc');

export default class Rates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bids: [],
      asks: [],
    }
  }

  componentDidMount() {
    lendbookApi.get()
      .then((res) => console.log(res))
  }
  render() {
    return (
      <div>
        Rates
      </div>
    );
  }
}
