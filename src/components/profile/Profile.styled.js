import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0px auto 15px auto;
  padding: 20px;
  width: 340px;
  text-align: center;
  background: #ba55d3;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

export const SocialsInfoWrap = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  align-items: center;
`;

export const ProfileFoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50px;
  background-color: white;
`;
