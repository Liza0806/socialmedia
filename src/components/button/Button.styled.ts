import styled from "styled-components";

export type StyledBtnPropsType = {
  padding?: string;
  fontSize?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorDisabled?: string;
  color?: string;
  margin?: string;
  height?: string;
  onClick: any
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  padding: ${(props) => props.padding || "10px 20px"};
  font-size: ${(props) => props.fontSize || "16px"};
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || "#007bff"};
  color: ${(props) => props.color || "#fff"};
  transition: background-color 0.3s;
  margin: ${(props) => props.margin || "0"};
  display: block;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover || "#0056b3"};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${(props) => props.backgroundColorDisabled || "#ccc"};
    cursor: not-allowed;
  }
`;
