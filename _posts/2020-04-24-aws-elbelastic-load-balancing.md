---
title: "[AWS] ELB(Elastic Load Balancing)"
---

로드밸런서 생성을 하는데, 

만약 우리의 서비스가 HTTPS 도 지원한다면 리스너 추가를 해서 HTTPS 를 추가하는데 인스턴스는 HTTPS 로 할필요없이 HTTP 로만 해줘도된다.

왜냐하면 로브밸런서와 EC2 사이에 로드밸런서가 안전하게 통신할 수 있기 때문에

DNS name 이 만들어지는데 DNS name 으로 접속이 가능하다.
