import React from 'react'

export default function WinCheck() {
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
    return null;
   }
}

