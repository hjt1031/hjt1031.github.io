---
title: "[React]component 파일로분리"
---

```javascript
import React,{Component} from 'react'; // react 라는 라이브러리 에서 Component 라는 클래스를 갖고온다
```
src 밑에 component 라는 디렉토리 생성 후 TOC.js 를 만든다.

```javascript
import React,{Component} from 'react';

class TOC extends Component {
  render(){
    return(
      <nav>
            <ui>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Javascript</a></li>
            </ui>
        </nav>
    );
  }
}

export default TOC; //TOC라는 파일안에 여러가지 변수나 함수나 존재 할 수 있음. 그많은 것 들 중에 외부에서 어떤 것을 사용 할 수 있게 해주는 것 TOC.js 를 가져다 쓰는 쪽에서 TOC 라는 클래스를 쓸 수 있음.
```

main.js 에서
```javascript
import TOC from "./components/TOC"
```
