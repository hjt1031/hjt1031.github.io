---
title: "[React]CRUD (배열)"
---

//createContent.js
```javascript
import React,{Component} from 'react';
class CreateContent extends Component{
  render(){
    return(
      <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
             onSubmit={function(e){
               e.preventDefault();
               this.props.onSubmit(
                 e.target.title.value,
                 e.target.desc.value
               );
             }.bind(this)} //submit 이 실행되면 실행되게 하는 이벤트임
            >
              <p><input type="text" name="title" placeholder="title"></input></p>
              <p>
                <textarea name="desc" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
      </article>
    );
  }
}

export default CreateContent;
```

//ReadContent.js
```javascript
import React,{Component} from 'react';
class ReadContent extends Component{
  render(){
    return(
      <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;
```


배열에 값을 넣을떄
```
var arr = [1,2];
arr.push(3);
arr = [1,2,3] //이 된다.

var arr2 = [1,2];
var result = arr2.concat(3);
result = [1,2,3];
arr2 = [1,2];

//push 는 원래 값에 영향을 미치지만 
//concat 은 미치지 않음.
```


```javascript
var _article = null
_article = <ReadContent title={_title} desc={_desc}></ReadContent>

return(
{_article}
} //이렇게 변수에 담아서 해줘도된다.
```
