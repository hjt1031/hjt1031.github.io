---
title: "[React] 컨포넌트생성 / JSX"
---

*JSX : 페이북에서 만든 컴퓨터 언어* <br>
우리가 JSX 로 코드를 작성하면 create-react-app 이 알아서 javascript 의 언어로 컨버팅 해준다.

# 컨포넌트 생성방법
```javascript
class Subject extends Component {
  render(){ //반드시 있어야함 class 안에 function 생략
    return( //하나의 최상위 태그만 써야한다.
        <header> 
            <h1>WEB</h1>
            world wide web!
        </header>
    );
  }
}


class App extends Component {
  render() {
    return (
    <div className="App">
      <Subject></Subject>
    </div>
    );
  }
}
```
