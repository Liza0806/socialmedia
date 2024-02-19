import { MessageType, MessagesType, UserType, Users, UsersType } from "../data";
import { DialogsListProps } from "../dialogs/DialogsList";
import { MessageItem } from "./Message";
type MessageListType = {
  userId: number;
};
export function MessageList(props: MessageListType) {
  const userId = props.userId;
  console.log(userId, "userId prps");
  if (userId) {
    return (
      <ul>
        {Users.map((user: UserType) => {
          if (user.id === userId) {
            return user.messages.map((message) => (
              <MessageItem
                key={message.messageId}
                text={message.text}
                id={message.messageId}
              />
            ));
          }
        })}
      </ul>
    );
  }
  return <p>no messages yet</p>;
}
