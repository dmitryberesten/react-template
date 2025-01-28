import React from 'react';

const Card = () => {
    const img = 'https://th.bing.com/th/id/R.37f0939c14d8c2796bd1e40273e48e74?rik=ht%2f87qjK7iX5hw&pid=ImgRaw&r=0';
    const total = '20$';
    const subtitle = [' html ', ' img ', ' photo '];

  return (
      <div >
        <img src={img} width='200px' alt='img'></img>
        <p>{total}</p>
        <details>{subtitle}</details>
      </div>
  );
};

export default Card;

