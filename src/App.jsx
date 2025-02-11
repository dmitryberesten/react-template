import React from 'react';
import Example from './components/example/Example'

export const App = () => {
  return (
    <div>
      <Example 
        name='Dima'
        welcomeMessage='Ласкаво просимо до нашого сайту!'
        imageUrl='https://via.placeholder.com/150'
        imageAlt = 'Приклад зображення'
        favoriteSite = {{
          name: "Google",
          url: "https://www.google.com/"
        }}
        num1 = {10}
        num2 = {15}
        colors = {[ "Червоний", "Синій", "Зелений"]}
      />
    </div>
  );
};
