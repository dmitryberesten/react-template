import PropTypes from 'prop-types';
import { FaClock, FaUtensils, FaFire } from 'react-icons/fa';
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  border: 2px solid #a8d5ba;
  padding: 20px;
  margin: 15px;
  border-radius: 15px;
  background: #f5f5f5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: borderAnimation 4s infinite alternate;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-size: 24px;
    color: #333;
  }

  img {
    border-radius: 10px;
  }

  p {
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }

  @keyframes borderAnimation {
    0% { border-color: #a8d5ba; } 
    50% { border-color: #006400; } 
    100% { border-color: #a8d5ba; } 
  }
`;

const StyledRecipeInfo = styled.div`
  font-size: 16px;
  margin: 10px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RecipeInfo = ({ icon: Icon, text }) => (
  <StyledRecipeInfo>
    <Icon />
    <span>{text}</span>
  </StyledRecipeInfo>
);

RecipeInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export const Recipe = ({ recipe }) => {
  const { name, time, servings, calories, difficulty, image } = recipe;
  return (
    <Card>
      <h2>{name}</h2>
      <img src={image} alt={name} width="200" />
        <RecipeInfo icon={FaClock} text={`Time: ${time} min`} />
        <RecipeInfo icon={FaUtensils} text={`Servings: ${servings}`} />
        <RecipeInfo icon={FaFire} text={`Calories: ${calories}`} />
      <p className="recipe-info">Difficulty: {['Easy', 'Medium', 'Hard'][difficulty]}</p>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
