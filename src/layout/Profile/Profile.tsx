import { MyPosts } from "../../components/posts/myPosts/MyPosts";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { StyledImage, UserInfoWrapper } from "./Profile.styled";

export function Profile() {
  return (
    <div>
      <StyledImage
        height="10em"
        src="https://www.smet.it/wp-content/uploads/2018/10/sea-smet.jpg"
        alt="sea"
      />
      <UserInfoWrapper>
        <UserInfo />
        <MyPosts />
      </UserInfoWrapper>
    </div>
  );
}
