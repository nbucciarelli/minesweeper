import React, { Component } from 'react'
import autoBind from 'react-autobind'
import minesweeper from 'minesweeper'
import './App.css'
import Board from './Board/Board'

const mineArray = minesweeper.generateMineArray({
    rows: 10,
    cols: 10,
    mines: 15
})

const board = new minesweeper.Board(mineArray)

class App extends Component {
  constructor() {
    super()
    this.state = { board: board }
    autoBind(this)
  }
  updateBoard(board) {
    this.setState({board: board})
  }
  render() {
    return (
      <div className="App">
        <div>
          <Board
            board={board}
            updateBoard={this.updateBoard}/>
        </div>
      </div>
    )
  }
}

export default App
