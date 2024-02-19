import { OldPostType } from "../../data";
import { FlexWrapper } from "../../flexWrapper/FlexWrapper";
import { AvatarInPost, NameInPost, TextInPost } from "./OnePostItem.styled";

export function OnePostItem(props: OldPostType) {
  return (
    <FlexWrapper margin="10px">
      <AvatarInPost
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvF7hRmDgLI-4cPuyOw1Gb0rrNX5wxwLIbAA&usqp=CAU"
        alt="avatar"
      />
      <TextInPost>
        <NameInPost>User Name: </NameInPost>
       <li key={props.id}>{props.text}</li>
      </TextInPost>
    </FlexWrapper>
  );
}