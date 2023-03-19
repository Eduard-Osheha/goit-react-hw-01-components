import PropTypes from 'prop-types';
import { FriendListWrap, FriendItemWrap } from './Friend.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(friend => (
        <FriendItemWrap key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItemWrap>
      ))}
    </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
