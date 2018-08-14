# React 16



## Retrun type

원래는 리턴 값으로 **React elements** t나 **null**값만 가능했지만 16이후 리턴이 가능한 타입이 늘어났다

#### list of supported return types

* **React elements** 

* **Arrays and fragments** 

* **Portals** 

* **String and numbers** 

* **Booleans or null** 

  > 주로 `return Boolean && <Tag/>;`  지원하기 위해 존재 한다

  

###  Fragment

ex)

`import {Fragment} from "react";`

```
function FragEx (){
    retrun(
    <Fragment> // <> 웹팩등 모듈 번들러 사용시 대체 가능(CRA지원 안함)
    	<div></div>
    	<div></div>
    		...
    </Frgment>	// </>
    )
}
```



## Portals

Portal는 상위 Component의 DOM계층 구조의 외부의 DOM node를 렌더링 하는 방법이다

`ReactDOM.createPortal(child, container)`

>  child :  renderable React child(render()의 리턴 값으로 리턴 할 수 있는 객체)
>
> container : DOM element

ex)

`import {createPortal} from "react-dom";`

```
render(){
    retrun(
    	ReactDOM.createPortal(<div>sth</div>, document.getElementById("tagId"))
    )
}
```



## Error Handling

Error boundary Component : 내부 컴포넌트의 에서 일어나는 에러를 잡아 처리해주는 컴포넌트

> class component에 `componentDidCatch(error, info) `가 호출되어 있으면 Error boundary Component라고 정의 한다

ex)

```
class ErrorBoundary extends Component {
  state = { 
  	hasError: false 
  };
  
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }else{
      return this.props.children; 
    }
  }
}
```



## New lifecycle

### New Method

* **getDerivedStateFromProps**

`static getDerivedStateFromProps(props, state)`

시간이 지남에 따라 props의 변동에 의존하는  state를 다룰 때 사용한다

리턴값으로 변경할 state를 넘겨주면 된다

> state를 변경하지 않으면  리턴값으로 null을 넘겨주면 된다

ex)

```
// Before
class ExampleComponent extends React.Component {
  state = {
    isScrollingDown: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.currentRow !== nextProps.currentRow) {
      this.setState({
        isScrollingDown:
          nextProps.currentRow > this.props.currentRow,
      });
    }
  }
}

// After
class ExampleComponent extends React.Component {
  // Initialize state in constructor,
  // Or with a property initializer.
  state = {
    isScrollingDown: false,
    lastRow: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }
}
```



* **getSnapshotBeforeUpdate**

`getSnapshotBeforeUpdate(prevProps, prevState)`

DOM변화 직전의 정보를 가져온다

리턴값이 `componentDidUpdate`의 세번쨰 파라미터로 넘겨진다



### Context API

### RefAPI



### v16.3 lifecycle 

![React_v16.3_Lifecycle](C:\Users\eunbi\Documents\git\ReactStudy\React16\eunbi/React_v16.3_Lifecycle.jpg)