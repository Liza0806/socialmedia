import { FlexWrapper } from "../flexWrapper/FlexWrapper";
import {
  StyledUserAvatar,
  StyledUserName,
  StyledUserDscr,
  UserWrapper,
} from "./UserInfo.styled";

export function UserInfo() {
  return (
    <FlexWrapper>
      <StyledUserAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvF7hRmDgLI-4cPuyOw1Gb0rrNX5wxwLIbAA&usqp=CAU"></StyledUserAvatar>

      <UserWrapper>
        <StyledUserName>Name</StyledUserName>
        <StyledUserDscr>
         <p>Date of birthday: "propsData"</p> 
         <p>City: "propsData"</p>
         <p>Education: "propsData"</p>
         <p>Web site: "propsData"</p>
        </StyledUserDscr>
      </UserWrapper>
    </FlexWrapper>
  );
}
