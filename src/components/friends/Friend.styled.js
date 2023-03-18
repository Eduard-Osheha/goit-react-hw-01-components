import styled from 'styled-components';

export const FriendListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  align-items: flex-start;
  justify-content: left;
  gap: 10px;
`;

export const FriendItemWrap = styled.li`
  display: flex;
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
