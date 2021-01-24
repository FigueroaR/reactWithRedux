import jsonPlaceholder from '../apis/jsonPlaceholder';
// we use the pre configured axios instance 
//to make a request in our actions creator

export const fetchPosts = () => {
    // we access axios with a .get request
    async dispatch => {
        const promise = await jsonPlaceholder.get('/Posts')
        dispatch({type: 'FETCH_POSTS', payload: promise}) 
    }
    
}

