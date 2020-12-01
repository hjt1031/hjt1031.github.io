---
title: "[JAVA] 제어문"
---

# **제어문(조건문, 반복문)** 
1-1 .boolean data type : 'boolean' 에는 true, false 가 있음 
```java
System.out.println(foo.contains("world")); //해당문자열을 포함 하고 있는지 확인시켜줌 (true / false) 로 return 해줌 
```

# 1-2 . Comparison Operator(비교연산자) 

```java
System.out.println(1>1); // false
System.out.println(1 == 1); //true
System.out.println(1 < 1); //false
System.out.println(1 >= 1); // true
```

# 1-3 conditional statement : 조건문

```java
System.out.println("a");
      if(true) {
         System.out.println(1);         
      }else {
         if(true) {
            System.out.println(2);
         }else {
            System.out.println(3);
         }
      }
      //둘이 똑같은 코드 1차원적으로 밑에께 가독성이 좋음
      System.out.println("a");
      if(false) {
         System.out.println(1);         
      }else if(true){
         System.out.println(2);
      }else {
         System.out.println(3);
      }
      
      System.out.println("b");
   }
```


# 1-3-1 조건문 응용

```java
System.out.println(args[0]);
      
String id = "egoing";
String inputId = args[0];
      
String pass = "1111";
String inputPass = args[1];
      
System.out.println("Hi ,");
//      if(inputId == id) { //false 가 return
if(inputId.equals(id) && inputPass.equals(pass)) { //boolean type 으로 반환해준다.
            System.out.println("Masr!");            
      }else {
         System.out.println("Who are you?");
      }
```


# 1.4 == VS equals

```java
int p1 = 1
int p2 = 2  
p1 == p2 // true

String o1 = new String("java")
String o2 = new String("java") 
o1 == o2 // false
```

원시데이터와 비원시데이터가 있다.  
원시데이터는 값이 같다면 같은 곳에 저장이 되어있기 때문에 비교연산자 사용이 가능하다.  
a = 1, b = 1, a==b (true)  
비원시 데이터, 객체나 문자를 비교할 때는 값이 같아도 저장된 장소가 다르기 때문에 다른 곳을 가리키고 있다.  
원시 데이터 : 더이상 쪼갤 수 없는 자료형  
비원시 데이터 : new 를 선언해 서로다른 주소를 사용하기에 .equals() 사용해야함.  
동등연산자(==) : 메모리 상에서 주소를 가리키고 있냐 라는 물음이기 떄문에 원시데이터 타입 경우 값이 동일하면 ture가 반환한다.  

*그냥 String 은 .equals() 로 사용하면 됨. 맘편하게  *

# **2.메소드**
메소드는 입력 값이 있고, 그것을 처리해서 출력을 해준다.   
출력해주는 핵심적인 키워드는 return 이다.  
return 을 사용할 때 인자를 어떤 데이터 타입으로 출력 시킬 것인지 입력해 주어야함.  
void  : 실행결과가 return 이 없을때 사용한다.  
public static String twoTimes(String text, String delimiter) : String 을 return 한다.  

*static : 변수나 메소드는 프로그램이 켜질때 부터 처음에 메모리를 할당한다.  *

3.생성자  
실질적인 메모리를 할당해서 객체를 사용함.
