---
title: "[JAVA] 기본 코딩 & 디버깅"
---

```java
public class OkJavaGoInHome {
 
    public static void main(String[] args) {
         
        String id = "JAVA APT 507";
         
        // Elevator call 
        Elevator myElevator = new Elevator(id);
        myElevator.callForUp(1);
         
        // Security off 
        Security mySecurity = new Security(id);
        mySecurity.off();
         
        // Light on
        Lighting hallLamp = new Lighting(id+" / Hall Lamp");
        hallLamp.on();
         
        Lighting floorLamp = new Lighting(id+" / floorLamp");
        floorLamp.on();
 
    }
 
}
```


# 디버깅
버그를잡는걸 디버깅
버그를 잡는도구 디버거

옆에 토글 해당 숫자 부분 더블클릭!!하면 , breakpointer 생김.

Resume : breakpointer 토글한 부분을 디버깅 실행.  
Terminate: 디버깅모드를 종료  
Step into: 해당 코드가 구체적으로 어떻게 이루어져 있는지 알 수 있음. (특히 메소드 구성원리 알때) 구체적인 실행과정을 보고 싶을때 쓰자.  
Step over: 한줄씩 실행가능.(step into 모드에서도 가능)  
Step return: step into 모드에서 다시 돌아옴  
Use Step filters : 단계별로 통크게 디버깅 할때, 부분적으로 디버깅. 필요하지 않은 부분 걸러낼 수 있다. (그래서 필터인듯)  

** 검색 결과
단계 필터링 기본 설정 페이지에서는 디버깅 중에 '단계별'/ 표시되지 않는 특정 리소스 / 파일 패턴을 선택할 수 있습니다.
이 기능은 디버깅 중에 검사하고 싶지 않은 파일이있을 때 사용해야합니다. 이는 큰 외부 리소스 (예 : 프레임 워크 또는 라이브러리)를 포함하는 경우 특히 유용합니다.


풍뎅이(debug): 디버깅 하는 모드 돌입!

Java: 자바모드로 돌아가기
Debug : 디버그 모드에서 보기
