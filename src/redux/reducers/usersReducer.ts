
  type actionType = {
 type: string;
 userId?: number;
 users?: any
  };
  
  export const initialState = {
    users: [
   {id: 1, followed: true, avatarUrl: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg", fullname: "Any", status: "hello", location: {country: "UK", city: "London"}},
   {id: 2, followed: true, avatarUrl: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg",  fullname: "Mary", status: "hello2", location: {country: "UK2", city: "London"}},
   {id: 3, followed: false,avatarUrl: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg",  fullname: "Ivan", status: "hello2", location: {country: "UK2", city: "London"}}
    ],
  };
  
  export const usersReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
       case "FOlLLOW":
         console.log(action, "action in usersReducer follow");
       return  {...state, users: state.users.map(user=> {
            if (user.id === action.userId){
return {...user, followed: true}
            }
            return user
         })}
    
         
         case "UNFOlLLOW":
         console.log(action, "action in usersReducer unfollow");
       return{...state, users: state.users.map(user=> {
            if (user.id === action.userId){
return {...user, followed: false}
            }
            return user
         })}
     case "SET_USERS": {
return {...state, users: [...state.users, ...action.users]}
     }

     default:
        return state;
    }
    }
  
export const followAC = (userId: any) => {
return ({
    type: "FOLLOW",
    id: userId
})
}
export const unfollowAC = (userId: any) => {
    return ({
        type: "FOLLOW",
        id: userId
    })
    }
    export const setUsers = (users: any) => {
        return ({
            type: "SET_USERS",
        })
        }