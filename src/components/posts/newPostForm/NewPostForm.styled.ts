import styled from "styled-components";

export const InputNewPost = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  resize: none;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #aaa;
  }
`;
