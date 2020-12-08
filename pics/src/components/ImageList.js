import React from 'react'

const ImageList = (props) => {

    const img = props.images.map( (images) => {
        return <img src={images.urls.regular    }/>
    });
return <div>{img}</div>
}


export default ImageList;