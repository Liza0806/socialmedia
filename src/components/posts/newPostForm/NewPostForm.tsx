import styled from "styled-components";
import { Button } from "../../button/Button";
import { InputNewPost } from "./NewPostForm.styled";
import { SubTitle } from "../../tytles/Titles";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from "../../../redux/actions/postsActions";
import { nanoid } from "nanoid";


export function NewPostForm() {
let [newPostText, setNewPostText] = useState("")
const dispatch = useDispatch();

let typePost =(e: any) => {
e.preventDefault();
setNewPostText(e.target.value)
}
const createNewPostItem = (newPostText: string) => {
  const post = {
    id: nanoid(),
    message: newPostText,
    likeCount: 0,
  }
  dispatch(addPost(post)); // Отправляем новый пост в хранилище с помощью dispatch
  setNewPostText("");
}


  return (
    <form onSubmit={(e) => { 
      e.preventDefault(); 
      createNewPostItem(newPostText); 
    }}>
      <SubTitle text="New post" />
      <InputNewPost placeholder="Type smth..." value={newPostText} onChange={(e)=>{typePost(e)}}/> 
      <Button /> 
    </form>
  );
}
