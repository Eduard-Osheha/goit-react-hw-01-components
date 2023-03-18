import {
  StatisticWrap,
  StatisticInfoList,
  StatisticInfoItem,
  StatisticInfo,
} from './Statistic.styled';

export const StatisticList = ({ title, stats }) => {
  return (
    <StatisticWrap>
      {title && <h2 className="title">{title}</h2>}

      <StatisticInfoList>
        {stats.map(data => (
          <StatisticInfoItem key={data.id}>
            <StatisticInfo>
              <span>{data.label}</span>
              <span>{data.percentage}%</span>
            </StatisticInfo>
          </StatisticInfoItem>
        ))}
      </StatisticInfoList>
    </StatisticWrap>
  );
};
