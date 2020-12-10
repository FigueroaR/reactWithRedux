import React from 'react';


class ImageCard extends React.Component {
    constructor() {
        super();
        this.imageRef = React.createRef();
    }

    // this our way of grabing the image tag after it shows on DOM as HTML
    componentDidMount() {
        console.log('comp did mount', this.imageRef.current.clientHeight)
        // error avoiding by listening only for twhen the image loads
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        console.log('spans', this.imageRef.current.clientHeight)


    };

    render () {

        // destructuring
        const {description, urls } = this.props.image
        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}


export default ImageCard