var store = [{
        "title": "[nodejs] 파일생성, 리다이렉션, 파일삭제",
        "excerpt":"파일생성과 리다이렉션 리다이렉션 : 출력의 방향을 바꾼다. response.writeHead(302, {Location : 'http://whateverhostthiswillbe:8675/' +newRoom}); response.end(); writeHead(200) 은 성공시켰다. writeHead(302) 페이지를 다른데로 리다이렉션 시킨다. ex) fs.writeFile(`data/${title}`, description, 'utf8', function(err){ response.writeHead(302, {Location: `/?id=${title}`}); response.end(); }) fs.unlink(path, callback) =&gt; 파일삭제 ex) fs.unlink(`data/${id}`, function(error){ response.writeHead(302, {Location: `/`}); response.end(); }) 삭제가 되고 홈으로 이동한다. Get 방식 QueryString...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs/",
        "teaser": null
      },{
        "title": "[AWS]",
        "excerpt":"EC2 : Elastic Compute Cloud, 아마존 웹 서비스 중 대표적인 상품 Instance : Instance 한개당 한대의 컴퓨터라 생각하면 된다 온디맨드 인스턴스 : 필요할때 키고 필요없을땐 끊다. 우리가 컴퓨터를 필요할 때마다 켜고 끄고 할 수 있는 인스턴스를 의미 예약 인스턴스 : 서버를 키는데 365일 동안 끄지 않는 경우면 예약 인스턴스를 사용하는게...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/aws/",
        "teaser": null
      }]
