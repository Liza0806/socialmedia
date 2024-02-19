import styled from "styled-components";
import { Button } from "../../button/Button";
import { InputNewPost } from "./NewPostForm.styled";
import { SubTitle } from "../../tytles/Titles";

export function NewPostForm() {
  return (
    <form>
      <SubTitle text="New post" />
      <InputNewPost placeholder="Type smth.." />
      <Button />
    </form>
  );
}
