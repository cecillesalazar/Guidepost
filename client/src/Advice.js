import React, {Component} from 'react'
import { Query } from 'react-apollo';
import { FEED_QUERY } from './Queries';
import './Advice.css';

export class Advice extends Component{
  render(){
      return (
        <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if(loading) return <div>Fetching...</div>
          if(error) return <div>Error {error}</div>
          const adviceList = data.feed;
          const filteredAdvice = adviceList.map(advice => advice.customAdvice);
          return <h1 className="custom-guidepost">{`"${filteredAdvice[Math.floor(Math.random() * filteredAdvice.length)]}"`}</h1>
        }}
        </Query>
      )
  }
}
