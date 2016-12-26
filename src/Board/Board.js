import React, { Component } from 'react'
import autoBind from 'react-autobind'
import Row from '../Row/Row'
import shortid from 'shortid'

class Board extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render () {
    console.log(this.props.board)
    let grid = this.props.board.grid()
    return (
      <div>
        Hello Minesweeper
        <br />
        {grid.map(row => {
          return <Row
                   key={shortid.generate()}
                   cells={row}
                   {...this.props}/>
        })}
      </div>
    )
  }
}

export default Board
