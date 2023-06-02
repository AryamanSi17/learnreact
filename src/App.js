import React, { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      location:'',
      weatherData:null,
      error:null
    };
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.location!==this.state.location){
      this.fetchWeatherData();
    }
  }
  fetchWeatherData=()=>{
    const apiKey="e3ce40c1f58b8761fb371b8bbeb92bb9";
    const location=this.state;
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?name=${location}&appid=e3ce40c1f58b8761fb371b8bbeb92bb9";

  fetch(apiUrl)
  .then(response=>response.json())
    .then(data => {
      if (data.cod === 200) {
        this.setState({ weatherData: data, error: null });
      } else {
        this.setState({ weatherData: null, error: data.message });
      }
    })
    .catch(error => {
      console.log(error);
      this.setState({ weatherData: null, error: 'Failed to fetch weather data.' });
    });
  }
  handleLocationChange(event) {
    const location = event.target.value;
    this.setState({ location });
  }
  render(){
    const{location,weatherData,error}=this.state;
    return(
      <div>
        <h1>WeatherApp</h1>
        <input 
        type='text'
        value={location}
        onChange={(event) => this.handleLocationChange(event)}
        placeholder='Enter Location'
        />
        {weatherData && (
          <div>
            <h2>Weather Information for {location}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Conditions: {weatherData.weather[0].main}</p>
            {/* Display additional weather information */}
          </div>
        )}
      </div>
    )
  }
  }
  export default App;
