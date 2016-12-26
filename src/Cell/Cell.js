import React, { Component } from 'react'
import autoBind from 'react-autobind'
import blank from '../../images/blank.png'
import covered from '../../images/covered.png'
import flag from '../../images/flagged.png'
import mine from '../../images/mine.png'
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import six from '../../images/six.png'
import seven from '../../images/seven.png'
import eight from '../../images/eight.png'
const numImages = {
  _1: one,
  _2: two,
  _3: three,
  _4: four,
  _5: five,
  _6: six,
  _7: seven,
  _8: eight
}
import './Cell.css'
import minesweeper from 'minesweeper'
const CellStateEnum = minesweeper.CellStateEnum
const CellFlagEnum = minesweeper.CellFlagEnum

class Cell extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  handleClick (evt) {
    evt.preventDefault()
    this.props.board.openCell(this.props.data.x,this.props.data.y)
    this.props.updateBoard(this.props.board)
  }
  handleRightClick (evt) {
    evt.preventDefault()
    this.props.board.cycleCellFlag(this.props.data.x,this.props.data.y)
    this.props.updateBoard(this.props.board)
  }
  mineLogic() {
    const cell = this.props.data
    const adjacentMines = cell.numAdjacentMines
    if (cell.state === CellStateEnum.CLOSED) {
      if (cell.flag === CellFlagEnum.NONE) {
        return covered
      } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
        return flag
      }
    } else if (cell.state === CellStateEnum.OPEN) {
      if (cell.isMine) {
        return mine
      } else if(adjacentMines > 0){
        return numImages[`_${cell.numAdjacentMines}`]
      } else {
        return blank
      }
    }
  }
  render () {
    return (
      <span>
        <img src={this.mineLogic()} alt="blank" onClick={this.handleClick} onContextMenu={this.handleRightClick}/>
      </span>
    )
  }
}

export default Cell
