import { StatisticInfo } from './Statistic.styled';

export const StatisticItem = ({ stats: { label, percentage } }) => {
  return (
    <StatisticInfo>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticInfo>
  );
};
