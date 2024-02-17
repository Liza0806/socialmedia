import { FlexWrapper } from "../flexWrapper/FlexWrapper";
import {
  StyledUserAvatar,
  StyledUserName,
  StyledUserDscr,
} from "./UserInfo.styled";

export function UserInfo() {
  return (
    <FlexWrapper>
      <StyledUserAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvF7hRmDgLI-4cPuyOw1Gb0rrNX5wxwLIbAA&usqp=CAU"></StyledUserAvatar>

      <div>
        <StyledUserName>Name </StyledUserName>
        <StyledUserDscr>
          Date of birthday: 
          City: 
          Education: 
          Web site:
        </StyledUserDscr>
      </div>
    </FlexWrapper>
  );
}
