---
title: "[React Nomad]State"
---

state 는 보통 우리가 동적 데이터와 함께 작업할때 만들어진다. 변하는 데이터, 존재하지 않는 데이터

```javascript
class App export React.Component
//컨포넌트를 만들때 마다 모든 것을 다 구현하고 싶지 않아서.

state ={

}
//state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다.

render(){
//기본적으로 render 메소드를 갖고있음react 는 자동적으로 나의 class component의 render method 를 실행한다 자동으로
}
```
ex) 애기 > 사람에서 확장되고 사람으로 부터 모든 것(특징)을 가져올 수 있고 그것으로부터 확장 된다.






```javascript
class App extends React.Component{
  state = {
    count: 0
  }
  add = () => {
    console.log('Add');
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }

}
//{this.minus()} 화면이 실행되자마자 실행됨
//{this.minus} 클릭할때만 실행됨
```
