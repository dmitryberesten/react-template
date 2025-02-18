import React from 'react';
import Comp from './components/Comp'

export const App = () => {
  const handleClick = () => {
    console.log("Кнопка натиснута!");
  };

  return (
    <div>
        <Comp 
        name="Іван" 
        text="Це ваше перше React-завдання!" 
        onClick={handleClick} />
    </div>
  );
};
