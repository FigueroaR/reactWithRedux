import React from 'react'
import {connect } from 'react-redux'
import {fetchStreams} from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
        //console.log('component did mount')
    }

    renderList() {
        return this.props.streams.map( stream => {
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aliged icon camera"/>
                    <div className="content">{stream.title}
                        <div className="description" >{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
       
        return(
            <div>
                <h2>Streams</h2>
                <div className=" ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    /// Object values is a built in s function, takes a object as
    // an argument
    return {streams: Object.values(state.streams) }
}

export default connect(mapStateToprops, {fetchStreams})(StreamList);