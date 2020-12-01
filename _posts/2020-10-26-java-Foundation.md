---
title: "[JAVA]기본"
---

# 자바 동작원리
Java Source code(.java) ----Compile---->   
Java Application(.class) -----Run------>  
Java Virtual Machine ----------Run-------->   
computer

자바파일을 저장버튼을 눌렀을 때 .class 란 확장자를 가진 파일이 만들어진다.   
그것이 Java Application   
그다음 우리가 실행 버튼(run) 을 누르게되면 Java Virtual Machine이 확장자가 class 를 가진 파일을 읽어서 컴퓨터를 동작시키게 된다.


# Operator
```java
System.out.println(Math.PI); //3.141592653589793
System.out.println(Math.floor(Math.PI)); //내림 3.0
System.out.println(Math.ceil(Math.PI)); //올림 4.0
```


# String
```java
System.out.println("Hello World"); //String
System.out.println('H'); //Character 작은따옴표와 큰따음표 차이
System.out.println("Hello \nWorld"); // \n : new line
System.out.println("Hello \"World\""); //escape
```


# 변수
```java
int a = 1; // Number -> integer .. -2, -1, 0, 1, 2
System.out.println(a);
		
double b = 1.1; // real number ... -2.0, -1.0, 0, 1.0, 2.0
System.out.println(b);
		
String c = "Hello World";
System.out.println(c);
```
