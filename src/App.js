import React from 'react';

import './App.css';

function App() {
const buttonText = "Click me"

  return (
    <div className="App">
      <header >
        <h1>Hello!</h1>
    <label className="label" for="name">{buttonText}</label>
        <input id="name" type="text" style={{border: "1px solid red"}}></input>
        <button style={{backgroundColor: "blue", color:"white"}}>Submit</button>
      </header>
    </div>
  );
}

export default App;
