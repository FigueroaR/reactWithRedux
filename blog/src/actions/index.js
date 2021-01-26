import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';
// we use the pre configured axios instance 
//to make a request in our actions creator


export const fetchPostsandUsers = () => async dispatch => {
    console.log('about to fetch')
    await dispatch(fetchPosts());
    console.log('fetched posts')
}
export const fetchPosts = () => async dispatch => {
    // we access axios with a .get request
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data})
    
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type: 'FETCH_USER', payload: response.data})
}

