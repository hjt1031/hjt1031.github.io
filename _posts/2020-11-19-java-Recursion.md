---
title: "[JAVA] 재귀함수"
---

```java
package test;

public class Step1Test {
	static int sum = 0;
	
	static int sum(int param) {
		if(param != 0) {
			sum += param;
			param--;
			sum(param);
		}
		return sum;
	}
	public static void main(String[] args) {
		System.out.println(sum(Integer.parseInt(args[0])));
	}

}
```

interface 는 private 를 못쓴다.
