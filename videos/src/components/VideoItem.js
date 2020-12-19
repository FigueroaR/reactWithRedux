import React from 'react';
import './VideoItem.css';


const Videoitem = ({ video, onVideoSelect , id})=> {
    
    return (
        <div className="video-item item" onClick={ () => onVideoSelect(video)}>
            <img id={id}  alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div className="description">{video.snippet.description}</div>
            </div>
            
        </div>
        )
}


export default Videoitem;