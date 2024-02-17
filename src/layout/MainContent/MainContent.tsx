import { MyPosts } from "../../components/posts/myPosts/MyPosts";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { MainContentStyled, StyledImage } from "./MainContent.styled";

export function MainContent() {
  return (
    <MainContentStyled>
      <StyledImage width="100vw" height="10em"
        src="https://www.smet.it/wp-content/uploads/2018/10/sea-smet.jpg"
        alt="sea"
      ></StyledImage>
     <UserInfo/>
     <MyPosts/>
    </MainContentStyled>
  );
}
