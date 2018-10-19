import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { CREATE_ADVICE } from './Mutations';
import { FEED_QUERY } from './Queries';
import './CreateAdvice.css';

export class CreateAdvice extends Component{
  state = {
    customAdvice: ''
  }

  render(){
    const { customAdvice } = this.state;
    return (
      <div>
          <form onSubmit={e => {
            e.preventDefault();
            this.inputText.value='';
          }}>
          <input
            className="custom-advice-input"
            name="input"
            type="text" value={ customAdvice }
            onChange={e => {
              this.setState({customAdvice: e.target.value})
            }}
            placeholder="The early bird..."
            ref={input => this.inputText = input}
          />
          <Mutation mutation={CREATE_ADVICE} variables={{ customAdvice }} update={(store, { data: { post } }) => {
            const state = store.readQuery({ query: FEED_QUERY });
            const newState = [...state.feed, post];
            store.writeQuery({
              query: FEED_QUERY,
              data: {feed: newState}
            });
          }}>
            {createAdvice => <button type="submit" className="publish-button" onSubmit={createAdvice}>Publish</button>}
          </Mutation>
        </form>
      </div>
    )
  }
}
