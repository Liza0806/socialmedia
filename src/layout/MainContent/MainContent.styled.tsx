import styled from "styled-components";

export type StyledImagePropsType = {
width?: string
height?: string
}
export const MainContentStyled = styled.div`
  grid-area: MainContent;
  `;

  export const StyledImage = styled.img<StyledImagePropsType>`
width:${props=> props?.width || "100%"};
height: ${props=> props?.height || "100%"};

  `