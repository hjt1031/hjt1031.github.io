---
title: "[nodejs] 객체화,모듈사용법,경로보안,출력정보 보안"
---

# 코드를 간결하게 객체화 해서 사용가능 다른말로 리팩토링 이라고도 함
```javascript
var template = { //template 라는 객체를 생성
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}

//사용
var list = template.list(filelist);
          var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
          );
```

# mudule
```javascript

//nodejs/muse.js
var part = require('./mpart.js') // 현재 디렉토리 
console.log(part);

part.f();


//nodejs/mpart.js
var M = { 
    v:'v',
    f:function(){
        console.log(this.v); //자기자신의 v라는 변수를 실행
    }
}

module.exports = M;//M이 가르키는 객체를 모듈 밖에서 사용할 수 있게 한다. 밑에 선언하기가 싫다면


module.exports = { //이렇게 써도 사용 가능
    v:'v',
    f:function(){
        console.log(this.v); 
    }
}

```

# path.parse :  파싱해서 객체로 만들어줌 (경로 보안)
```
var path = require('path')

 var filteredId = path.parse(queryData.id).base //base 라는 속성을 가져온다.
```

# sanitize-html : 출력정보에 대한 보안

var sanitizeHtml = require('sanitize-html'); //sanitizeHtml 이란 모듈을 설치 해야한다 (npm)

var sanitizedTitle = sanitizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description, {     //파일을 생성하게 되면 <script> 솰라솰라</script> 를 넣으면 지워진다. 하지만 파일에는 생성됨 
									allowedTags:['h1']                                          //h1 태그를 허용한다.
            });
