import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props) // super is always used with our contructor or error

    //this the only time we do direct assignment to this.setState
    this.state = {lat: null}
  }


  // React sasys we have to define Render!!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState function
        this.setState({ lat: position.coords.latitude})
      }, 
      (err) => console.log(err)
    );

    return <div>Latitude: {this.state.lat}</div>
  }
}


ReactDOM.render(
  <App/>, document.querySelector('#root')
)