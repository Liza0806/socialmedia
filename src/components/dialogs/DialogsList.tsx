import { UserType, UsersType } from "../data";
import { MessageList } from "../messages/MessageList";
import { DialogItem, DialogItemProps } from "./DialogItem";



export type DialogsListProps = {
    Users: UsersType;
}

export function DialogsList({ Users }: DialogsListProps) {
    const pathArray = window.location.pathname.split('/');
    console.log(pathArray,"pathArray")
    const lastSegment = pathArray[pathArray.length - 1];
    console.log(lastSegment, "lastSegment")
    // const id = lastSegment.match(/[^\/]+$/)[0];
    // console.log(pathArray)
    if(Users){
    return ( <>
        <ul>
      
                {Users.map((user) => {
                   user as UserType;
                    return (
                       
                        <DialogItem key={user.id} name={user.name} id={user.id} />
                 
                    );
                })}
            
        </ul>
   
        <MessageList userId={3}/>
        </>
    );}
    return (
        <p>no dialogs yet</p>
    )
}