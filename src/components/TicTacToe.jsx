import React from 'react';
import './TicTacToe.css';
import Cells from "./Cells";
import Players from "./Players";

const Winner = ({name}) => {
  return <div className="winner-banner">Congratulations {name}!</div>;
}

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
      ],
      isWinner: false,
    }
    this.handleMove = this.handleMove.bind(this);
  }

  isWinner(cells) {
    const playerSymbol = this.props.players[this.state.currentPlayerIndex].symbol;
    const playerMoves = cells.reduce((moves, cell, index) => {
      if (cell === playerSymbol) {
        moves.push(index);
      }
      return moves;
    }, []);
    return this.state.winningMoves.some((moves) => {
      return moves.every((move) => playerMoves.includes(move));
    })
  }

  updateCells(cells) {
    this.setState({cells: cells});
  }

  updateCurrentPlayerIndex(currentPlayerIndex) {
    this.setState({currentPlayerIndex: currentPlayerIndex});
  }

  handleMove = (cellId) => {
    if (this.state.isWinner) {
      return;
    }
    const cells = this.state.cells.slice();
    cells[cellId] = this.props.players[this.state.currentPlayerIndex].symbol;
    let isWinner = this.isWinner(cells);
    this.setState({isWinner: isWinner});
    this.updateCells(cells);
    if (isWinner) {
      return;
    }
    this.updateCurrentPlayerIndex(1 - this.state.currentPlayerIndex);
  }

  render() {
    const currentPlayer = this.props.players[this.state.currentPlayerIndex].name;
    return (<div className="game-layout">
          <div className="title">Tic Tac Toe</div>
          <Players players={this.props.players} currentPlayerIndex={this.state.currentPlayerIndex}/>
          <Cells cells={this.state.cells} handleMove={this.handleMove}/>
          {this.state.isWinner ? <Winner name={currentPlayer}/> : null}
        </div>
    );
  }
}

export default TicTacToe;