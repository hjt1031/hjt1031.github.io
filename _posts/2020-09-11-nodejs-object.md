---
title: "[Nodejs]객체"
---

# Object 와 Array
```java
var members = ['egoging','k8805','hoya'];
console.log(members[1]);


var i = 0;
while (i<members.length) {
    console.log('array loop',members[i]);
    i = i+1;
}

var roles = {
'programmer':'egoing', // key : value
'designer' : 'k8805',
'manager' : 'hoya'}

console.log(roles.designer) //객체는 . 을 찍어서 가져온다.
console.log(roles['debugger']) //키값을 문자로 전달해도 가져올 수 있다.

 for(var name in roles){ //name 은 아무거나 써도 상관이없다.
     console.log('object =>',name, 'value =>',roles[name]);
 }
```


# objeck oriented Programming (OOP) 
```java
//자바스크립트 에게 함수는 값이기도하고 , 그렇기에 배열과 객체에 담을 수 있다.
var f = function() {
    console.log(1+2);
    console.log(1+2);
}
var a = [f];
a[0](); //배열의 함수로서 사용 가능

var o = {
    func:f //프로퍼티
}
o.func();

```



# 객체 : 코드가 복잡해짐에 따라 코드를 정리정돈 을 해서 복잡성을 낮춘다.
```java
var o = { //하나의 객체의 정리해놓는다.(폴더의기능?)
    v1:'v1',
    v2:'v2',
    f1:function f1(){
    console.log(this.v1); //this : 함수가 속해있는 객체를 참조할 수 있다.
    },
    f2:function f2 (){
    console.log(this.v2);
    }
}
o.f1();
o.f2(); 
```
