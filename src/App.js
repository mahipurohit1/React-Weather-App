import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      weather: "",
    };
  }
  updateCity(name) {
    this.setState({ city: name });
  }

  fetchWeather() {
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
          <WeatherComponent
            weather={this.state.weather}
            city={this.state.city}
          />
        ) : (
          <CityComponent
            updateCity={this.updateCity}
            fetchWeather={this.fetchWeather}
          />
        )}
      </div>
    );
  }
}

export default App;
