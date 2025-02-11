import React from 'react';
import { Recipe } from './components/Recipe';
import recipes from './recipes.json';
import Recipe from './components/example/Recipe';
import RecipeInfo from './components/example/RecipeInfo';

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