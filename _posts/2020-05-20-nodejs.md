---
title: "[nodejs] 쿠키 실습"
---

로그인 상태체크
```javascript
function authIsOwner(request,response){ //쿠키 체크 
    var isOwner = false;//기본으로 false
   if(request.headers.cookie){//쿠키 값 유무 체크
        cookies = cookie.parse(request.headers.cookie);  
    }
    if(cookies.email === 'egoing777@gmail.com' && cookies.password === '11111'){
      isOwner = true;
    }
    console.log(cookies)
    return isOwner;
}   


ㅎ

var app = http.createServer(function(request,response){


var isOwner = authIsOwner(request,response); 
}
```



로그인 상태를 UI에 반영 
```
template.js
module.exports = {
  HTML:function(title, list, body, control, authStatusUI = '<a href="/login">login</a>'){//authStatusUI에 값이 없으면 <a href="/login">login</a> 이게 들어간다.
	}
```


접근금직(접근권한)
로그인된 사용자만 insert, create, delete 되도록


else if(pathname === '/create_process'){
      if(authIsOwner(request,response) === false){
        response.end('Login required!!');

        return false;
      }
