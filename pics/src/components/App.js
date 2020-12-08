import React from 'react';
import axios from'axios';
import SearchBar from './SearchBar'


class App extends React.Component {

    state = { images: [] };

    //gitasynchonous instance property
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
            headers: {
                Authorization: 'Client-ID 0SooB8ZPhcqRSyVf6B20-lhZsy4dfvzKa5mSuIdwlwk'
            }
        });

        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar  onSubmit={this.onSearchSubmit}/> 
                FOUND: {this.state.images.length} images
            </div>
        );
    }
    
};

export default App;