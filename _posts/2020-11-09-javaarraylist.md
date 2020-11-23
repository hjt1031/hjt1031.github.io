---
title: "[JAVA]ArrayList"
---

# ArrayList란?
ArrayList는 List 인터페이스를 상속받은 클래스로 크기가 가변적으로 변하는 선형리스트입니다. 일반적인 배열과 같은 순차리스트이며 인덱스로 내부의 객체를 관리한다는점등이 유사하지만 한번 생성되면 크기가 변하지 않는 배열과는 달리 ArrayList는 객체들이 추가되어 저장 용량(capacity)을 초과한다면 자동으로 부족한 크기만큼 저장 용량(capacity)이 늘어난다는 특징을 가지고 있습니다.

```java
ArrayList list = new ArrayList();//타입 미설정 Object로 선언된다.
ArrayList<Student> members = new ArrayList<Student>();//타입설정 Student객체만 사용가능
ArrayList<Integer> num = new ArrayList<Integer>();//타입설정 int타입만 사용가능
ArrayList<Integer> num2 = new ArrayList<>();//new에서 타입 파라미터 생략가능
ArrayList<Integer> num3 = new ArrayList<Integer>(10);//초기 용량(capacity)지정
ArrayList<Integer> list2 = new ArrayList<Integer>(Arrays.asList(1,2,3));//생성시 값추가
```


ArrayList선언시 ArrayList list = new ArrayList()로 선언 후 내부에 임의의 값을 넣고 사용할수도 있지만 이렇게 사용할경우 값을 뽑아내기 위해서는 캐스팅(Casting) 연산이 필요하고 잘못된 타입으로 캐스팅을 한 경우에는 에러가 발생하기에 위와 같은 방식은 추천하지 않습니다. ArrayList를 사용할시에는 ArrayList에 타입을 명시해주는것이 좋습니다. JDK 5.0이후부터 자료형의 안정성을 위해 제너릭스(Generics)라는 개념이 도입되었습니다. ArrayLIst<String> list = new ArrayList<String>(); 이라고 되어있다면 String객체들만 add되어질수있고 다른 타입의 객체는 사용이 불가능합니다.
	
	
	※제네릭스는 선언할 수 있는 타입이 객체 타입입니다. int는 기본자료형이기 때문에 들어갈수 없으므로 int를 객체화시킨 wrapper클래스를 사용해야 합니다.  
	
	
	
# ArrayList 값 추가
```java
	ArrayList<Integer> list = new ArrayList<Integer>();
list.add(3); //값 추가
list.add(null); //null값도 add가능
list.add(1,10); //index 1뒤에 10 삽입
```
	
	#ArrayList  값 삭제
```java
	ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(1,2,3));
list.remove(1);  //index 1 제거
list.clear();  //모든 값 제거
```
