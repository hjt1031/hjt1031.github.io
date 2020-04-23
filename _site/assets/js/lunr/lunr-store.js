var store = [{
        "title": "[nodejs] 파일생성, 리다이렉션, 파일삭제",
        "excerpt":"파일생성과 리다이렉션 리다이렉션 : 출력의 방향을 바꾼다. response.writeHead(302, {Location : 'http://whateverhostthiswillbe:8675/' +newRoom}); response.end(); writeHead(200) 은 성공시켰다. writeHead(302) 페이지를 다른데로 리다이렉션 시킨다. ex) fs.writeFile(`data/${title}`, description, 'utf8', function(err){ response.writeHead(302, {Location: `/?id=${title}`}); response.end(); }) fs.unlink(path, callback) =&gt; 파일삭제 ex) fs.unlink(`data/${id}`, function(error){ response.writeHead(302, {Location: `/`}); response.end(); }) 삭제가 되고 홈으로 이동한다. Get 방식 QueryString...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs/",
        "teaser": null
      },{
        "title": "[AWS]기초용어",
        "excerpt":"EC2 : Elastic Compute Cloud, 아마존 웹 서비스 중 대표적인 상품 Instance : Instance 한개당 한대의 컴퓨터라 생각하면 된다 온디맨드 인스턴스 : 필요할때 키고 필요없을땐 끊다. 우리가 컴퓨터를 필요할 때마다 켜고 끄고 할 수 있는 인스턴스를 의미 예약 인스턴스 : 서버를 키는데 365일 동안 끄지 않는 경우면 예약 인스턴스를 사용하는게...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws/",
        "teaser": null
      },{
        "title": "[node js] 객체",
        "excerpt":"Object 와 Array var members = ['egoging','k8805','hoya']; console.log(members[1]); var i = 0; while (i&lt;members.length) { console.log('array loop',members[i]); i = i+1; } var roles = { 'programmer':'egoing', // key : value 'designer' : 'k8805', 'manager' : 'hoya'} console.log(roles.designer) //객체는 . 을 찍어서 가져온다. console.log(roles['debugger']) //키값을 문자로 전달해도 가져올 수 있다. for(var...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/node-js/",
        "teaser": null
      },{
        "title": "[AWS] OSX로 AWS연결",
        "excerpt":"터미널로 접속 server 켜기 ssh key 를 받아 안전한 폴더에 저장 aws 홈페이지 EC2 에 나의 인스턴스를 우클릭 후 연결을 누르면 접속 방법이 나온다 인스터스를 킨다. ssh 키를 안전한 폴더(그냥 디렉토리를 만들면 된다.)로 이동 시킨다. ssh 키가 있는 디렉토리에서 chmod 400 aws_password.pem 실행 (만약, 접근권한이 없다면 sudo 를 붙여서 실행)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-osx-aws/",
        "teaser": null
      },{
        "title": "[nodejs] 객체화, 모듈사용법,  경로보안, 출력정보 보안",
        "excerpt":"코드를 간결하게 객체화 해서 사용가능 다른말로 리팩토링 이라고도 함 var template = { //template 라는 객체를 생성 HTML:function(title, list, body, control){ return ` &lt;!doctype html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;WEB1 - ${title}&lt;/title&gt; &lt;meta charset=\"utf-8\"&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;&lt;a href=\"/\"&gt;WEB&lt;/a&gt;&lt;/h1&gt; ${list} ${control} ${body} &lt;/body&gt; &lt;/html&gt; `; },list:function(filelist){ var list = '&lt;ul&gt;'; var i =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs/",
        "teaser": null
      },{
        "title": "[AWS]인스턴스 에서 웹서버 사용",
        "excerpt":"   홈페이지로 로그인해 연결을 눌러 키를 터미널에 복사 붙여넣기 를 해서 접속한다.   아마존 EC2 인스턴스에 퍼블릭 DNS(IPv4)에 있는 주소를 복사해 주소창에 붙여넣기를 한다.   홈페이지에 우분투 라고 나오면 제대로 접속한게 맞는것이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws/",
        "teaser": null
      },{
        "title": "[AWS]AMI & WordPress 설치",
        "excerpt":"Amazon machine image : 컴퓨터가 갖고 있는 상태를 그대로 얼려서 나중에 똑같이 복원하는 데이터 (그컴퓨터에 운영체제 ,소프트웨어 설정 ,현재 사용중인 프로그램 등등) 백업 기능이라 생각하면 된다 Wordpress : 가상머신의 형태로 제공된 솔루션을 사고 팔 수 있는 공간이라고 보면 된다.(다른사람이 만든 인스턴스를 사용하는 것) wordpress 설치방법 aws markplace 에서 wordpresss 를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/awsami/",
        "teaser": null
      },{
        "title": "[AWS]Scalability",
        "excerpt":"변화하는 수요에 얼마나 탄력적으로 공급을 할 수 있는가? 클라우드 컴퓨팅   Scale Up : 웹사이트를 운영하는데 접속자가 계속 많아지면 그 수요에 대해 어떻게 탄력적으로 어떻게 대응할 건지. (수요가 많으면 좋은 컴퓨터로 업그레이드)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/awsscalability/",
        "teaser": null
      },{
        "title": "[nodejs]API & Mysql",
        "excerpt":"API : Application Programming interface   개발자와 함수를 사용하는 개발자 들의 약속된 조작장치  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsapi/",
        "teaser": null
      },{
        "title": "[AWS]스트래스 테스트(ab test)",
        "excerpt":"인스턴스 접속 : ssh -i 키위치/키이름.pem ubuntu@ip 컴퓨터의 CPU 점유율 보기 : top ssh -i Desktop/dev/key/aws_password.pem ubuntu@54.180.2.171 sudo apt-get update : 컴퓨터에 프로그램 목록을 최신버전으로 업그레이드 ab 프로그램 : 아파치에서 만든 부화발생기 (인스턴스 접속 후 ab 타이핑) requests : 어떤 웹서버에 몇번의 접속을 시도하겠냐 concurrency : 동시에 몇번의 접속을 시도하겠냐...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws/",
        "teaser": null
      },{
        "title": "[nodejs]Mysql Module",
        "excerpt":"기본적으로 nodejs 모듈에는 mysql를 제어하는 모듈이 없다. pm install -S mysql 을 해주면 packson(dependencies) 에 추가가된다. 소스코드를 나중에 복제하고 사용할때 편리하기 위해 db.query(SELECT * FROM topic WHERE id=${query.id}`,function(error2,topic){ //이런식으로 쓰면 사용자에게 공격을 당할 수 있다. db.query(`SELECT * FROM topic WHERE id=?`,[queryData.id],function(error2,topic){ //id에 ? 에 두번쨰 인자가 치환되서 들어간다.보안성이좋음 response.writeHead(302, {Location:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsmysql/",
        "teaser": null
      },{
        "title": "[AWS] Elastic Ips & Scale Up",
        "excerpt":"Elastic Ips(탄력적 IP) instances 를 다시 껏다가 키면 Public IP 가 달라진다. why? ip의 고갈현상이랑 밀접한 관계가 있다. 00.000.00.000 부터 255.255.255.255 까지 IP가 존재할 수 있다 약 (40억개) 이세상에 40억개만 IP만 가질 수 있다. (40억대만 인터넷을 사용할 수 있다) 그래서 내가 쓰는 IP 를 컴퓨터를 킬때마다 배분해 준다. 끄면 가져가고....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-elastic-ips/",
        "teaser": null
      },{
        "title": "[nodejs] web server, 변수, Template literals,URL",
        "excerpt":"web browser 가 web server 한테 정보를 요청하면 web server 그정보를 찾아서 web browser에게 응답해준다. DataType String console.log('asdjlkasdvnlkfnvljkfndjlvndfljvnjldfvdf.length) // 갯수를 확인 할 수 있다 Variable(변수) a = 1; //대입연산자 1은 상수 console.log(a); a = 2; //a는 변수 (변할 수 있다), 2는 상수 (항상 상, 언제나 2이다.) console.log(a) Template literals (문자를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-web-server/",
        "teaser": null
      },{
        "title": "[AWS] Scale Out",
        "excerpt":"여러대의 컴퓨터가 협력해서 어떤 동일한 목표를 달성하는 컴퓨터들의 사회를 만든다 라고 할 수 있다. 처음에 Scale up 을 하다보면 단일 컴퓨팅으로써 한계에 도달하게 되는데 그 한계에 도달했을때 한계를 뛰어넘을 수 있는건 Scale out 데이터를 처리할떄 보통 web server - middle ware - database 순이다. web server 대표적 으로 nginx, apache...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-scale-out/",
        "teaser": null
      },{
        "title": "[얄코]Cookie, Session, Cache",
        "excerpt":"쿠키 : 브라우저에 저장되는 내용들 , 내컴퓨터에 있으닌깐 내가 갖고 있는 정보들 하지만 쿠키는 한계가 있다 내가임의로 고치거나 고칠 수 있고 남이 쉽게 볼 수 도있다. ( 로그인자동완성, 오늘 하루 안보기, 쇼핑을 하는데 로그인을 하지않고 물건을 장바구니에 담는 등 지워지거나, 조작되거나, 가로채거나 보여져도 큰 지장이없는 정보들을 브라우져에 저장하는데 사용됨) 세션...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/cookie-session-cache/",
        "teaser": null
      },{
        "title": "[d]",
        "excerpt":"방식, 방법론이다. ( 객체지향 언어는 복잡한 코드를 간결하게? 해주는 것이라 생각하면 됨.)   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/",
        "teaser": null
      }]
