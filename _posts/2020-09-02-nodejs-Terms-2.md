---
title: "[Nodejs]용어2"
---

exports : 모듈을 만들어 주는 대표적인 방식
```javascript
//정의
exports.함수이름 = 함수정의;

//쓰는법
var modeule = require=('module');
module.함수이름();
```

자바스크립트는  함수라는 것을 명시적으로 구별하기 위해 function 키워드를 함수 이름 앞에 붙여줌
```javascript
//같은의미이다.
fucntion add(a,b){
return a+b;
}

var add = function(a,b){
	return a+b;
}
```


배열요소 삭제
```javascript
var Users = [{1},{2},{3}]; 

delete Users[1] // 하면 {2} 지워짐 하지만 객체만 지워진거라 배열 길이는 그대로 3개
```
