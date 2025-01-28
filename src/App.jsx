import React from 'react';
// import Example from './components/example/Example'
// import Qwert from './components/example/Qwert'
// import Card from './components/example/Card'
import Product from './components/example/Product'

export const App = () => {
  // return (
  //   <div>
  //     <Example />
  //     <Qwert />
  //     <Card />
  //   </div>
  //   );
  return(
    <div>
      <h1>Best selling products</h1>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Tacos With Lime"
        price={['10.99 ', ' 15.54 ', ' 18.98 ']}
        subtitle='low normal big'
      />
      <Product
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        name="Fries and Burger"
        price={['14.29 ', ' 15.85 ', ' 21.23 ']}
        subtitle='low normal big'
      />
    </div>
  );
};
