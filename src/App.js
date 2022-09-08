import React from "react";

function Food({name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}


const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png'
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg'
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg'
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_1280.jpg'
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9jfJ/image/7YSk5b0h1nmdeqIN4crUAWbdwBE'
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
