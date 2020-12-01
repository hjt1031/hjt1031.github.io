---
title: "[JAVA]알고리즘chap-04 스택"
---

*스택이란 ?*  
데이터를 일시적으로 저장하기 위해 사용하는 자료구조루, 데이터의 입력과 출력 순서는 후입선출(LIFO) 입니다.  
스택에 넣는 작업을 push  
꺼내는 작업을 pop

*메서드종류*  
*   indexOf (검색 메서드) :  스택 본체의 배열 에서 어떤 값의 데이터가 포함되어 있는지, 포함되어 있으면  배열의 어디에 들어 있는지를 조사하는 메서드
*  clear (스택의 모든 요소를 삭제) : 스택에 쌓여 있는 모든 데이터를 삭제하는 메서드
*  capacity (용량 확인) : 스택의 용량(max)을 반환하는 메서드
*  size (데이터 수를 확인) : 현재 스택에 쌓여 있는 데이터 수 를 반환하는 메서드
*  isEmpty(스택이 비어있는지 검사) : 스택이 비어 있는지 검사하는 메서드 이다. 스택이 비어있으면 true, 아니면 false
*  isFull(스택이 가득 찼는지 검사) : 스택이 가득 찼으면 true, 아니면 false
*  dump(스택 안에 모든 데이터를 표시함) : 스택에 쌓여 있는 모든 데이터를 바닥에서 꼭대기 순으로 표시 함

# int형 스택
```java
package chap04;

public class IntStack {
	private int max; //스택용량
	private int ptr; //스택 포인터
	private int[] stk; //스택본체
	
	//실행시 예외 : 스택이 비어 있음
	public class EmptyIntStackException extends RuntimeException{
		public EmptyIntStackException() {}
	}
	
	//실행시 예외 : 스택이 가득 참
	public class OverflowIntStackException extends RuntimeException{
		public OverflowIntStackException() {}
	}
	
	//생성자
	public IntStack(int capacity) {
		ptr = 0;
		max = capacity;
		try {
			stk = new int[max]; //스택 본체용 배열 생성
		}catch(OutOfMemoryError e) {//생성할 수 없음
			max = 0;
		}
	}
	//스택에 x를 푸시
	public int push(int x) throws OverflowIntStackException {
		if(ptr >= max)	//스택이 가득 참
			throw new OverflowIntStackException();
		return stk[ptr++] = x;
	}
	
	//스택에서 데이터를 팝(정상에 있는 데이터를 꺼냄)
	public int pop() throws EmptyIntStackException {
		if(ptr <= 0)	//스택이 비어있음
			throw new EmptyIntStackException();
		return stk[--ptr];
	}
	
	//스택에서 데이터를 피크(정상에 있는 데이터를 들여다봄)
	public int peek() throws EmptyIntStackException {
		if (ptr <= 0)	//스택이 비어있음
			throw new EmptyIntStackException();
		return stk[ptr - 1];
	}
	
	//스택에서 x를 찾아 인덱스(없으면 -1)을 반환
	public int indexOf(int x) {
		for(int i = ptr - 1; i >= 0; i--) //정상 쪽에서 선형 검색
			if(stk[i] == x)
				return i;
		return -1;
	}
	
	//스택을 비움
	public void clear() {
		ptr = 0;
	}
	
	//스택의 용량을 반환
	public int capacity() {
		return max;
	}
	
	//스택에 쌓여 있는 데이터 수를 반환
	public int size() {
		return ptr;
	}
	
	//스택이 비어 있는가?
	public boolean isEmpty() {
		return ptr <= 0;
	}
	
	//스택이 가득 찼는가?
	public boolean isFull() {
		return ptr >= max;
	}
	
	//스택 안의 모든 데이터를 바닥 -> 꼭대기 순서로 출력
	public void dump() {
		if(ptr <= 0)
			System.out.println("스택이 비어 있습니다.");
		else {
			for(int i = 0; i < ptr; i++)
				System.out.print(stk[i] + " ");
			System.out.println();
		}
	}
}

```
