import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map( (video, id) => {
        return (<VideoItem 
                key={video.id.videoId}
                id={id}
                video={video} 
                onVideoSelect={onVideoSelect}/>)
    })

    return <div className="ui relax divided list">{renderedList} </div>
}


export default VideoList;