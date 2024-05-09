type messageType = {
    id: any
    message: string
    likeCount: number
  }
  

export const addMessage = (message: messageType) => {
    return ({
  type: 'ADD_MESSAGE',
  payload: message,
    })
  }

  export const deleteMessage = (id: number) => {
      return ({
    type: 'DELETE_MESSAGE',
    payload: id,
      })
    }