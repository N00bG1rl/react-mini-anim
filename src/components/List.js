import React, { Component } from 'react'

import '../styles/List.css'

class List extends Component {
  state = {
    items: [1, 2, 3],
  }

  handleAddItem = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      }
    })
  }

  handleRemoveItem = selIndex => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      }
    })
  }

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li
        key={index}
        className='ListItem'
        onClick={() => this.handleRemoveItem(index)}
      >
        {item}
      </li>
    ))

    return (
      <div>
        <button className='Button' onClick={this.handleAddItem}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <ul className='List'>{listItems}</ul>
      </div>
    )
  }
}

export default List
