import { combineReducers } from 'redux';
import {postsReducer} from './postsReducer';
import {messagesReducer} from './messagesReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    users: usersReducer
});

export default rootReducer;
