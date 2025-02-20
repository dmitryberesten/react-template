import React from 'react';
import { Recipe } from './components/example/Recipe';
// import Paragraph from "./components/example/Paragraph";
import GlobalStyle from 'components/example/GlobalStyle';
import Footer from './components/example/Footer';
import recipes from 'recipies.json';
// import './index.css';


export const App = () => {
  return (
    <div className='bd'>
      <h1 class="title">Recipe List</h1>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}

        <Footer 
          tel='+3*0 *9 2*4 7**9'
          mail='noname@gmail.com'
          address='Тихий океан м. Атлантида вул. Рибяче 6/5'
          url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.2396034!3d-8.06537985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2z0KLQuNGF0LjQuSDQvtC60LXQsNC9!5e0!3m2!1suk!2sua!4v1740072990256!5m2!1suk!2sua'
          title='Google Map'
        />
        {/* <Paragraph text="Це приклад використання styled-components для параграфа." /> */}
        {/* <Paragraph text="Styled Components дозволяє створювати реюзабельні компоненти зі стилями прямо в JS." /> */}
        <GlobalStyle></GlobalStyle>
    </div>
  );
};

export const AppFooter = () => {
  return (
    <footer>
        <Footer 
          tel='+3*0 *9 2*4 7**9'
          mail='noname@gmail.com'
          address='Тихий океан м. Атлантида вул. Рибяче 6/5'
          url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64722591.56959051!2d-149.2396034!3d-8.06537985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76ed042c30f318eb%3A0x8eff14a070876cbc!2z0KLQuNGF0LjQuSDQvtC60LXQsNC9!5e0!3m2!1suk!2sua!4v1740072990256!5m2!1suk!2sua'
          title='Google Map'
        />
        {/* <Paragraph text="Це приклад використання styled-components для параграфа." /> */}
        {/* <Paragraph text="Styled Components дозволяє створювати реюзабельні компоненти зі стилями прямо в JS." /> */}
        <GlobalStyle></GlobalStyle>
    </footer>
  );
};