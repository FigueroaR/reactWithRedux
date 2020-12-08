import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
    //                 The images that would be KEY is being deconstructed
    const img = props.images.map( (image) => {
        return <ImageCard  key={image.id} image={image}/>
    });
return <div className="image-list">{img}</div>
}


export default ImageList;