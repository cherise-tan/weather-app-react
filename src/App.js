import React from "react";

// Import components for use in 'App' component
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "";

// initialise 'App' component
class App extends React.Component {
  // use async await to make api call
  getWeather = async (e) => {
    // Prevent default behaviour (i.e. full page refresh)
    e.preventDefault();

    // Get information from forn
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // convert data into JSON format
    const data = await api_call.json();
    console.log(data);
  }

  // display data inside component (using JSX)
  // nb can only return ONE PARENT ELEMENT (enclose within div to be safe)
  render() {
    return ( 
    <div>
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather/>
    </div>
    );
  }
};

// export 'App' so it can be used elsewhere
export default App;