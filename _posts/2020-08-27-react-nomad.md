---
title: "[React Nomad]함수형 컴포넌트와 클래스형 컴포넌트"
---

함수형 컴포넌트는

```javascript
function App() {

  const test = "";

  return <div>{test}</div>

}
```

클래스형 컴포넌트의 형태는
```javascript

class App extends Component {

  render(){

    const test = "";

    return <div>{test}</div>;

  }

}
```


함수형 컴포넌트의 장점

- 클래스형 컴포넌트에 비해 선언하기가 편하다.
- 메모리 자원을 클래스형 컴포넌트에 비해서 덜 차지한다.
- 빌드 후 배포시에 결과물의 크기가 작다.


클래스형 컴포넌트의 장점
- render 함수가 반드시 존재해야 한다.
- state 의 사용이 가능하다.
- 라이프 사이클 API의 사용이 가능하다.
