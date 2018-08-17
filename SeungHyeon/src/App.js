import React, { Component } from 'react';

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const {pizzas} = state;
  if(pizzas < MAX_PIZZAS){
    return {
      pizzas: pizzas + 1
    };
  } else {
    return null;
  }    
}

class Controlled extends Component{
  state = {
    pizzas: 0
  };
  render(){
    const {pizzas} = this.state;
    return (
      <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${pizzas === 1 ? "pizza" : "pizzas"}`}</button>
    );
  }
  //state를 set하는 component 밖에 함수를 만들 수 있다.
  _handleClick = () => {
    this.setState(eatPizza);
  }
}


class App extends Component {
  render() {
    return (
     <Controlled />
    );
  }
}

export default App;
