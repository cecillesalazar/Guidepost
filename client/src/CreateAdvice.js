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
        <input className="custom-advice-input" type="text" value={ customAdvice } onChange={e => this.setState({customAdvice: e.target.value})} placeholder="The early bird..."/>
        <Mutation mutation={CREATE_ADVICE} variables={{ customAdvice }} update={(store, { data: { post } }) => {
          const state = store.readQuery({ query: FEED_QUERY });
          const newState = [...state.feed, post];
          store.writeQuery({
            query: FEED_QUERY,
            data: {feed: newState}
          });
        }}>
          {createAdvice => <button className="publish-button" onClick={createAdvice}>Publish</button>}
        </Mutation>
      </div>
    )
  }
}
