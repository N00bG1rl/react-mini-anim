import { React, Component } from 'react'
import { Transition } from 'react-transition-group'

import Modal from './components/Modal'
import Backdrop from './components/Backdrop'
import List from './components/List'

import './styles/App.css'

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  }

  showModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )
  }
}

export default App
