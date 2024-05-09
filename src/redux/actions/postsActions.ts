type postType = {
  id: any
  message: string
  likeCount: number
}

export const addPost = (post: postType) => {
      return ({
    type: 'ADD_POST',
    payload: post,
      })
    }

    export const deletePost = (id: number) => {
        return ({
      type: 'DELETE_POST',
      payload: id,
        })
      }
   