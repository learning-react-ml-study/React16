## Return types Strings & Fragments

- 리턴 가능한 값
이전 버전 (component 1개, null) -> React16 (2개 이상의 elements, String)

## Portals

- React는 div 를 찾아서 마운트함 ↓
    ├ index.html : <div id="root"></div>
    └ index.js   : ReactDOM.render(<App />,                  document.getElementById("root"));

-> react root 밖(리액트 scope를 벗어난 부분)에서 무언가를 하고 싶을 때 : portals 는 리액트 root 밖에 리액트를 넣을 수 있게 함

