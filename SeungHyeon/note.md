## Return types Strings & Fragments

- 리턴 가능한 값
이전 버전 (component 1개, null) -> React16 (2개 이상의 elements, String)

## Portals

- React는 div 를 찾아서 마운트함 ↓
    ├ index.html : <div id="root"></div>
    └ index.js   : ReactDOM.render(<App />,                  document.getElementById("root"));

-> react root 밖(리액트 scope를 벗어난 부분)에서 무언가를 하고 싶을 때 : portals 는 리액트 root 밖에 리액트를 넣을 수 있게 함

## Error Boundaries

- 컴포넌트가 자식 컴포넌트의 에러를 관리할 수 있게 해줌. (에러를 일으키는 컴포넌트의 종류와 정보를 알 수 있음) + 에러로 인해 전체 리액트가 죽는 현상 방지 + 에러에 대응 가능

