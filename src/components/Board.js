import React, { Component } from 'react'
import Discs from './Discs.js'


export class Board extends Component {

 state = {
  board: new Array(42).fill(null),
  playerTurn: 'teal',
 }

 componentDidMount(){
  this.setState(prevState => ({
   board: new Array(42).fill(null)
  }))
 }

 toggleColor = (index) =>{
  const column = index % 7;

  let current = 7 * 5 + column;

  while (current >= 0) {
   if (this.state.board[current] === null) {
   break;
  }
   current -= 7;
  }

  const newBoard = [...this.state.board];

  newBoard[current] = this.state.playerTurn;

  this.setState({
   board: newBoard,
   playerTurn: this.state.playerTurn === "teal" ? "pink" : "teal",
  });
 }

 winCheck = (index, boardArray) => {
  //rows
   for(let i = {index}; i < boardArray.length; i += 7 ){
    for(let j = i; j<= i+3; j++){
     if(j)
    }
   }     
 }
    
 render() {
  console.log(this.state.board)
  const boardArray = this.state.board.map( (value,index) => {
      return(<div 
      key = {index} 
      name = 'cell' 
      style = {styles.cellStyle}
      onClick={value === null ? () => this.toggleColor(index): null}
      >
      <Discs  value = {value} index = {index}/>            
      </div>) 
  })

  return (
   <div name='boardContainer' style = {styles.boardContainer}>
    <h1 style = {{marginTop: '0.1rem'}}>let the games begin</h1>
    <div name = 'board' style = {styles.boardStyle}>
     {renderBoard}
    </div>
   </div>
  )
 }
}


////////////////////////STYLES////////////////////////////////

const styles = {
 boardContainer: {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 },

 boardStyle:{
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1rem',
  height: '40rem',
  width: '40rem',
  border:' solid 1px lightgrey',
  borderRadius: '45px',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  marginBottom: '0.3rem',
 },

 cellStyle:{
  height: '4.5rem',
  width: '4.5rem',
  border: '1px solid lightgrey',
  borderRadius: '90px',
  margin: '0.2rem',
  textAlign: 'center',
 },
}

export default Board
