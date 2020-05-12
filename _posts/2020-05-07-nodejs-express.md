---
title: "[nodejs] Express 미들웨어"
---

Express 의 중요 기능 2가지
1. 라우터
2. 미들웨어

소프트웨어를 만들때 처음부터 끝까지 다만드는 경우는 없다.
다른사람이 만든 소프트웨어를 부품으로 해서 만든다. 이것을 미들웨어라고 생각하면 된다.

```
npm install body-parser //로설치
```

body 는 웹브라우저에서 요청한 정보 본체를 뜻한다.

parser 는 분석

```
var bodyParser = require('body-parser'); //맨위에 선언

var post = request.body //로고쳐서 실행시켜준다.
```
