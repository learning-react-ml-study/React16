import React ,{Component,Fragment} from "react";

const MAX_PIZZA = 20;

class Controlled extends Component {
    state = {
        pizza:0
    };
    render(){
        const {pizza} = this.state;
        return (
            <Fragment>
                <button onClick={this._handleClick}>i have ate {pizza} {pizza===1?"pizza":"pizzas"}</button>
            </Fragment>
        );
    }
    _handleClick = () => {
        this.setState(_eatPizza);
    }
}

const _eatPizza = (state)=>{
    if(state.pizza<MAX_PIZZA){
        return {pizza: state.pizza+1};
    }else{
        alert("피자는 최대 20개까지 가능합니다");
        return null;    //state를 null로 바꿈
    }
}

class Something extends Component {
    render(){
        return(<Controlled/>);
    }
}

export default Something;