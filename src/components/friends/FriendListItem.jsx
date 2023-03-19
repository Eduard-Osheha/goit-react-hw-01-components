import PropTypes from 'prop-types';
import { FriendItemInfo } from './Friend.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
  <FriendItemInfo>
    {isOnline ? (
      <span
        className="status-online"
        style={{
          display: 'flex',
          borderRadius: 50,
          width: 15,
          height: 15,
          backgroundColor: 'green',
        }}
      ></span>
    ) : (
      <span
        className="status-offline"
        style={{
          display: 'flex',
          borderRadius: 50,
          width: 15,
          height: 15,
          backgroundColor: 'red',
        }}
      ></span>
    )}
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <h3 className="name">{name}</h3>
  </FriendItemInfo>
);

FriendListItem.propTypes = {
  friend: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};
