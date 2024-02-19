import { NavLink } from "react-router-dom";

export type DialogItemProps = {
  name: string;
  id: number;
};
export function DialogItem(props: DialogItemProps) {
  let path = "/dialogs/" + props.id;
  return (
    <li>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
}
