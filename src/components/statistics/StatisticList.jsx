import { StatisticItem } from './StatisticItem';

export const StatisticList = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(data => (
          <li className="item" key={data.id}>
            <StatisticItem stats={data} />
          </li>
        ))}
      </ul>
    </section>
  );
};
