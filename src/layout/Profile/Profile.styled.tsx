import styled from "styled-components";

export type StyledImagePropsType = {
  width?: string;
  height?: string;
};

export const StyledImage = styled.img<StyledImagePropsType>`
  width: ${(props) => props?.width || "100%"};
  height: ${(props) => props?.height || "100%"};
`;
export const UserInfoWrapper = styled.div`
  padding: 20px;
`;
