import React from 'react';


class ImageCard extends React.Component {
    constructor() {
        super();
        this.state = {spans: 0};

        //  we create a reference we can interact with on the DOM, like a tag
        this.imageRef = React.createRef();
    }

    // this our way of grabing the image tag after it shows on DOM as HTML
    componentDidMount() {
        // error avoiding by listening only for twhen the image loads
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    // we are setting the spans, 
    // these will be used to know how much to expand the pictures
    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10 );

        this.setState({spans});
    };

    render () {

        // destructuring
        const {description, urls } = this.props.image

        // we added a style to the div containing the pic
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}


export default ImageCard