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
      }]
