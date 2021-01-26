import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer'

// we import all our reducers here and combine them
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});
