---
title: "[AWS] OSX로 AWS연결"
---

# 터미널로 접속 server 켜기
1. ssh key 를 받아 안전한 폴더에 저장
2. aws 홈페이지 EC2 에 나의 인스턴스를 우클릭 후 연결을 누르면 접속 방법이 나온다
3. 인스터스를 킨다.
4. ssh 키를 안전한 폴더(그냥 디렉토리를 만들면 된다.)로 이동 시킨다.
5. ssh 키가 있는 디렉토리에서 chmod 400 aws_password.pem 실행 (만약, 접근권한이 없다면 sudo 를 붙여서 실행)
6. ssh -i "aws_password.pem" ........... 복붙하면 된다.


# Apache 다운로드
1. 터미널로 aws 접속 후 
2. sudo apt-get update; 입력 다운로드 후
3. sudo apt-get install apache2 입력
