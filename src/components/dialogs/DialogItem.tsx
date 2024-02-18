import { NavLink } from "react-router-dom";

type DialogItemProps = {
    name: string;
}
export function DialogItem(props: DialogItemProps) {
    return (
        <li><NavLink to={"/dialogs/"+props.name}>{props.name}</NavLink></li>
    );
}
