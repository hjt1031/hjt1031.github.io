---
title: "[nodejs]보안"
---

1. express 를 항상 최신버전으로 유지.
2. https 를 써라 why? 웹브라우저와 웹서버가 통신할때 암호화를 하기떄문에.
3. 단골손님같은 보안이슈를 자동으로 해결해준다.
```
npm install -save helmet
```
4. 쿠키를 올바르게 사용해라(누가들어왓는지 확인하는용도?)
5. 웹애플리케이션이 쓰고있는 모듈들을 잘 관리해라
```
npm i nsp -g
```
