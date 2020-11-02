---
title: "[JAVA]인스턴스 & static & 생성자"
---

# 인스턴스

```java
class Print {
....
}

public static void main(String[] args){
Print p1 = new Print(); // print 클래스를 복제한다. (print 라는 데이터 타입(클래스) 이다)
....
}

```
# static :정적이다.
```java

class Foo{
    public static String classVar = "I class var";
    public String instanceVar = "I instance var";
    public static void classMethod() {
        System.out.println(classVar); // Ok
//      System.out.println(instanceVar); // Error
    }
    public void instanceMethod() {
        System.out.println(classVar); // Ok
        System.out.println(instanceVar); // Ok
    }
}
public class StaticApp {
 
    public static void main(String[] args) {
        System.out.println(Foo.classVar); // OK
//      System.out.println(Foo.instanceVar); // Error
        Foo.classMethod();
//      Foo.instanceMethod();
         
        Foo f1 = new Foo();
        Foo f2 = new Foo();
//      
        System.out.println(f1.classVar); // I class var
        System.out.println(f1.instanceVar); // I instance var
//      
        f1.classVar = "changed by f1";
        System.out.println(Foo.classVar); // changed by f1
        System.out.println(f2.classVar);  // changed by f1
//      
        f1.instanceVar = "changed by f1";
        System.out.println(f1.instanceVar); // changed by f1
        System.out.println(f2.instanceVar); // I instance var
    }
 
}
```
static 공유메모리 저장, 링크 -> 누적  
접근법 : 클래스.클래스<static>멤버  

instance 독립메모리 저장 -> 매번 초기화  
접근법 : 클래스명 인스턴스명 = new 클래스();  
복제되었다고 생각하면 된다.  


# 생성자  : 인스턴스가 생성될 때 최초로 실행 되어야 할 작업이 있으면 사용한다. (초기화 작업)  
```java
Print p1 = new Print("----");  

public String delimiter = ""  
public Print(String delimiter) {  
   this.delimiter = delimiter;  
}
```
this 를 붙여주는 이유는 클래스의 인스턴스 변수인지 아니면 매개변수로 들어오는 변수인지 구분지어 주기 위해 사용한다.
