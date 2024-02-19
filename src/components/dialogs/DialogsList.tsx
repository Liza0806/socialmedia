import { UserType, UsersType } from "../data";
import { MessageList } from "../messages/MessageList";
import { DialogItem, DialogItemProps } from "./DialogItem";

export type DialogsListProps = {
  Users: UsersType;
};

export function DialogsList({ Users }: DialogsListProps) {
  if (Users) {
    return (
      <>
        <ul>
          {Users.map((user) => {
            user as UserType;
            return <DialogItem key={user.id} name={user.name} id={user.id} />;
          })}
        </ul>

        <MessageList userId={3} />
      </>
    );
  }
  return <p>no dialogs yet</p>;
}
