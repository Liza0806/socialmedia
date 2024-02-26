// type addPostPropsType = {
//     postMessage: Array<postMessagePropsType>
// }
// type postMessagePropsType = {
//     message: string
// }
type newPostPropsType = {
    id: number
    message: string
    likeCount: number
}
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'fghjdxfyhjudy', likeCount: 1},
//             {id: 2, message: 'ujfuhjurtyudyjudt', likeCount: 12},
//             {id: 3, message: 'hyghd gjndyfhjsr', likeCount: 9},
//             {id: 4, message: 'yh yhdyjy fgfg', likeCount: 5},
//         ],
//         newPostText: "",
//     },
//     dialogsPage: {},
//     sidebar:{},

// }


// export let addPost = (postMessage: string) => {
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likeCount: 0,

//     }
//     state.profilePage.posts.push(newPost)
// }

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'fghjdxfyhjudy', likeCount: 1},
                {id: 2, message: 'ujfuhjurtyudyjudt', likeCount: 12},
                {id: 3, message: 'hyghd gjndyfhjsr', likeCount: 9},
                {id: 4, message: 'yh yhdyjy fgfg', likeCount: 5},
            ],
            newPostText: "",
        },
        dialogsPage: {
            _dialogs: [
                {id: 1, name: "ivan"},
                {id: 2, name: "sveta"},
                {id: 3, name: "dima"},
                {id: 4, name: "anya"}
            ],
            _messages: [
                {id: 1, message: "hello1"},
                {id: 2, message: "hello2"},
                {id: 3, message: "hello3"},
                {id: 4, message: "hello4"},
            ]
        },
        sidebar:{},
    
    },
    addPost (postMessage: string)  {
        let newPost = {
            id: 5,
            message: postMessage,
            likeCount: 0,
    
        }
        this._state.profilePage.posts.push(newPost)
    },
    getState (){
        return this._state
    }
    
}
