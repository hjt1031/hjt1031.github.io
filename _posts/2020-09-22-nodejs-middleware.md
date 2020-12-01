---
title: "[Nodejs] 미들웨어 , 토큰"
---

static : 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 줍니다. 
body-parser : POST 요청했을 때 요청 파라미터를 확인할 수 있도록 만들어 둠. GET 방식으로 요청할 때는 주소 문자열에 요청 파라미터가 들어갑니다. 하지만 이와달리 POST 방식으로 요청할 때는 본문인 본문 영역(BODY 영역)에 요청 파라미터가 들어 있게 되므로 요청 파라미터를 파싱하는 방법이 GET 방식과 달라집니다.


**라우터 미들웨어**
```javascript
//라우터 객체 참조
var router = express.Router();

//라우팅 함수 등록
router.route('/process/login').get(...);
router.route('/process/login').post(...);

//라우터 객체를 app 객체에 등록
app.ues('/'.router);

//함수등록방법
router.route(요청 패스).get(실행될 함수);
router.route(요청 패스).post(실행될 함수);

```

**토큰**
```
router.route('/process/user/:id').get(function(req,res){
console.log('/process/user/:id' 처리함);

//URL 파라미터 확인
var paramID = req.params.id;

}
```

get() 메소드를 호출하면서 동시에 '/process/user/:id' 패스를 처리하도록 코드를 입력 
콜론(:) 을 붙인 id 값이 토큰
req.params.id 코드를 사용하면 id속성에 접근가능
