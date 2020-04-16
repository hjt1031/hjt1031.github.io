---
title: "[nodejs]Mysql Module"
---

기본적으로 nodejs 모듈에는 mysql를 제어하는 모듈이 없다.
pm install -S mysql 을 해주면 packson(dependencies) 에 추가가된다.  소스코드를 나중에 복제하고 사용할때 편리하기 위해


```java
db.query(SELECT * FROM topic WHERE id=${query.id}`,function(error2,topic){ //이런식으로 쓰면 사용자에게 공격을 당할 수 있다.

db.query(`SELECT * FROM topic WHERE id=?`,[queryData.id],function(error2,topic){ //id에 ? 에 두번쨰 인자가 치환되서 들어간다.보안성이좋음

 response.writeHead(302, {Location: `/?id=${result.insertId}`}); //추가된 id 을 가져오는 방법 (바로 추가된 id로 리다이렉션이 됨)
```
