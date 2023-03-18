import styled from 'styled-components';

export const StatisticWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #dda0dd;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const StatisticInfoList = styled.ul`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const StatisticInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatisticInfoItem = styled.li`
  padding: 10px;
  width: 50px;
  border-radius: 50px;
  :nth-child(even) {
    background-color: #da70d6;
  }
  :nth-child(odd) {
    background-color: #ba55d3;
  }
`;
