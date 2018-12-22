import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const ccxt = require('ccxt')
const bitfinex = new ccxt.bitfinex();

console.log(ccxt);
console.log(bitfinex);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with BOTLI
          </a>
        </header>
      </div>
    );
  }
}

export default App;
