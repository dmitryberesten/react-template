import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  tel,
  email
}) => (
  <footer>
    <p>Phone: {tel}</p>
    <p>Email: {email}</p>
  </footer>
);

Footer.propTypes = {
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Footer;