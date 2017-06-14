import React, { Component } from 'react';
import bear from './goldenbear.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bear Finds Pie</h2>
        </div>
        <div><img src={bear} className="bear" alt="bear"/></div>
        <div className="maze-block one"></div>
        <div className="maze-block two"></div>
      </div>
    );
  }
}

export default App;
