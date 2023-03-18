import { StatisticItem } from './StatisticItem';
import {
  StatisticWrap,
  StatisticInfoList,
  StatisticInfoItem,
} from './Statistic.styled';

export const StatisticList = ({ title, stats }) => {
  return (
    <StatisticWrap>
      {title && <h2 className="title">{title}</h2>}

      <StatisticInfoList>
        {stats.map(data => (
          <StatisticInfoItem key={data.id}>
            <StatisticItem stats={data} />
          </StatisticInfoItem>
        ))}
      </StatisticInfoList>
    </StatisticWrap>
  );
};
