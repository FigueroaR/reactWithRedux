import React from 'react';
import { fetchPosts } from '../actions'
import {connect} from 'react-redux'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render () {
        return <div>Post List</div>
    }
}

// mapStatetoProps ism not used so null 
export default  connect(null, {fetchPosts})(PostList);