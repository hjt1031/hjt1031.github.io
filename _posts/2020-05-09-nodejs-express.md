---
title: "[nodejs] express 홈페이지 구현"
---

기존 라우팅 방식은 
```java
var app = http.createServer(function(request,response){}
```

많은 부분에서 공유하고 사용했다.
어떻게 공유 되는 부분인지 확인할려면 위로올라서 확인해야하는데.

express 방식의 라우팅 방식으로 하면 
request,response의 개발할려는 로직에  필요한 것만 들어있어서 간편하게 사용할 수 있다.

path 방식 url 파라미터 처리방법
```java
app.get('/page/:pageId/:chapterId', function(request, response){
  return response.send(request.params);
  //{"pageId":"HTML","chapterId":"css"}
}) 
```
