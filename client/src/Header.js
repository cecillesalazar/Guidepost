import React, { Component } from 'react'
import { AUTH_TOKEN } from './constants'
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

export class Header extends Component {

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div>
        <div className="header-container">
          <div className="logo-header">Guidepost</div>
        </div>
        <div className="get-started-container">
          {authToken ? (
            <div
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              Log Out
            </div>
          ) : (
            <Link to="/login">
              Start here!
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export const HeaderWithRouter = withRouter(Header);
