var store = [{
        "title": "[AWS]기초용어",
        "excerpt":"EC2 : Elastic Compute Cloud, 아마존 웹 서비스 중 대표적인 상품 Instance : Instance 한개당 한대의 컴퓨터라 생각하면 된다 온디맨드 인스턴스 : 필요할때 키고 필요없을땐 끊다. 우리가 컴퓨터를 필요할 때마다 켜고 끄고 할 수 있는 인스턴스를 의미 예약 인스턴스 : 서버를 키는데 365일 동안 끄지 않는 경우면 예약 인스턴스를 사용하는게...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws/",
        "teaser": null
      },{
        "title": "[aws]스트래스테스트",
        "excerpt":"인스턴스 접속 : ssh -i 키위치/키이름.pem ubuntu@ip 컴퓨터의 CPU 점유율 보기 : top ssh -i Desktop/dev/key/aws_password.pem ubuntu@54.180.2.171 sudo apt-get update : 컴퓨터에 프로그램 목록을 최신버전으로 업그레이드 ab 프로그램 : 아파치에서 만든 부화발생기 (인스턴스 접속 후 ab 타이핑) requests : 어떤 웹서버에 몇번의 접속을 시도하겠냐 concurrency : 동시에 몇번의 접속을 시도하겠냐...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-stress/",
        "teaser": null
      },{
        "title": "[aws]인스턴스 에서 웹서버 사용",
        "excerpt":"   홈페이지로 로그인해 연결을 눌러 키를 터미널에 복사 붙여넣기 를 해서 접속한다.   아마존 EC2 인스턴스에 퍼블릭 DNS(IPv4)에 있는 주소를 복사해 주소창에 붙여넣기를 한다.   홈페이지에 우분투 라고 나오면 제대로 접속한게 맞는것이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-instance/",
        "teaser": null
      },{
        "title": "[AWS]Scalability",
        "excerpt":"변화하는 수요에 얼마나 탄력적으로 공급을 할 수 있는가? 클라우드 컴퓨팅   Scale Up : 웹사이트를 운영하는데 접속자가 계속 많아지면 그 수요에 대해 어떻게 탄력적으로 어떻게 대응할 건지. (수요가 많으면 좋은 컴퓨터로 업그레이드)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/awsscalability/",
        "teaser": null
      },{
        "title": "[AWS] OSX로 AWS연결",
        "excerpt":"터미널로 접속 server 켜기 ssh key 를 받아 안전한 폴더에 저장 aws 홈페이지 EC2 에 나의 인스턴스를 우클릭 후 연결을 누르면 접속 방법이 나온다 인스터스를 킨다. ssh 키를 안전한 폴더(그냥 디렉토리를 만들면 된다.)로 이동 시킨다. ssh 키가 있는 디렉토리에서 chmod 400 aws_password.pem 실행 (만약, 접근권한이 없다면 sudo 를 붙여서 실행)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-osx-aws/",
        "teaser": null
      },{
        "title": "[AWS]AMI & WordPress 설치",
        "excerpt":"Amazon machine image : 컴퓨터가 갖고 있는 상태를 그대로 얼려서 나중에 똑같이 복원하는 데이터 (그컴퓨터에 운영체제 ,소프트웨어 설정 ,현재 사용중인 프로그램 등등) 백업 기능이라 생각하면 된다 Wordpress : 가상머신의 형태로 제공된 솔루션을 사고 팔 수 있는 공간이라고 보면 된다.(다른사람이 만든 인스턴스를 사용하는 것) wordpress 설치방법 aws markplace 에서 wordpresss 를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/awsami/",
        "teaser": null
      },{
        "title": "[AWS] Elastic Ips & Scale Up",
        "excerpt":"Elastic Ips(탄력적 IP) instances 를 다시 껏다가 키면 Public IP 가 달라진다. why? ip의 고갈현상이랑 밀접한 관계가 있다. 00.000.00.000 부터 255.255.255.255 까지 IP가 존재할 수 있다 약 (40억개) 이세상에 40억개만 IP만 가질 수 있다. (40억대만 인터넷을 사용할 수 있다) 그래서 내가 쓰는 IP 를 컴퓨터를 킬때마다 배분해 준다. 끄면 가져가고....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-elastic-ips/",
        "teaser": null
      },{
        "title": "[AWS]터미널로 서버접속, ELB적용(ab 테스터)",
        "excerpt":"두개의 인스턴스를 생성해준다. $ ssh -i 터미널경로/aws_passward.pem ubuntu@public ip주소 $ sudo apt-get update 타이핑(ab 벤치마킹 테스터기, 업데이트 먼저 해줘야함)패키지 리스트 를 업데이트를 해준다. $ sudo apt-get install apache2-utils 타이핑(ab벤치마킹 설치), 웹서버 설치는 $ sudo apt-get install apache2 ELB적용 웹서버를 이미지를 만들어준다.(AMI) load balances 를 들어가 웹서버 2개를 save 해준다. DNS...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-elbab/",
        "teaser": null
      },{
        "title": "[AWS]Auto Scaling (오토스케일링)",
        "excerpt":"컴퓨터가 필요하면 자동으로 생성하고 필요없으면 자동으로 삭제해준다.(과금이 발생하지 않게 해주는 기능) AUTO SCALING 목록에 보면 시작구성과, Auto Scaling group 이 있다. 먼저 Auto Scaling group에 먼저 생성을 해준다. 그러면 오토스케일의 이미지를 선택한다 이미지화 시켯던 내AMI를 선택한다. 인스턴스 성능 선택한다. name 정하고 스토리지 정하고 시큐리티 그룹을 만든다. 그다음 오토스케일 그룹을 만드는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/awsauto-scaling/",
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
        "title": "[얄코]객체지향 프로그래밍",
        "excerpt":"객체지향이랑 어떤 프로그래밍 방식, 방법론이다. ( 객체지향 언어는 복잡한 코드를 간결하게? 해주는 것이라 생각하면 됨.) 데이터와 기능이 클래스로 ‘캡슐화’ 된 컴퓨터 자원의 묶음을 ‘객체’라고 한다. 밀가루 반죽과 팥이 클래스란 붕어빵이 틀에 찍혀서 객체라는 붕어빵이 나온다. ‘은닉성’ : 우리가 TV 속을 뜯어보지 않아도 리모콘으로 필요한 조작을 다 할 수 있는 것처럼...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/fe/",
        "teaser": null
      },{
        "title": "[얄코] Angular, React, Vue",
        "excerpt":"SPA 프레임워크 “재료는 우리가 주는데 요리는 너네가 알아서해” 라고 역할을 맡겨버리는 것. 옛날 에는 페이지에 좋아요 버튼을 누르면 화면이 다시 리로드가 되었는데 지금은 리로드없이 가능하다. 브라우저는 javascript, css html이 진열된 묶음을 받아간다음 이 레시피대로 데이터를 요청하고, 화면을 렌더링해서 모니터에 띄워주게 되는 것 Evan You란 개인이 만든 Vue는 코드가 깔끔하고 배우기...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/angular-react-vue/",
        "teaser": null
      },{
        "title": "[AWS] ELB(Elastic Load Balancing)",
        "excerpt":"로드밸런서 생성을 하는데,   만약 우리의 서비스가 HTTPS 도 지원한다면 리스너 추가를 해서 HTTPS 를 추가하는데 인스턴스는 HTTPS 로 할필요없이 HTTP 로만 해줘도된다.   왜냐하면 로브밸런서와 EC2 사이에 로드밸런서가 안전하게 통신할 수 있기 때문에   DNS name 이 만들어지는데 DNS name 으로 접속이 가능하다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws-elbelastic-load-balancing/",
        "teaser": null
      },{
        "title": "[node]정적파일 서비스",
        "excerpt":"images 디렉토리 만들어주고  app.use(express.static('public'));//public 디렉토리 안에서 static 파일을 찾겠다.   그다음 본문 로직에  &lt;img src=\"/images/hello.jpg\" style=\"width:300px; display:block; margin-top:10px;\"&gt;  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-silence/",
        "teaser": null
      },{
        "title": "[nodejs]Mysql Module",
        "excerpt":"기본적으로 nodejs 모듈에는 mysql를 제어하는 모듈이 없다. pm install -S mysql 을 해주면 packson(dependencies) 에 추가가된다. 소스코드를 나중에 복제하고 사용할때 편리하기 위해 ```java db.query(SELECT * FROM topic WHERE id=${query.id}`,function(error2,topic){ //이런식으로 쓰면 사용자에게 공격을 당할 수 있다. db.query(SELECT * FROM topic WHERE id=?,[queryData.id],function(error2,topic){ //id에 ? 에 두번쨰 인자가 치환되서 들어간다.보안성이좋음 response.writeHead(302,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsmysql-module/",
        "teaser": null
      },{
        "title": "[nodejs] Express 미들웨어",
        "excerpt":"Express 의 중요 기능 2가지 라우터 미들웨어 소프트웨어를 만들때 처음부터 끝까지 다만드는 경우는 없다. 다른사람이 만든 소프트웨어를 부품으로 해서 만든다. 이것을 미들웨어라고 생각하면 된다. npm install body-parser //로설치 body 는 웹브라우저에서 요청한 정보 본체를 뜻한다. parser 는 분석 var bodyParser = require('body-parser'); //맨위에 선언 var post = request.body //로고쳐서 실행시켜준다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsexpress/",
        "teaser": null
      },{
        "title": "[nodejs] Escaping (탈출)",
        "excerpt":"저장된 정보가 밖에 나올때 필터링해서 안보이게? 해주는 것 (   var sanitizeHtml = require('sanitize-html');  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-escaping/",
        "teaser": null
      },{
        "title": "[얄코]포인터",
        "excerpt":"철수와 영희가 있는데 철수가 팀프로젝트에서 필요한 교과서에 페이지를 알고있다 이거를 영희에게 알려줄려하는데 종이로 베껴서 보여주면 종이낭비닌깐 교과서의 페이지만 알려준다 이것이 포인터 char language = 'c'; int thisYear = 2019; double pi = 3.14; 이러한 변수에 입력된 값들은 메모리 어딘가에 저장 되어 있다. 메모리는 어떠한 값들이 나란히 정렬되어 있지 않음. (배열을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/po/",
        "teaser": null
      },{
        "title": "[nodejs] 페이지 생성 구현2",
        "excerpt":"app.get('/create',function(request,response){ //get방식일떄  app.post('/create_process',function(request,response){ //post방식   쿼리 스트링이 아닌 방식으로 바꿀려면   &lt;a href=\"/update/?id=${sanitizedTitle}\"&gt;update&lt;/a&gt; 에서 &lt;a href=\"/update/${sanitizedTitle}\"&gt;update&lt;/a&gt;   삭제기능  &lt;form action=\"/delete_process\" method=\"post\"&gt; //action 에 delete 앞에 /를 주게되면 최상위 path 바로밑으로 감   express 는 리다이렉션 기능을 편리하게 제공하고 있다.   response.redirect //를 사용하면 된다  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-2/",
        "teaser": null
      },{
        "title": "[nodejs]API & Mysql",
        "excerpt":"API : Application Programming interface   개발자와 함수를 사용하는 개발자 들의 약속된 조작장치  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsapi-mysql/",
        "teaser": null
      },{
        "title": "[nodejs] express 홈페이지 구현",
        "excerpt":"기존 라우팅 방식은  var app = http.createServer(function(request,response){}   많은 부분에서 공유하고 사용했다. 어떻게 공유 되는 부분인지 확인할려면 위로올라서 확인해야하는데.   express 방식의 라우팅 방식으로 하면  request,response의 개발할려는 로직에  필요한 것만 들어있어서 간편하게 사용할 수 있다.   path 방식 url 파라미터 처리방법  app.get('/page/:pageId/:chapterId', function(request, response){   return response.send(request.params);   //{\"pageId\":\"HTML\",\"chapterId\":\"css\"} })   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-express/",
        "teaser": null
      },{
        "title": "[Nodejs]파일생성, 리다이렉션, 파일삭제",
        "excerpt":"파일생성과 리다이렉션 리다이렉션 : 출력의 방향을 바꾼다. response.writeHead(302, {Location : 'http://whateverhostthiswillbe:8675/' +newRoom}); response.end(); writeHead(200) 은 성공시켰다. writeHead(302) 페이지를 다른데로 리다이렉션 시킨다. ex) fs.writeFile(`data/${title}`, description, 'utf8', function(err){ response.writeHead(302, {Location: `/?id=${title}`}); response.end(); }) fs.unlink(path, callback) =&gt; 파일삭제 ex) fs.unlink(`data/${id}`, function(error){ response.writeHead(302, {Location: `/`}); response.end(); }) 삭제가 되고 홈으로 이동한다. Get 방식 QueryString...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-1/",
        "teaser": null
      },{
        "title": "[얄코]REST API",
        "excerpt":"REST API는 정보들이 주고받아지는 데 있어서 개발자들 사이에 널리 쓰이는 일종의 형식 메소드와 URL을 조합해서, 예측 가능하고 일정한 정보와 작업을 요청하는 것이다. 버튼마다 나오는 것이 확실한 자판기 처럼 어떤 기수링나 제품이 아니라, 형식이기 때문에 어떤 프로그래밍 언어를 쓰든 폼에 맞춰서 기능을 만들어내면 된다. REST API 는 결국 어떤 URI에 어떤...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsexpresshello-world1/",
        "teaser": null
      },{
        "title": "[얄코] GraphQL",
        "excerpt":"기존 REST API는 메소드와 URL을 조합해서, 예측 가능하고 일정한 정보와 작업을 요청하는 것이다. 버튼마다 나오는 것이 확실한 자판기 처럼 하지만 불편할 때가 있다. ex) 국어강사가 학생들의 국어 성적을 보고자 하는데 요청을 보낼때 학번, 이름, 국어 성적이면 충분하다. (도메인)/classes/(반idx)/students 이렇게 요청을 보내면 쓸때없는 정보들도 다같이 들고온다. (주소, 키, 성별,등등) 즉, 데이터...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/graphql/",
        "teaser": null
      },{
        "title": "[AWS]S3 (Simple Storage Service)",
        "excerpt":"파일을 저장하는 서비스 라고 생각하면 된다.      s3 클릭한뒤 버킷을 생성한다.   버킷생성 뒤 파일을 업로드 해본다.   ex) 를 들어 웹사이트를 운영한다.그러면 그 사이트에서 사용자가 파일을 업로드하면 미들웨어(루비, 파이썬, 자바 등등)가 s3 의 api 를 통해 s3로 전송한다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/awss3-simple-storage-service/",
        "teaser": null
      },{
        "title": "[nodejs]라우터-주소체계변경",
        "excerpt":"app.use('/topic',topicRouter) //topic 라우터를 타면 topicRouter 라는 미들웨어를 적용시키겠다. router.get('/create',function(request,response){ var title = 'WEB - create'; var list = template.list(request.list);//미들웨어 var html = template.HTML(title, list, ` &lt;form action=\"/topic/create_process\" method=\"post\"&gt; &lt;p&gt;&lt;input type=\"text\" name=\"title\" placeholder=\"title\"&gt;&lt;/p&gt; &lt;p&gt; &lt;textarea name=\"description\" placeholder=\"description\"&gt;&lt;/textarea&gt; &lt;/p&gt; &lt;p&gt; &lt;input type=\"submit\"&gt; &lt;/p&gt; &lt;/form&gt; `, ''); response.send(html); } routers 에 위치한 topic.js...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs3/",
        "teaser": null
      },{
        "title": "[nodejs]보안",
        "excerpt":"   express 를 항상 최신버전으로 유지.   https 를 써라 why? 웹브라우저와 웹서버가 통신할때 암호화를 하기떄문에.   단골손님같은 보안이슈를 자동으로 해결해준다.     npm install -save helmet           쿠키를 올바르게 사용해라(누가들어왓는지 확인하는용도?)   웹애플리케이션이 쓰고있는 모듈들을 잘 관리해라     npm i nsp -g          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-security/",
        "teaser": null
      },{
        "title": "[nodejs]express generator",
        "excerpt":"npm install express-generator -g //다른파일에 설치를 한다 -g 는 글로벌 전역으로 쓸수 있는 것이다  express myapp //그다음 타이핑하면 폴더가 만들어지면서 설치가 된다.  npm start //그다음 타이핑 하게 되면 package.json에 start는 실행하게된다. 그다음 local3000으로 들어가면 심플한 페이지가 하나 생성되어있다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejsexpress-generator/",
        "teaser": null
      },{
        "title": "[nodejs]쿠키",
        "excerpt":"웹브라우저가 서로 주고받는 데이터 http 프로토콜에 포함되어있는 기술 쿠키생성하는방법 var http = require('http'); http.createServer(function(request, response){ // response.writeHead(200, { //성공했다는 가정하에 2번쨰는 객체를 넣어준다. // 'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry'] //두개의 쿠키가 생성됨. // }) response.end('Cookie!!!'); }).listen(3000); 쿠키를 서버에 요청하는 법 먼저 npm 을 다운로드한다 npm install -s cookie 그다음 var cookie = require('cookie');...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-cookie/",
        "teaser": null
      },{
        "title": "[nodejs] 쿠키 실습",
        "excerpt":"로그인 상태체크 function authIsOwner(request,response){ //쿠키 체크 var isOwner = false;//기본으로 false if(request.headers.cookie){//쿠키 값 유무 체크 cookies = cookie.parse(request.headers.cookie); } if(cookies.email === 'egoing777@gmail.com' &amp;&amp; cookies.password === '11111'){ isOwner = true; } console.log(cookies) return isOwner; } ㅎ var app = http.createServer(function(request,response){ var isOwner = authIsOwner(request,response); } 로그인 상태를 UI에 반영 template.js module.exports...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-cookie2/",
        "teaser": null
      },{
        "title": "[얄코]비동기 프로그래밍",
        "excerpt":"동기는 한줄인 열차라고 생각하면 된다. 앞에열차가 느리면 뒤에 열차도 덩달아 느리게 가게 된다. 비동기는 여러 선로의 열차에 앞차가 막히면 다른 선로로 배정해 나가는 방식이다. 비동기 함수 call back 이라 생각하면 된다. 만약 여러번에 걸쳐서 무엇을 찾을때 함수안에 함수.. 를 사용하게 된다.. 이런게 여러개 반복되면서 나타나는게 콜백 지옥이다. 콜백 지옥을 해결하기위해...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/callback/",
        "teaser": null
      },{
        "title": "[nodejs]express(Hello World!)",
        "excerpt":"nodejs 에서 가장많이 사용하는 프레임웤 npm install express –save 으로 설치 var express = require('express') //express 모듈을 load 해온다 const 는 상수 바뀌지않음. var app = express() //express 호출 (함수) app.get('/' , (req, res) =&gt; res.send('/'))//첫번째 인자는 경로, 두번째는 접속했을때 호출될 함수가 표현되어있음.(라우터라 생각하면됨) //(라우팅라 생각하면됨(라우팅은 경로 즉 길을가고있는데 갈림길...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-expresshello-world/",
        "teaser": null
      },{
        "title": "[nodejs] 객체화,모듈사용법,경로보안,출력정보 보안",
        "excerpt":"코드를 간결하게 객체화 해서 사용가능 다른말로 리팩토링 이라고도 함 var template = { //template 라는 객체를 생성 HTML:function(title, list, body, control){ return ` &lt;!doctype html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;WEB1 - ${title}&lt;/title&gt; &lt;meta charset=\"utf-8\"&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;&lt;a href=\"/\"&gt;WEB&lt;/a&gt;&lt;/h1&gt; ${list} ${control} ${body} &lt;/body&gt; &lt;/html&gt; `; },list:function(filelist){ var list = '&lt;ul&gt;'; var i =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/node-js-object/",
        "teaser": null
      },{
        "title": "[nodejs]에러처리",
        "excerpt":"존재하지 않는 페이지를 찾았을때 404 에러가 나타나는데. express 기준   app.use(function(req, res, next){   res.status(404).send('Sorry cant find that!'); }) //추가해준다  페이지에 에러가 있을 경우(서버에러 500)    next(err); //다음 미들웨어를 호출하는 것 에러를 던진다 생각하면 된다.      app.use(function(err, req, res, next){ //첫번째는 next에 담긴 err가 넘어오고   res.status(500).send('Something broke!'); })  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-error/",
        "teaser": null
      },{
        "title": "Parsing & Parser",
        "excerpt":"Parsing parsing은 구문 분석이라고 합니다. 문장이 이루고 있는 구성 성분을 분해하고 분해된 성분의 위계 관계를 분석하여 구조를 결정하는 것입니다. 즉 데이터를 분해 분석하여 원하는 형태로 조립하고 다시 빼내는 프로그램을 말합니다. 웹상에서 주어진 정보를 내가 원하는 형태로 가공하여 서버에서 불러들이는 것입니다. Parser Parser란 Compiler의 일부로서 원시 프로그램의 명령문이나 온라인 명령문, HTML...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/parsing-parser/",
        "teaser": null
      },{
        "title": "[React] component",
        "excerpt":"component 는 HTML 을 반환하는 함수다. 사용자정의 태그를 만들어주는 여러가지 기술이있는데 리액트 도 그중에 하나 사용자가 정의 해서 만드는걸 컨포넌트라 함     가독성을 높힘   재사용성이 좋음   유지보수가 좋아짐   리액트는 항상 파일 위에다가 import React from ‘react’; &lt;- 써줘야함 아니면 JSX 인식못함  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-component1/",
        "teaser": null
      },{
        "title": "Handler",
        "excerpt":"1. 핸들러(Handler) 란 무엇인가? 핸들러란 무엇이고 왜 필요한 것일까요? 앞서 배웠던 스레드(Thread) 는 사용자에게 보이지 않는 Background 에서 실행 되기 때문에 하나의 프로그램에서 여러가지 작업을 동시에 진행되도록 만들어 주는 유용한 개념이었는데요, 이런 스레드에게도 한계점은 있습니다. 바로 ‘View 자원들에 직접 접근이 불가’ 하다는 점입니다. 분명 스레드는 하나의 프로그램에 정의된 자원을 공유할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/handler/",
        "teaser": null
      },{
        "title": "[React]생활코딩 기초",
        "excerpt":"ReactDOM.render(   &lt;React.StrictMode&gt;     &lt;App /&gt; //사용자 정의에 의한 컨포넌트   &lt;/React.StrictMode&gt;,   document.getElementById('root') );  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-1/",
        "teaser": null
      },{
        "title": "[React] 컨포넌트",
        "excerpt":"component 는 HTML 을 반환하는 함수다. 사용자정의 태그를 만들어주는 여러가지 기술이있는데 리액트 도 그중에 하나 사용자가 정의 해서 만드는걸 컨포넌트라 함 가독성을 높힘 재사용성이 좋음 유지보수가 좋아짐   사이드바,로그인창,게시판테이불 같은게 하나하나가 컴포넌트   그리고 이걸 원하는데로 페이지의 목적에 맞게 조합해서 하나의 화면  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-component/",
        "teaser": null
      },{
        "title": "[React] 컨포넌트생성 / JSX",
        "excerpt":"JSX : 페이북에서 만든 컴퓨터 언어 우리가 JSX 로 코드를 작성하면 create-react-app 이 알아서 javascript 의 언어로 컨버팅 해준다. 컨포넌트 생성방법 class Subject extends Component { render(){ //반드시 있어야함 class 안에 function 생략 return( //하나의 최상위 태그만 써야한다. &lt;header&gt; &lt;h1&gt;WEB&lt;/h1&gt; world wide web! &lt;/header&gt; ); } } class App extends...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-commponent/",
        "teaser": null
      },{
        "title": "[React] 이벤트 (bind)",
        "excerpt":"class App extends Component { constructor(props){ //컨포넌트 초기화 super(props); this.state = { //스테이트 값 초기화 mode:'read', subject:{title:'WEB', sub:'world wide Web'}, welcome:{title:'Welcome', desc:\"Hello, React!!!\"}, contents:[ {id:1, title:'HTML', desc:'HTML is for information'}, {id:2, title:'CSS', desc:'CSS is for design'}, {id:3, title:'JavaScript', desc:'JavaScript is for interactive'} ] } } render() { var _title, _desc...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-bind/",
        "teaser": null
      },{
        "title": "[React] props (프로퍼티)",
        "excerpt":"상위(부모) 컴포넌트에서 하위(자식) 컴포넌트에게 데이터를 전달 할때 사용 class Subject extends Component { render(){ //반드시 있어야함 class 안에 function 생략 return( //하나의 최상위 태그만 써야한다. &lt;header&gt; &lt;h1&gt;{this.props.title}&lt;/h1&gt; {this.props.sub} &lt;/header&gt; ); } } class App extends Component { render() { return ( &lt;div className=\"App\"&gt; &lt;Subject title=\"WEB\" sub=\"world wide web!\"&gt;&lt;/Subject&gt; &lt;Subject title=\"React\"...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-props/",
        "teaser": null
      },{
        "title": "[React] state 사용법 (key)",
        "excerpt":"//App.js class App extends Component { constructor(props){ //컨포넌트 초기화 super(props); this.state = { //스테이트 값 초기화 subject:{title:'WEB', sub:'world wide Web'} } } render() { return ( &lt;div className=\"App\"&gt; &lt;Subject title={this.state.subject.title} sub={this.state.subject.sub}&gt; &lt;/Subject&gt; &lt;Subject&gt;&lt;/Subject&gt; &lt;TOC&gt;&lt;/TOC&gt; &lt;Content title=\"HTML\" desc=\"HTML is HyperText Markup Language.\"&gt;&lt;/Content&gt; &lt;/div&gt; ); } } //TOC.js import React,{Component} from 'react';...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-stat/",
        "teaser": null
      },{
        "title": "[React] state props",
        "excerpt":"props 는 사용자가 컨포넌트를 사용하는 입장에서 중요한 것 (외부) 사용하는 쪽 state 는 props 의 값에 따라 내부에 구현에 필요한 데이터 (내부) 구현하는 쪽   사용자한테는 알필요도없고 알수도없는 컨포넌트 내부적으로 사용되는 것들이 state 라고 함   철저하게 props 랑 state 랑 분리되어있어야 한다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-state-prop/",
        "teaser": null
      },{
        "title": "[React]component 파일로분리",
        "excerpt":"import React,{Component} from 'react'; // react 라는 라이브러리 에서 Component 라는 클래스를 갖고온다 src 밑에 component 라는 디렉토리 생성 후 TOC.js 를 만든다. import React,{Component} from 'react'; class TOC extends Component { render(){ return( &lt;nav&gt; &lt;ui&gt; &lt;li&gt;&lt;a href=\"1.html\"&gt;HTML&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href=\"2.html\"&gt;CSS&lt;/a&gt;&lt;/li&gt; &lt;li&gt;&lt;a href=\"3.html\"&gt;Javascript&lt;/a&gt;&lt;/li&gt; &lt;/ui&gt; &lt;/nav&gt; ); } } export default TOC;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/reactcomponent/",
        "teaser": null
      },{
        "title": "[React] 컨포넌트 이벤트",
        "excerpt":"//App.js &lt;Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage = {function(){ this.setState({mode : 'welcome'}); }.bind(this)} &gt; &lt;/Subject&gt; onChangePage 라는 이벤트를 생성 //Subject.js import React,{Component} from 'react'; class Subject extends Component { render(){ //반드시 있어야함 class 안에 function 생략 return( //하나의 최상위 태그만 써야한다. &lt;header&gt; &lt;h1&gt;&lt;a href=\"/\" onClick={function(e){ e.preventDefault(); this.props.onChangePage(); }.bind(this)}&gt;{this.props.title}&lt;/a&gt;&lt;/h1&gt; {this.props.sub} &lt;/header&gt; ); }...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-event/",
        "teaser": null
      },{
        "title": "[React]CRUD (배열)",
        "excerpt":"//createContent.js import React,{Component} from 'react'; class CreateContent extends Component{ render(){ return( &lt;article&gt; &lt;h2&gt;Create&lt;/h2&gt; &lt;form action=\"/create_process\" method=\"post\" onSubmit={function(e){ e.preventDefault(); this.props.onSubmit( e.target.title.value, e.target.desc.value ); }.bind(this)} //submit 이 실행되면 실행되게 하는 이벤트임 &gt; &lt;p&gt;&lt;input type=\"text\" name=\"title\" placeholder=\"title\"&gt;&lt;/input&gt;&lt;/p&gt; &lt;p&gt; &lt;textarea name=\"desc\" placeholder=\"description\"&gt;&lt;/textarea&gt; &lt;/p&gt; &lt;p&gt; &lt;input type=\"submit\"&gt;&lt;/input&gt; &lt;/p&gt; &lt;/form&gt; &lt;/article&gt; ); } } export default...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-CRUD/",
        "teaser": null
      },{
        "title": "[React]JSX, Component",
        "excerpt":"JSX : HTML + javascript (javascript 안의 HTML 이라 생각하면 됨) ReactDOM.render( &lt;React.StrictMode&gt; &lt;App /&gt;&lt;Potato /&gt; &lt;/React.StrictMode&gt;, document.getElementById('root') ); 에러가 발생한다 wh? react aaplication이 하나의 component 만을 rendering 해야 하기 때문이다. function Potato (){ return &lt;h1&gt;I like Potato&lt;/h1&gt; } function App() { return ( &lt;div&gt; &lt;h1&gt;Hello&lt;/h1&gt; &lt;Potato /&gt; &lt;/div&gt; );...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-JSX,/",
        "teaser": null
      },{
        "title": "[React] shouldComponentUpdate",
        "excerpt":"shouldComponentUpdate(newProps, newState){ \t \tif(this.props.data === newProps.data){ \t\t\treturn false; \t} \treturn true; }   render(){  }  shouldComponentUpdate 는 return 값이 true 이면 return 를 실행시키고 false 면 실행시키지 않는다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-shouldcomponentupdate/",
        "teaser": null
      },{
        "title": "[React Nomad] 웹사이트에 동적 데이터 추가",
        "excerpt":"const friends = [\"dal\",\"mark\",\"lynn\",\"japan guy\"] friend.map(function(current) { console.log(current); return 0 }) result : dal mark lynn japan guy return 값에 item 을 각각 매칭 시켜준다 const friends = [\"dal\",\"mark\",\"lynn\",\"japan guy\"] friend.map(function(current) { console.log(current); return current + \"10\" }) result : dal10 mark10 lynn10 japan guy10 import React from 'react'; function...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomad-dynamic/",
        "teaser": null
      },{
        "title": "[React Nomad]State",
        "excerpt":"state 는 보통 우리가 동적 데이터와 함께 작업할때 만들어진다. 변하는 데이터, 존재하지 않는 데이터 class App export React.Component //컨포넌트를 만들때 마다 모든 것을 다 구현하고 싶지 않아서. state ={ } //state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다. render(){ //기본적으로 render 메소드를 갖고있음react 는 자동적으로 나의 class component의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomad-State/",
        "teaser": null
      },{
        "title": "[React Nomad]State 2",
        "excerpt":"state = { count: 0 } add = () =&gt; { this.state.count = 1; }; minus = () =&gt; { this.state.count = -1; }; //동작하지 않음. react 는 render function 을 refresh 하지 않는다. state = { count: 0 } add = () =&gt; { this.setState({count : this.state.count + 1});...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomadstate-2/",
        "teaser": null
      },{
        "title": "[React Nomad] Component Life Cycle",
        "excerpt":"Mountig constructor() : javascript 에서 class를 만들 때 호출되는것. constructor(props){ super(props) console.log(\"hello\"); } componentDidMount(){ console.log(\"component rendered\") } render(){ console.log(\"I m rendering\") } //constructor() 가 가장먼저 실행 그다음 render() 그다음 componentDidMount Update 내가 Add 혹은 Minus를 클릭해서 state를 변경할때 그때가 update componentDidUpdate(){ console.log('I just update') } render(){ console.log(\"I m rendering\") }...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomad-coder-component-life-cycle/",
        "teaser": null
      },{
        "title": "[React Nomad]axios",
        "excerpt":"axios는 node.js와 브라우저를 위한 http통신 javascript 라이브러리이다.   getMovies = async () =&gt; {     const {        data :{         data:{movies}         }      } = await axios.get(\"https://yts-proxy.now.sh/list_movies.json?sort_by=rating\");       this.setState({movies,isLoading : false})     console.log(movies)   }   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomadaxios/",
        "teaser": null
      },{
        "title": "[React Nomad]Style the movie",
        "excerpt":"App.js import \"./App.css\"; render() { const { isLoading, movies } = this.state; return ( &lt;section class=\"container\"&gt; {isLoading ? ( &lt;div class=\"loader\"&gt; &lt;span class=\"loader__text\"&gt;Loading...&lt;/span&gt; &lt;/div&gt; ) : ( &lt;div class=\"movies\"&gt; {movies.map(movie =&gt; ( &lt;Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} /&gt; ))} &lt;/div&gt; )} &lt;/section&gt; ); } movie.js import \"./Movie.css\"; function...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomadstyle-the-movie/",
        "teaser": null
      },{
        "title": "[React Nomad]Map &크롤링 스크래핑 차이",
        "excerpt":"아래는 map()함수를 이용하여 numbers 배열의 값을 두배로 만든 후 map()에서 반환하는 새 배열을 doubled 변수에 할당하고 로그를 확인하는 코드입니다. const numbers = [1, 2, 3, 4, 5]; const doubled = numbers.map((number) =&gt; number * 2); console.log(doubled); 이 코드는 콘솔에 [2, 4, 6, 8, 10]을 출력합니다. React에서 배열을 엘리먼트 리스트로 만드는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomadmap/",
        "teaser": null
      },{
        "title": "[React Nomad]react-router-dom",
        "excerpt":"import {HashRouter, Route} from \"react-router-dom\"; //react-router-dom은 다른 종류의 라우터가 있다 그중에 하나가 HashRouter,Route function App(){ //함수형 컨포넌트 생성 return &lt;HashRouter&gt; &lt;Route path=\"/\" component={Home}/&gt; &lt;Route path=\"/about\" component={About}/&gt; &lt;/HashRouter&gt; } 2개의 컨포넌트가 같이 렌더링이 된다. why? 리액트는 쉽게 말해 자신이 찾는 문자가 속해 했으면 그것도 렌더링을 해버리기 때문? 그래서 path=”/” 을 먼저...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomadreact-router-dom/",
        "teaser": null
      },{
        "title": "[React Nomad]네비게이션",
        "excerpt":"//App.js function App(){ //함수형 컨포넌트 생성 return &lt;HashRouter&gt; &lt;Navigation /&gt; &lt;Route path=\"/\" component={Home}/&gt; &lt;Route path=\"/about\" component={About}/&gt; &lt;/HashRouter&gt; } function Navigation(){ return &lt;div&gt; &lt;Link to=\"/\"&gt;HOme&lt;/Link&gt; &lt;Link to=\"/about\"&gt;About&lt;/Link&gt; &lt;/div&gt; } Link 는 반드시 route 안에 있어야한다. 밖에 있으면 동작이 안됨. function App(){ //함수형 컨포넌트 생성 return &lt;HashRouter&gt; &lt;Navigation /&gt; &lt;Route path=\"/\" component={Home}/&gt;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomad-navigation/",
        "teaser": null
      },{
        "title": "[React Nomad]함수형 컴포넌트와 클래스형 컴포넌트",
        "excerpt":"함수형 컴포넌트는 function App() { const test = \"\"; return &lt;div&gt;{test}&lt;/div&gt; } 클래스형 컴포넌트의 형태는 class App extends Component { render(){ const test = \"\"; return &lt;div&gt;{test}&lt;/div&gt;; } } 함수형 컴포넌트의 장점 클래스형 컴포넌트에 비해 선언하기가 편하다. 메모리 자원을 클래스형 컴포넌트에 비해서 덜 차지한다. 빌드 후 배포시에 결과물의 크기가 작다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/react-nomad/",
        "teaser": null
      },{
        "title": "[얄코]Scope (let, const, var)",
        "excerpt":"각 상수나 변수 등의 요소들이 허용된 영역, 범위를 뜻 함. 예를들어 전역번수로 선언된 함수를 스코프 안쪽에 if(), for() 안 쪽에 선언을 하면 안쪽에 있는 변수로 접근하게 된다. const mouse_1 = '서울쥐'; mouse_1 '귀촌쥐'; // 값 을 바꿀수없는 상수 const 에서 바로 선언을 해주고 값도 바로 넣어줘야함 / ES6 ECMA 2015...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/ffa/",
        "teaser": null
      },{
        "title": "[Nodejs] 용어 1",
        "excerpt":"인터프리터 : 한 줄씩 해석하면서 실행하는 방식 바인딩 : 서로 묶어서 연결해 준다는 의미 ex) 버튼 하나 있는데 이 버튼을 클릭했을 때 click 이벤트가 발생한다고 가정합니다. 이떄 click 이벤트를 함수 객체와 바인딩하면 이 click 이벤트가 발생했을 때 등록한 함수 객체가 실행됩니다. 즉, 사용자가 버튼을 클릭하면 이 함수가 실행됩니다. 모듈 :...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-Terms-1/",
        "teaser": null
      },{
        "title": "[Nodejs]용어2",
        "excerpt":"exports : 모듈을 만들어 주는 대표적인 방식 //정의 exports.함수이름 = 함수정의; //쓰는법 var modeule = require=('module'); module.함수이름(); 자바스크립트는 함수라는 것을 명시적으로 구별하기 위해 function 키워드를 함수 이름 앞에 붙여줌 //같은의미이다. fucntion add(a,b){ return a+b; } var add = function(a,b){ return a+b; } 배열요소 삭제 var Users = [{1},{2},{3}]; delete Users[1]...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-Terms-2/",
        "teaser": null
      },{
        "title": "[Nodejs] 프로토타입 객체",
        "excerpt":"자바스크립트 객체는 함수를 이용해서 만들 수도 있습니다. why? 함수도 객체이기 때문 function Person(name,age){ this.name = name; this.age = age; } Person.prototype.walk = function(speed){ console.log(speed + 'km 속도로 걸어갑니다.'); } var person01 = new Person('소녀시대',20); //생성자 var person02 = new Person('걸스데이',22); console.log(person01.name + '객체의 walk(10)을 호출합니다.'); person01.walk(10); // 소녀시대 객체의 walk(10)을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-prototype/",
        "teaser": null
      },{
        "title": "[Nodejs]주소 문자열을 URL 객체로 변환 & 이벤트 & 파일 다루기",
        "excerpt":"주소 문자열을 URL 객체로 변환 var url = require('url'); //모듈호출 //parse() 와 format() 메소드를 호출 할 수 있음 parse() : https:// 로 시작하는 주소 문자열을 URL 객체로 만들어줌 (요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어 줌) format() : 원래의 주소 문자열로 돌려놓음(요청 파라미터 객체를 문자열로 변환) 이벤트 이벤트 :...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-url/",
        "teaser": null
      },{
        "title": "[Nodejs]웹 서버에 요청할 때 발생하는 이벤트 & stream",
        "excerpt":"웹 브라우저가 웹 서버에 접속한 후 데이터를 요청하면 그떄마다 적절한 이벤트가 발생하므로 다양한 상황에 맞추어 콜ㄹ백 함수를 각각 등록하면된다. connection : 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트입니다. request : 클라이언트가 요청할 때 발생하는 이벤트입니다. close : 서버를 종료할 때 발생하는 이벤트입니다. stream이란 일종의 추상적인 개념인데 입출력 기기나 프로세스, 파일...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-event&stream/",
        "teaser": null
      },{
        "title": "[Nodejs] 간단한 웹 서버",
        "excerpt":"노드의 기본 모듈인 http 를 사용하면 웹 서버 기능을 담당하는 서버 객체를 만들 수 있습니다. var http = require('http'); var server = http.createServer(); //웹서버 객체 만들기 var port = 3000; server.listen(port, function(){ console.log('웹서버가 시작되었습니다',port); }); //list(port,[hostname],[backlog],[callback]) 서버를 실행하여 대기시킵니다 //close([callback]) 서버를 종료합니다 웹 서버는 일반저그올 웹 브라우저라고 하는 클라이언트에서 HTTP...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-webserver/",
        "teaser": null
      },{
        "title": "[Nodejs]객체",
        "excerpt":"Object 와 Array var members = ['egoging','k8805','hoya']; console.log(members[1]); var i = 0; while (i&lt;members.length) { console.log('array loop',members[i]); i = i+1; } var roles = { 'programmer':'egoing', // key : value 'designer' : 'k8805', 'manager' : 'hoya'} console.log(roles.designer) //객체는 . 을 찍어서 가져온다. console.log(roles['debugger']) //키값을 문자로 전달해도 가져올 수 있다. for(var...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-object/",
        "teaser": null
      },{
        "title": "[Nodejs] Express 모듈 (get,post)",
        "excerpt":"http 모듈만 사용해 웹 서버를 구성할 때는 많은 것들을 직접 만들어야 한다 . 하지만 직접 만들어야 하는 코드가 많다면 시간과 노력도 많이 든다는 문제점이 있다. 이 문제를 해결하기 위해 만들어진 것이 익스프레스(express) 이다. express 모듈은 웹 서버를 위해 만들어진 것으로 http 모듈 위에서 동작한다. 따라서 express 모듈을 사용할 때는 항상...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-express/",
        "teaser": null
      },{
        "title": "[Nodejs] 미들웨어 , 토큰",
        "excerpt":"static : 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어 줍니다. body-parser : POST 요청했을 때 요청 파라미터를 확인할 수 있도록 만들어 둠. GET 방식으로 요청할 때는 주소 문자열에 요청 파라미터가 들어갑니다. 하지만 이와달리 POST 방식으로 요청할 때는 본문인 본문 영역(BODY 영역)에 요청 파라미터가 들어 있게 되므로 요청 파라미터를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-middleware/",
        "teaser": null
      },{
        "title": "[nodejs]쿠키와 세션 & 파일업로드",
        "excerpt":"쿠키 와 세션 쿠키 : 클라이언트 웹 브라우저에 저장되는 정보 세션 : 웹 서버에 저장되는 정보 익스프레스 에서는 cookie-parser 미들웨어를 사용하면 쿠키를 설정하거나 확인 할 수 있다. 세션은 쿠키와 달리 서버 쪽에 저장 대표적인 예 : 로그인 var cookieParser = require('cookie-parser') // 쿠키 모듈 var expressSession = require('express-session') // 세션...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-cookie&serrsion/",
        "teaser": null
      },{
        "title": "[Nodejs]몽고디비",
        "excerpt":"몽고디비 : 비관계형 데이터베이스(Nosql : Not Only Sql) 이라고한다. 관계형 데이터베이스는 시스템의 신뢰도를 높이는 데 필요한 장치를 많이 가지고 있습니다. 또 SQL문을 읽어 들이고 실행하는 데 많은 리소스를 사용하며 이 때 문에 성능이 떨어지는 경우가 많습니다. 이에반해 NoSQL 데이터베이스는 성능을 최우선으로 생각하기 때문에 실시간으로 처리해야 하는 경우나 대용량 트래픽을 감당할...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs-Nosql/",
        "teaser": null
      },{
        "title": "[JAVA]기본",
        "excerpt":"자바 동작원리 Java Source code(.java) —-Compile—-&gt; Java Application(.class) —–Run——&gt; Java Virtual Machine ———-Run——–&gt; computer 자바파일을 저장버튼을 눌렀을 때 .class 란 확장자를 가진 파일이 만들어진다. 그것이 Java Application 그다음 우리가 실행 버튼(run) 을 누르게되면 Java Virtual Machine이 확장자가 class 를 가진 파일을 읽어서 컴퓨터를 동작시키게 된다. Operator System.out.println(Math.PI); //3.141592653589793 System.out.println(Math.floor(Math.PI)); //내림...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-Foundation/",
        "teaser": null
      },{
        "title": "[JAVA] 기본 코딩 & 디버깅",
        "excerpt":"public class OkJavaGoInHome { public static void main(String[] args) { String id = \"JAVA APT 507\"; // Elevator call Elevator myElevator = new Elevator(id); myElevator.callForUp(1); // Security off Security mySecurity = new Security(id); mySecurity.off(); // Light on Lighting hallLamp = new Lighting(id+\" / Hall Lamp\"); hallLamp.on(); Lighting floorLamp = new...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-coding&debugging/",
        "teaser": null
      },{
        "title": "[JAVA] 제어문",
        "excerpt":"제어문(조건문, 반복문) 1-1 .boolean data type : ‘boolean’ 에는 true, false 가 있음 System.out.println(foo.contains(\"world\")); //해당문자열을 포함 하고 있는지 확인시켜줌 (true / false) 로 return 해줌 1-2 . Comparison Operator(비교연산자) System.out.println(1&gt;1); // false System.out.println(1 == 1); //true System.out.println(1 &lt; 1); //false System.out.println(1 &gt;= 1); // true 1-3 conditional statement : 조건문...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-Control_Statement/",
        "teaser": null
      },{
        "title": "[JAVA]access level modifiers & OOP",
        "excerpt":"access level modifiers : 외부에서 접근 할 수 있는 레벨을 정해 주는 것. public : 어느 클래스에서도 접근이 가능 할 수 있다. protected : default : private : 같은 클래스 안 에서만 사용할 수 있다. but public 을 사용하면 된다.(내부적인 메소드) static - class method ( 클래스 소속이다.) no static...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javaaccess-level-modifiers-oop/",
        "teaser": null
      },{
        "title": "[JAVA]인스턴스 & static & 생성자",
        "excerpt":"인스턴스 class Print { .... } public static void main(String[] args){ Print p1 = new Print(); // print 클래스를 복제한다. (print 라는 데이터 타입(클래스) 이다) .... } static :정적이다. class Foo{ public static String classVar = \"I class var\"; public String instanceVar = \"I instance var\"; public static void classMethod()...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-static/",
        "teaser": null
      },{
        "title": "[JAVA]상속 & 차장님 기본개념",
        "excerpt":"상속 상속(Interitance): 부모 클래스의 메소드 및 필드를 가져옴으로써 코드 중복을 줄일 수 있는 장점 오버라이딩 : 부모 클래스에 있었던 메소드를 자식 클래스에서 재정의(덮어쓰기)하면서 코드 변경 가능 오버로딩 : 부모클래스가 갖고 있는 메소드의 형태를 자식클래스에서 조금 바꿔 “이름을 같게” 사용할 수 있다. (메소드의 매개변수 타입, 개수변화 등등) 원래 메소드란 이름이 같을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java/",
        "teaser": null
      },{
        "title": "[nodejs] 파일생성, 리다이렉션, 파일삭제",
        "excerpt":"파일생성과 리다이렉션 리다이렉션 : 출력의 방향을 바꾼다. response.writeHead(302, {Location : 'http://whateverhostthiswillbe:8675/' +newRoom}); response.end(); writeHead(200) 은 성공시켰다. writeHead(302) 페이지를 다른데로 리다이렉션 시킨다. ex) fs.writeFile(`data/${title}`, description, 'utf8', function(err){ response.writeHead(302, {Location: `/?id=${title}`}); response.end(); }) fs.unlink(path, callback) =&gt; 파일삭제 ex) fs.unlink(`data/${id}`, function(error){ response.writeHead(302, {Location: `/`}); response.end(); }) 삭제가 되고 홈으로 이동한다. Get 방식 QueryString...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs/",
        "teaser": null
      },{
        "title": "[Spring] 개념",
        "excerpt":"Spring 이란? 자바 엔터프라이즈 개발을 편리하게 해주는 오픈소스 경량급 애플리케이션 프레임워크이다. Spring의 특징 경량 컨테이너로서 자바의 객체를 Spring이 직접 관리함 각각의 객체 생성, 소멸과 같은 라이프 사이클을 스프링이 대신 관리해주며, 스프링으로부터 객체를 얻어올 수 있다. 제어 역행(IOC : Inversion of Control) 애플리케이션 간의 느슨한 결합을 도모 컨트롤의 제어권이 사용자가 아니라...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/spring/",
        "teaser": null
      },{
        "title": "[JAVA]프로그래머스(값 뒤집기),타입",
        "excerpt":"import java.util.Arrays; class SolutionCoding { public static int[] solution(long n) { String input = \"\" + n; int size = input.length(); int[] answer = new int[size]; for (int i = size - 1; i &gt;= 0; i--) { answer[i] = input.charAt(size - i - 1) - '0'; } return answer;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java/",
        "teaser": null
      },{
        "title": "[JAVA]ArrayList",
        "excerpt":"ArrayList란? ArrayList는 List 인터페이스를 상속받은 클래스로 크기가 가변적으로 변하는 선형리스트입니다. 일반적인 배열과 같은 순차리스트이며 인덱스로 내부의 객체를 관리한다는점등이 유사하지만 한번 생성되면 크기가 변하지 않는 배열과는 달리 ArrayList는 객체들이 추가되어 저장 용량(capacity)을 초과한다면 자동으로 부족한 크기만큼 저장 용량(capacity)이 늘어난다는 특징을 가지고 있습니다. ArrayList list = new ArrayList();//타입 미설정 Object로 선언된다. ArrayList&lt;Student&gt;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javaarraylist/",
        "teaser": null
      },{
        "title": "[JAVA]객체, 클래스",
        "excerpt":"객체 대상을 나타내는 단어. 예를 들어, 사람 개인 한 명 한 명을 모두 객체라 할 수 있고, 책 한 권 한 권을 객체라 할 수 있습니다. 사람은 생김새와 성격이 똑같을 수는 없기 때문에 개개인을 객체라 할 수 있으며, 책도 내용이 같을지라도 한 권의 책에 흠집을 낸다고 해서 모든 책들이 전부...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘chap01",
        "excerpt":"chap01 : 세 값의 대소 관계와 중앙값 구하기 package chap01; import java.util.Scanner; public class Median { static int med3(int a, int b, int c) { if(a &gt;= b) if(b &gt;= c) return b; else if( a &lt;= c) return a; else return c; else if(a &gt; c) return a; else...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javachap01/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap02 - 1",
        "excerpt":"배열의 특성 확인 package chap02; class IntArray { public static void main(String []args) { int[] a = new int[5]; //배열의 선언 a[1] = 37; a[2] = 51; a[4] = a[1] * 2; for(int i = 0; i&lt;a.length; i++) System.out.println(\"a[\" + i + \"] = \" + a[i]); } } 배열의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-chap2/",
        "teaser": null
      },{
        "title": "[JAVA] 재귀함수",
        "excerpt":"package test;  public class Step1Test { \tstatic int sum = 0; \t \tstatic int sum(int param) { \t\tif(param != 0) { \t\t\tsum += param; \t\t\tparam--; \t\t\tsum(param); \t\t} \t\treturn sum; \t} \tpublic static void main(String[] args) { \t\tSystem.out.println(sum(Integer.parseInt(args[0]))); \t}  }   interface 는 private 를 못쓴다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-Recursion/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap02 - 2 & String class",
        "excerpt":"String class 문자열을 나타내는 것이 java.lang 패키지에 소속된 String 클래스 이다. (기본형 int, double 형이 아니다) String s = \"ABC\"; 초기자의 “ABC”는 문자열 리터럴입니다. 문자열 리터럴은 단순히 문자가 늘어서 있는 것이 아니라 String형 인스턴스에 대한 참조입니다. String클래스는 문자열을 넣어두기 위한 문자 배열, 문자 수를 나타내는 필드 등을 갖고 있는 클래스입니다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-chap02-2/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap02 - 3 & Class",
        "excerpt":"2행 4열의 2차원 배열 //2행 4열의 2차원 배열 package chap2; public class Int2DArray { public static void main(String[] args) { int[][] x = new int[2][4]; //2차원 배열 선언 x[0][1] = 37; x[0][3] = 54; x[1][2] = 65; for(int i = 0; i &lt; 2; i++) for(int j = 0; j...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap03 검색알고리즘",
        "excerpt":"선형 검색 package chap03; import java.util.*; public class SeqSearch { //요솟수가 n인 배열a에서 key와 같은 요소를 선형 검색합니다. static int seqSearch(int[] a, int n, int key) { int i = 0; while(true) { if(i == n) return -1; //검색실패(-1을 반환) if(a[i] == key) return i; //검색 성공(인덱스를 반환)7 i++; }...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javachap/",
        "teaser": null
      },{
        "title": "[JAVA]시험 복습",
        "excerpt":"복습 public class MainClass{ public static void main(String []args){ MyClass my = new MyClass(\"jun\",\"28\",\"M\"); System.out.println(my); } } --------------------------------------------------- public class MyClass{ private String name; private let age; private char gender; public MyClass(){ } public MyClass(String name, int age, char gender){ this.name = name; this.age = age; this.gender = gender; }...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-exam/",
        "teaser": null
      },{
        "title": "[JAVA]Study",
        "excerpt":"201112시험 – JAVA 15문 Spring 5문 다음 각 변수의 생명 주기를 쓰시오. 지역 변수 : 메소드 시작 끝까지 인스턴스 변수 : 객체가 생성되고 가비지 컬렉션이 정리할 때 까지 정적 변수(클래스 변수) : 프로그램이 시작 되서 프로그램이 끝날떄 까지 자바에서 모든 예외를 처리할 수 있는 Class는 (①Exception)입니다. 추가로 가장 많이 보게...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javastudy-exam/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap03 - 이진 검색 & 인스턴스메서드,클래스메서드",
        "excerpt":"이진검색 package chap03; import java.util.*; public class BinSearch { //요솟수가 n인 배열 a에서 key와 같은 요소를 이진 검색합니다. static int binSearch(int[] a, int n, int key) { int pl = 0; //검색 범위의 첫 인덱스 int pr = n - 1; //검색범위의 끝 인덱스 do { int pc = (pl...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-Binsearch1/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap03 - 자연 정렬",
        "excerpt":"자연정렬 package chap03; import java.util.*; public class StringBinarySearch { public static void main(String []args) { Scanner stdIn = new Scanner(System.in); //자바에서 사용하는 키워드입니다. String[] x = { \"abstract\", \"assert\" }; System.out.println(\"원하는 키워드를 입력하세요:\"); String ky = stdIn.next(); int idx = Arrays.binarySearch(x, ky); //배열 x에서 값이 ky인 요소를 검색 if(idx &lt;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-chap03-StringBinarySearch1/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘chap-04 스택",
        "excerpt":"스택이란 ? 데이터를 일시적으로 저장하기 위해 사용하는 자료구조루, 데이터의 입력과 출력 순서는 후입선출(LIFO) 입니다. 스택에 넣는 작업을 push 꺼내는 작업을 pop 메서드종류 indexOf (검색 메서드) : 스택 본체의 배열 에서 어떤 값의 데이터가 포함되어 있는지, 포함되어 있으면 배열의 어디에 들어 있는지를 조사하는 메서드 clear (스택의 모든 요소를 삭제) : 스택에...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javachap-04-stack-1/",
        "teaser": null
      },{
        "title": "[JAVA]알고리즘 chap-04 queue",
        "excerpt":"큐란? 스택과 마찬가지로 데이터를 일시적으로 쌓아 두기 위한 자료구조입니다. 선입선출 구조입니다. int형 큐(링 버퍼) package chap04; public class IntQueue { private int max; //큐의 용량 private int front; //첫 번째 요소 커서 private int rear; //마지막 요소 커서 private int num; //현재 데이터 수 private int[] que; //큐 본체 //실행...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-stack-queue/",
        "teaser": null
      },{
        "title": "[JAVA]Study2 (프로그래머스)-마라톤",
        "excerpt":"오름 차순 정렬으로 collention.sort() 이용하면 됨. hashset은 순서가 없기 떄문에 순서대로 꺼내기 위해 iterator라는 걸 사용. 데이터의 위치를 바탕으로 순차적으로 데이터를 쌓고 그걸 순차적으로 꺼내온다고 생각하면 된다. package test20201126; import java.util.ArrayList; import java.util.Collections; import java.util.HashSet; import java.util.Iterator; public class Test { public static int[] solution(int[] numbers) { int[] answer =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javastudy2/",
        "teaser": null
      },{
        "title": "[JAVA]chap05-재귀",
        "excerpt":"재귀? 어떤 사건이 자기 자신을 포함하고 다시 자기 자신을 사용하여 정의될 때 재귀적이라고 합니다. 대표적으로 팩토리얼을 구하는 프로그램이 있다. package chap05; import java.util.Scanner; public class Factorial { static int factorial(int n) { if(n&gt;0) return n * factorial(n-1); else return 1; } public static void main(String[] args) { Scanner stdIn =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-Recursion01/",
        "teaser": null
      },{
        "title": "[JAVA]chap05-재귀2 &chap06-정렬",
        "excerpt":"8퀸문제 //8퀸 문제 package chap05; public class QueenB { static int[] pos = new int[8]; //각 열의 퀸의 위치 //각 열의 퀸의 위치를 출력합니다. static void print() { for(int i = 0; i &lt; 8; i++) System.out.printf(\"%2d\",pos[i]); System.out.println(); } //i열의 퀸을 놓습니다 static void set(int i) { for(int j =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-Recursion02/",
        "teaser": null
      },{
        "title": "[JAVA]Study3 (프로그래머스)-k번째",
        "excerpt":"문제 설명 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다. 1에서 나온 배열을 정렬하면 [2, 3, 5,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-study3_knumber/",
        "teaser": null
      },{
        "title": "[JAVA]프로그래머스-k번째 풀이",
        "excerpt":"첫번째 package test20201209; import java.util.ArrayList; import java.util.Collections; import java.util.List; class Solution2 { public int[] solution(int[] array, int[][] commands) { int[] answer = new int[commands.length]; List&lt;Integer&gt; startList = new ArrayList&lt;&gt;(); List&lt;Integer&gt; endList = new ArrayList&lt;&gt;(); List&lt;Integer&gt; indexList = new ArrayList&lt;&gt;(); //for-each문 한정적 //배열, 리스트에만 사용이 가능해 //순서가 있는, 그리고 인덱스가 있는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/java-k-update/",
        "teaser": null
      },{
        "title": "[JAVA]chap06-단순삽입정렬",
        "excerpt":"단순삽입정렬 package chap06; import java.util.*; public class InsertionSort { static void insertionSort(int[] a, int n) { for (int i = 1; i &lt; n; i++) { int j; int tmp = a[i]; for(j = i; j &gt; 0 &amp;&amp; a[j - 1] &gt; tmp; j--) //드모르간 법칙 a[j] = a[j-1];...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javachap06-InsertionSort/",
        "teaser": null
      },{
        "title": "[Spring]기초",
        "excerpt":"Dispatcher Servlet : requset 요청 온 것 을 필터처리 후 핸들링 해준다. response 도 마찬가지 src &gt; main &gt; WEB-INF -&gt; spring -&gt;appServlet 가 있는데 root-context.xml 이 제일 상단의 설정을 고쳐준다. appservlet 아래 servlet-context파일 은 resouces 가 있다.mapping 은 url , location 은 서버의 폴더 위치 servlet-context 파일에 beans 이...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/spring_base_01/",
        "teaser": null
      },{
        "title": "[JAVA]chap06-셸정렬 & chap07-집합",
        "excerpt":"package chap06; import java.util.*; public class ShellSort { static void shellSort(int[] a, int n) { for(int h = n / 2; h &gt; 0; h /= 2) for(int i = h; i &lt; n; i++) { int j; int tmp = a[i]; for(j = i - h; j &gt;= 0...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/javachap06-sellsort-&-chap07/",
        "teaser": null
      },{
        "title": "[c] 기초",
        "excerpt":"C언어는 메모리와 하드웨어를 직접 제어할 수 있음 실행 순서 : 소스코드 편집 &gt; 컴파일 &gt;실행 파일의 변화 윈도우 기준 : hello.c -&gt; hello.obj -&gt; hello.exe 기초 #include &lt;stdio.h&gt; //include &lt;= 헤더파일을 포함하는 문법, stdio.h &lt;= printf 함수를 사용할 때 필요한 헤더파일 int main() //main() &lt;= C 언어 프로그램에서 가장 처음...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-start/",
        "teaser": null
      },{
        "title": "[c] 기초2-문자,상수,덧셈 등등",
        "excerpt":"상수와 리터럴 int main8() { const int con1 = 10; // con1 =&gt; 상수, 10 =&gt; 리터럴:고유의 값 //리터럴 사용하기 printf(\"%d\\n\", 10); //10이 리터럴 값 printf(\"%f\\n\", 01.f); printf(\"%c\\n\", 'a'); //문자는 작은따옴표 printf(\"%s\\n\", \"Hello, world!\"); //문자열은 큰 따옴표를 사용해야함 //상수사용하기 const int con2 = 1; //상수는 항상 선언과 동시에 초기화를 해줘야함...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-start2/",
        "teaser": null
      },{
        "title": "[c]기초3 - if문, 증감연산자",
        "excerpt":"증감 연산자 int main11() { int num1 = 1; int num2 = 2; num1++; // num1 = num1 + 1; num2--; // num2 = num2 - 1; printf(\"%d\\n\", num2); printf(\"%d\\n\", num1); //실수형 float num3 = 2.1f; float num4 = 2.1f; num3++; num4--; printf(\"%f %f\\n\", num3, num4); //3.10000000, 1.10000000 //문자 자료형...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c3-if/",
        "teaser": null
      },{
        "title": "[c]기초 4 - 비교연산자 & 논리연산자",
        "excerpt":"비교연산자 int main18() { int num1 = 10; //c에서는 참이 1 거짓이 0 printf(\"%d\\n\", num1 == 10); //1 printf(\"%d\\n\", num1 != 5); //1 printf(\"%d\\n\", num1 &gt; 10); //0 printf(\"%d\\n\", num1 &lt; 10); //0 printf(\"%d\\n\", num1 &gt;= 10); //1 printf(\"%d\\n\", num1 &lt;= 10); //1 //삼항 연산자 int num2 = 5; int...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-4/",
        "teaser": null
      },{
        "title": "[c]기초 5 -비트연산자",
        "excerpt":"비트 AND,OR,XOR 연산자 사용 int main() { unsigend char num1 = 1; // 0000 0001 unsigend char num2 = 3; // 0000 0011 unsigend char num3 = 162 // 1010 0010; unsigend char num4; num4 = ~num3; //비트를 뒤집는것 printf(\"%u\\n\", num4); // 0101 1101; printf(\"%d\\n\", num1 &amp; num2); // 0000...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-5/",
        "teaser": null
      },{
        "title": "[c]기초 6 - 반복문(switch, for, while)",
        "excerpt":"switch 분기문으로 다양한 조건 처리하기 // break 생략 응용 switch (num1) { case 1: case 2: printf(\"1또는 2입니다 \\n\"); break; case 3: case 4: printf(\"3또는 4입니다.\\n\"); default: printf(\"default\\n\"); //break 생략 가능 break; } //case 안에서 변수 선언 switch (num1) { case 1: { int num2 = num1; printf(\"%d입니다.\\n\", num2); //중괄호...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-6/",
        "teaser": null
      },{
        "title": "[c]기초 7 - goto, fizzbuzz",
        "excerpt":"goto로 프로그램의 흐름을 원하는 대로 바꾸기 int main28() { //define _CRT_SECURES_NO_WARNINGS int num1; scnaf(\"%d\", &amp;num1); if (num1 == 1) goto ONE; else if (num1 == 2) goto TWO; else goto EXIT; ONE: printf(\"1입니다.\"); goto EXIT; TWO: printf(\"2입니다.\"); goto EXIT; EXIT: return 0; //중첩 루프 빠져나오기 //#include &lt;stdbool.h&gt; int num1 =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-7/",
        "teaser": null
      },{
        "title": "[c]기초 8 - 포인터",
        "excerpt":"포인터(메모리 주소를 할당) int main29() { int num1 = 10; printf(\"%p\\n\", &amp;num1); //009FF980 &lt;=메모리 주소 p는 포인터 의 p //포인터 변수 선언하기 int *numPtr; int num1 = 10; numPtr = &amp;num1; printf(\"%p\", numPtr); //011BF99C printf(\"%p\", &amp;num1); //011BF99C //역참조 연산자 사용하기 int *numPtr; int num1 = 10; numPtr = &amp;num1; *numPtr...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-8/",
        "teaser": null
      },{
        "title": "[c]기초9 - 배열",
        "excerpt":"배열 사용하기 int main31() { //배열 선언 int numArr[10] = { 11,22,33,44,55,66,77,88,99,110 }; printf(\"%d\\n\", numArr[0]); printf(\"%d\\n\", numArr[5]); printf(\"%d\\n\", numArr[9]); //배열을 0으로 초기화 int numArr[10] = { 0, }; printf(\"%d\\n\", numArr[0]); printf(\"%d\\n\", numArr[5]); printf(\"%d\\n\", numArr[9]); //배열의 요소에 값 할당하기 int numArr[10]; numArr[0] = 11; numArr[1] = 22; numArr[2] = 33; numArr[3]...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c8/",
        "teaser": null
      },{
        "title": "[c]기초10 - 문자열",
        "excerpt":"입력 값을 배열 형태의 문자열에 저장하기 int main32() { //define _CRT_SECURE_NO_WARNINGS char s1[10]; //배열의 크기 -1 로 입력해야함 맨마지막은 null printf(\"문자열을 입력하세요 : \"); scanf(\"%s\", s1); printf(\"%s\", s1); //입력 값을 문자열 포인터에 저장하기 char* s1 = malloc(sizeof(char) * 10); printf(\"문자열을 입력하세요 : \"); scanf(\"%s\", s1); printf(\"%s\", s1); free(s1); //문자열을 여러개...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c-10/",
        "teaser": null
      },{
        "title": "[c]기초11 - 구조체",
        "excerpt":"구조체 사용하기 (struct로 정의) //관련 정보를 하나의 의미로 묶을 때 사용 한다. //기본 자료형 (char, int, float)등을 조합하여 만든 자료형을 파생형 이라고 한다. struct Person{ char name[20]; int age; char address[100]; }; //typedef 로 키워드 생략 하기 typedef struct _Person{ char name[20]; int age; char address[100]; } Person //익명 구조체...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c11/",
        "teaser": null
      },{
        "title": "[c]기초12-포인터연산&함수 &매개변수(가변인자)",
        "excerpt":"포인터 연산 사용하기 struct Data { int num1; int num2; }; int main40() { //포인터 연산으로 메모리 주소 조작하기 int numArr[5] = { 11,22,33,44,55 }; int* numPtrA; int* numPtrB; int* numPtrC; numPtrA = numArr; numPtrB = numPtrA + 1; numPtrC = numPtrA + 2; printf(\"%p\\n\", numPtrA); //00D8FDB0 printf(\"%p\\n\", numPtrB); //00D8FDB4...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c12/",
        "teaser": null
      },{
        "title": "[c]기초13 - 함수포인터 & 파일생성",
        "excerpt":"함수 포인터 사용하기 void hello() { printf(\"Hello world\\n\"); } void bonjour() { printf(\"bonjour le monde!\\n\"); } int add(int a, int b) { return a + b; } int mul(int a, int b) { return a * b; } int main47() { printf(\"%p\\n\", hello); //메모리 주소 출력됨. void(*fp)(); fp = hello;...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c13/",
        "teaser": null
      },{
        "title": "[c]기초14 - 알고리즘",
        "excerpt":"거품 정렬 구현하기 void bunnle_sort(int arr[], int count) { int temp; for (int i = 0; i &lt; count; i++) { for (int j = 0; j &lt; count - 1; j++) { if (arr[j] &gt; arr[j + 1]) { temp = arr[j]; arr[j] = arr[j + 1]; arr[j +...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/c14/",
        "teaser": null
      },{
        "title": "[Spring] 스프링기초,객체지향 설계5가지원칙",
        "excerpt":"Spring Framework 핵심기술 : 스프링 DI 컨테이너, AOP, 이벤트, 기타 웹 기술 : 스프링 MVC, 스프링 WebFlux 데이터 접근 기술 : 트랜잭션, JDBC, ORM 지원, MXL 지원 기술 통합 : 캐시, 이메일, 원격접근, 스케줄링 테스트 : 스프링 기반 테스트 지원 언어 : 코틀린, 그룹비 Spring Boot 스프링을 편리하게 사용할 수...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/spring-1/",
        "teaser": null
      },{
        "title": "[Http]TCP/IP, PORT, DNS",
        "excerpt":"인터넷 네트워크 TCP/IP IP 패킷정보 : 출발지 IP, 출발지 IP , 기타 TCP 세그먼트 : 출발지 PORT, 목적지 PORT, 전송제어, 순서, 검증 정보 등 TCP 특징 전송 제어 프로토콜 (Transmission Control Protocol) 연결지향 - TCP 3 way handshake(가상연결) 클라이언트 =&gt; (SYN : 접속 요청) =&gt; 서버 서버 =&gt; (SYN +...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/http1/",
        "teaser": null
      },{
        "title": "[Http] HTTP 기본",
        "excerpt":"모든 것이 HTTP(HyperText Transfer Protocol) TCP : HTTP/1.1, HTTP/2 UDP : HTTP/3 현재 HTTP/2, HTTP/3 도 점점 증가 클라이언트 서버 구조 Request Response 구조 클라이언트는 서버에 요청을 보내고, 응답을 대기 서버가 요청에 대한 결과를 만들어서 응답 무상태(Stateless), 상태유지(Stateful) 상태유지 : 클라이언트와 서버와 1:1 로 연결을 해줘야 함 단점 : 기존...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/http2/",
        "teaser": null
      },{
        "title": "[Http] 상태 코드",
        "excerpt":"상태 코드 클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능 *1xx (Informational) : 요청이 수신되어 처리중 2xx (Successful) : 요청 정상 처리 201 (Created) : 요청을 성공해서 새로운 리소스가 생성됨 (Location 헤더 필드로 식별) 202 (Accepted) : 요청이 접수 되었으나 처리가 완료되지 않았음 204 (No Content) : 서버가 요청을 성공적으로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/http3/",
        "teaser": null
      },{
        "title": "[Http] 헤더 및 쿠키",
        "excerpt":"HTTP BODY as - is 메시지 본문 은 엔티티 본문을 전달하는데 사용 엔티티 본문은 요청이나 응답에서 전달할 실제 데이터 엔티티 헤더는 엔티티 본문의 데이터를 해석할 수 있는 정보 제공 데이터 유형(html, json), 데이터 길이, 압축 정보 등등 to - be 메시지 본문 을 통해 표현 데이터 전달 메시지 본문 =...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/http/",
        "teaser": null
      }]
