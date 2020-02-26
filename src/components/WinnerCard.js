import React, { Component } from 'react'

export class WinnerCard extends Component {
  onClick = (e) => {
    window.location.reload();
  }
  render() {
    return (
      <div>
        <h1>congratulations to {this.props.winner}, you are the champion!</h1>
        <button onClick = {this.onClick}>Reset Board</button>
      </div>
    )
  }
}

export default WinnerCard
