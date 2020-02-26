import React, { Component } from 'react'
import '../css/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Board from './Board'
import WinnerCard from './WinnerCard';

export class App extends Component {
  render() {
   return (
     <Router>
      <Route path = '/' exact>
        <Board />
      </Route>
      <Route path = '/winnercard'>
        <WinnerCard />
      </Route>        
     </Router>      
    )
  }
}

export default App
