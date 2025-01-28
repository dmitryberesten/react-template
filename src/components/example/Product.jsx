import React from 'react';
import PropTypes from 'prop-types';

const Product = ({
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name,
  price,
  subtitle,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: <details>{price}</details>$</p>
    <p>{subtitle}</p>
  </div>
);

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Product;