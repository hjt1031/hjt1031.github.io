---
title: "[nodejs]express(Hello World!)"
---

nodejs 에서 가장많이 사용하는 프레임웤

npm install express --save 으로 설치


```java
var express = require('express') //express 모듈을 load 해온다 const 는 상수 바뀌지않음.
var app = express() //express 호출 (함수)

app.get('/' , (req, res) => res.send('/'))//첫번째 인자는 경로, 두번째는 접속했을때 호출될 함수가 표현되어있음.(라우터라 생각하면됨)
//(라우팅라 생각하면됨(라우팅은 경로 즉 길을가고있는데 갈림길 이라 생각하면된다.))
app.get('/page', function(req, res){
  return res.send('/page');
}) //위에 app.get 이랑 똑같은 로직, 위에께 최신 밑에께 구버전

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```
