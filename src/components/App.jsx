import './common/CommonStyled';
import { Container } from './common/CommonStyled';

import data from 'data/data.json';
import friends from 'data/friends.json';
import user from 'data/user.json';
import transactions from 'data/transactions.json';
import { Profile } from 'components/profile/Profile';
import { StatisticList } from 'components/statistics/StatisticList';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './transaction/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
