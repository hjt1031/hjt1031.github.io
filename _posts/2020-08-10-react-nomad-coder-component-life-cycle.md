---
title: "[React Nomad] Component Life Cycle"
---

# **Mountig**

constructor() : javascript 에서 class를 만들 때 호출되는것.

```
constructor(props){
    super(props)
    console.log("hello");
  }
	
	componentDidMount(){
    console.log("component rendered")
  }
	
	render(){
    console.log("I m rendering")
		} //constructor() 가 가장먼저 실행 그다음 render() 그다음  componentDidMount
```



# **Update**

내가 Add 혹은 Minus를 클릭해서 state를 변경할때 그때가 update


```
componentDidUpdate(){
    console.log('I just update')
  }
  render(){
    console.log("I m rendering")
	} //render() 가 먼저 실행되고 componentDidUpdate() 실행
```
