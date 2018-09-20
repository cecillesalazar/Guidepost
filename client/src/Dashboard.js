import React, { Component } from 'react';
import './Dashboard.css';
import { Advice } from './Advice';
import { GenerateAdvice } from './GenerateAdvice';
import { CreateAdvice } from './CreateAdvice';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customAdviceButton: false
    }
  }

  toggleAdviceView(bool) {
    this.setState({
      customAdviceButton: bool
    })
  }

  render() {
    if(!this.state.customAdviceButton) {
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
          <div className="custom-advice-button">
            <p>Want to use your own guidepost for todays daily advice?</p>
            <button type="button" onClick={() => this.toggleAdviceView(true)}>Get Advice!</button>
          </div>
        </div>
      );
    } else if(this.state.customAdviceButton) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Guidepost</h1>
          </header>
          <p className="App-intro">
            Your Custom Guidepost
          </p>
          <Advice />
          <CreateAdvice />
          <div className="custom-advice-button">
            <p>Want to use a randomized guidepost for todays daily advice?</p>
            <button type="button" onClick={() => this.toggleAdviceView(false)}>Get Advice!</button>
          </div>
        </div>
      )
    }
  }
}

export default Dashboard;
