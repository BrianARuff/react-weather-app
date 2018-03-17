import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    windSpeed: undefined,
    min_temp: undefined,
    max_temp: undefined,
    error: undefined
  };

  getWeather = async e => {
    const API_KEY = "b3cf48ace991ca96167230cd72414432";
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        error: ""
      });
    } else if (
      city === undefined ||
      country === undefined ||
      data.main.temp === undefined
    ) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        windSpeed: undefined,
        min_temp: undefined,
        max_temp: undefined,
        error: "Please Enter City and Country"
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        windSpeed: undefined,
        min_temp: undefined,
        max_temp: undefined,
        error: "Please Enter City and Country"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    windSpeed={this.state.windSpeed}
                    min_temp={this.state.min_temp}
                    max_temp={this.state.max_temp}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
