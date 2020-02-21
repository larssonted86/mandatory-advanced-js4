import React, { Component } from 'react'
import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Board from './Board'

export class App extends Component {
  render() {
    return (
      <Router>
        <Route path = '/' exact>
          <Board />
        </Route>
        
      </Router>
      
    )
  }
}

export default App
