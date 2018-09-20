import React, { Component } from 'react';
import './App.css';
import { Advice } from './Advice';
import { GenerateAdvice } from './GenerateAdvice';
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
          <h1 className="App-title">Guidepost</h1>
        </header>
        <p className="App-intro">
          Your Daily Guidepost
        </p>
        <GenerateAdvice />
        <CreateAdvice />
        <Advice />
      </div>
    );
  }
}

export default App;
