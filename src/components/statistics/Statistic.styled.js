import styled from 'styled-components';

export const StatisticWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 360px;
  padding: 15px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #dda0dd;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const StatisticInfoList = styled.ul`
  display: flex;
  gap: 5px;
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
  :nth-child(1) {
    background-color: ${'#' + (((1 << 24) * Math.random()) | 0).toString(16)}};
  };
  :nth-child(2) {
    background-color: ${'#' + (((1 << 24) * Math.random()) | 0).toString(16)}};
  };
  :nth-child(3) {
    background-color: ${'#' + (((1 << 24) * Math.random()) | 0).toString(16)}};
  };
  :nth-child(4) {
    background-color: ${'#' + (((1 << 24) * Math.random()) | 0).toString(16)}};
  };
  :nth-child(5) {
    background-color: ${'#' + (((1 << 24) * Math.random()) | 0).toString(16)}};
  };
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
