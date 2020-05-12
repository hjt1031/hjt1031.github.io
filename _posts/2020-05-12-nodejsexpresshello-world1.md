---
title: "[얄코]REST API"
---

REST API는 정보들이 주고받아지는 데 있어서 개발자들 사이에 널리 쓰이는 일종의 형식

어떤 기수링나 제품이 아니라, 형식이기 때문에 어떤 프로그래밍 언어를 쓰든 폼에 맞춰서 기능을 만들어내면 된다.
 
 REST API 는 결국 어떤 URI에 어떤 메소드를 사용할지 개발자들 사이에 널리 지켜지는 약속이다.
 
 ex) https://(도메인)/classes  이면 아마도 학원의반들 목록을 받아오는 요청 일것이다.
 그리고 https://(도메인)/classes/2 를 붙인 idx 고유 번호가 따라붙으면 보통은 인덱스 번호가 이 숫자인 반의 정보가 온다. 
 
 REST API에서는 GET, POST, PUT ,DELETE, PATCH 를 주로 사용한다.
 POST, PUT, PATCH 에는 BODY 란 주머니가 있어서. 정보들을 GET 이나 DELETE 보다 많이 비교적 안전하게 보낼 수 있다.
 
GET 는 주로 데이터를 read 하는데 사용하기
POST 는 create, 새로운 정보를 추가하는데 사용된다. url 로  https://(도메인)/classes/2/students 주고 body에 새 학생의 정보를 실어보낸다. 보통 idx 는 정보가 추가되면서 생성되기 때문에 따로 idx 를 줄 필요가 없다.  하지만 update 를 한다면,

PUT 또는 PATCH 에 BODY에 실어서 정보를 보낸다.

PUT은 정보를 통째로 갈아 끼울 때 (ex) 이름 : 연두부, 성별 : 남자, 출석 :2   => 이름 :연놀부, 성별 : 여자, 출석 : 3
PATCH 는 정보를 정보 중 일부를 바꿀때 
 
 REST API 를 보낼때 HTTP 규약에 따라 신호를 전송한다.