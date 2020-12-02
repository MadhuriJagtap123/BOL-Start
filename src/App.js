import React, { Component } from 'react';
import './css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './view/Login/Login'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './view/Home/HomePage'
import Profile from './view/UserProfile/Profile'



class App extends Component {
  render() {
    return (
     <Router>
     
        <Route exact path="/login" component={Login}></Route>
        <Route path="/homePage" component={HomePage}></Route>
        <Route path="/profile" component={Profile}></Route>
     
     </Router>
    )
  }
}

export default App;
