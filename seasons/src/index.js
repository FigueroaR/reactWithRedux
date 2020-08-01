import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props) // super is always used with our contructor or error

    //this the only time we do direct assignment to this.setState
    this.state = {lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState function
        this.setState({ lat: position.coords.latitude})
      }, 
      err => {
        this.setState({ errorMessage: err.message})
      }
    );
  }

  // React sasys we have to define Render!!!
  render() {

    if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>...Loading!...</div>
    
  }
}


ReactDOM.render(
  <App/>, document.querySelector('#root')
)