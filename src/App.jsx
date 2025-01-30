import React from 'react';
// import Example from './components/example/Example'
// import Qwert from './components/example/Qwert'
// import Card from './components/example/Card'
// import Product from './components/example/Product'
import Main from './components/example/Main'
import Header from './components/example/Header'

export const App = () => {
  // return (
  //   <div>
  //     <Example />
  //     <Qwert />
  //     <Card />
  //   </div>
  //   );
  return(
    // <div>
    //   <h1>Best selling products</h1>
    //   <Product
    //     imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
    //     name="Tacos With Lime"
    //     price={['10.99 ', ' 15.54 ', ' 18.98 ']}
    //     subtitle='low normal big'
    //   />
    //   <Product
    //     imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
    //     name="Fries and Burger"
    //     price={['14.29 ', ' 15.85 ', ' 21.23 ']}
    //     subtitle='low normal big'
    //   />
    // </div>

    <div>
      <Header cls='arise' name='Solo leveling: Arise'/>
      <Header cls='arise' name='The Witcher 3: Wild Hunt'/>
      
      <h1>Video games</h1>
      <Main
        img='https://preview.redd.it/new-solo-leveling-arise-promotional-images-v0-ei0b5iv6x8oa1.jpg?width=1080&format=pjpg&auto=webp&s=2ec562b91fbeef20c1af770b2dabf119cbd34a5a'
        name='Solo leveling: Arise'
        cls='arise'
        sub='A special hunter who can "level up". After the "Double Dungeon" incident,
this former E-Rank hunter gainedaccess to a "system" that helped him
become more powerful. Though once nicknamed
"The Weakest Hunter of All Mankind",he now has the ability to turn the dead into his "Shadow Soldiers."'
      />
      <Main
        img='https://images.alphacoders.com/895/thumb-1920-895436.jpg'
        name='The Witcher 3: Wild Hunt'
        cls='wild'
        sub='The Witcher 3: Wild Hunt is an action role-playing game set in a ... '
      />
    </div>
  );
};
