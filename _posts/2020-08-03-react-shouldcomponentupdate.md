---
title: "[React] shouldComponentUpdate"
---

```
shouldComponentUpdate(newProps, newState){
	
	if(this.props.data === newProps.data){
			return false;
	}
	return true;
}


render(){

}
```
shouldComponentUpdate 는 return 값이 true 이면 return 를 실행시키고
false 면 실행시키지 않는다.
