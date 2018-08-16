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

## Error Boundaries with Higher Order Components (HOC)

- 에러 사항에 따라 조건을 제어하는 컴포넌트를 만든다

- 한 파일의 여러 컴포넌트를 관리하려면?
    HOCelement(protectingcomponent); 

    변수화해도 좋다.
    ex. const P[protectingcomponent] = HOCelement   (protectingcomponent); 
    
    -> App component에는 P[protectingcomponent]로 리턴해준다.
    (다른 컴포넌트에 있는 컴포넌트를 리턴하게 됨)

- 다른 파일에 있는 것들을 관리하고 싶다면?
    Error Boundary Component에 랩핑된 컴포넌트를 export.
    ex. export default BoundaryHOC(App);