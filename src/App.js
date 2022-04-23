import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './components/form';
import Info from './components/info';

const api_key = "1815bf5c83254402bdb141029212309";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    condition: undefined,
    icon: undefined
  }

  weather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`);
    const data = await api_url.json();
    console.log(data);
   
    this.setState({
      temp: data.current.temp_c,
      city: data.location.name,
      country: data.location.country,
      condition: data.current.condition.text,
      icon: data.current.condition.icon
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h1>Temperature informer - react</h1>
         <hr/>
         <div className='weather-form'>
         <Form weatherGet={this.weather}/>
         <hr/>
         <Info temp={this.state.temp} 
         city={this.state.city} 
         country={this.state.country} 
         icon={this.state.icon}
         condition={this.state.condition}/>
         </div>
        </header>
      </div>
    );
  }

}

export default App;
