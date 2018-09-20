import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { RANDOM_QUERY } from './Queries';

export class GenerateAdvice extends Component{
  render(){
      return (
        <Query query={RANDOM_QUERY}>
        {({ loading, error, data }) => {
          if(loading) return <div>Fetching...</div>
          if(error) return <div>Error {error}</div>
          const randomAdvice = data.advice;
          return <h1>{randomAdvice}</h1>
        }}
        </Query>
      )
  }
}
