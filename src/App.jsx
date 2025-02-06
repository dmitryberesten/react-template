import React from 'react';
// import Example from './components/example/Example'
// import Qwert from './components/example/Qwert'
// import Card from './components/example/Card'
// import Product from './components/example/Product'
// import Main from './components/example/Main'
import Header from './components/example/Header'
import Footer from './components/example/Footer'
import Menu from './components/example/Menu'
import recipes from "./recipies.json";

export const App = () => {

return(
<div>
    <Header
      name1={"Home"}
      name2={"Price"}
      name3={"Help"} 
      name4={"About"}
    />

    <Menu/>

    <Footer
      tel={'099 999 9999'}
      email={['qwert@mail.com']}
    />

</div>
  );
};
