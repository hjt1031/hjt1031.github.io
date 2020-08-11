---
title: "[React Nomad]axios"
---

axios는 node.js와 브라우저를 위한 http통신 javascript 라이브러리이다.

```
getMovies = async () => {
    const { 
      data :{
        data:{movies}
        }
     } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({movies,isLoading : false})
    console.log(movies)
  }

```
