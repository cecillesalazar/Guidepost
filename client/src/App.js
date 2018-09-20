import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';

class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Route exact path="/" component={Dashboard} />
            </div>
        );
    }
}

export default App;
