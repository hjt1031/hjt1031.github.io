---
title: "[nodejs] web server, 변수, Template literals,URL"
---

web browser 가 web server 한테 정보를 요청하면 web server 그정보를 찾아서 web browser에게 응답해준다. 

# **DataType**
String

```javascript
console.log('asdjlkasdvnlkfnvljkfndjlvndfljvnjldfvdf.length) // 갯수를 확인 할 수 있다
```


# **Variable(변수)**
```javascript
a = 1; //대입연산자 1은 상수
console.log(a);
a = 2; //a는 변수 (변할 수 있다), 2는 상수 (항상 상, 언제나 2이다.)
console.log(a)
```

# **Template literals (문자를 표현)**
```javascript
var name='k8805';
var letter = `Dear ${name}
 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ${1+1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ${name}`;
 
console.log(letter);
```

# **URL**
 
>  http://opentutorials.org:3000/main?id=HTML&page=12
 
#####  http : protocol통신규칙이라 한다. 사용자가 서버에 접속할때 어떤방식으로 통신할 것인가에 대한 부분 (웹브라우저 와 웹서버가 서로 데이터를 주고받기위한 통신규칙)<br/><br/>

###### opentutorials.org :  host라한다(domain이라고도 부른다) 인터넷에 접속되어있는 각각의 컴퓨터를 칭한다. <br/><br/>
 3000 : 포트번호라 한다. 한대의 컴퓨터 안에 여러대의 서버가 있을 수 있다. 그러면 클라이언트가 접속했을 때 그중에 어떤 서버와 통신 할 지 애매 하다 
  그래서 접속할 때 접속할때 3000이라 하면 3000번 포트에 연결되어 있는 서버와 통신하게 된다.<br/><br/>
###### 80번 port는 전세계적으로 약속되어 있기에 http를 통해 접속했으면 웹서버에 접속한것이다. 80을 생략한것이다.<br/><br/>
main : path라고 한다. 어떤파일인지 가르킨다.<br/><br/>
id=HTML&page=12 : queryString 이라고 한다. 내가읽고 싶은 정보는 html 에 12페이지 이다  쿼리스트링의 시작은 ? 이며 값과 값은 & 쓰기로 약속 되어있고 값의 이름과 값은 =로 구분하기로 약속되어 있다.
