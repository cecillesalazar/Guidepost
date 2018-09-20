import React, { Component } from 'react';
import './App.css';
import { Advice } from './Advice';
import { GenerateAdvice } from './GenerateAdvice';
import { CreateAdvice } from './CreateAdvice';

class App extends Component {

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
