import React, { Component } from 'react';
import './css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './view/Login/Login'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './view/Home/HomePage'



class App extends Component {
  render() {
    return (
     <Router>
     
        <Route exact path="/login" component={Login}></Route>
        <Route path="/homePage" component={HomePage}></Route>
     
     </Router>
    )
  }
}

export default App;
