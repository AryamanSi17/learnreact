import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(){
    super();
    console.warn("constructor")
    this.state={
      name:"Anil"
    }
  }
  componentDidUpdate(){
    console.log("compoentDidUpdate");
  }
  render(){
    console.warn("render");
    return(
      <div className='App'>
        <h1>Component Did Update</h1>
        <button onClick={()=>{this.setState({name:"Sidhu"})}}>Update Name</button>
      </div>
    )
  }
}
export default App;