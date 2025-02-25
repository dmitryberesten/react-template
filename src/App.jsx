import React from 'react';
import { Recipe } from './components/Recipe';
import recipes from './recipes.json';

export const App = () => {
  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};
