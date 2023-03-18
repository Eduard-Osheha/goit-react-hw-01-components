import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0px auto 15px auto;
  padding: 20px;
  width: 340px;
  text-align: center;
  background: #ba55d3;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
