import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Lending from './pages/Lending'
import Account from './pages/Account'
import Rates from './pages/Rates'
import Trades from './pages/Trades'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/rates">Lending Rates</Link>
            </li>
            <li>
              <Link to="/lending">Request Lending</Link>
            </li>
            <li>
              <Link to="/trades">현재가 정보</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/lending" component={Lending} />
          <Route path="/account" component={Account} />
          <Route path="/rates" component={Rates} />
          <Route path="/trades" component={Trades} />
        </div>
      </div>
    )
  }
}

export default App
