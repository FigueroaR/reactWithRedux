import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    
    if(!song) {
        return <div>Select a Song!</div>
    }

    return (
            <div>
                <h3>Details for:</h3>
                <p>Title: {song.title} <br/>
                    Durantiong: {song.duration}
                </p></div>
        
    )
}

const maspStateToprops = (state) => {
    return { song: state.selectedSong}
}

export default connect (maspStateToprops)(SongDetail);