import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { Login } from './Login'

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Header />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default App;
