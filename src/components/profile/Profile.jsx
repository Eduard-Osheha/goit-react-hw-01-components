import {
  Wrapper,
  ProfileInfoWrap,
  SocialsInfoWrap,
  SocialItem,
  ProfileFoto,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <Wrapper>
    <ProfileInfoWrap>
      <ProfileFoto>
        <img src={avatar} alt="User avatar" width="130px" />
      </ProfileFoto>
      <h3 className="name">{username}</h3>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </ProfileInfoWrap>

    <SocialsInfoWrap>
      <SocialItem>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </SocialItem>
      <SocialItem>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </SocialItem>
      <SocialItem>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </SocialItem>
    </SocialsInfoWrap>
  </Wrapper>
);
