import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    // when app loads, this is the automatic search term
    componentDidMount() {
        this.onTermSubmit('cats')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({
            videos: response.data.items,
            //get the first video from the sesrch (response) 
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
        <div className="ui container"> 
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        videos={this.state.videos} 
                        onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
                
            </div>
            
        </div>
        )
    }
} 

export default App;