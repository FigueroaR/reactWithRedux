import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <h1>Hello!</h1>
        <input id="name" type="text" style={{border: "1px solid red"}}></input>
        <button style={{backgroundColor: "blue", color:"white"}}>Sbumit</button>
      </header>
    </div>
  );
}

export default App;
