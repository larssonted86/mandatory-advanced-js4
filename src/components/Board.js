import React, { Component } from 'react'
import Discs from './Discs.js'
import WinnerCard from './WinnerCard'


export class Board extends Component {

 state = {
  board: new Array(42).fill(null),
  playerTurn: 'teal',
  winner: '',
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

  const winner = this.winCheck(newBoard);


  this.setState({
   board: newBoard,
   playerTurn: this.state.playerTurn === "teal" ? "pink" : "teal",
  });
 }

 winCheck = (boardArray) => {
  //rows
  for (let row = 0; row < 6; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const cells = [
        boardArray[row * 7 + col],
        boardArray[row * 7 + col + 1],
        boardArray[row * 7 + col + 2],
        boardArray[row * 7 + col + 3],
      ];

      if (cells[0] && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === cells[3]) {
        this.setState({
          winner: cells[0]
        })
        return cells[0];
      }
    }
  }  

  for (let col = 0; col < 7; col += 1 ){
    for (let row = 0; row < 3; row += 1){
      const cells = [
        boardArray[row * 7 + col],
        boardArray[(row + 1) * 7 + col],
        boardArray[(row + 2) * 7 + col],
        boardArray[(row + 3) * 7 + col],
      ];

      if (cells[0] && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === cells[3]) {
        this.setState({
          winner: cells[0]
        })
        return cells[0];
      }
    }
  } 
  
  //Diagonal downward.
  for (let row = 0; row < 3; row +=1){
    for (let col = 0; col < 4; col +=1){
      const cells = [
        boardArray[row * 7 + col],
        boardArray[row * 7 + col + 8],
        boardArray[row * 7 + col + 16],
        boardArray[row * 7 + col + 24],
      ];  
      if (cells[0] && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === cells[3]) {
        this.setState({
          winner: cells[0]
        })
        return cells[0];
      }    
    }
  }

  //Diagonal upward.
  for (let row = 0; row < 3; row +=1){
    for (let col = 0; col < 4; col +=1){
      const cells = [
        boardArray[row * 7 + 21 + col],
        boardArray[row * 7 + 21 + col - 6],
        boardArray[row * 7 + 21 + col - 12],
        boardArray[row * 7 + 21 + col - 18],
      ];  
      if (cells[0] && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === cells[3]) {
        this.setState({
          winner: cells[0]
        })
        return cells[0];
      }    
    }
  }
  return null;
 }
    
 render() {
   if(this.state.winner){     
     return <WinnerCard winner = {this.state.winner}/>
   }
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
     {boardArray}
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
