import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

// ## return types exercise

// 1. 여러가지 엘리먼트 return 가능!

//원래는 여러개의 엘리먼트를 리턴하려면 하나의 컴포넌트에 감싸주어야 했지만(ex. array+key 부여 or span에 싸기) 이제 바로 리턴 가능.
/*
class ReturnTypes extends Component{
  render(){
    return(
      [<header key={1}></header>,
      <div key={2}></div>,
      <footer key={3}></footer>]
    );
  }
}
*/
class ReturnTypes extends Component{
  render(){
    return(
      <Fragment>
        <header></header>
        <div></div>
        <footer></footer>
      </Fragment>
    );
  }
}
/* or 'Fragment' 생략 가능
<>
    <header></header>
    <div></div>
    <footer></footer>
</>
*/

// 2. String 리턴 가능!
class StringReturn extends Component{
  render(){
    return "Hello!";
  }
}

// ## Portals exercise

//엘리먼트가 아닌 포털을 리턴함
// 포털은 리액트 안에 (X) ReactDOM 안에 (O)
class Portals extends Component{
  render(){
      return createPortal(
        <Message />,
        //마운트할 위치를 포털에게 알려주어야 함.
        document.getElementById("touchme")
      );
  }
}
const Message = () => "Just touched it!";


// ## Error Boundaries exercise

class ErrorMaker extends Component{
  state = {
    friends: ["jisu", "flynn", "daal", "kneeprayer"]
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };
  render(){
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

const ErrorFallback = () => "Sorry something went wrong";

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch = (error, info) => {
    // console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
        hasError: true
      });
  };
  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <StringReturn />
        <Portals />
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
