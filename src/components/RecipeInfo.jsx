import PropTypes from 'prop-types';

export const RecipeInfo = ({ icon: Icon, text }) => {
  return (
    <p>
      <Icon /> {text}
    </p>
  );
};

RecipeInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
