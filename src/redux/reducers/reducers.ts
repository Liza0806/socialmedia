import { combineReducers } from 'redux';
import {postsReducer} from './postsReducer';
import {messagesReducer} from './messagesReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
});

export default rootReducer;
