import React from 'react';
import PropTypes from 'prop-types';
import recipies from "./recipies.json";

const Menu = ({
  url,
  title,
  subtitle,
  cls
}) => (
  <main>
    {recipies.map((recipies, index) => (
    <div class={recipies.cls}>
        <img src={recipies.url} alt={recipies.title} />
        <h2>{recipies.title}</h2>
        <p>{recipies.subtitle}</p>
    </div>))}  
  </main>
);

Menu.propTypes = {
    recipies: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        cls: PropTypes.string.isRequired,
    }).isRequired
};

export default Menu;