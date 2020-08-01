import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props) // super is always used with pur contructor or error

    this.state = {lat: null}
  }


  // React sasys we have to define Render!!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), 
      (err) => console.log(err)
    );

    return <div>Latitude</div>
  }
}


ReactDOM.render(
  <App/>, document.querySelector('#root')
)