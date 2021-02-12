import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'
import { Link } from 'react-router-dom';


class StreamDelete extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.id)
       this.props.fetchStream(this.props.match.params.id)
       console.log(this.props.stream)
    }

    renderActions() {
        const {id} = this.props.match.params
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} 
                        className='ui button negative'>Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
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


export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);