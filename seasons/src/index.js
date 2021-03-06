import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spiner'

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

  renderContent () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
      }
  
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay latitude={this.state.lat}/>
      }
  
      return <Spiner message="Please accept location request"/>
  }

  // React sasys we have to define Render!!!
  render() {
    return (<div className='border red'>
      {this.renderContent()}
    </div>)
    
  }
}


ReactDOM.render(
  <App/>, document.querySelector('#root')
)