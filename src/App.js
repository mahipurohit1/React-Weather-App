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
  onReset() {
    this.setState({
      city: "",
      weather: "",
    });
  }

  fetchWeather(city) {
    console.log(city);
    this.setState({ city: city });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("please enter valid city name ");
          throw new Error("no city founds");
        }
      })
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
          <Weather
            weather={this.state.weather}
            city={this.state.city}
            onResetFnc={this.onReset.bind(this)}
          />
        ) : (
          <City fetchWeather={this.fetchWeather.bind(this)} />
        )}
      </div>
    );
  }
}

export default App;
