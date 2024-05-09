type newMessagePropsType = {
    id: number
    message: string
    likeCount: number
}
// как типизировать пейлоад???
type actionType = {
    type:string
    payload: any
}
export const initialState = {
    messages: [
                    {id: 1, message: 'message1', likeCount: 1},
                    {id: 2, message: 'message2', likeCount: 12},
                    {id: 3, message: 'message3', likeCount: 9},
                    {id: 4, message: 'message4', likeCount: 5},
                ],
                newMessageText: "",
            }


export const messagesReducer = (state=initialState, action: actionType) => {
    switch (action.type){
        case 'ADD_MESSAGE': 
        return {
            ...state,
            messages: [...state.messages, action.payload]
        };

        case 'DELETE_MESSAGE': 
        return {
            ...state,
            messages: state.messages.filter(message => message.id !== action.payload)
        };

    default:
        return state;
    }

}