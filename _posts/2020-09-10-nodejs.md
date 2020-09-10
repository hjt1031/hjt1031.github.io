---
title: "[Nodejs] 간단한 웹 서버"
---

노드의 기본 모듈인 http 를 사용하면 웹 서버 기능을 담당하는 서버 객체를 만들 수 있습니다.
```javascript
var http = require('http');

var server = http.createServer(); //웹서버 객체 만들기

var port = 3000;
server.listen(port, function(){
	console.log('웹서버가 시작되었습니다',port);
});



//list(port,[hostname],[backlog],[callback]) 서버를 실행하여 대기시킵니다
//close([callback]) 서버를 종료합니다

```


웹 서버는 일반저그올 웹 브라우저라고 하는 클라이언트에서 HTTP 프로토콜로 요청한 정보를 처리 한 후 응답을 보내주는 역할을 한다.
