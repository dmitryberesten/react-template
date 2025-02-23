import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileCard = styled.div`
  width: 300px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: auto;
`;

const Description = styled.div`
  padding-bottom: 15px;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Tag = styled.p`
  color: gray;
`;

const Location = styled.p`
  color: gray;
`;

const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  border-top: 1px solid #eee;
  margin-top: 10px;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Label = styled.span`
  font-size: 14px;
  color: gray;
`;

const Quantity = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
