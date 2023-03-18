import { FriendItem } from './FriendItem';
import { FriendListWrap, FriendItemWrap } from './Friend.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(friend => (
        <FriendItemWrap key={friend.id}>
          <FriendItem friend={friend} />
        </FriendItemWrap>
      ))}
    </FriendListWrap>
  );
};
