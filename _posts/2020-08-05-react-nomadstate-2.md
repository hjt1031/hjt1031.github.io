---
title: "[React Nomad]State 2"
---

```
state = {
    count: 0
  }
add = () => {
    this.state.count = 1;
  };
  minus = () => {
    this.state.count = -1;
  };
	//동작하지 않음. react 는 render function 을 refresh 하지 않는다.
```

```
state = {
    count: 0
  }
  add = () => {
    this.setState({count : this.state.count + 1});
  };
  minus = () => {
    this.setState({count : this.state.count - 1});
  };
	//잘동작한다. state 값을 바꿔줄때는 setState를 사용해야한다.
```
