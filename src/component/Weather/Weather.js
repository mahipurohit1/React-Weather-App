import React, { Component } from "react";
import WeatherInfo from "./WeatherInfo";
class Weather extends Component {
  isDay = this.props.weather?.weather[0].icon?.includes("d");
  getTime(timeStamp) {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  }
  render() {
    return (
      <>
        <div className="weatherContainer">
          <span className="condition">
            <span>{`${Math.floor(
              this.props.weather?.main?.temp - 273
            )}°C`}</span>
            {`  |  ${this.props.weather?.weather[0].description}`}
          </span>
          <img
            className="weatherIcon"
            src={WeatherIcons[this.props.weather?.weather[0].icon]}
          />
        </div>
        <span className="location">{`${this.props.weather?.name}, ${this.props.weather?.sys?.country}`}</span>

        <span className="weatherInfoLabel">Weather Info</span>
        <div className="weatherInfoContainer">
          <WeatherInfo
            name={isDay ? "sunset" : "sunrise"}
            value={`${this.getTime(
              this.props.weather?.sys[isDay ? "sunset" : "sunrise"]
            )}`}
          />
          <WeatherInfo
            name={"humidity"}
            value={this.props.weather?.main?.humidity}
          />
          <WeatherInfo name={"wind"} value={this.props.weather?.wind?.speed} />
          <WeatherInfo
            name={"pressure"}
            value={this.props.weather?.main?.pressure}
          />
        </div>
      </>
    );
  }
}

export default Weather;
