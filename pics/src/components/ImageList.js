import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    //                 The images that would be KEY is being deconstructed
    const img = props.images.map( ({id, description, urls}) => {
        return <img src={urls.regular} key={id} alt={description}/>
    });
return <div className="image-list">{img}</div>
}


export default ImageList;