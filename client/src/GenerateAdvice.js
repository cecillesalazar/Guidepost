import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { RANDOM_QUERY } from './Queries';
import './GenerateAdvice.css';

export class GenerateAdvice extends Component{
  render(){
      return (
        <Query query={RANDOM_QUERY}>
        {({ loading, error, data }) => {
          if(loading) return <div>Fetching...</div>
          if(error) return <div>Error {error}</div>
          const randomAdvice = data.advice;
          return <h1 className="random-advice">{`"${randomAdvice}"`}</h1>
        }}
        </Query>
      )
  }
}
