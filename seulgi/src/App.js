import React, { Component } from 'react'

const MAX_PIZZAS = 20

const eatPizz = (state, props) => {
  const { pizzas } = state
  if (pizzas < MAX_PIZZAS) {
    return { pizzas: pizzas + 1 }
  } else {
    return null
  }
}

class Controlled extends Component {
  state = {
    pizzas: 0
  }
  render() {
    const { pizzas } = this.state
    return <button onClick={this._handleClic}>{`I have aten ${pizzas} ${pizzas === 1 ? 'pizza' : 'Pizzas'}`}</button>
  }
  _handleClic = () => {
    this.setState(eatPizz)
  }
}

class App extends Component {
  render() {
    return <Controlled />
  }
}

export default App
