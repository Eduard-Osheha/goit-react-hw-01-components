import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="friend-item" key={friend.id}>
          <FriendItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
