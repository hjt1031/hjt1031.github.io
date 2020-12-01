---
title: "[React Nomad]네비게이션"
---

```Javascript
//App.js
function App(){ //함수형 컨포넌트 생성
  return <HashRouter>
    <Navigation />
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
}
```


```javascript
function Navigation(){
    return <div>
        <Link to="/">HOme</Link>
        <Link to="/about">About</Link>
    </div>
}
```

Link 는 반드시 route 안에 있어야한다.
밖에 있으면 동작이 안됨.



```
function App(){ //함수형 컨포넌트 생성
  return <HashRouter>
    <Navigation />
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
}
```

HashRouter 대신 BrowserRouter 을 바꾸면 http 사이트에 /#/ 가없어짐 하지만 git에 설정하기가 짜증남.
