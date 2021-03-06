import React, { Component } from 'react'

export class WinnerCard extends Component {
  onClick = (e) => {
    window.location.reload();
  }
  render() {
    return (
      <div name = 'cardContainer' 
           style = {styles.containerStyle} >
        <div name = 'winnerCard'
             style = {styles.cardStyle}>
            <span style = {{textAlign: 'center'}}>
              <h1>congratulations</h1>
              <h2 
                style = {{color: this.props.winner}}>
                {this.props.winner}
              </h2>
              <h3>Your are the winner!</h3>
            </span>
          
          <button 
          onClick = {this.onClick}
          style = {styles.buttonStyle}>
            Reset Board
          </button>
        </div>
       
      </div>
    )
  }
}


///////////STYLES/////////////
const styles = {
  containerStyle: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },

  cardStyle: {
    height: '75vh',
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: 'solid 1px black',
    borderRadius: '28px',
    backgroundColor: 'slategray'
  },

  buttonStyle: {
    width: '10rem',
    height: '3rem',
    border: 'none',
    borderRadius: '45px',
    backgroundColor: 'white',
    fontSize: '1.5rem',
  }
}

export default WinnerCard
