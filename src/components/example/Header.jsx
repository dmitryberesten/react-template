import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  name,
  cls,
}) => (
  <div>
    <ul>
        <li>
            <a href={cls}>{name}</a>
        </li>
    </ul>
  </div>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
    cls: PropTypes.string.isRequired,
};

export default Header;
