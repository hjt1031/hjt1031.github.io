---
title: "[React Nomad]react-router-dom"
---

```javascript
import {HashRouter, Route} from "react-router-dom"; //react-router-dom은 다른 종류의 라우터가 있다 그중에 하나가 HashRouter,Route
```


```javascript
function App(){ //함수형 컨포넌트 생성
  return <HashRouter>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
}
```
2개의 컨포넌트가 같이 렌더링이 된다.
why? 리액트는 쉽게 말해 자신이 찾는 문자가 속해 했으면 그것도 렌더링을 해버리기 때문?
그래서 path="/" 을 먼저 렌더링 한뒤,  path="/about" 도 렌더링을 해버린다.

이것을 고치기 위해선
```
<Route path="/" exact={true} component={Home}/>
```
exact={true}를 붙여주면 렌더링을 할때 only  path="/" 인 것만 렌더링 한다.
