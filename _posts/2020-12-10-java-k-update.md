---
title: "[JAVA]프로그래머스-k번째 풀이"
---

# 첫번째

```java
package test20201209;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
class Solution2 {
    public int[] solution(int[] array, int[][] commands) {
    	int[] answer = new int[commands.length];
        List<Integer> startList = new ArrayList<>();
        List<Integer> endList = new ArrayList<>();
        List<Integer> indexList = new ArrayList<>();
        //for-each문 한정적
        //배열, 리스트에만 사용이 가능해
        //순서가 있는, 그리고 인덱스가 있는 어떤 자료구조에서만 사용이 될 수 있는거야
        //무조건 증감은 첫번째부터 마지막까지 한개씩
        for(int[] command : commands) {
        	startList.add(command[0]-1);
        	endList.add(command[1]-1);
        	indexList.add(command[2]-1);
        }
        for(int i=0; i<commands.length; i++) {
        	List<Integer> temp = new ArrayList<>();
        	for(int j = startList.get(i); j<=endList.get(i); j++) {
        		temp.add(array[j]);
        	}
        	Collections.sort(temp);
        	temp.get(indexList.get(i));//첫번째 command에 대한 답!
        	answer[i] = temp.get(indexList.get(i));
        }
        return answer;
    }
    public static void main(String args[]) {
       int[] array = {1, 5, 2, 6, 3, 7, 4};
       int[][] commands= { {2, 5, 3}, {4, 4, 1}, {1, 7, 3} };
       Solution2 s = new Solution2();
       int[] answer = s.solution(array, commands);
       for(int a:answer) {
    	   System.out.println(a);
       }
    }
}

```


# 두번째
```java
package test20201209;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        for(int i=0; i<commands.length; i++) {
        	List<Integer> tempList = new ArrayList<>(); 
        	for(int j=commands[i][0]; j<=commands[i][1]; j++) {
        		tempList.add(array[j-1]);
        	}
        	Collections.sort(tempList);
        	answer[i] = tempList.get(commands[i][2]-1);
        }
        return answer;
    }
    public static void main(String args[]) {
       int[] array = {1, 5, 2, 6, 3, 7, 4};
       int[][] commands= {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
       Solution s = new Solution();
       s.solution(array, commands);
    }
}
```

스프링 다운로드
