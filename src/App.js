import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Account from './pages/Account';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Landing
              </Link>
            </li>
            <li>
              <Link to="/account">
                Account
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route path="/account" component={Account}/>
        </div>
      </div>
    );
  }
}

export default App;
