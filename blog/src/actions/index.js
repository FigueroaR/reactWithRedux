import jsonPlaceholder from '../apis/jsonPlaceholder';
// we use the pre configured axios instance 
//to make a request in our actions creator

export const fetchPosts = () => async dispatch => {
    // we access axios with a .get request
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data})
    
}

