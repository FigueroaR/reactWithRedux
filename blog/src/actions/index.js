import jsonPlaceholder from '../apis/jsonPlaceholder';
// we use the pre configured axios instance 
//to make a request in our actions creator


// we are making this function async
export const fetchPosts = async () => {
    // we access axios with a .get request
    const response = await jsonPlaceholder.get('./Posts')

    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}

