type newPostPropsType = {
  id: number;
  message: string;
  likeCount: number;
};

// как типизировать пейлоад???
type actionType = {
  type: string;
  payload: any;
};

export const initialState = {
  posts: [
    { id: 1, message: "post1", likeCount: 1 },
    { id: 2, message: "post2", likeCount: 12 },
    { id: 3, message: "post3", likeCount: 9 },
    { id: 4, message: "post4", likeCount: 5 },
  ],
  newPostText: "",
};

export const postsReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "ADD_POST":
      console.log(action, "action in postsReduser");
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};
