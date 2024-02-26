import styled from "styled-components";
import { Button } from "../../button/Button";
import { InputNewPost } from "./NewPostForm.styled";
import { SubTitle } from "../../tytles/Titles";
import React from "react";
// import { addPost } from "../../../../redux/state";



export function NewPostForm() {
  let newPostElement = React.createRef();

  let ost = () => {
// let text :string = newPostElement.current.value;
  }

  return (
    <form>
      <SubTitle text="New post" />
      {/* <InputNewPost placeholder="Type smth.." ref={newPostElement}/> */}
      <Button onClick={() => {alert("fhyhdxy")}} />
    </form>
  );
}
