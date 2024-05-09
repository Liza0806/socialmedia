import { configureStore } from '@reduxjs/toolkit';
 import rootReducer from './reducers/reducers';
import { subscribe } from 'diagnostics_channel';
 type addPostPropsType = {
    postMessage: Array<postMessagePropsType>
}
type postMessagePropsType = {
    message: string
}
type newPostPropsType = {
    id: number
    message: string
    likeCount: number
}
let state = {
    profilePage: {
        posts: [],
        newPostText: "",
    },
    dialogsPage: {},
    sidebar:{},

}



// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'fghjdxfyhjudy', likeCount: 1},
//                 {id: 2, message: 'ujfuhjurtyudyjudt', likeCount: 12},
//                 {id: 3, message: 'hyghd gjndyfhjsr', likeCount: 9},
//                 {id: 4, message: 'yh yhdyjy fgfg', likeCount: 5},
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             _dialogs: [
//                 {id: 1, name: "ivan"},
//                 {id: 2, name: "sveta"},
//                 {id: 3, name: "dima"},
//                 {id: 4, name: "anya"}
//             ],
//             _messages: [
//                 {id: 1, message: "hello1"},
//                 {id: 2, message: "hello2"},
//                 {id: 3, message: "hello3"},
//                 {id: 4, message: "hello4"},
//             ]
//         },
//         sidebar:{},
    
//     },
//     addPost (postMessage: string)  {
//         let newPost = {
//             id: 5,
//             message: postMessage,
//             likeCount: 0,
    
//         }
// this._state.profilePage.posts.push(newPost)
// this._state.profilePage.newPostText = ''
// this._callSuscriber(this._state)
//         
//     },
// _callSuscriber(state){
// console.log('state was changing')
// } ,
// subscribe(observer){
//    this_callSuscriber = observer
// }
// updateNewPostText (newPostText) {
// this._state.profilePage.newPostText =  newPostText
// _callSuscriber(state)
// }
//     getState (){
//         return this._state
//     }
    
// }


//// почему на строку ниже типизация ворчала на передачу const store = configureStore(rootReducer)???
const store = configureStore({
    reducer: rootReducer,
});

 export default store;
