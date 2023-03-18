import {
  FriendListWrap,
  FriendItemWrap,
  FriendItemInfo,
} from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(friend => (
        <FriendItemWrap key={friend.id}>
          <FriendItemInfo>
            {friend.isOnline ? (
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
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <h3 className="name">{friend.name}</h3>
          </FriendItemInfo>
        </FriendItemWrap>
      ))}
    </FriendListWrap>
  );
};