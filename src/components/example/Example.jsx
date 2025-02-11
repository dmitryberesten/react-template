import React from 'react';
import PropTypes from 'prop-types';

const Example = () => ({
  name, 
  welcomeMessage, 
  imageUrl, 
  imageAlt, 
  favoriteSite, 
  num1, 
  num2, 
  colors})=>(
    <div>
      <h1>{name}</h1>
      <p>{welcomeMessage}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>
        Улюблений сайт:{' '}
        <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">
          {favoriteSite.name}
        </a>
      </p>
      <p>Сума чисел: {num1 + num2}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
);

Example.propTypes = {
  name: PropTypes.string.isRequired,
  welcomeMessage: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  favoriteSite: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Example;
