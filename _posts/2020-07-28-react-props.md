---
title: "[React] props (프로퍼티)"
---

상위(부모) 컴포넌트에서 하위(자식) 컴포넌트에게 데이터를 전달 할때 사용


```javascript
class Subject extends Component {
  render(){ //반드시 있어야함 class 안에 function 생략
    return( //하나의 최상위 태그만 써야한다.
        <header> 
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
    );
  }
}


class App extends Component {
  render() {
    return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject> 
      <Subject title="React" sub="For UI"></Subject>
      <Subject></Subject>
      <TOC></TOC>
      <Content></Content>
    </div>
    );
  }
}
```
