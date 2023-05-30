import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';


function App() {
  const [status,setStatus]=useState(false);


  return (
    <div className='App'>
{
status?<h1>Bhakti</h1>:null
}
   <button onClick={()=>setStatus(true)}>Show</button>
   <button onClick={()=>setStatus(false)}>Hide</button>
    </div>
  );
}

export default App;
