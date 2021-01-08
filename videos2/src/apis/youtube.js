import axios from "axios";

const KEY = 'AIzaSyADa3IW22O-IZ2yFv7wCWs7tyPAqvyLCyA';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})



