import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Components/demo';
import Launch from './Components/launch'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path='/launch' component={Launch} />
            <Route path='/demo' component={Demo} />
          </Switch>
      </Router>
    );
  }
}

export default App;
