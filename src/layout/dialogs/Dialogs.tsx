import { UsersNames } from "../../components/data";
import { DialogsList } from "../../components/dialogs/DialogsList";
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper";
import { MessageList } from "../../components/messages/MessageList";

export function Dialogs () {
    return(
        <FlexWrapper>Dialogs
<DialogsList UsersNames={UsersNames}/>
<MessageList/>
        </FlexWrapper>
    )
}