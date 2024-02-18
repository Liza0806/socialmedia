import { UsersNamesType } from "../data";
import { DialogItem } from "./DialogItem";



type DialogsListProps = {
    UsersNames?: UsersNamesType;
}

export function DialogsList({ UsersNames }: DialogsListProps) {
    if(UsersNames){
    return (
        <ul>
            {Object.keys(UsersNames).map((userName) => (
                <DialogItem key={userName} name={UsersNames[userName]} />
            ))}
        </ul>
    );}
    return (
        <p>no dialogs yet</p>
    )
}