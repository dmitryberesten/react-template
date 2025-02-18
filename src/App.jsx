import React from 'react';
import { Recipe } from './components/example/Recipe';
import Paragraph from "./components/example/Paragraph";
import GlobalStyle from 'components/example/GlobalStyle';
import recipes from 'recipies.json';
// import './index.css';


export const App = () => {
  return (
    <div>
      <h1 class="title">Recipe List</h1>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
       <Paragraph text="Це приклад використання styled-components для параграфа." />
       <Paragraph text="Styled Components дозволяє створювати реюзабельні компоненти зі стилями прямо в JS." />
       <GlobalStyle></GlobalStyle>
    </div>
  );
};