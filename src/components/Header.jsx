import React, {Component} from 'react';
import logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="col-sm align-self-center">
              <h1 className="App-title">Mr. Feast!</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
};

export default Header;