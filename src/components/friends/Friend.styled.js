import styled from 'styled-components';

export const FriendListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  align-items: flex-start;
  justify-content: left;
  gap: 20px;
`;

export const FriendItemWrap = styled.li`
  display: flex;
  border-radius: 20px;
  :nth-child(even) {
    background-color: #da70d6;
  }
  :nth-child(odd) {
    background-color: #dda0dd;
  }
`;

export const FriendItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  width: 340px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
