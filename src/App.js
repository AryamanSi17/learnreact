import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App(){
  function getData(){
    alert("Hello");
  }
  return(
    <div className="App">
      <User data={getData}/>
    </div>
  )
}
export default App;
