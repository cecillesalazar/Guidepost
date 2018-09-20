import React, { Component } from 'react'
import { AUTH_TOKEN } from './constants'
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION, LOGIN_MUTATION } from './Mutations';

export class Login extends Component {
  state = {
    login: true,
    password: '',
  }

  render() {
    const { login, username, password } = this.state
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          <input
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="Your username"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Your password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
              mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
              variables={{ username, password }}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <div className="pointer mr2 button" onClick={mutation}>
                  {login ? 'login' : 'create account'}
                </div>
              )}
            </Mutation>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

_confirm = async data => {
  const { token } = this.state.login ? data.login : data.signup
  this._saveUserData(token)
  this.props.history.push(`/`)
}

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}
