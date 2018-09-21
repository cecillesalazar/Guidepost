import React, { Component } from 'react';
import './Dashboard.css';
import { Advice } from './Advice';
import { GenerateAdvice } from './GenerateAdvice';
import { CreateAdvice } from './CreateAdvice';

export class Dashboard extends Component {
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
        <div className="dashboard">
          <p className="dashboard-intro">
            Your Daily Guidepost
          </p>
          <GenerateAdvice />
          <CreateAdvice />
          <div className="custom-advice-button">
            <p className="custom-advice-label">Want to use your own guidepost for today?</p>
            <button className="get-guidepost-button" type="button" onClick={() => this.toggleAdviceView(true)}>Get Guidepost!</button>
          </div>
        </div>
      );
    } else if(this.state.customAdviceButton) {
      return (
        <div className="dashboard">
          <p className="dashboard-intro">
            Your Custom Guidepost
          </p>
          <Advice />
          <CreateAdvice />
          <div className="custom-advice-button">
            <p className="custom-advice-label">Want to use a randomized guidepost for today?</p>
            <button className="get-guidepost-button" type="button" onClick={() => this.toggleAdviceView(false)}>Get Guidepost!</button>
          </div>
        </div>
      )
    }
  }
}
