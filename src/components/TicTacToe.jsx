import React from 'react';
import './TicTacToe.css';
import Cells from "./Cells";
import Players from "./Players";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(''),
      currentPlayerIndex: 0,
      winningMoves: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ]
    }
    this.handleMove = this.handleMove.bind(this);
  }

  checkWinner(cells) {
    const playerSymbol = this.props.players[this.state.currentPlayerIndex].symbol;
    const playerMoves = cells.reduce((moves, cell, index) => {
      if (cell === playerSymbol) {
        moves.push(index);
      }
      return moves;
    }, []);
    const isWinner = this.state.winningMoves.some((moves) => {
      return moves.every((move) => playerMoves.includes(move));
    });

    this.setState({
      winner: isWinner ? this.props.players[this.state.currentPlayerIndex].name : null
    });
  }

  handleMove = (cellId) => {
    const cells = this.state.cells.slice();
    cells[cellId] = this.props.players[this.state.currentPlayerIndex].symbol;
    this.checkWinner(cells);
    this.setState({
      cells: cells,
      currentPlayerIndex: 1 - this.state.currentPlayerIndex,
    });
  }

  render() {
    return (<div className="game-layout">
          <div className="title">Tic Tac Toe</div>
          <Players players={this.props.players} currentPlayerIndex={this.state.currentPlayerIndex}/>
          <Cells cells={this.state.cells} handleMove={this.handleMove}/>
          {
            this.state.winner ? <div className="winner">Winner: {this.state.winner}</div> : null
          }
        </div>
    );
  }
}

export default TicTacToe;