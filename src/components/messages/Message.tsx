export type MessageItemProps = {
    text: string
    id: number
}

export function MessageItem (props: MessageItemProps) {
    return(
            <li key={props.id}><p>{props.text}</p></li>
        
    )
}