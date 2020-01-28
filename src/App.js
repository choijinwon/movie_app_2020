import React from 'react';
import PropTypes from 'prop-types';
const foodILike =[
  {
    id:1,
    name:"kimchi",
    image:"http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg",
    rating:4,

  },
  {
    id:2,
    name:"ramen",
    image:"http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg",
    rating:4.9,

  },
  {
    id:3,
    name:"samginopsal",
    image:"http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg",
    rating:5,
  },
  {
    id:4,
    name:"chukiumi",
    image:"http://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg",
    rating:4.3,
  }
]
function Food({name,priceImg,rating}){
  return <div>
      <h2>I like {name}</h2>
      <img src={priceImg} alt={name}/>
      <p>{rating}</p>
    </div>
}

Food.prototype ={
  name:PropTypes.string.isRequired,
  priceImg:PropTypes.string.isRequired,
  rating:PropTypes.number
}
function App() {
   return (
    <div>
     <h1>Hello</h1>
      { foodILike.map(item => 
        <Food 
          key={item.id}
          name={item.name} 
          priceImg={item.image} 
          rating={item.rating} 
          />
      )}
    </div>
   );
  }
export default App;
