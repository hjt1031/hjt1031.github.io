---
title: "[AWS] Scale Out"
---

# 여러대의 컴퓨터가 협력해서 어떤 동일한 목표를 달성하는 컴퓨터들의 사회를 만든다 라고 할 수 있다. 

**처음에 Scale up 을 하다보면 단일 컴퓨팅으로써 한계에 도달하게 되는데 그 한계에 도달했을때 한계를 뛰어넘을 수 있는건 Scale out**

데이터를 처리할떄 보통 web server - middle ware - database 순이다. <br/>
web server 대표적 으로 nginx, apache<br/>
middle ware 대표적 으로  php , java spring<br/>

만약,트래픽 이 몰린다면 CPU가 과부화가 걸려서 접속이 느려질 것이다. <br/>
그럴때 scale up을 사용해 database 를 한대더 인스턴스를 생성해준다. database.slave1(읽기), database.master1(쓰기) 로 정해놓는다.<br/>
예를들어 middle ware에서 database.slave1 에는 읽기만 database.master1 에는 쓰기만 역할을 지정해주고 더많을떄는 3개4개까지 만들어준다.<br/>

보통 database.slave을 먼저 샤딩해주고 그다음 database.master 을 샤딩해준다.<br/>

그다음 middle ware 를 하나더 만들어주고 web server 를 만들어주는데 <br/>

webserve 는 중요한게 사용자가 접속할때 ip에서 DNS서버를 통해 접속하는데  DNS에 설정을 변경해 
2명의 사용자가 접속할때 webserver1,webserver2 로 분할로 보내주는 개념이다.
보통 webserver 같은경우 앞에 loadbalancer 를 두고 사용을한다. <br/>
예를 들어 webserver1, webserver2, webserver3  총3대가 있으면  webserver2가 죽었으면 loadbalancer 가 감지해 webserver1,webserver3 으로만 타게 해준다.<br/>
그리고 webserver1이  webserver2,webserver3 에 비해 성능이 좋으면 loadbalancer 가 감지해 webserver1 에 많은 할당량을 배분한다.<br/>
