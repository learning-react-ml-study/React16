import React, { Component,Fragment } from 'react';
import {createPortal} from "react-dom";
import Something from './setStateNull';

const BoudaryHOC = ProtectedComponent => 
class Boundary extends Component {
  state ={
    hasError:false
  };
  componentDidCatch = () => {
    this.setState({
      hasError:true
    });
  };
  render(){
    const {hasError} = this.state;
    if(hasError){
      return <ErrorFallback/>;
    }else{
      return <ProtectedComponent/>
    }
  }
}


class ErrorMaker extends Component{
  state ={
    friends : ["jisu","jennie","lisa","rose"]
  };
  render(){
    const {friends} = this.state;
    return friends.map(friend=>`${friend} / `);
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends:undefined
      })
    }, 5000);
  };
}

const PErrorMaker =BoudaryHOC(ErrorMaker);

class Potals extends Component{
  render(){
    return createPortal(
      <Message />,
      document.getElementById("touch")
    );
  }
}

const PPotals =BoudaryHOC(Potals);

const Message = () => "just touch";

class ReturnType extends Component {
  render(){
    return "Hello React16"
  }
}

const ErrorFallback = () =>"Sorry somthing went wrong"
class App extends Component {
//   state = {
//     hasError:false
//   }
//   componentDidCatch = (error,info) => {
//     this.setState({hasError:true})
//   }
  render() {
    return (
      //<> create react app에서 아직 지원 안함
      <Fragment>
      <div><ReturnType/></div>
      <PPotals/>
      {/* {this.state.hasError? <ErrorFallback/> : <ErrorMaker/>} */}
      <PErrorMaker/>
      <br/>
      <Something/>
      </Fragment>
      //</>
    );
  }
}

export default BoudaryHOC(App);
