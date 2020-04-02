var store = [{
        "title": "[nodejs] 파일생성, 리다이렉션, 파일삭제",
        "excerpt":"파일생성과 리다이렉션  response.writeHead(302, {Location : 'http://whateverhostthiswillbe:8675/' +newRoom}); response.end();   writeHead(200) 은 성공시켰다. writeHead(302) 페이지를 다른데로 리다이렉션 시킨다.   ex)  fs.writeFile(`data/${title}`, description, 'utf8', function(err){             response.writeHead(302, {Location: `/?id=${title}`});             response.end();           })   fs.unlink(path, callback) =&gt; 파일삭제 ex)  fs.unlink(`data/${id}`, function(error){             response.writeHead(302, {Location: `/`});             response.end();           })  삭제가 되고 홈으로 이동한다.   Get 방식 QueryString 이 있는 것  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/nodejs/",
        "teaser": null
      }]
