import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
    console.log(props)
    return (
            <div>SongDetail</div>
        
    )
}

const maspStateToprops = (state) => {
    return { song: state.selectedSong}
}

export default connect (maspStateToprops)(SongDetail);