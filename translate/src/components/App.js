import React from 'react'
import UserCreate from './UserCreate';
import userCreate from './UserCreate'


class App extends React.Component {
    state = {language: 'english'};

    onLanguageChange = language => {
        this.setState({
            language
        })
    }


    render() {
        return (<div className='ui container'>
            <div>Select a Laguage:
                <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
            </div>
            <UserCreate/>
        </div>)
    }
}

export default App