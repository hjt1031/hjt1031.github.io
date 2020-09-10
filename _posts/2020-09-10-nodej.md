---
title: "[Nodejs]웹 서버에 요청할 때 발생하는 이벤트 & stream"
---

웹 브라우저가 웹 서버에 접속한 후 데이터를 요청하면 그떄마다 적절한 이벤트가 발생하므로 다양한 상황에 맞추어 콜ㄹ백 함수를 각각 등록하면된다.

connection : 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트입니다.
request : 클라이언트가 요청할 때 발생하는 이벤트입니다.
close : 서버를 종료할 때 발생하는 이벤트입니다.


stream이란 일종의 추상적인 개념인데 입출력 기기나 프로세스, 파일 등 어디로 가는 지, 어디로 나왔는 지 상관없이 통일된 방식으로 데이터를 다루기 위한 가상의 개념이다.

Node.js에서 많은 Object들이 stream Object 이다. 예를 들어서 http 서버의 request나 process.stdout도 stream 인스턴스이다.

stream들은 읽을 수 있거나(readable), 쓸 수 있거나(writable) 혹은 둘 다(both)가 될 수 있다.

모든 stream들은 EventEmitter의 인스턴스이다. 따라서 이벤트 핸들러를 작성할 수 있다.
