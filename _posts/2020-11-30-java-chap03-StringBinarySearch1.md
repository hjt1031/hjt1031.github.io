---
title: "[JAVA]알고리즘 chap03 - 자연 정렬"
---

# 자연정렬
```java
package chap03;
import java.util.*;
public class StringBinarySearch {
	public static void main(String []args) {
		Scanner stdIn = new Scanner(System.in);
		
		//자바에서 사용하는 키워드입니다.
		String[] x = {
				"abstract", "assert"
		};
		
		System.out.println("원하는 키워드를 입력하세요:");
		
		String ky = stdIn.next();
		
		int idx = Arrays.binarySearch(x, ky);	//배열 x에서 값이 ky인 요소를 검색
		
		if(idx < 0)
			System.out.println("해당키워드 없음");
		else
			System.out.println("해당키워드는 " + idx +"에있음");
	}
}

```
