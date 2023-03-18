import styled from 'styled-components';

export const TableWrap = styled.table`
  border-collapse: collapse;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const TableTitle = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #ba55d3;
  color: white;
  width: 120px;
`;

export const TableRowWrap = styled.tr`
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
`;
