import React from 'react';
import PropTypes from 'prop-types';

const Main = ({
  img = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name,
  cls,
  sub,
}) => (
  <div>
    <img src={img} alt={name} width="640" />
    <h2 class={cls}>{name}</h2>
    <p>{sub}</p>
  </div>
);

Main.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    cls: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
};

export default Main;