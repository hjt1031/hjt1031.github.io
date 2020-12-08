---
title: "[JAVA]chap05-재귀2 &chap06-정렬"
---

# 8퀸문제
```java
//8퀸 문제
package chap05;

public class QueenB {
	static int[] pos = new int[8];		//각 열의 퀸의 위치
	
	//각 열의 퀸의 위치를 출력합니다.
	static void print() {
		for(int i = 0; i < 8; i++)
			System.out.printf("%2d",pos[i]);
		System.out.println();
	}
	
	//i열의 퀸을 놓습니다
	static void set(int i) {
		for(int j = 0; j < 8; j++) {
			pos[i] = j;
			if(i == 7)	//모든 열에 배치합니다.
				print();
			else
				set(i+1);		//다음 열에 퀸을 배치합니다.
		}
	}
	
	public static void main(String[] args) {
		set(0);		//0열에 퀸을 배치합니다.
	}
	
}
```


# 정렬
내부 정렬 : 정렬할 모든 데이터를 하나의 배열에 저장할 수 있는 경우에 사용하는 알고리즘  
외부 정렬 : 정렬할 데이터가 너무 많아서 하나의 배열에 저장할 수 없는 경우에 사용하는 알고리즘  

*정렬 알고리즘의 핵심요소는 교환, 선택, 삽입 이다*

# 버블정렬
```java
package chap06;
import java.util.Scanner;
//버블정렬

public class BubbleSort {
	//a[idx1]와 a[idx2]의 값을 바꿉니다.
	static void swap(int[] a, int idx1, int idx2) {
		int t = a[idx1];
		a[idx1] = a[idx2];
		a[idx2] = t;
	}
	
	//버블정렬
	static void bubbleSort(int[]a ,int n) {
		for(int i = 0; i < n-1; i++)
			for(int j = n -1; j > i; j--)
				if(a[j - 1] > a[j])
					swap(a,j - 1, j);
	}
	
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		
		System.out.println("버블 정렬(버전 1)");
		System.out.print("요솟수 : ");
		int nx = stdIn.nextInt();
		int[] x = new int[nx];
		
		for(int i = 0; i < nx; i++) {
			System.out.print("x[" + i + "]:");
			x[i] = stdIn.nextInt();
		}
		
		bubbleSort(x, nx); 	//배열 x를 버블 정렬합니다.
		
		System.out.println("오름차순으로 정렬했습니다.");
		for(int i = 0; i < nx; i++)
			System.out.println("x[" + i + "]=" + x[i]);
	}
}

```

# 버블정렬 버전2
```java
package chap06;

import java.util.Scanner;

//버블정렬 버전2
public class BubbleSort2 {
	//a[idx1]와 a[idx2]의 값을 바꿉니다.
		static void swap(int[] a, int idx1, int idx2) {
			int t = a[idx1];
			a[idx1] = a[idx2];
			a[idx2] = t;
		}
		static void bubbleSort(int[] a, int n) {
			for(int i = 0; i < n - 1; i++) {
				int exchg = 0;	//패스의 교환 횟수를 기록합니다.
				for(int j = n - 1; j > i; j--)
					if(a[j - 1] > a[j]) {
						swap(a, j -1, j);
						exchg++;
					}
				if(exchg == 0) break;		//교환이 이루어지지 않으면 종료합니다.
			}
		}
		public static void main(String[] args) {
			Scanner stdIn = new Scanner(System.in);
			
			System.out.println("버블 정렬(버전 1)");
			System.out.print("요솟수 : ");
			int nx = stdIn.nextInt();
			int[] x = new int[nx];
			
			for(int i = 0; i < nx; i++) {
				System.out.print("x[" + i + "]:");
				x[i] = stdIn.nextInt();
			}
			
			bubbleSort(x, nx); 	//배열 x를 버블 정렬합니다.
			
			System.out.println("오름차순으로 정렬했습니다.");
			for(int i = 0; i < nx; i++)
				System.out.println("x[" + i + "]=" + x[i]);
		}
}

```
