import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Advice } from './Advice';
import { CreateAdvice } from './CreateAdvice';

class App extends Component {
  // componentDidMount(){
  //   var query = `{
  //     feed {
  //       customAdvice
  //     }
  //   }`;
  //   fetch('http://localhost:4000', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       query
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res.data));
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CreateAdvice />
        <Advice />
      </div>
    );
  }
}

export default App;
