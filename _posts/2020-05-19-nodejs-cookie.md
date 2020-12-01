---
title: "[nodejs]쿠키"
---

웹브라우저가 서로 주고받는 데이터
http 프로토콜에 포함되어있는 기술

쿠키생성하는방법
```javascript
var http = require('http');
http.createServer(function(request, response){
    // response.writeHead(200, { //성공했다는 가정하에 2번쨰는 객체를 넣어준다.
    //     'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry'] //두개의 쿠키가 생성됨.
    // })
    response.end('Cookie!!!');
}).listen(3000);
```

쿠키를 서버에 요청하는 법
먼저 npm 을 다운로드한다

```
npm install -s cookie
```

그다음
```
var cookie = require('cookie');
var cookies = {};
    if(request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie); //쿠키를 전달해 주는 객체
        //parse 는 값이 없는걸 자동으로 변환을 못해준다.
    }

```

	만약, 크롬으로 홈페이지를 들어가서 외국어 페이지를 로드 하면 (항상 한국어로 보여드릴까요?) 라고하는 문구가 나온다 한국어로 클릭하면 쿠키에서 ex) us => ko 로 변경이된다.
	
	6. Session cookies VS Permanent cookies
	쿠키를언제까지 살아있게 할 것인가?
	
	
Session cookies 는 홈페이지를 껏다 키면 cookies 가 다 날라가지만 Permanent cookies 는 껏다 켜도 살아있다.

```javascript
'Set-Cookie':[`Permanent = cookies; Max-Age=${60*60*24*30}` //30일 (60초)
            ] 
```
를 추가해준다음에 홈페이지를 껏다 키면 permanent 만 살아있다.

7. Secure & HttpOnly 

보안과 관련됨
Secure : https 로 접속 할 때만 쿠키를 전송한다.
```javascript
'Set-Cookie':['Secure = Secure; Secure', //끝에붙인 Secure가 중요]
```

HttpOnly: 는 웹브라우저와 웹서버가 통신할때만 쿠키를 생성
```javascript
'Set-Cookie':['HttpOnly=HttpOnly; httpOnly']
```
HttpOnly 는 세션을 통해 장난치는 사람들이 많아서? 해킹할려는사람들이 많아서 쓴다.


8.path & domain
path : 특정디렉토리 안에서만 쿠키를 활성화 하고싶을때 사용하는 기능


```javascript
'Set-Cookie':['Path=Path; Path=/cookie', // 어느 path 에서 동작하게 할것인가 ]
```

domain : 어떤 도메인에서만 동작할 것인가.

```javascript
'Set-Cookie':['Domain=Domain; Domain=o2.org' //쿠키에 domain을 보면 전부다 domain만 .o2.org로 되어있고 나머지는 o2.org 로 되어있다. ]
```
