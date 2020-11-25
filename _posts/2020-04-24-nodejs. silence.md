---
title: "[node]정적파일 서비스"
---

images 디렉토리 만들어주고 
```javascript
app.use(express.static('public'));//public 디렉토리 안에서 static 파일을 찾겠다.
```

그다음 본문 로직에
```javascript
<img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
```
