---
title: "[React] 컨포넌트 이벤트"
---

```javascript
//App.js
 <Subject 
      title={this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage = {function(){
       this.setState({mode : 'welcome'});
      }.bind(this)}
      >
      </Subject>
```
onChangePage 라는 이벤트를 생성


```javascript
//Subject.js

import React,{Component} from 'react';
class Subject extends Component {
  render(){ //반드시 있어야함 class 안에 function 생략
    return( //하나의 최상위 태그만 써야한다.
        <header> 
            <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
    );
  }
}

```
this.props.onChangePage() 호출하면 된다.
