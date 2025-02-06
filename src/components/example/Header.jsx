import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  name1,
  name2,
  name3,
  name4
}) => (
  <header>
    <nav>
        <ul>
            <li>{name1}</li>
            <li>{name2}</li>
            <li>{name3}</li>
            <li>{name4}</li>
        </ul>
    </nav>
  </header>
);

Header.propTypes = {
    name1: PropTypes.string.isRequired,
    name2: PropTypes.string.isRequired,
    name3: PropTypes.string.isRequired,
    name4: PropTypes.string.isRequired,
};

export default Header;