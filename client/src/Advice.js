import React, {Component} from 'react'
import { Query } from 'react-apollo';
import { FEED_QUERY } from './Queries';

export class Advice extends Component{
  render(){
      return (
        <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if(loading) return <div>Fetching...</div>
          if(error) return <div>Error {error}</div>
          const adviceList = data.feed;
          return <ul>{adviceList.map(advice => <li key={advice.id}>{advice.customAdvice}</li>)}</ul>
        }}
        </Query>
      )
  }
}
