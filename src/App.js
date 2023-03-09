import React, { Component } from "react";
import City from "./component/city/City";
import Weather from "./component/Weather/Weather";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      weather: "",
    };
  }
  // updateCity(name) {
  //   this.setState({ city: name });
  //   console.log(this.state.city);
  // }

  fetchWeather(city) {
    console.log(city);
    this.setState({ city: city });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          weather: data,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <span>Weather App - Mahipal</span>
        {this.state.city && this.state.weather ? (
          <Weather weather={this.state.weather} city={this.state.city} />
        ) : (
          <City
            // updateCity={this.updateCity.bind(this)}
            fetchWeather={this.fetchWeather.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default App;
