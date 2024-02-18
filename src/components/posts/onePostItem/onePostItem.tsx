import styled from "styled-components";
import { FlexWrapper } from "../../flexWrapper/FlexWrapper";
import { AvatarInPost, NameInPost, TextInPost } from "./OnePostItem.styled";

export function OnePostItem() {
  return (
    <FlexWrapper margin="10px">
      <AvatarInPost
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvF7hRmDgLI-4cPuyOw1Gb0rrNX5wxwLIbAA&usqp=CAU"
        alt="avatar"
      />
      <TextInPost>
        <NameInPost>User Name: </NameInPost>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        malesuada purus ac nisl eleifend, nec lacinia ligula fermentum. Integer
        et eleifend enim.
      </TextInPost>
    </FlexWrapper>
  );
}