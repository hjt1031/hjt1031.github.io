---
title: "[nodejs]쿠키와 세션 & 파일업로드"
---

# 쿠키 와 세션
**쿠키 :  클라이언트 웹 브라우저에 저장되는 정보**  
**세션 : 웹 서버에 저장되는 정보**  

익스프레스 에서는  
cookie-parser 미들웨어를 사용하면 쿠키를 설정하거나 확인 할 수 있다.
세션은 쿠키와 달리 서버 쪽에 저장 대표적인 예 : 로그인  

```javascript
var cookieParser = require('cookie-parser') // 쿠키 모듈
var expressSession = require('express-session') // 세션 모듈

app.use(cookieParser());

```
  
# 파일 업로드
**멀티 파트 포멧** 음악이나 이미지 파일 등을 일반 데이터와 함께 웹 서버로 보내려고 만든 표준. 따라서 일반적으로 웹 서버에서 파일을 업로드할 때 사용
```
var multer = require('multer');

var cors = require('cors') // 다중 서버 접속 지원  
//보통 웹브라우저에 로딩된 웹페이지는 이 페이지가 로딩된 서버로만 접근할 수 있지만 cors 기능을 사용하면 페이지가 로딩된 서버 이외의 서버에도 접근가능
```
