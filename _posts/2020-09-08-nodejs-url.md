---
title: "[Nodejs]주소 문자열을 URL 객체로 변환 & 이벤트 & 파일 다루기"
---

**주소 문자열을 URL 객체로 변환**
```javascript
var url = require('url'); //모듈호출
//parse() 와 format() 메소드를 호출 할 수 있음
parse() : https:// 로 시작하는 주소 문자열을 URL 객체로 만들어줌 (요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어 줌)
format() : 원래의 주소 문자열로 돌려놓음(요청 파라미터 객체를 문자열로 변환)
```

**이벤트**
이벤트 : 한쪽에서 다른 쪽으로 어떤 일이 발생했음을 알려주는 것입니다. 이때 다른 쪽에서 이 이벤트를 받고 싶다면 이벤트 리스너를 등록 할 수 있습니다.
이벤트 리스너는 특정 이벤트가 전달되었을 때 그 이벤트를 처리할 수 있도록 만들어 둔 것을 말합니다.

노드의 객체는 EventEmitter 를 상속 받을 수있다. 상속 후엔 EventEmitter 객체의 on() 과 emit() 메소드를 사용 할 수 있다.
on(event, listener) : 지정한 이벤트의 리스너를 추가합니다.
once(event,listener) : 지정한 이벤트의 리스너를 추가하지만 한 번 실행한 후에는 자동으로 리스너가 제거됩니다.
removeListener(event,listener) : 지정한 이벤트에 대한 리스너를 제거합니다.


**파일 다루기**

```javascript
var fs = require('fs');

readFile(filename, [encoding], [callback]) : 비동기식 IO로 파일을 읽어 들입니다.
readFileSyne(filename,[encoding]) : 동기식 IO로 파일을 읽어 들입니다.
writeFile(filename, data, encoding='utf8',[callback]) : 비동기식 IO로 파일을 씁니다.
writeFileSync(filename,data,encoding='utf8') : 동기식 IO로 파일을 씁니다.

```
