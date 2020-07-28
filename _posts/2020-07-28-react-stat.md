---
title: "[React] state 사용법 (key)"
---

```javascript
//App.js
class App extends Component {
  constructor(props){ //컨포넌트 초기화
    super(props); 
    this.state = { //스테이트 값 초기화
      subject:{title:'WEB', sub:'world wide Web'}
    } 
  }
  render() {
    return (
    <div className="App">
      <Subject title={this.state.subject.title}
      sub={this.state.subject.sub}>
      </Subject>
      <Subject></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
    );
  }
}
```

```javascript
//TOC.js
import React,{Component} from 'react';

class TOC extends Component {
  render(){
    var lists = [];
    var data = this.props.data;  
    var i = 0;
    while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
        i=i+1
    }
    return(
    <nav>
        <ul>
            {lists}
        </ul>
    </nav>
    );
  }
}

export default TOC;
```

내부적으로 사용할 때는 state
상위 컨포넌트 App 은 하위 컨포넌트로 전달할때 state 사용 (상위컨포넌트에  state 값을) 하위 컨포넌트에는 props 값으로  할 수 있다.



# key
```javascript
<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>
```
이런식으로 여러개의 엘리먼트를 자동으로 생성할때 console 에 error 가 발생 key 뭐시기 라고
앞에 key={data[i].id} 등 구분자를 넣어주면 된다.
