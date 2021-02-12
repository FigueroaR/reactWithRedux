import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'

class StreamDelete extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.id)
       this.props.fetchStream(this.props.match.params.id)
       console.log(this.props.stream)
    }

    renderActions() {
        return (
            <React.Fragment>
                <button className='ui button negative'>Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        )
    }
    
    renderContent() {
        console.log(this.props.stream)
        if (!this.props.stream) {
            return 'Are you sure you want to Delete this Stream?'
        }

        return `Are you sure you want to delete Stream: ${this.props.stream.title}?`
    }

    render(){
        return (
            <Modal 
                title="Delete Stream" 
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => {history.push('/')}}
            />
        )
    }

    
}

// we use ownProps to get the params of the route
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {fetchStream})(StreamDelete);