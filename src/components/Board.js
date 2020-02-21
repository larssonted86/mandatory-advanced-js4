import React, { Component } from 'react'

export class Board extends Component {

    state = {
        board: new Array(42).fill(null),
        playerTurn: '1',

    }

    componentDidMount(){
        this.setState(prevState => ({
            board: new Array(42).fill(null)
          }))
    }

    toggleColor = () =>{
        
    }
    
    render() {
        console.log(this.state.board)
        const renderBoard = this.state.board.map( (boardArray,index) => {
            return(<div key = {index} name = 'cell' style = {styles.cellStyle}>        
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
        margin: '0.2rem'
    },
}

export default Board
