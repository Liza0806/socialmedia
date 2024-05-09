import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from "nanoid";
import { addMessage } from "../../redux/actions/messagesActions";
import { InputNewPost } from "../posts/newPostForm/NewPostForm.styled";
import { Button } from "../button/Button";


export function NewMessageForm() {
let [newMessageText, setNewMessageText] = useState("")
const dispatch = useDispatch();

let typePost =(e: any) => {
e.preventDefault();
setNewMessageText(e.target.value)
}
const createNewPostItem = (newPostText: string) => {
  const message = {
    id: nanoid(),
    message: newPostText,
    likeCount: 0,
  }
  dispatch(addMessage(message)); // Отправляем новый пост в хранилище с помощью dispatch
  setNewMessageText("");
}


  return (
    <form onSubmit={(e) => { 
      e.preventDefault(); 
      createNewPostItem(newMessageText); 
    }}>
      <InputNewPost placeholder="type to your friend" value={newMessageText} onChange={(e)=>{typePost(e)}}/> 
      <Button /> 
    </form>
  );
}
