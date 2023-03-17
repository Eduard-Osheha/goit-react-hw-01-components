import PropTypes from 'prop-types';
import { Profile } from './profile/Profile';
import { StatisticList } from 'components/statistics/StatisticList';
import { StatisticItem } from './statistics/StatisticItem';
import { FriendList } from './friends/FriendList';
import { FriendItem } from './friends/FriendItem';
import { TransactionItem } from './transaction/TransactionItem';
import { TransactionHistory } from './transaction/TransactionHistory';

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

StatisticItem.propTypes = {
  stats: PropTypes.object.isRequired,
};

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

FriendItem.propTypes = {
  friend: PropTypes.object.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

TransactionItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
