import PropTypes from 'prop-types';
import { RecipeInfo } from './RecipeInfo';
import { FaClock, FaUtensils, FaFire } from 'react-icons/fa';

export const Recipe = ({ recipe }) => {
  const { name, time, servings, calories, difficulty, image } = recipe;

  return (
    <div class="recipe-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <img src={image} alt={name} width="200" />
      <RecipeInfo icon={FaClock} text={`Time: ${time} min`} />
      <RecipeInfo icon={FaUtensils} text={`Servings: ${servings}`} />
      <RecipeInfo icon={FaFire} text={`Calories: ${calories}`} />
      <p class="recipe-info">Difficulty: {['Easy', 'Medium', 'Hard'][difficulty]}</p>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};