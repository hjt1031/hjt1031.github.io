---
title: "[nodejs]에러처리"
---

존재하지 않는 페이지를 찾았을때 404 에러가 나타나는데.
express 기준

```javascript
app.use(function(req, res, next){
  res.status(404).send('Sorry cant find that!');
}) //추가해준다
```
페이지에 에러가 있을 경우(서버에러 500)

```javascript
 next(err); //다음 미들웨어를 호출하는 것 에러를 던진다 생각하면 된다.
 
 
 app.use(function(err, req, res, next){ //첫번째는 next에 담긴 err가 넘어오고
  res.status(500).send('Something broke!');
})
```
