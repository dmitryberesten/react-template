import PropTypes from 'prop-types';
import styled from 'styled-components';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Section = styled.section`
  width: 350px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 10px;
  color: #fff;
  background-color: ${getRandomColor};
`;

const Label = styled.span`
  font-size: 14px;
`;

const Percentage = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
