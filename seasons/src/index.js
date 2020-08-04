import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = {lat: null, errorMessage: ''};

  componentDidMount() {
    console.log("DID MOUNT")
    window.navigator.geolocation.getCurrentPosition(
      position =>  this.setState({ lat: position.coords.latitude}), 
      err => this.setState({ errorMessage: err.message})
    );
  }

  componentDidUpdate() {
    console.log("DID UPDATE")
  }

  // React sasys we have to define Render!!!
  render() {

    if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat}/>
    }

    return <div>...Loading!...</div>
    
  }
}


ReactDOM.render(
  <App/>, document.querySelector('#root')
)