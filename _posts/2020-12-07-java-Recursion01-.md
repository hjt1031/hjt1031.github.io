---
title: "[JAVA]chap05-재귀"
---

# 재귀?
어떤 사건이 자기 자신을 포함하고 다시 자기 자신을 사용하여 정의될 때 재귀적이라고 합니다.


대표적으로 팩토리얼을 구하는 프로그램이 있다.
```java
package chap05;
import java.util.Scanner;

public class Factorial {
	static int factorial(int n) {
		if(n>0)
			return n * factorial(n-1);
		else
			return 1;
	}
	
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		
		System.out.print("정수를 입력하세요");
		int x = stdIn.nextInt();
		
		System.out.println(x + "의 팩토리얼은" + factorial(x) + "입니다");
	}
}

```

# 뉴클리드호재법(최대공약수)
```java
package chap05;
import java.util.Scanner;
public class EuclidGDCD {
	static int gcd(int x, int y) {
		if(y==0)
			return x;
		else
			return gcd(y, x%y);
	}
	
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		
		System.out.println("두 정수의 최대공약수를 구합니다.");
		
		System.out.println("정수를 입력하세요 :"); int x = stdIn.nextInt();
		System.out.println("정수를 입력하세요 :"); int y = stdIn.nextInt();
		
		System.out.println("최대공약수는 " + gcd(x,y) + "입니다.");
	}
}

```
# 하노이의 탑
```java
package chap05;
import java.util.Scanner;
public class Hanoi {
	// no개의 원반을 x번 기둥에서 y번 기둥으로 옮김
	static void move(int no, int x, int y) {
		if(no > 1)
			move(no -1, x, 6 -x-y);
		
		System.out.println("월반[" + no +"]을" + x +"기둥에서" + y + "기둥으로 옮김") ;
		
		if(no > 1)
			move(no - 1, 6 - x - y, y);
	}
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		
		System.out.println("하노이의 탑");
		System.out.print("원반의 개수 : ");
		int n = stdIn.nextInt();
		
		move(n, 1, 3); //1번의 기둥의 n개의 원반을 3번 기둥으로 옮김
	}
}
```
