---
title: "[React] 이벤트 (bind)"
---

```javascript
class App extends Component {
  constructor(props){ //컨포넌트 초기화
    super(props); 
    this.state = { //스테이트 값 초기화
      mode:'read',
      subject:{title:'WEB', sub:'world wide Web'},
      welcome:{title:'Welcome', desc:"Hello, React!!!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
        ]
    } 
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
    <div className="App">
      {/* <Subject title={this.state.subject.title}
      sub={this.state.subject.sub}> 
      </Subject> */}
      <header>
        <h1><a href="/" onClick={function(e){
          console.log(e);
          e.preventDefault(); //기본적인 이벤트를 막는다.
          //this.state.mode = 'welcome'; //리액트는 state 값이 바뀐지 모른다.
          this.setState({ //setState라는 함수를 호출해줘야한다.
            mode:'welcome'
          })
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
      </header>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}   
```

끝에 bind 를 붙여주고
this.setState 라는 함수를 호출한다.
why? state 값을 바꿔줄 수 없어서 setState 함수의 형태로 변경해야한다.

but 처음 생성자를 생성할떄는 가능하다.(컨포넌트가 생성된 후 는 안된다.)
