import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src = {picture} alt = {name}/>
    </div>
  )
}

const foodILike = [
  {
    id : 1,
    name : 'Kimchi',
    image : 'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg',
  },
  {
    id : 2,
    name : 'samgyeopsal',
    image : 'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg',
  },
  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg',
  },
  {
    id : 4,
    name : 'Doncasu',
    image : 'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg',
  },
  {
    id : 5,
    name : 'Kimbap',
    image : 'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        (<Food key = {dish.id} name = {dish.namae} picture = {dish.image}/>
      ))}
    </div>
  )
}

export default App;
