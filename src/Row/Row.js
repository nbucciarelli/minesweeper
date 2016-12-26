import React, { Component } from 'react'
import autoBind from 'react-autobind'
import Cell from '../Cell/Cell'
import shortid from 'shortid'
import './Row.css'

class Row extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render () {
    return (
      <span>
        { this.props.cells.map(cell => {
          return <Cell
                   key={shortid.generate()}
                   data={cell}
                   {...this.props} />
        })}
        <br />
      </span>
    )
  }
}

export default Row
