import axios from 'axios';

// we are setting axios' default setting for fetching
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 0SooB8ZPhcqRSyVf6B20-lhZsy4dfvzKa5mSuIdwlwk'
    }

})