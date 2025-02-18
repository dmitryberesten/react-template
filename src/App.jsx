import React from 'react';
import { Recipe } from './components/example/Recipe';
import recipes from 'recipies.json';
import './index.css';



export const App = () => {
  return (
    <div>
      <h1 class="title">Recipe List</h1>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};