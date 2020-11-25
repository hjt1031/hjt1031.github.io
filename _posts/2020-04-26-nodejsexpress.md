---
title: "[nodejs] Express 미들웨어"
---

Express 의 중요 기능 2가지
1. 라우터
2. 미들웨어

소프트웨어를 만들때 처음부터 끝까지 다만드는 경우는 없다.
다른사람이 만든 소프트웨어를 부품으로 해서 만든다. 이것을 미들웨어라고 생각하면 된다.

```javascript
npm install body-parser //로설치
```

body 는 웹브라우저에서 요청한 정보 본체를 뜻한다.

parser 는 분석

```javascript
var bodyParser = require('body-parser'); //맨위에 선언

var post = request.body //로고쳐서 실행시켜준다.
```

압축하기(데이터가 너무많으면 압축을 해야한다.)

```javascript
npm install compression

var compression = requrie('compression'

app.use(compression());
```
미들웨어 만들기.

```javascript
app.use(function(request,response,next){
//공통으로 된 함수 
//ex)
fs.readdir('./data', function(error, filelist){ //글목록을 표현해주는 기능
    request.list = filelist;
    next(); //그다음에 호출되어야 할 미들웨어가 담겨있다.
  });
});
```
