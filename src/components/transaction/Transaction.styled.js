import styled from 'styled-components';

export const TableWrap = styled.table`
  border-radius: 20px;

  border-collapse: collapse;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const TableTitle = styled.th`
  border-radius: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #ba55d3;
  color: white;
  width: 120px;
`;

export const TableRowWrap = styled.tr`
  border-radius: 20px;
  text-align: center;
  :nth-child(even) {
    background-color: #da70d6;
  }
  :nth-child(odd) {
    background-color: #dda0dd;
  }
`;

export const TableItem = styled.td`
  text-align: center;
  border-radius: 20px;
`;
