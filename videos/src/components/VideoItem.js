import React from 'react';
import './VideoItem.css';
import VideoList from './VideoList';

const Videoitem = ({ video, onVideoSelect })=> {
    return (
        <div className="video-item item" onClick={ () => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div className="description">{video.snippet.description}</div>
            </div>
            
        </div>
        )
}


export default Videoitem;