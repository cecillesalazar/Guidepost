import React, { Component } from 'react'
import { AUTH_TOKEN } from './constants'
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION, LOGIN_MUTATION } from './Mutations';
import './Login.css';

export class Login extends Component {
  state = {
    login: true,
    password: '',
  }

  render() {
    const { login, username, password } = this.state
    return (
      <div className="login-container">
        <h4 className="login-header">{login ? 'Login' : 'Sign Up'}</h4>
        <div>
          <label className="username-input-label" for="username-input">Username</label>
          <input
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            name="username-input"
            className="username-input"
            placeholder="Your username"
          />
          <br/>
          <label className="password-input-label" for="password-input">Password</label>
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            name="password-input"
            className="password-input"
            placeholder="Your password"
          />
        </div>
        <div>
          <Mutation
              mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
              variables={{ username, password }}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <button type="button" className="login-button" onClick={mutation}>
                  {login ? 'Login' : 'Create Account'}
                </button>
              )}
            </Mutation>
          <div
            className="login-signup-link"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'Need an account?'
              : 'Already have an account?'}
          </div>
        </div>
      </div>
    )
  }

_confirm = async data => {
  const { token } = this.state.login ? data.login : data.signup
  this._saveUserData(token)
  this.props.history.push(`/dashboard`)
}

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}
