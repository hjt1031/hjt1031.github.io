---
title: "[React Nomad] 웹사이트에 동적 데이터 추가"
---

```javascript
const friends = ["dal","mark","lynn","japan guy"]

friend.map(function(current) {
console.log(current);
return 0
})

result :
dal
mark
lynn
japan guy

```

return 값에 item 을 각각 매칭 시켜준다
```javascript
const friends = ["dal","mark","lynn","japan guy"]

friend.map(function(current) {
console.log(current);
return current + "10"
})

result :
dal10
mark10
lynn10
japan guy10
```



```javascript
import React from 'react';

function Food ({name,picture}){
    return <div>
        <h2>>I like {name}</h2>
        <img src={picture} />
    </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {  
    return ( //map 안에 dish 는 아무값이나 줘도 상관없다 object 형식
    <div>
        {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)} 
    </div>
    );

}
 
export default App;
 
```
